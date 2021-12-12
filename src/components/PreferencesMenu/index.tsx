import { useState } from "react";
import { GithubPicker } from "react-color";
import {
  PreferencesMenuLanguage,
  PreferencesMenuColorPickContainer,
  PreferencesMenuColorPick,
} from "./style";
import { PreferencesMenuSaveProject } from "./style";

export interface PreferencesMenuColorPickProps {
  selectedColor: string;
}

interface PreferencesMenuProps {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}

export const PreferencesMenu: React.FC<PreferencesMenuProps> = ({
  selectedColor,
  setSelectedColor,
}) => {
  const [hiddenColorPick, setHiddenColorPick] = useState(false);
  const colorsList = ['#B80000', '#DB3E00', '#FCCB00', '#008B02',
                      '#006B76', '#1273DE', '#004DCF', '#5300EB', 
                      '#EB9694', '#f59696', '#ffed92', '#a3dbab', 
                      '#7991a7', '#6BD1FF', '#000000', '#ffffff']
  return (
    <>
      <PreferencesMenuLanguage>
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

      <PreferencesMenuSaveProject type="button">
        Salvar projeto
      </PreferencesMenuSaveProject>
    </>
  );
};
