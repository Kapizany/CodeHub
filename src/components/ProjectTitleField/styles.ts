import styled from "styled-components";

export const ProjectTitleFieldContainer = styled.input`
  display: inline-block;
  width: 13rem;
  height: 3.5rem;
  margin: 1rem 0;
  padding: 0 14px;

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
