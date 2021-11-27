import styled from "styled-components";

export const ProjectDescriptionFieldContainer = styled.textarea`
  display: block;
  width: 15.625rem;
  height: 80px;
  border-radius: 0.5rem;
  border-style: hidden;
  padding-top: 0.625rem;
  padding-left: 0.625rem;
  background: var(--input-background);
  color: var(--text-input);
  ::placeholder {
    color: var(--text-input);
    opacity: 0.64;
  }
  :focus {
    outline: none;
  }
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;
