import { CodeEditorOuterDivContainer } from "./styles";
import { CodeEditorContainer } from "./styles";
import { CodeEditorFieldContainer } from "./styles";
import { HighlightButton } from "../HighlightButton";

export const CodeEditor = () => {
  return (
    <CodeEditorOuterDivContainer>
      <CodeEditorContainer>
        <CodeEditorFieldContainer placeholder="Entre seu código aqui." />
      </CodeEditorContainer>
      <HighlightButton />
    </CodeEditorOuterDivContainer>
  );
};
