import React from 'react';
import { PageContainer, PageContent } from '../../components/base';
import HomeCard from '../../components/home-card';
import Nav from '../../components/nav';

const Home = () => {
  return (
    <PageContainer>
      <Nav />
      <PageContent center={true}>
        <HomeCard />
      </PageContent>
    </PageContainer>
  );
};

export default Home;
