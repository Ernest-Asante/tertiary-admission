
import React,{ useContext} from 'react'
import { ChooseContext } from '../ALL/Context1';
import { useNavigate } from 'react-router-dom';
import { Block, Cancel, CancelOutlined, CheckBox, CheckCircle, CheckCircleOutline } from '@mui/icons-material';
import { Box ,Stack,Card, Button} from '@mui/material';


function Page5() {
    const navigate = useNavigate();
    const handleClickB = () => {
      navigate('/ucc_event4');
    }
    const handleClickA = () => {
        navigate('/ucc_event6');
      }
      const handleClickC = () => {
        navigate('/ucc_event1');
      }

         
  const { 
    englishGrade,
    mathsGrade,
    scienceGrade,
    socialGrade,
    oneGrade,
    twoGrade,
    threeGrade,
    fourGrade, 
    val} = useContext(ChooseContext)

    if (mathsGrade.substring(1) > 6) {
        console.log(`Sorry, your maths grade is ${mathsGrade}. This is not accepted for university entry`)
      } else { console.log("qualified for maths") }
    
    
    if (englishGrade.substring(1) > 6) {
        console.log(`Sorry, your english grade is ${englishGrade}. This is not accepted for university entry`)
      } else { console.log("qualified for english") }
    
  
    if (scienceGrade.substring(1) > 6) {
        console.log(`Sorry, your science grade is ${scienceGrade}. This is not accepted for university entry`)
      } else { console.log("qualified for science") }
  
  
    if (socialGrade.substring(1) > 6) {
        console.log(`Sorry, your science grade is ${socialGrade}. This is not accepted for university entry`)
      } else { console.log("qualified for science") }
  
  
    if (oneGrade.substring(1) > 6) {
        console.log(`Sorry, your  ${val[0][0]} grade is  ${oneGrade}. This is not accepted for university entry`)
      } else { console.log(`qualified for ${val[0][0]}`) }
  
    
    if (twoGrade.substring(1) > 6) {
        console.log(`Sorry, your  ${val[0][1]} grade is  ${twoGrade}. This is not accepted for university entry`)
      } else { console.log(`qualified for ${val[0][1]}`) }
  

    if (threeGrade.substring(1) > 6) {
        console.log(`Sorry, your  ${val[0][2]} grade is  ${threeGrade}. This is not accepted for university entry`)
      } else { console.log(`qualified for ${val[0][2]}`) }

      if(val[0][3]){
    if (fourGrade.substring(1) > 6) {
        console.log(`Sorry, your  ${val[0][3]} grade is  ${fourGrade}. This is not accepted for university entry`)
      } else { console.log(`qualified for ${val[0][3]}`) }
      }
  return (
    <Box bgcolor="white" flex={6} p={1} sx={{display:{xs:"block",sm:"block"},width:{sm:'100%',xs:'100%',md:"45%"}}}>
    
    
    <Card  sx={{height:"auto",marginBottom:1,margin:0,borderRadius:5}}> 

    <div>
      <h2 style={{textAlign:"center"}}>HERE IS THE STATUS OF YOUR WASSCE RESULTS.</h2>
    </div>
    <div style={{marginBottom:"10px"}}>
        <h3> STATUS KEY</h3>
        
        <span> <CheckCircleOutline style={{color:'green', marginLeft:"10%"}}/> = Acceptable</span>
        <span> <CancelOutlined style={{color:'red', marginLeft:"25%"}}/> = Not Acceptable</span>
    </div>
    <div>
    <table style={{ border:'1px solid black', width:'60%',margin:"auto"}} cellSpacing="1" cellPadding="1">
            <tbody>
                <tr >
                    <th style={{width:'25%'}}>SUBJECTS</th>
                    <th >GRADE</th>
                    <th>STATUS</th>
                </tr>
                <tr >
                    <td  style={{width:'25%'}}>English</td>
                    <td style={{textAlign: 'center'}}>{englishGrade}</td>
                    <td  style={{textAlign: 'center'}}>{englishGrade.substring(1) > 6?(<CancelOutlined style={{color:'red'}}/> ):(<CheckCircleOutline style={{color:'green'}}/>)}</td>
                    
                </tr>
                <tr >
                    <td  style={{width:'25%'}}>Maths</td>
                    <td style={{textAlign: 'center'}}>{mathsGrade}</td>
                    <td  style={{textAlign: 'center'}}>{mathsGrade.substring(1) > 6?(<CancelOutlined style={{color:'red'}}/> ):(<CheckCircleOutline style={{color:'green'}}/>)}</td>
                    
                </tr>
                <tr >
                    <td  style={{width:'25%'}}>Social</td>
                    <td style={{textAlign: 'center'}}>{socialGrade}</td>
                    <td  style={{textAlign: 'center'}}>{socialGrade.substring(1) > 6?(<CancelOutlined style={{color:'red'}}/> ):(<CheckCircleOutline style={{color:'green'}}/>)}</td>
                    
                </tr>
                <tr >
                    <td  style={{width:'25%'}}>Science</td>
                    <td style={{textAlign: 'center'}}>{scienceGrade}</td>
                    <td  style={{textAlign: 'center'}}>{scienceGrade.substring(1) > 6?(<CancelOutlined style={{color:'red'}}/> ):(<CheckCircleOutline style={{color:'green'}}/>)}</td>
                    
                </tr>
                <tr >
                    <td  style={{width:'25%'}}>{`${val[0][0]}`}</td>
                    <td style={{textAlign: 'center'}}>{oneGrade}</td>
                    <td  style={{textAlign: 'center'}}>{oneGrade.substring(1) > 6?(<CancelOutlined style={{color:'red'}}/> ):(<CheckCircleOutline style={{color:'green'}}/>)}</td>
                    
                </tr>
                <tr >
                    <td  style={{width:'25%'}}>{`${val[0][1]}`}</td>
                    <td style={{textAlign: 'center'}}>{twoGrade}</td>
                    <td  style={{textAlign: 'center'}}>{twoGrade.substring(1) > 6?(<CancelOutlined style={{color:'red'}}/> ):(<CheckCircleOutline style={{color:'green'}}/>)}</td>
                    
                </tr>
                <tr >
                    <td  style={{width:'25%'}}>{`${val[0][2]}`}</td>
                    <td style={{textAlign: 'center'}}>{threeGrade}</td>
                    <td  style={{textAlign: 'center'}}>{threeGrade.substring(1) > 6?(<CancelOutlined style={{color:'red'}}/> ):(<CheckCircleOutline style={{color:'green'}}/>)}</td>
                    
                </tr>
                <tr >
                    <td  style={{width:'25%'}}>{`${val[0][3]}`}</td>
                    <td style={{textAlign: 'center'}}>{fourGrade}</td>
                    <td  style={{textAlign: 'center'}}>{fourGrade.substring(1) > 6?(<CancelOutlined style={{color:'red'}}/> ):(<CheckCircleOutline style={{color:'green'}}/>)}</td>
                    
                </tr>
            </tbody>
        </table>
    </div>
   

    <h3 style={{textAlign:"center"}}>HINT: ALMOST ALL UNIVERSITIES DO NOT ACCEPT <b>D7,E8</b> and <b>F9</b> FOR ADMISSION (DEGREE). CONTINUE OPREATION OR ABORT IT</h3>

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

export default Page5
