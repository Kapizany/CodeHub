import { CodeEditorOuterDivContainer } from "./styles";
import { CodeEditorContainer } from "./styles";
import { CodeEditorFieldContainer } from "./styles";
import { HighlightButton } from "../HighlightButton";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { useState } from "react";
// import React from "react";

export interface CodeEditorProps {
  selectedColor: string;
}

export const CodeEditor:React.FC<CodeEditorProps> = ({selectedColor}) => {
  const [codeEditorContent, setCodeEditorContent] = useState('');
  const [highlightOn, setHighlightOn] = useState(false);
  return (
    <CodeEditorOuterDivContainer>
      <CodeEditorContainer selectedColor={selectedColor} >
        {
          highlightOn ? (
            <SyntaxHighlighter language="javascript" >
              {codeEditorContent}
            </SyntaxHighlighter>
          ) : (
            <CodeEditorFieldContainer 
              onChange={(event) => setCodeEditorContent(event.target.value)} 
              value={codeEditorContent}
              placeholder="Entre seu código aqui." 
            />
          )
        }
      </CodeEditorContainer>
      <HighlightButton highlightOn={highlightOn} onClick={ () => setHighlightOn(!highlightOn)} />
    </CodeEditorOuterDivContainer>
  );
};
