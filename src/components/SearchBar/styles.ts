import styled from "styled-components";

export const SearchBarContainer = styled.input`
  width: 50%;
  height: 3.5rem; /* 2.2rem previously */
  margin-left: -2%;
  padding: 0 14px;

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
