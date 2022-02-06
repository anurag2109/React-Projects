import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { Controlled } from 'react-codemirror2';
import 'codemirror/theme/material.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import '../App.css'
import { useState } from 'react';

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basic: 0;
    padding: 0 8px 8px;
`

const Header = styled(Box)`
    display: flex;
    justify-content: space-between;
    background: #060606;
    color: #AAAECB;
    font-weight: 700
`

const Heading = styled(Box)`
    background: #1d1e22;
    padding: 9px 12px;
    display: flex;
`
const Editor = ({ icon, color, heading, language, value , onChange }) => {

  const [open, setOpen] = useState(true);

  const handleChange = (editor, data, value) =>{
    onChange(value);
  }

  return (
      <Container style={open ? null : { flexGrow: 0 }}>
          <Header>
              <Heading>
                <Box component="span" style={{background: color,
                            borderRadius: 5,
                            marginRight: 5,
                            height: 20,
                            width: 20,
                            display: 'flex',
                            placeContent: 'center',
                            color: '#000',
                            paddingBottom: 4}}>{icon}</Box>
                {heading}
              </Heading>
              
              <CloseFullscreenIcon
                fontSize='small'
                style={{ alignSelf: 'center' }}
                onClick={() => setOpen(prevState => !prevState )}
              />
          </Header>

          <Box>
                  <Controlled
                    value={value}
                    onBeforeChange={handleChange}
                    options={{
                      lineWrapping: true,
                      lint: true,
                      mode: language,
                      lineNumbers: true,
                      theme: 'material'
                    }}
                  />
          </Box>
      </Container>
  )
};

export default Editor;
