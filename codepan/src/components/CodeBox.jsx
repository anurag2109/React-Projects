import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import Editor from './Editor';



const Container = styled(Box)`
    display: flex;
    background: #090909;
    height: 50vh;
`
const CodeBox = () => {
  return (
    <Container>
        <Editor color= '#FF3C41' heading='HTML' />
        <Editor color= '#0EBEFF' heading='CSS'/>
        <Editor color= '#FCD000' heading='JS'/>
    </Container>
  );
};

export default CodeBox;
