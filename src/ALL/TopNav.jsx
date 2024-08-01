import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { ArrowBackIosNewOutlined } from '@mui/icons-material';
import Holly2 from './Holly2.jpg'; 
import { useNavigate } from 'react-router-dom';
import { lightGreen } from '@mui/material/colors';


export default function TopNav() { 
    let navigate = useNavigate();
   
    const handleBack = () => {
      navigate(-1)
    }
 
  return (
    <Box sx={{ flexGrow: 1, marginBottom:5.5 ,marginBottom:8 }}>
      <AppBar position="fixed" sx={{bgcolor:"white", marginBottom:10,display:'block'}}>
        <Toolbar>
      
         <img alt="holly" src={Holly2} style={{height:30,width:30,marginLeft:8}}/>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, color:"black" ,fontWeight:200,fontStyle:'fantasy',marginLeft:1,display:{xs:"none",md:"block"}}}>
             CHECK FOR ALL UNIVERSITIES
          </Typography>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, color:"black" ,fontWeight:200,fontStyle:'fantasy',marginLeft:1,display:{xs:"block",md:"none"}}}>
            ALL UNI.
          </Typography>
          <Button  variant="outlined" component="label" sx={{width:{xs:"45%",sm:"32%",md:"20%"},borderColor:lightGreen,borderRadius:20,marginRight:2,textAlign:"center",display:"block"}}>KNUST GUIDE</Button>
    
        </Toolbar>
      </AppBar>
    </Box>
  );
}