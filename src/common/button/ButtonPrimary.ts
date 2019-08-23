import styled from 'styled-components';

export interface ButtonProps {
    onClick: () => void;
}

export const ButtonPrimary = styled.button<ButtonProps>`
  box-shadow: ${props =>
    props.theme.borders.boxShadow};
  border-radius: ${props =>
    props.theme.borders.borderRadius};
  color: ${props =>
    props.theme.button.textColor};
  background-color: ${props =>
    props.theme.button.backgroundColor};
  padding: 10px 15px;
  white-space: nowrap;
  cursor: pointer;
  line-height: 1.5;
  position: relative;
  touch-action: manipulation;
  font-family: 'monospace',serif;
  :hover {
    background: black;
    color: white;
  }
  :disabled {
    :hover {
      cursor: none;
    }
  }
  
`;
