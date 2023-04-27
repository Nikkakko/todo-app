import { FC } from 'react';
import styled from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  onClick?: () => void;
  hoverColor?: string;
}

const Button: FC<ButtonProps> = ({ title, onClick, hoverColor }) => {
  return (
    <ButtonStyled onClick={onClick} hoverColor={hoverColor}>
      {title}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button<{ hoverColor?: string }>`
  background-color: #5efc8d;
  color: #000;
  border-radius: 4px;
  cursor: pointer;
  border: none;

  padding: 12px 24px;

  font-size: 14px;
  text-transform: capitalize;
  letter-spacing: 0px;
  text-align: left;

  /* padding: 16px 58px 15px 59px; */

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor};
    color: ${({ hoverColor }) => (hoverColor === '#000' ? '#fff' : '#000')};
  }
`;

export default Button;
