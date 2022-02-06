import React from 'react';

// components
import CodeBoxes from './CodeBoxes';
import Header from './Header';
import Result from './Result';

const Home = () => {
  return (
      <>
        <Header/>
        <CodeBoxes/>
        <Result/>
      </>
  );
};

export default Home;
