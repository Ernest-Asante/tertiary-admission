<>
<Grid container spacing={2}>
<Grid item xs={6} sm={4}  md={3}>
   <Card onClick={handleClickA} sx={{height:"50px", width:"200px",backgroundColor:"greenyellow"}}>
     <Stack display="flex" direction="row" sx={{alignItems:"center"}}>
       <img src={Image} style={{height:"59px", width:"45px"}}/>
       <p style={{marginLeft:"15px", fontSize:"20px",textAlign:"center"}}><b>ALL UNI.</b></p>
     </Stack>
   </Card>
</Grid>
</Grid>

<Grid item xs={6} sm={4} md={3}>
<Card onClick={handleClickE} sx={{height:"50px", width:"200px",backgroundColor:"greenyellow"}}>
  <Stack display="flex" direction="row" sx={{alignItems:"center"}}>
    <img src={Image} style={{height:"59px", width:"45px"}}/>
    <p style={{marginLeft:"15px", fontSize:"20px",textAlign:"center"}}><b>UCC</b></p>
  </Stack>
</Card>
</Grid>
</>