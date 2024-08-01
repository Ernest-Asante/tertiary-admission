import React from 'react'

import { Box,Stack,Skeleton} from '@mui/material';

import { grey } from '@mui/material/colors';

import TopNav from './TopNav';
import LeftNav from '../ALL/LeftNav';
import RightNav from '../ALL/RightNav';
import Page7 from './Page7';






function Umat_Body7() {

     
  
  return (
    <Box sx={{backgroundColor:grey}}>
          <TopNav/>
          <Stack direction="row" spacing={1} justifyContent="space-between" marginTop={4}>
             <LeftNav/>
               <Page7/>
              <RightNav/>
          </Stack>
          </Box> 
      )
 
}

export default Umat_Body7