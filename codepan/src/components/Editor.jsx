import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

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
const Editor = ({ color, heading }) => {
  return (
      <Container>
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
                            paddingBottom: 2}}>/</Box>
                {heading}
              </Heading>
              
              <CloseFullscreenIcon
                fontSize='small'
                style={{ alignSelf: 'center' }}
              />

          </Header>

          <Box>

          </Box>
      </Container>
  )
};

export default Editor;
