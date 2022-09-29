import React from 'react';
import PopulerCourses from '../../organisms/PopulerCourses';
import { PageLayout } from '../common/PageLayout';

export const Home: React.FC = () => {
  return (
    <>
      <PageLayout>
        <PopulerCourses></PopulerCourses>
      </PageLayout>
    </>
  );
};
