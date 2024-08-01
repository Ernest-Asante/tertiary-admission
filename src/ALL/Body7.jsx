import React from 'react'

import { Box,Stack,Skeleton} from '@mui/material';


import { grey } from '@mui/material/colors';
import Page7 from './Page7';
import LeftNav from './LeftNav';
import RightNav from './RightNav';
import TopNav from './TopNav';


function Body7() {

     
  
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

export default Body7