import { Box } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import { useContext } from "react";

// components
import Editor from './Editor';
import DataContext from '../context/DataContext';


const Container = styled(Box)`
    display: flex;
    height: 50vh;
    background: #070707;
`
const CodeBoxes = () => {
  const state = useContext(DataContext);

  return (
    <Container>
        <Editor color="#FF3C41" heading="HTML" icon="/" language="xml" value = {state.html} onChange={state.setHtml} />
        <Editor color="#0EBEFF" heading="CSS" icon="*" language = 'css' value = {state.css} onChange={state.setCss} />
        <Editor color="#FCD000" heading="JavaScript" icon="( )" language= 'javascript'  value = {state.js} onChange={state.setJs}/>
    </Container>
  );
};

export default CodeBoxes;
