import React, { ReactElement } from 'react';
import { StyledButton } from './button.styles';

type ButtonProps = {
  primary: boolean;
  children: ReactElement | string;
};

export default function Button({ primary, children }: ButtonProps) {
  return <StyledButton primary={primary}>{children}</StyledButton>;
}

Button.defaultProps = {
  primary: true,
};
