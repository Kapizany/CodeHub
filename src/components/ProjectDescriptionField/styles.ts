import styled from "styled-components";

export const ProjectDescriptionFieldContainer = styled.textarea`
  display: inline-block;
  width: 13rem;
  height: 3rem;
  margin: 0 0 2rem;
  padding: 1rem 14px;

  border-radius: 0.5rem;
  border-style: hidden;
  border-width: 0rem;

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
  opacity: 0.64;
`;
