import React from 'react';
import { Flex, TopBar } from '../components';
import Container from '../components/Container';
import AppRoute from '../routes';

const MainLayout = () => {
  return (
    <>
      <TopBar />
      <Flex justifyAround>
        <Container>
          <AppRoute />
        </Container>
      </Flex>
    </>
  );
}

export default MainLayout;
