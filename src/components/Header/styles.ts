import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 3%;
  width: 94%;
  height: 3.38rem; /* 2.4rem previously, 0.2rem more than the SearchBar (2.2) */
  padding-top: 2.14rem; /* 0.91rem previously */
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--background);
  z-index: 99;
`;
