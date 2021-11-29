import styled from "styled-components";

export const ProjectDescriptionFieldContainer = styled.textarea`
  display: inline-block;
  width: 13rem;
  height: 4.25rem;
  padding-top: 0.625rem;
  padding-left: 0.625rem;

  border-radius: 0.5rem;
  border-style: hidden;

  background: var(--input-background);

  ::placeholder {
    color: var(--text-input);
  }

  :focus {
    outline: none;
  }

  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: var(--text-input);
`;
