import styled from "styled-components";

export const ProjectTitleFieldContainer = styled.input`
  display: inline-block;
  width: 13rem;
  height: 3.38rem;
  margin-bottom: 0.623rem;
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
