import styled from "styled-components";

export const ProjectTitleFieldContainer = styled.input`
  display: block;
  width: 15.625rem;
  height: 2.2rem;
  margin-bottom: 0.623rem;
  border-radius: 0.5rem;
  border-style: hidden;
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
