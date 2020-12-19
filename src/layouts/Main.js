import React from 'react';
import { Flex, TopBar } from '../components';
import Container from '../components/Container';

const MainLayout = () => {
  return (
    <>
      <TopBar />
      <Flex justifyAround>
        <Container>
          <h1>Container</h1>
        </Container>
      </Flex>
    </>
  );
}

export default MainLayout;
