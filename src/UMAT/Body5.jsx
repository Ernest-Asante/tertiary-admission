import React from 'react'

import { Box,Stack,Skeleton} from '@mui/material';

import { grey } from '@mui/material/colors';

import TopNav from './TopNav';
import LeftNav from '../ALL/LeftNav';
import RightNav from '../ALL/RightNav';
import Page5 from './Page5';




function Umat_Body5() {

     
  
  return (
    <Box sx={{backgroundColor:grey}}>
          <TopNav/>
          <Stack direction="row" spacing={1} justifyContent="space-between" marginTop={4}>
             <LeftNav/>
               <Page5/>
              <RightNav/>
          </Stack>
          </Box> 
      )
 
}

export default Umat_Body5