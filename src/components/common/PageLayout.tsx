import { Container } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { Header } from '../../organisms/Header';

interface Props {
  children: React.ReactNode;
}

const Content = styled.div`
  margin-top: 80px;
`;

export const PageLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Content>
        <Container maxWidth="xl" fixed>
          {children}
        </Container>
      </Content>
    </>
  );
};
