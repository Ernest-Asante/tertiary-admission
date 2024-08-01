
import React, { useState, useContext, useEffect, useRef} from 'react'
import { ChooseContext } from '../ALL/Context1';
import { useNavigate } from 'react-router-dom';
import { Box, Card,Stack } from '@mui/material';
import Medicine from './Programmes/Medicine';
import Dietetics from './Programmes/Dietetics';
import Dental from './Programmes/Dental';
import Geophysics from './Programmes/Geophysics';
import MediLab from './Programmes/Medical_Laboratory';
import Chemistry from './Programmes/Chemistry';
import Occupational_Therapy from './Programmes/Occupational_Therapy';
import Pharmacy from './Programmes/Pharmacy';
import Physics from './Programmes/Physics';
import Physiotherapy from './Programmes/Physiotherapy';
import Radiography from './Programmes/Radiography';
import Respiratory_Therapy from './Programmes/Respiratory_Therapy';

function Page6() {

    const navigate = useNavigate();
    const timerRef = useRef(null);
    const handleClickC = () => {
      navigate('/test6');
    }
  
    const [countdown, setCountdown] = useState(5)
  
   useEffect(()=>{
    timerRef.current = 
       setInterval(()=>{
      setCountdown(prevCountdown => prevCountdown - 1);
    },1000);
  
    return() => clearInterval(timerRef.current);
   },[]);
  
   useEffect(()=>{
       if(countdown === 0){
         navigate('/ug_event7');
       }
   },[countdown, navigate]);
  
    const { 
      passed,
      ugcore_failed,
      englishGrade,
      mathsGrade,
      scienceGrade,
    } = useContext(ChooseContext)
  
    const [english, setEnglish] = useState(true)
    const [maths, setMaths] = useState(true)
    const [science, setScience] = useState(true);
  
    const [cores, setCores] = useState(true);
  
  
  
      const core = {
          subjects: {
            english: 6,
            maths: 6,
            science: 6
          }
      }
  
      let newMathsState = maths;
      let newEnglishState = english;
      let newScienceState = science;
      let coreState = cores;
  
          
  
      if (mathsGrade.substring(1) > core.subjects.maths) {
        newMathsState = false;
         
        console.log(`Sorry, your maths grade is ${mathsGrade}. This is not accepted for university entry`)
        
      } else { console.log("qualified for maths") }
    
    
  
      if (englishGrade.substring(1) > core.subjects.english) {
        newEnglishState = false;
        
        console.log(`Sorry, your english grade is ${englishGrade}. This is not accepted for university entry`)
      
      } else { console.log("qualified for english") }
    
  
  
      if (scienceGrade.substring(1) > core.subjects.science) {
        newScienceState = false;
       
        console.log(`Sorry, your science grade is ${scienceGrade}. This is not accepted for university entry`)
        
      } else { console.log("qualified for science") }
  
  
  
  if (newMathsState === false) {
     coreState = false
  } else if(newEnglishState === false){
      coreState = false
  } else if(newScienceState === false){
      coreState = false
  } else {
      coreState = true
  }
    
  console.log(coreState)

  if( coreState == true){
    console.log('You have pass your core')
  } else{
    console.log('You have failed your core')
    if (!ugcore_failed.some(item => item.name === "UG_LEGON")) {
      ugcore_failed.push({name:"ug" ,reason:"You have failed some of your core subject." });
  }
  } 
  
 
  
  return (
    <Box bgcolor="white" flex={6} p={1} sx={{display:{xs:"block",sm:"block"},width:{sm:'100%',xs:'100%',md:"45%"}}}>
    
    {coreState && <Medicine />}
    {coreState && <Dietetics/>}
    {coreState && <Dental />}
    {coreState && <Geophysics />}
    {coreState && <MediLab />}
    {coreState && <Chemistry />}
    {coreState && <Occupational_Therapy />}
    {coreState && <Pharmacy />}
    {coreState && <Physics />}
    {coreState && <Physiotherapy />}
    {coreState && <Radiography />}
    {coreState && <Respiratory_Therapy />}

    <Card  sx={{height:"88vh",marginBottom:1,margin:0,borderRadius:5}}> 
    <div><h2 style={{textAlign:"center"}}>RESULT PROCESSING PANEL</h2></div>
  
      <Box sx={{display:"flex", justifyContent:"center", alignItems:"center",marginTop:"15%"}}>
      <Stack direction="column">
      
  <h3>YOUR RESULTS WILL BE READY IN</h3>
  <Box>
    <Card sx={{height:"80px", width:"80px", borderRadius:10,justifyContent:"center", alignItems:"center", marginLeft:"25%"}}><h2 style={{textAlign:"center", marginTop:"25%"}}>{countdown}</h2></Card>
    <h3 style={{marginLeft:"25%"}}>SECONDS</h3>
  </Box>
  {countdown==5 ||countdown==4 ?(<h3 style={{color:"green"}}>checking program(s) criteria...</h3>):countdown == 3 ||countdown == 2?(<h3 style={{color:"green"}}>checking program(s) elegibility..</h3>):(<h3 style={{color:"green"}}>finalizing operations...</h3>)}
     </Stack>
     </Box>
    </Card>
    </Box>
  )
}

export default Page6