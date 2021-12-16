import { EditorBodyOuterDiv } from "./styles";
import { EditorBodyContainer } from "./styles";
import { CodeEditor } from "../CodeEditor";
import { ProjectConfigMenu } from "../ProjectConfigMenu";
import { useState } from "react";

export const EditorBody = () => {
  const [selectedColor, setSelectedColor] = useState("#6BD1FF");
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  return (
    <EditorBodyOuterDiv>
      <EditorBodyContainer>
        <CodeEditor selectedColor={selectedColor} selectedLanguage={selectedLanguage}/>
        <ProjectConfigMenu
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
        />
      </EditorBodyContainer>
    </EditorBodyOuterDiv>
  );
};
