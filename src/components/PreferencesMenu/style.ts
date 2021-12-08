import styled from "styled-components";
import { PreferencesMenuColorPickProps } from ".";

export const PreferencesMenuContainer = styled.div`

`;

export const PreferencesMenuLanguage = styled.select`
    
`;

export const PreferencesMenuColorPick = styled.div<PreferencesMenuColorPickProps>`
    width: 256px;
    height: 40px;

    background: ${props => props.selectedColor};
    border-radius: 4px;

    .github-picker {
        position: relative;
        top: 48px;
        right: -17%;
    }
`;

export const PreferencesMenuSaveProject= styled.button`
    
`;