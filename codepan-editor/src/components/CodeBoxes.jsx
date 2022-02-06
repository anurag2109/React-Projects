import { Box } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';

// components
import Editor from './Editor';


const Container = styled(Box)`
    display: flex;
    height: 50vh;
    background: #070707;
`
const CodeBoxes = () => {
  return (
    <Container>
        <Editor color="#FF3C41" heading="HTML" icon="/" language="xml" />
        <Editor color="#0EBEFF" heading="CSS" icon="*" language = 'css' />
        <Editor color="#FCD000" heading="JavaScript" icon="( )" language= 'javascript' />
    </Container>
  );
};

export default CodeBoxes;
