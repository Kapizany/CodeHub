import { CodeEditorContainer } from "./styles";
import { CodeEditorFieldContainer } from "./styles";

export const CodeEditor = () => {
  return (
    <CodeEditorContainer>
      <CodeEditorFieldContainer placeholder="Entre seu código aqui" />
    </CodeEditorContainer>
  );
};
