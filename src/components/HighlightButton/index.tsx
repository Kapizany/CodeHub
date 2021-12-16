import React from "react";
import { HighlightButtonContainer } from "./styles";

interface HighlightButtonProps {
  onClick: () => void;
  highlightOn: boolean;
}

export const HighlightButton: React.FC<HighlightButtonProps> = ({onClick, highlightOn}) => {
  return (
    <HighlightButtonContainer onClick={onClick} type="button">
      {highlightOn? "Continuar editando" : "Visualizar com o highlight"}
    </HighlightButtonContainer>
  );
};
