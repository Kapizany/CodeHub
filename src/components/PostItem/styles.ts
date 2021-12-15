import styled from "styled-components";
import { CodeEditorContainer, CodeEditorFieldContainer } from "../CodeEditor/styles";

export const PostItemContainer = styled.div`
  display: inline-block; /* flex kind of works like block in this case. */
  flex-direction: column;
  width: auto;
  height: auto;
  border-width: 0;
  padding: 0;
  margin: 1rem 0.5rem;
  background: rgba(0, 0, 0, 0.16);
  border-radius: 8px;
`;

export const PostListCodeEditorContainer = styled(CodeEditorContainer)`
  padding: 1.5rem;
  pre{
      width: 20rem; /* 34.2rem; only works when maximized */
      height: 8rem;
  }
`;

export const PostListCodeEditorFieldContainer = styled(CodeEditorFieldContainer)`
  width: 20rem; /* 34.2rem; only works when maximized */
  height: 8rem;
`;