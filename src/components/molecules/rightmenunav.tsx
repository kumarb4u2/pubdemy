import React from 'react';
import Button from '../atoms/buttons/button';
import Icon from '../atoms/icons/icon';
import { HideXS } from './rightmenunav.styles';

type Props = {};

export default function Rightmenunav({}: Props) {
  return (
    <HideXS>
      <Icon name="BiCart"></Icon>
      <Button primary>Log in</Button>
      <Button primary={false}>Sign up</Button>
      <Button primary={false}>
        <Icon name="BsGlobe" />
      </Button>
    </HideXS>
  );
}
