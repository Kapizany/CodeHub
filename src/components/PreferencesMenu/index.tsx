import { useState } from "react";
import { GithubPicker } from "react-color";
import {
  PreferencesMenuLanguage,
  PreferencesMenuColorPickContainer,
  PreferencesMenuColorPick,
} from "./style";
import { PreferencesMenuSaveProject } from "./style";
import { useNavigate } from "react-router-dom";

export interface PreferencesMenuColorPickProps {
  selectedColor: string;
}

interface PreferencesMenuProps {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  selectedLanguage: string;
  setSelectedLanguage: (language: string) => void;
  editorContent: string;
  projectTitle: string;
  projectDescription: string;
  date: string;
}

export const PreferencesMenu: React.FC<PreferencesMenuProps> = ({
  selectedColor,
  setSelectedColor,
  selectedLanguage,
  setSelectedLanguage,
  editorContent,
  projectTitle,
  projectDescription,
  date,
}) => {
  const [hiddenColorPick, setHiddenColorPick] = useState(false);
  const colorsList = ['#B80000', '#DB3E00', '#FCCB00', '#008B02',
                      '#006B76', '#1273DE', '#004DCF', '#5300EB',
                      '#EB9694', '#f59696', '#ffed92', '#a3dbab',
                      '#7991a7', '#6BD1FF', '#000000', '#ffffff']

  const communityLink = "/community-app"
  const history = useNavigate();
  const handleClick = ( to:string) => {
    history(to);
  }

  function update_storage() {
    localStorage.setItem(date ? date : String(Date.now()), JSON.stringify({
      date: date ? date : Date.now(),
      selectedColor,
      selectedLanguage,
      editorContent,
      projectTitle,
      projectDescription,
  }))}

  return (
    <>
      <PreferencesMenuLanguage defaultValue={selectedLanguage} onChange={(event) => setSelectedLanguage(event.target.value)}>
        <option value="javascript">Javascript</option>
        <option value="python">Python</option>
        <option value="html">CSS</option>
        <option value="html">HTML</option>
      </PreferencesMenuLanguage>

      <PreferencesMenuColorPickContainer>
        <PreferencesMenuColorPick
          selectedColor={selectedColor}
          onClick={() => {
            setHiddenColorPick(!hiddenColorPick);
          }}
        >
          {hiddenColorPick && (
            <GithubPicker
              onChange={(event) => setSelectedColor(event.hex)}
              colors={colorsList}
              triangle={"top-right"}
            />
          )}
        </PreferencesMenuColorPick>
      </PreferencesMenuColorPickContainer>

      <PreferencesMenuSaveProject onClick={() => {update_storage(); handleClick(communityLink)}} type="button">
        Salvar projeto
      </PreferencesMenuSaveProject>
    </>
  );
};
