import { ReactElement } from 'react';
import styled, { css } from 'styled-components';

type ButtonProps = {
  primary?: boolean;
  children: ReactElement | string;
};

export const StyledButton = styled.button<ButtonProps>`
  background-color: #000;
  color: #fff;
  border-radius: 0;
  padding: 8px 20px;
  margin-left: 20px;
  cursor: pointer;
  ${({ primary }) =>
    !primary &&
    css`
      color: #000;
      background-color: #fff;
    `}
`;
