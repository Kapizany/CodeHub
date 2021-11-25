import { HeaderContainer } from "./styles";
import logoImgHeader from "../../assets/Logo.svg";
import { SearchBar } from "../SearchBar";

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <img src={logoImgHeader} alt="Logo" />
        <SearchBar />
        <div>foto</div>
      </HeaderContainer>
    </>
  );
};
