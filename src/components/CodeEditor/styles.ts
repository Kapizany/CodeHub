import styled from "styled-components";
import { CodeEditorProps } from ".";

export const CodeEditorOuterDivContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  border-width: 0;
  padding: 0;
`;

export const CodeEditorContainer = styled.div<CodeEditorProps>`
  width: auto;
  height: auto;

  padding: 2rem;

  background: ${props => props.selectedColor}; /* link to personalização color */

  border-radius: 0.5rem;
  border-style: hidden;
  border-width: 0rem;

  pre{
      width: 34.97rem; /* 34.2rem; only works when maximized */
      height: 16.88rem;

      padding: 1rem !important;
      margin: 0px !important;

      background: var(--text-editor-background) !important; /* Neutral/$dark-gray */

      border-radius: 0.5rem;
      border-style: hidden;
      border-width: 0rem;
  }
`;

export const CodeEditorFieldContainer = styled.textarea`
  width: 34.97rem; /* 34.2rem; only works when maximized */
  height: 16.88rem;

  padding: 1rem;
  margin: 0px;

  background: var(--text-editor-background); /* Neutral/$dark-gray */

  border-radius: 0.5rem;
  border-style: hidden;
  border-width: 0rem;

  /* $editor-shadow */
  /* box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.24); */

  ::placeholder {
    color: var(--text-input);
  }

  :focus {
    outline: none;
  }

  /* Font */
  font-family: Roboto Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: var(--text-input);
`;
function SyntaxHighlighter(SyntaxHighlighter: any) {
  throw new Error("Function not implemented.");
}

