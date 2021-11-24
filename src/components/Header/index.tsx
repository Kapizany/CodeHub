import {HeaderContainer} from './styles';
import logoImgHeader from '../../assets/Logo.svg';
import { SearchBarContainer } from '../SearchBar/styles';

export const Header = () => {
    return <>
        <HeaderContainer>
            <img src={logoImgHeader} alt="Logo" />
            <SearchBarContainer />
            <div>foto</div>
        </HeaderContainer>
    </>
}