import { Box } from '@mui/material';
import { styled } from '@mui/material/styles'
import React,{ useContext, useState } from 'react';
import { useEffect } from 'react';
import DataContext from '../context/DataContext';


const Container = styled(Box)`
    height: 42vh;
`
const Result = () => {

    const [code, setCode] = useState('');
    const state = useContext(DataContext);

    const srcCode = `
    <html>
        <body>${state.html}</body>
        <style>${state.css}</style>
        <script>${state.js}</script>
    </html>
    `

    useEffect(()=>{
        setTimeout(()=>{
            setCode(srcCode);
        }, 2000)
    }, [state.html, state.css, state.js])


    return(
        <Container style={state.html || state.css || state.js ? null : {background: '#444857'}}>
            <iframe
                srcDoc = {code}
                title='output'
                sandbox='allow-script'
                frameBorder='0'
                width='100%'
                height='100%'
            />
        </Container>
    );
};

export default Result;
