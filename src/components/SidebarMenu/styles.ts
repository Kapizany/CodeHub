import styled from "styled-components";

export const SidebarMenuContainer = styled.div`
  position: absolute;
  top: 5.52rem; /* 3.35rem previously */
  bottom: 0.5rem;
  left: 3%;
  width: 22%;

`;

export const SideBarMenuDiv = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  margin-top: 2.5rem;
  color: #FFFFFF;
`;
export const SideBarMenuListContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  margin-top: 1.2rem;
`;

interface SidebarMenuItemIconBackgroundProps {
  isSelected?:boolean;
}
export const SidebarMenuItemIconBackground = styled.div<SidebarMenuItemIconBackgroundProps>`
  width: 3rem;
  height: 3rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${props => props.isSelected ? "var(--blue-light)" : "var(--blue)"};
`;

export const SidebarMenuItemIconText = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-left: 0.8rem;
  color: #FFFFFF;
`;