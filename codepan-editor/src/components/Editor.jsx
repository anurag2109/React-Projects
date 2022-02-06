import { Box, Grow } from "@mui/material";
import React, {useState} from "react";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import { styled } from "@mui/material/styles";
import { Controlled } from 'react-codemirror2';

import 'codemirror/theme/material.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';

import '../App.css';


const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basic: 0;
  padding: 0 8px 9px;
`;

const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  color: #fff;
  flex-grow: 1;
  flex-basic: 0;
  font-weight: 700;
`;

const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  padding: 9px 12px;
`;


const Editor = ({color, heading, icon, language, value, onChange}) => {

    const [open, setOpen] = useState(true);
    const handleChange = (editor, data, value) =>{
        onChange(value);
    }

  return (
    <Container style={open ? null : {flexGrow: 0}}>
      <Header>
        <Heading>
          <Box
            component="span"
            style={{
              background: color,
              borderRadius: 5,
              marginRight: 5,
              height: 20,
              width: 20,
              display: "flex",
              placeContent: "center",
              color: "#000",
              paddingBottom: 4,
            }}
          >
            {icon}
          </Box>
          {heading}
        </Heading>
        <CloseFullscreenIcon fontSize="small" style={{  alignSelf: "center" }} onClick={()=>setOpen(prevState => !prevState)} />
      </Header>
      <Box>
            <Controlled
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    lineNumbers: true,
                    theme: 'material'
                }}
                value={value}
                onBeforeChange={handleChange}
            />
      </Box>
    </Container>
  );
};

export default Editor;
