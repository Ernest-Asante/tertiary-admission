import React from 'react'

import { Box,Stack,Skeleton} from '@mui/material';

import { grey } from '@mui/material/colors';

import TopNav from './TopNav';
import LeftNav from '../ALL/LeftNav';
import RightNav from '../ALL/RightNav';
import Page3 from './Page3';


function Umat_Body3() {

     
  
  return (
    <Box sx={{backgroundColor:grey}}>
          <TopNav/>
          <Stack direction="row" spacing={1} justifyContent="space-between" marginTop={4}>
             <LeftNav/>
               <Page3/>
              <RightNav/>
          </Stack>
          </Box> 
      )
 
}

export default Umat_Body3