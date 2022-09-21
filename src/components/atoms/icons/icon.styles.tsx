import styled, { css } from 'styled-components';

type StyledIconProps = {
  type?: string;
};

export const StyledIcon = styled.span<StyledIconProps>`
  ${(props) =>
    props.type === 'menu' &&
    css`
      @media (min-width: 768px) {
        display: none;
      }
    `}
`;
