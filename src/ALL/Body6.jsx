import React from 'react'

import { Box,Stack,Skeleton} from '@mui/material';


import { grey } from '@mui/material/colors';
import Page6 from './Page6';
import LeftNav from './LeftNav';
import RightNav from './RightNav';
import TopNav from './TopNav';


function Body6() {

     
  
  return (
    <Box sx={{backgroundColor:grey}}>
          <TopNav/>
          <Stack direction="row" spacing={1} justifyContent="space-between" marginTop={4}>
             <LeftNav/>
               <Page6/>
              <RightNav/>
          </Stack>
          </Box> 
      )
 
}

export default Body6