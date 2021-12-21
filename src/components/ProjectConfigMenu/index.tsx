import { ProjectConfigMenuContainer } from "./styles";
import { ProjectTitleField } from "../ProjectTitleField";
import { ProjectDescriptionField } from "../ProjectDescriptionField";
import { PreferencesMenu } from "../PreferencesMenu";
import { useState } from "react";

interface ProjectConfigMenuProps {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  selectedLanguage: string;
  setSelectedLanguage: (language: string) => void;
  editorContent: string;
}

export const ProjectConfigMenu: React.FC<ProjectConfigMenuProps> = ({
  selectedColor,
  setSelectedColor,
  selectedLanguage,
  setSelectedLanguage,
  editorContent,
}) => {
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
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
      />
    </ProjectConfigMenuContainer>
  );
};
