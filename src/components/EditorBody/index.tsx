// @ts-nocheck

import { EditorBodyOuterDiv } from "./styles";
import { EditorBodyContainer } from "./styles";
import { CodeEditor } from "../CodeEditor";
import { ProjectConfigMenu } from "../ProjectConfigMenu";
import { useState } from "react";

export const EditorBody = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());

  const storage_props = JSON.parse(localStorage.getItem(params.id));

  const date = storage_props ? storage_props["date"] : "";
  const color = storage_props ? storage_props["selectedColor"] : "#6BD1FF";
  const language = storage_props ? storage_props["selectedLanguage"] : "javascript";
  const content = storage_props ? storage_props["editorContent"] : "";
  const title = storage_props ? storage_props["projectTitle"] : "";
  const description = storage_props ? storage_props["projectDescription"] : "";

  const [selectedColor, setSelectedColor] = useState(color);
  const [selectedLanguage, setSelectedLanguage] = useState(language);
  const [editorContent, setEditorContent] = useState(content);
  const [projectTitle, setProjectTitle] = useState(title);
  const [projectDescription, setProjectDescription] = useState(description);
  console.log(date)
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
          projectTitle={projectTitle}
          setProjectTitle={setProjectTitle}
          projectDescription={projectDescription}
          setProjectDescription={setProjectDescription}
          date={date}
        />
      </EditorBodyContainer>
    </EditorBodyOuterDiv>
  );
};
