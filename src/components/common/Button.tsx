import styled, { css } from 'styled-components';

type ButtonProps = {
  buttonType?: string;
};

export const Button = styled.button<ButtonProps>`
  background-color: #000;
  color: #fff;
  border-radius: 0;
  padding: 8px 20px;
  margin-left: 20px;
  cursor: pointer;
  ${({ buttonType }) =>
    buttonType === 'secondary' &&
    css`
      color: #000;
      background-color: #fff;
    `}
`;
