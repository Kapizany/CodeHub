import styled from "styled-components";

export const CodeEditorFieldContainer = styled.input`
  /* Auto Layout */
  /* display: flex;
  flex-direction: column;
  align-items: flex-start; */
  padding: 16px;

  /* position: static;
  width: 50px; 688px
  height: 50px;
  left: 32px;
  top: 32px; */

  /* Neutral/$dark-gray */
  background: var(--text-editor-background);

  /* $editor-shadow */
  /* box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.24); */
  border-radius: 0.5rem;
  border-style: hidden;
  /* border: 10px solid red; */
  :focus {
    outline: none;
  }

   /* Inside Auto Layout
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 10px 0px; */

  /* Placeholder */
  color: var(--text-input);
  ::placeholder {
    color: var(--text-input);
  }

  /* Font */
  font-family: Roboto Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: var(--text-input);
`;
