import styled from "styled-components";
import { PreferencesMenuColorPickProps } from ".";

// export const PreferencesMenuContainer = styled.div``;

export const PreferencesMenuLanguage = styled.select`
  display: inline-block;
  height: 3.5rem;
  margin: 1rem 0;
  padding: 0 14px;

  border-radius: 0.5rem;
  border-style: hidden;
  border-width: 0rem;

  background: var(--input-background);

  ::placeholder {
    color: var(--text-input);
  }
  cursor: pointer;

  :focus {
    outline: none;
  }

  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: var(--text-input);
  opacity: 0.64;
`;

export const PreferencesMenuColorPickContainer = styled.div`
  height: 56px;

  padding: 0.5rem;

  background: rgba(196, 196, 196, 0.01);
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 8px;
`;

export const PreferencesMenuColorPick = styled.div<PreferencesMenuColorPickProps>`
  height: 40px;

  background: ${(props) => props.selectedColor};
  border-radius: 4px;

  .github-picker {
    position: relative;
    top: 48px;
    right: 0px; /* -17% previously */
  }

  cursor: pointer;
`;

export const PreferencesMenuSaveProject = styled.button`
  display: block;
  height: 3.5rem;
  margin: 2rem 0 0;
  padding: 0;

  border-radius: 8px;
  border-width: 0;

  background: var(--blue-light);

  :focus {
    outline: none;
  }

  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: var(--background);
  cursor: pointer;
`;
