import { ProjectConfigMenuContainer } from "./styles";
import { ProjectTitleField } from "../ProjectTitleField";
import { ProjectDescriptionField } from "../ProjectDescriptionField";

export const ProjectConfigMenu = () => {
  return (
    <ProjectConfigMenuContainer>
      <>
        <h2>Seu projeto</h2>
        <ProjectTitleField />
        <ProjectDescriptionField />
      </>
    </ProjectConfigMenuContainer>
  );
};
