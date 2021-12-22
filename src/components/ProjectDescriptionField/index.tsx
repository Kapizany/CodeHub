import { ProjectDescriptionFieldContainer } from "./styles";

interface ProjectDescriptionFieldProps {
  projectDescription: string;
  setProjectDescription: (description: string) => void;
}

export const ProjectDescriptionField: React.FC<ProjectDescriptionFieldProps> = ({
  projectDescription,
  setProjectDescription,
}) => {
  return (
    <ProjectDescriptionFieldContainer
      value={projectDescription}
      onChange={(event) => setProjectDescription(event.target.value)}
      placeholder="Descrição do seu projeto" />
  );
};
