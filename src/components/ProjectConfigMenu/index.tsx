import { ProjectConfigMenuContainer } from "./styles";
import { ProjectTitleField } from "../ProjectTitleField";
import { ProjectDescriptionField } from "../ProjectDescriptionField";
import { PreferencesMenu } from "../PreferencesMenu";

interface ProjectConfigMenuProps {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}

export const ProjectConfigMenu:React.FC<ProjectConfigMenuProps> = ({selectedColor, setSelectedColor}) => {

  return (
    <ProjectConfigMenuContainer>
        <h2>Seu projeto</h2>
        <ProjectTitleField />
        <ProjectDescriptionField />
        <h2>Personalização</h2>
        <PreferencesMenu selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
    </ProjectConfigMenuContainer>
  );
};
