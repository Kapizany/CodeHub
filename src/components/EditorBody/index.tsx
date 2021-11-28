import { EditorBodyContainer } from "./styles";
import { CodeEditorField } from "../CodeEditorField";
import { ProjectConfigMenu } from "../ProjectConfigMenu";

export const EditorBody = () => {
  return (
      <EditorBodyContainer>
        <CodeEditorField />
        <ProjectConfigMenu />
      </EditorBodyContainer>
  );
};
