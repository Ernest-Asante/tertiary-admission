import React from 'react'

import { Box,Stack,Skeleton} from '@mui/material';


import { grey } from '@mui/material/colors';
import Page1 from './Page1';
import LeftNav from '../ALL/LeftNav';
import RightNav from '../ALL/RightNav';
import TopNav from './TopNav';


function Ug_Body1() {

     
  
  return (
    <Box sx={{backgroundColor:grey}}>
          <TopNav/>
          <Stack direction="row" spacing={1} justifyContent="space-between" marginTop={4}>
             <LeftNav/>
               <Page1/>
              <RightNav/>
          </Stack>
          </Box> 
      )
 
}

export default Ug_Body1