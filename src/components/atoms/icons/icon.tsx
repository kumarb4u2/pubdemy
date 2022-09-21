import React from 'react';
import { FaBars, Fa500Px } from 'react-icons/fa';
import { BsGlobe } from 'react-icons/bs';
import { BiCart } from 'react-icons/bi';
import { StyledIcon } from './icon.styles';

type IconProps = {
  type?: string;
  name: string;
};

export default function Icon({ name, type }: IconProps) {
  switch (name) {
    case 'FaBars':
      return (
        <StyledIcon type="menu">
          <FaBars />
        </StyledIcon>
      );
    case 'BsGlobe':
      return (
        <StyledIcon>
          <BsGlobe />
        </StyledIcon>
      );
    case 'BiCart':
      return (
        <StyledIcon>
          <BiCart />
        </StyledIcon>
      );
    default:
      return (
        <StyledIcon>
          <Fa500Px />
        </StyledIcon>
      );
  }
}
