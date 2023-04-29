import { ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components';
import { device } from '../styles/media';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  padding: string;
  paddingL?: string;
}

const Input = forwardRef(
  (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <>
        <InputStyled
          ref={ref}
          {...props}
          style={{
            display: props.type === 'file' ? 'none' : 'block',
          }}
          padding={props.padding}
          paddingL={props.paddingL}
        />
        {props.error && <Error>{props.error}</Error>}
      </>
    );
  }
);

const InputStyled = styled.input<{
  padding: string;
  paddingL?: string;
}>`
  width: 100%;
  background: #e6ebff 0% 0% no-repeat padding-box;
  border: none;
  border-radius: 4px;
  padding: ${props => props.padding};

  outline: none;

  font-size: 14px;
  color: #000000;

  &::placeholder {
    color: #000000;
    text-transform: lowercase;
    opacity: 0.2;
  }

  @media ${device.tablet} {
  }

  @media ${device.laptopL} {
    padding: ${props => props.paddingL};
    font-size: 22px;
  }
`;

const Error = styled.span`
  color: #ff0000;
  font-size: 12px;
  margin-top: 4px;
  display: block;
`;
export default Input;
