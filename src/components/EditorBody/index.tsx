import { EditorBodyOuterDiv } from "./styles";
import { EditorBodyContainer } from "./styles";
import { CodeEditor } from "../CodeEditor";
import { ProjectConfigMenu } from "../ProjectConfigMenu";
import { useState } from "react";

export const EditorBody = () => {
  const [selectedColor, setSelectedColor] = useState('#6BD1FF');
  return (
    <EditorBodyOuterDiv>
      <EditorBodyContainer>
        <CodeEditor selectedColor={selectedColor}  />
        <ProjectConfigMenu selectedColor={selectedColor}  setSelectedColor={setSelectedColor} />
      </EditorBodyContainer>
    </EditorBodyOuterDiv>
  );
};
