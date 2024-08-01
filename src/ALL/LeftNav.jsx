import React from 'react'
import { useEffect,useState } from 'react';
import { Box, Card, Stack, Typography,Avatar,Button,Chip ,IconButton, Divider} from '@mui/material'
import { grey ,lightGreen} from '@mui/material/colors';
import rem from './rem.png'; 



function LeftNav() {
 
  return ( 
    <>
  <Box  flex={3} p={0} sx={{display:{xs:"none",md:"block"},position:"sticky",backgroundColor:grey,marginRight:8,marginTop:10,width:{xs:'100%',md:"25%"}}}>
      
   
      
        
   
         <Card   sx={{height:"auto",marginBottom:1,margin:0,borderRadius:5,marginRight:3}}> 
         <p>PASS WASSCE WITH EXCELLENCE</p>
          <hr/>
          <div style={{display: "flex"}}>
            <img src={rem} alt="none" style={{height: "35px", width: "35px", borderRadius: "20px", marginRight: "7px"}}/>
            <p>ONLY BELIEVE SHTS</p>
          </div>
          <div>
            <p>Come and experience the best wassce tuition and preparation. We have great teachers and accommodation to enhance effective learning</p>
            <img src={rem} alt="none" style={{height: "30vh", width: "22vw",borderRadius: "5px",  margin: "2px"}}/>
            <p>LOC: KUKURANTUMI-AKIM, EASTERN REGION TEL: 03476532767</p>
            
         
            <Button  variant="outlined" component="label" sx={{width:{xs:"30%",sm:"50%",md:"50%"},borderRadius:20,marginLeft:8,marginBottom:2,display:"block",textAlign:"center"}}> DETAILS</Button>
    
          </div>

    </Card>
     </Box>
     

    </>
  )
}

export default LeftNav
