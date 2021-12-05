import styled from "styled-components";

export const HighlightButtonContainer = styled.button`
  display: block;
  height: 3.5rem;
  margin: 2rem 0 0;
  padding: 0;

  border-radius: 8px;
  border-width: 0;

  background: var(--blue);

  :active {
    background: var(--text-editor-background);
  }

  /* :focus {
    outline: none;
  } */

  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: var(--text-title);
`;
