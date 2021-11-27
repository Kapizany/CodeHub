import { HeaderContainer } from "./styles";
import logoImgHeader from "../../assets/Logo.svg";
import { SearchBar } from "../SearchBar";
import { ProfilePicture } from "../ProfilePicture";

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <img src={logoImgHeader} alt="Logo" />
        <SearchBar />
        <ProfilePicture />
      </HeaderContainer>
    </>
  );
};
