import React from 'react';
import styled from 'styled-components';
import { Header } from './Header';

interface Props {
  children: React.ReactNode;
}

const Content = styled.main`
  max-width: 800px;
  margin: 80px auto 0;
  padding: 0 16px;
`;

export const PageLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
};
