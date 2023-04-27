import { FC } from 'react';
import styled from 'styled-components';
import { device } from '../styles/media';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  onClick?: () => void;
  hoverColor?: string;
  padding?: string;
  fontSize?: string;
}

const Button: FC<ButtonProps> = ({
  title,
  onClick,
  hoverColor,
  padding,
  fontSize,
}) => {
  return (
    <ButtonStyled
      onClick={onClick}
      hoverColor={hoverColor}
      padding={padding}
      fontSize={fontSize}
    >
      {title}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button<{
  hoverColor?: string;
  padding?: string;
  fontSize?: string;
}>`
  background-color: #5efc8d;
  color: #000000;
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

  @media ${device.tablet} {
    padding: 16px 58px 15px 59px;
    font-size: 16px;
  }

  @media ${device.laptopL} {
    padding: ${({ padding }) => padding};
    font-size: ${({ fontSize }) => fontSize || '48px'};
  }
`;

export default Button;
