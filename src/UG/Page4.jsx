
import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { ChooseContext } from '../ALL/Context1';
import { Box, Button, Stack,Card } from '@mui/material';

function Page4() {
    const { selectedItems,
        englishGrade,
        mathsGrade,
        scienceGrade,
        socialGrade,
        oneGrade,
        twoGrade,
        threeGrade,
        fourGrade, 
       val} = useContext(ChooseContext)
   
       const navigate = useNavigate();
       const handleClickA = () => {
        navigate('/ug_event5');
      }
    const handleClickB = () => {
      navigate('/ug_event3');
    }
    const handleClickC = () => {
       navigate('/ug_event1');
     }
  return (
    <Box bgcolor="white" flex={6} p={1} sx={{display:{xs:"block",sm:"block"},width:{sm:'100%',xs:'100%',md:"45%"}}}>
    
    
    <Card   sx={{height:"88vh",marginBottom:1,margin:0,borderRadius:5}}> 

    <div>
      <h2 style={{textAlign:"center"}}>HI THERE, BELOW ARE YOUR WASSCE GRADES</h2>
    </div>
    <div>
    <table style={{ border:'1px solid black', width:'60%',margin:"auto"}} cellSpacing="1" cellPadding="1">
            <tbody>
                <tr >
                    <th style={{width:'25%'}}>SUBJECTS</th>
                    <th >GRADE</th>
                </tr>
                <tr >
                    <td  style={{width:'25%'}}>English</td>
                    <td style={{textAlign: 'center'}}>{englishGrade}</td>
                    
                </tr>
                <tr >
                    <td  style={{width:'25%'}}>Maths</td>
                    <td style={{textAlign: 'center'}}>{mathsGrade}</td>
                    
                </tr>
                <tr >
                    <td  style={{width:'25%'}}>Social</td>
                    <td style={{textAlign: 'center'}}>{socialGrade}</td>
                    
                </tr>
                <tr >
                    <td  style={{width:'25%'}}>Science</td>
                    <td style={{textAlign: 'center'}}>{scienceGrade}</td>
                    
                </tr>
                {val[0][1]?( <> <tr >
                    <td  style={{width:'25%'}}>{`${val[0][0]}`}</td>
                    <td style={{textAlign: 'center'}}>{oneGrade}</td>
                    
                </tr>
                <tr >
                    <td  style={{width:'25%'}}>{`${val[0][1]}`}</td>
                    <td style={{textAlign: 'center'}}>{twoGrade}</td>
                    
                </tr>
                <tr >
                    <td  style={{width:'25%'}}>{`${val[0][2]}`}</td>
                    <td style={{textAlign: 'center'}}>{threeGrade}</td>
                    
                </tr>
                <tr >
                    <td  style={{width:'25%'}}>{`${val[0][3]}`}</td>
                    <td style={{textAlign: 'center'}}>{fourGrade}</td>
                    
                </tr>
                </>):(<p></p>)
               }
            </tbody>
        </table>
        </div>

        <h3 style={{textAlign:"center"}}>THIS IS WHAT WILL BE USE FOR THE PROCESSING. CONFIRM AND CONTINUE OR GO BACK TO EDIT</h3>

    <Box sx={{marginTop:"10%", marginBottom:4}}>
    <div>{val[0][1]?(<p></p>):(<h2>Select your electives</h2>)}</div>
    {val[0][1] ?( 
        <Stack direction="row" spacing={12} sx={{justifyContent:"space-around"}}>
           
    <Button onClick={handleClickB} variant="outlined" component="label" sx={{width:{xs:"30%",sm:"25%",md:"25%"},marginBottom:3,alignItems:"center",textAlign:"center",justifyContent:"center",borderRadius:20,marginLeft:'60%',display:"block"}}>GO BACK</Button>
    
    <Button onClick={handleClickA} variant="outlined" component="label" sx={{width:{xs:"30%",sm:"25%",md:"25%"},marginBottom:3,alignItems:"center",textAlign:"center",justifyContent:"center",borderRadius:20,marginLeft:'60%',display:"block"}}>CONTINUE</Button>
  
        </Stack>
          ):(  <Button onClick={handleClickC} variant="outlined" component="label" sx={{width:{xs:"40%",sm:"40%",md:"45%"},marginBottom:3,alignItems:"center",textAlign:"center",justifyContent:"center",borderRadius:20,marginLeft:'25%',display:"block"}}>START OPERATION</Button>
          )}
    </Box>
   

    </Card>
    </Box>
  )
}

export default Page4