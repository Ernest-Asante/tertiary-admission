import React from 'react'

import { Box,Stack,Skeleton} from '@mui/material';


import { grey } from '@mui/material/colors';
import Page5 from './Page5';
import LeftNav from './LeftNav';
import RightNav from './RightNav';
import TopNav from './TopNav';


function Body5() {

     
  
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

export default Body5