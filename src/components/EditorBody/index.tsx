import { EditorBodyOuterDiv } from "./styles";
import { EditorBodyContainer } from "./styles";
import { CodeEditor } from "../CodeEditor";
import { ProjectConfigMenu } from "../ProjectConfigMenu";

export const EditorBody = () => {
  return (
    <EditorBodyOuterDiv>
      <EditorBodyContainer>
        <CodeEditor />
        <ProjectConfigMenu />
      </EditorBodyContainer>
    </EditorBodyOuterDiv>
  );
};
