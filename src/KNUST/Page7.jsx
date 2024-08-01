import { Box, Card ,Stack,Button} from '@mui/material'
import React,{useState,useContext} from 'react'

import { ChooseContext } from '../ALL/Context1';
import { useNavigate } from 'react-router-dom';

function Page7() {
    const [rank, setRank] = useState('qualify')
    const handleClickA = () => {
        setRank("qualify")
      }
      const handleClickB = () => {
        setRank("disqualify")
      }

      const { 
        knust_passed,knust_failed,knustcore_failed
       
      } = useContext(ChooseContext)

      const navigate = useNavigate();
      const handleClickC = () => {
        navigate('/knust_event1');
      }
  return (
    <Box bgcolor="white" flex={6} p={1} sx={{display:{xs:"block",sm:"block"},width:{sm:'100%',xs:'100%',md:"45%"}}}>
    
    
    <Card   sx={{minHeight:"88vh",marginBottom:1,margin:0,borderRadius:5}}> 
      <Box>
        <Stack direction="row" sx={{display:"flex", justifyContent:"space-between",marginTop:"10px"}}>
        <Button onClick={handleClickA} variant={rank=="qualify"?("contained"):("outlined")} component="label" sx={{width:{xs:"30%",sm:"30%",md:"30%"},marginBottom:3,alignItems:"center",textAlign:"center",justifyContent:"center",borderRadius:20,marginLeft:'6%',display:"block"}}>QUALIFIED</Button>
        <Button onClick={handleClickB} variant={rank=="disqualify"?("contained"):("outlined")} component="label" sx={{width:{xs:"37%",sm:"35%",md:"32%"},textAlign:"center",marginBottom:3,alignItems:"center",textAlign:"center",justifyContent:"center",borderRadius:20,marginLeft:'1%',display:"block"}}>DISQUALIFIED</Button>
        <Button onClick={handleClickC} variant="outlined" component="label" sx={{width:{xs:"15%",sm:"20%",md:"20%"},marginBottom:3,alignItems:"center",textAlign:"center",justifyContent:"center",borderRadius:20,marginRight:'6%',display:"block"}}>EXIT</Button>
        </Stack>
        </Box>
        <hr/>
        {rank=="qualify"?(<p>PROGRAMS YOU QUALIFY FOR</p>):(<p>PROGRAMS YOU DO NOT QUALIFY FOR</p>)}
        <ul> {knustcore_failed.map((ad, index) => (
                                <li key={index}  style={{marginBottom:"7px"}}>
                                    <h3>FAILED CORE SUBJECT(S):{ad.reason}</h3> 
                                </li>
                            ))}
                            </ul>
        {rank=="qualify"?(
              
                <div>
                     {knust_passed.length > 0 ?( <ol>
                          {knust_passed.map((ad, index) => (
                                <li key={index}  style={{marginBottom:"7px"}}>
                                    <strong>Programme:</strong> {ad.name}, <strong>Institution:</strong> {ad.college}
                                </li>
                            ))}
                        </ol>):(<h3>YOU DO NOT QUALIFY FOR ANY PROGRAMME(DEGREE) AT KNUST</h3>)} 
                       
                       </div>
                        
        ):( 
        <>
      
                <ul>
                    {knust_failed.map((ad, index) => (
                        <li key={index}>
                            <strong>Programme:</strong> {ad.name}, <strong>Institution:</strong> {ad.college}
                            <p>REASON: {ad.reason}</p>
                        </li>
                    ))}
                </ul>
                </>
                )}
      
        
   
    </Card>
    </Box>
  )
}

export default Page7
