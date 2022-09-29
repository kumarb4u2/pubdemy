import React from 'react';
import Button from '../atoms/buttons/button';
import Icon from '../atoms/icons/icon';
import { Container } from './rightmenunav.styles';

type Props = {};

export default function Rightmenunav({}: Props) {
  return (
    <Container>
      <Icon name="BiCart" size={30}></Icon>
      <Button primary>Log in</Button>
      <Button primary={false}>Sign up</Button>
      <Button primary={false}>
        <Icon name="BsGlobe" />
      </Button>
    </Container>
  );
}
