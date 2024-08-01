
import React, { useState, useContext, useEffect, useRef} from 'react'
import { ChooseContext } from '../ALL/Context1';
import { useNavigate } from 'react-router-dom';
import { Box, Card,Stack } from '@mui/material';
import ComputerScience from './Programmes/ComputerScience';
import Statistics from './Programmes/Statistics';
import ActurialScience from './Programmes/ActurialScience';
import Physics from './Programmes/Physics';
import Meteorology from './Programmes/Meteorology';
import Mathematics from './Programmes/Mathematics';
import Chemistry from './Programmes/Chemistry';
import Biochemistry from './Programmes/Biochemistry';
import BiologicalScience from './Programmes/BiologicalScience';
import FoodScience from './Programmes/FoodScience';
import EnvironmentalScience from './Programmes/EnvironmentalScience';
import Optometry from './Programmes/Optometry';
import Agriculture from './Programmes/Agriculture';
import AgricBiotech from './Programmes/AgricBiotech';
import WaterResourceManagement from './Programmes/WaterResource';
import NaturalResource from './Programmes/NaturalResouce';
import ForestReserve from './Programmes/ForestReserve';
import PackageTech from './Programmes/PackageTech';
import LandscapeDesign from './Programmes/LandscapeDesign';
import AgriBusiness from './Programmes/AgricBusiness';
import MedicalImaging from './Programmes/MedicalImaging';
import DentalSurgery from './Programmes/DentalSurgery';
import Vertinary from './Programmes/Vertinary';
import Rehabilitation from './Programmes/Rehabilitation';
import HerbalMedicine from './Programmes/HerbalMedicine';
import Medicine from './Programmes/Medicine';
import MediLab from './Programmes/MediLab';
import Midwifery from './Programmes/Midwifery';
import Nursing from './Programmes/Nursing';
import PhysicianAssistant from './Programmes/PhysicianAssistant';
import Pharmacy from './Programmes/Pharmacy';
import Physiotherapy from './Programmes/Physiotherapy';


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
         navigate('/knust_event7');
       }
   },[countdown, navigate]);
  
    const { 
      passed,
      knustcore_failed,
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
    if (!knustcore_failed.some(item => item.name === "KNUST")) {
      knustcore_failed.push({name:"KNUST" ,reason:"You have failed some of your core subject." });
  }
  } 
  
  return (
    <Box bgcolor="white" flex={6} p={1} sx={{display:{xs:"block",sm:"block"},width:{sm:'100%',xs:'100%',md:"45%"}}}>
    
    {coreState && <ComputerScience />}
    {coreState && <Statistics />}
    {coreState && <ActurialScience />}
    {coreState && <Physics />}
    {coreState && <Meteorology />}
    {coreState && <Mathematics />}
    {coreState && <Chemistry />}
    {coreState && <Biochemistry />}
    {coreState && <BiologicalScience />}
    {coreState && <FoodScience />}
    {coreState && <EnvironmentalScience />}
    {coreState && <Optometry />}
    {coreState && <Agriculture />}
    {coreState && <AgricBiotech />}
    {coreState && <WaterResourceManagement />}
    {coreState && <NaturalResource />}
    {coreState && <ForestReserve />}
    {coreState && <PackageTech />}
    {coreState && <LandscapeDesign />}
    {coreState && <AgriBusiness />}
    {coreState && <MedicalImaging />}
    {coreState && <DentalSurgery />}
    {coreState && <Vertinary />}
    {coreState && <Rehabilitation />}
    {coreState && <HerbalMedicine />}
    {coreState && <Medicine />}
    {coreState && <MediLab />}
    {coreState && <Midwifery />}
    {coreState && <Nursing />}
    {coreState && <PhysicianAssistant />}
    {coreState && <Pharmacy />}
    {coreState && <Physiotherapy />}


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
  
    