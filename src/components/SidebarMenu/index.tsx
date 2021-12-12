import {
  SidebarMenuContainer,
  SideBarMenuDiv,
  SidebarMenuItemIconBackground,
  SidebarMenuItemIconText,
  SideBarMenuListContainer,
} from "./styles";
import communityIcon from "../../assets/CommunityIcon.svg";
import codeIcon from "../../assets/CodeIcon.svg";
import { useNavigate } from "react-router-dom";

interface SidebarMenuProps {
  selectedPage: "community" | "editor";
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({selectedPage}) => {
  const [codeEditorLink, communityLink] = ["/code-editor-app", "/community-app"]
  const history = useNavigate();

  const handleClick = ( to:string) => {
    history(to);
  }
  return (
    <SidebarMenuContainer>
      <SideBarMenuDiv>Menu</SideBarMenuDiv>

      <SideBarMenuListContainer>
        <SidebarMenuItemIconBackground onClick={() => handleClick(codeEditorLink)} isSelected={selectedPage === 'editor'}>
          <img src={codeIcon} alt="Code" />
        </SidebarMenuItemIconBackground>
        <SidebarMenuItemIconText onClick={() => handleClick(codeEditorLink)}>Editor de Código</SidebarMenuItemIconText>
      </SideBarMenuListContainer>

      <SideBarMenuListContainer>
        <SidebarMenuItemIconBackground onClick={() => handleClick(communityLink)} isSelected={selectedPage === 'community'}>
          <img src={communityIcon} alt="Community" />
        </SidebarMenuItemIconBackground>
        <SidebarMenuItemIconText onClick={() => handleClick(communityLink)}>Comunidade</SidebarMenuItemIconText>
      </SideBarMenuListContainer>
    </SidebarMenuContainer>
  );
};
