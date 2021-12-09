import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 2.5%; /* 3% previously */
  width: 95%; /* 94% previously */
  height: 3.5rem; /* 2.4rem previously, 0.2rem more than the SearchBar (2.2) */
  padding-top: 1rem; /* 0.91rem previously */
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--background);
  z-index: 99;
`;
