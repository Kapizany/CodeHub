import { SidebarMenuContainer, SideBarMenuDiv, SidebarMenuItemIconBackground, SidebarMenuItemIconText, SideBarMenuListContainer } from "./styles";
import communityIcon from '../../assets/CommunityIcon.svg'
import codeIcon from '../../assets/CodeIcon.svg'

export const SidebarMenu = () => {
  return <SidebarMenuContainer>
    <SideBarMenuDiv>
      Menu
    </SideBarMenuDiv>

    <SideBarMenuListContainer>
      <SidebarMenuItemIconBackground isSelected={true}>
        <img src={codeIcon} alt="Code" />
      </SidebarMenuItemIconBackground>
      <SidebarMenuItemIconText>
        Editor de Código
      </SidebarMenuItemIconText>
    </SideBarMenuListContainer>

    <SideBarMenuListContainer>
      <SidebarMenuItemIconBackground >
        <img src={communityIcon} alt="Community" />
      </SidebarMenuItemIconBackground>
      <SidebarMenuItemIconText>
        Comunidade
      </SidebarMenuItemIconText>
    </SideBarMenuListContainer>
  </SidebarMenuContainer>;
};
