import styled from 'styled-components';
import logoImgHeader from '../../assets/Logo.svg';

const Headercontainer = styled.div`
    position: fixed;
    top: 15px;
    left: 5%;
    width: 90%;
`;

export const Header = () => {
    return <>
        <Headercontainer>
            <img src={logoImgHeader} alt="Logo" />
        </Headercontainer>
    </>
}