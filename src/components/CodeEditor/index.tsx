import { CodeEditorOuterDivContainer } from "./styles";
import { CodeEditorContainer } from "./styles";
import { CodeEditorFieldContainer } from "./styles";
import { HighlightButton } from "../HighlightButton";
import SyntaxHighlighter from 'react-syntax-highlighter';
import gradientDark  from 'react-syntax-highlighter/dist/cjs/styles/hljs/gradient-dark';
import { useState } from "react";


export interface CodeEditorOuterDivContainerProps {
  selectedColor: string;
  selectedLanguage: string;
  setSelectedLanguage: (language: string) => void;
}

export interface CodeEditorProps {
  selectedColor: string;
  selectedLanguage: string;
  editorContent: string;
  setEditorContent:(arg:string) => void;
}

export const CodeEditor:React.FC<CodeEditorProps> = ({
  selectedColor,
  selectedLanguage,
  editorContent,
  setEditorContent
  }) => {
  const [highlightOn, setHighlightOn] = useState(false);
  return (
    <CodeEditorOuterDivContainer>
      <CodeEditorContainer selectedColor={selectedColor}>
        {
          highlightOn ? (
            <SyntaxHighlighter style={gradientDark} language={selectedLanguage} >
              {editorContent}
            </SyntaxHighlighter>
          ) : (
            <CodeEditorFieldContainer
              onChange={(event) => setEditorContent(event.target.value)}
              value={editorContent}
              placeholder="Entre seu código aqui."
            />
          )
        }
      </CodeEditorContainer>
      <HighlightButton highlightOn={highlightOn} onClick={() => setHighlightOn(!highlightOn)} />
    </CodeEditorOuterDivContainer>
  );
};