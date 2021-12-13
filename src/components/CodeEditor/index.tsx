import { CodeEditorOuterDivContainer } from "./styles";
import { CodeEditorContainer } from "./styles";
import { CodeEditorFieldContainer } from "./styles";
import { HighlightButton } from "../HighlightButton";
// import React from "react";

export interface CodeEditorProps {
  selectedColor: string;
}

export const CodeEditor:React.FC<CodeEditorProps> = ({selectedColor}) => {
  return (
    <CodeEditorOuterDivContainer>
      <CodeEditorContainer selectedColor={selectedColor} >
        <CodeEditorFieldContainer placeholder="Entre seu código aqui." />
      </CodeEditorContainer>
      <HighlightButton />
    </CodeEditorOuterDivContainer>
  );
};
