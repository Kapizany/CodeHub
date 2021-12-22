import { ProjectTitleFieldContainer } from "./styles";

interface ProjectTitleFieldProps {
  projectTitle: string;
  setProjectTitle: (title: string) => void
}

export const ProjectTitleField: React.FC<ProjectTitleFieldProps> = ({
  projectTitle,
  setProjectTitle,
}) => {
  return (
    <ProjectTitleFieldContainer
      value={projectTitle}
      onChange={(event) => setProjectTitle(event.target.value)}
      type="text"
      placeholder="Nome do seu projeto" />
  );
};
