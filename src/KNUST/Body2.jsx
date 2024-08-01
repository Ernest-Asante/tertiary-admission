import React from 'react'

import { Box,Stack,Skeleton} from '@mui/material';

import { grey } from '@mui/material/colors';

import TopNav from './TopNav';
import LeftNav from '../ALL/LeftNav';
import Page2 from './Page2';
import RightNav from '../ALL/RightNav';

function Knust_Body2() {

     
  
  return (
    <Box sx={{backgroundColor:grey}}>
          <TopNav/>
          <Stack direction="row" spacing={1} justifyContent="space-between" marginTop={4}>
             <LeftNav/>
               <Page2/>
              <RightNav/>
          </Stack>
          </Box> 
      )
 
}

export default Knust_Body2