import { ProjectConfigMenuContainer } from "./styles";
import { ProjectTitleField } from "../ProjectTitleField";
import { ProjectDescriptionField } from "../ProjectDescriptionField";
import { PreferencesMenu } from "../PreferencesMenu";


interface ProjectConfigMenuProps {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  selectedLanguage: string;
  setSelectedLanguage: (language: string) => void;
  editorContent: string;
  projectTitle: string;
  setProjectTitle: (title:string) => void
  projectDescription: string;
  setProjectDescription: (description:string) => void;
  date: string;
}

export const ProjectConfigMenu: React.FC<ProjectConfigMenuProps> = ({
  selectedColor,
  setSelectedColor,
  selectedLanguage,
  setSelectedLanguage,
  editorContent,
  projectTitle,
  setProjectTitle,
  projectDescription,
  setProjectDescription,
  date,
}) => {
  return (
    <ProjectConfigMenuContainer>
      <h2>Seu projeto</h2>
      <ProjectTitleField
        projectTitle={projectTitle}
        setProjectTitle={setProjectTitle} />
      <ProjectDescriptionField
        projectDescription={projectDescription}
        setProjectDescription={setProjectDescription} />
      <h2>Personalização</h2>
      <PreferencesMenu
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        editorContent={editorContent}
        projectTitle={projectTitle}
        projectDescription={projectDescription}
        date={date}
      />
    </ProjectConfigMenuContainer>
  );
};
