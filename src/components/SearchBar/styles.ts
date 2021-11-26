import styled from "styled-components";

export const SearchBarContainer = styled.input`
  width: 50%;
  height: 2.2rem;
  border-radius: 0.5rem;
  background: var(--input-background);
  border-style: hidden;
  padding-left: 0.625rem;
  margin-left: -2%;
  color: var(--text-input);
  ::placeholder {
    color: var(--text-input);
  }
  :focus {
    outline: none;
  }
`;
