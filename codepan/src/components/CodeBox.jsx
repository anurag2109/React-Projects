import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useContext } from 'react';

import Editor from './Editor';

import { DataContext } from '../context/DataProvider';

const Container = styled(Box)`
    display: flex;
    background: #090909;
    height: 50vh;
`
const CodeBox = () => {
  const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);
  return (
    <Container>
        <Editor icon="/" color= '#FF3C41' heading='HTML' language='xml' value={html} onChange={setHtml} />
        <Editor icon="*" color= '#0EBEFF' heading='CSS' language='css' value={css} onChange={setCss} />
        <Editor icon="( )" color='#FCD000' heading='JS' language='javascript' value={js} onChange={setJs} />
    </Container>
  );
};

export default CodeBox;
