import { EditorBodyOuterDiv } from "./styles";
import { EditorBodyContainer } from "./styles";
import { CodeEditor } from "../CodeEditor";
import { ProjectConfigMenu } from "../ProjectConfigMenu";
import { useState } from "react";

export const EditorBody = () => {
  const [selectedColor, setSelectedColor] = useState("#6BD1FF");
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [editorContent, setEditorContent] = useState("");
  return (
    <EditorBodyOuterDiv>
      <EditorBodyContainer>
        <CodeEditor
          selectedColor={selectedColor}
          selectedLanguage={selectedLanguage} 
          editorContent={editorContent}
          setEditorContent={setEditorContent}  
        />
        <ProjectConfigMenu
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          editorContent={editorContent}
        />
      </EditorBodyContainer>
    </EditorBodyOuterDiv>
  );
};
