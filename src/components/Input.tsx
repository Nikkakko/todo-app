import { ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
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
        />
        {props.error && <Error>{props.error}</Error>}
      </>
    );
  }
);
const InputStyled = styled.input`
  width: 100%;
  padding: 8px 12px;
  background: #e6ebff 0% 0% no-repeat padding-box;
  border: none;
  border-radius: 4px;

  outline: none;

  font-size: 14px;
  color: #000000;

  &::placeholder {
    color: #000000;
    text-transform: lowercase;
    opacity: 0.2;
  }
`;

const Error = styled.span`
  color: #ff0000;
  font-size: 12px;
  margin-top: 4px;
  display: block;
`;
export default Input;
