import { Button, Card, Stack } from '@mui/material'
import React from 'react'
import Image from './rem.png';
import { useNavigate } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { green } from '@mui/material/colors';

function Homepage() {
    const navigate = useNavigate();
    const handleClickA = () => {
        navigate('/event1');
      }

      const handleClickB = () => {
        navigate('/knust_event1');
      }
      const handleClickC = () => {
        navigate('/uds_event1');
      }
      const handleClickD = () => {
        navigate('/ug_event1');
      }
      const handleClickE = () => {
        navigate('/ucc_event1');
      }
      const handleClickF = () => {
        navigate('/umat_event1');
      }
     

      const landingPageStyle = {
        height: '100vh', // Full screen height
        width: '100vw', // Full screen width
        backgroundImage: 'url("https://www.shutterstock.com/shutterstock/photos/1548017276/display_1500/stock-photo-group-of-five-african-college-students-spending-time-together-on-campus-at-university-yard-black-1548017276.jpg")',
        backgroundSize: 'cover', // Cover the whole page
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', // Space out the company name and the pet images
        alignItems: 'center',
        color: 'black',
       
        opacity: 0.9, // Darken the background slightly
       
      };
    
      const circleImageStyle = {
        height: '100px',
        width: '100px',
        borderRadius: '50%', // Make the image circular
        objectFit: 'cover', // Ensure images fit the circle without distortion
        marginBottom: '10px' // Space between image and name
      };
  return (
    <>
   <div style={landingPageStyle}>
      <Typography sx={{fontSize:{xs:"40px",md:"50px"},color:"greenyellow"}}>ARE YOUR READY FOR TERTIARY EDUCATION ?</Typography>
      <Typography sx={{fontSize:{xs:"25px",md:"30px"},backgroundColor:"greenyellow"}}>CHECK YOUR ELEGIBILITY TO THE PROGRAM OF YOUR CHOICE </Typography>
     
         <Container sx={{marginBottom:"5px"}}>
         <Grid container spacing={2}>
        <Grid item xs={6} sm={4} md={3}>
           <Card onClick={handleClickB} sx={{height:"50px", width:"95%",backgroundColor:"greenyellow"}}>
             <Stack display="flex" direction="row" sx={{alignItems:"center"}}>
               <img src={Image} style={{height:"59px", width:"45px"}}/>
               <p style={{marginLeft:"15px", fontSize:"20px",textAlign:"center"}}><b>KNUST</b></p>
             </Stack>
           </Card>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
           <Card onClick={handleClickC} sx={{height:"50px", width:"95%",backgroundColor:"greenyellow"}}>
             <Stack display="flex" direction="row" sx={{alignItems:"center"}}>
               <img src={Image} style={{height:"59px", width:"45px"}}/>
               <p style={{marginLeft:"15px", fontSize:"20px",textAlign:"center"}}><b>UDS</b></p>
             </Stack>
           </Card>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
           <Card onClick={handleClickD} sx={{height:"50px", width:"9cd5%",backgroundColor:"greenyellow"}}>
             <Stack display="flex" direction="row" sx={{alignItems:"center"}}>
               <img src={Image} style={{height:"59px", width:"45px"}}/>
               <p style={{marginLeft:"15px", fontSize:"20px",textAlign:"center"}}><b>UG-LEGON</b></p>
             </Stack>
           </Card>
        </Grid>
     
        <Grid item xs={6} sm={4} md={3}>
           <Card onClick={handleClickF} sx={{height:"50px", width:"95%",backgroundColor:"greenyellow"}}>
             <Stack display="flex" direction="row" sx={{alignItems:"center"}}>
               <img src={Image} style={{height:"59px", width:"45px"}}/>
               <p style={{marginLeft:"15px", fontSize:"20px",textAlign:"center"}}><b>UMAT</b></p>
             </Stack>
           </Card>
        </Grid>
      </Grid>
    </Container>
      </div>
    
 
    </>
  )
}

export default Homepage