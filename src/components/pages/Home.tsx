import React from 'react';
import CardThumbNail from '../common/cards/cardthumbnails/cardthumbnails';
import { PageLayout } from '../common/PageLayout';

export const Home: React.FC = () => {
  return (
    <>
      <PageLayout>
        <h2>Home</h2>
        <CardThumbNail></CardThumbNail>
      </PageLayout>
    </>
  );
};
