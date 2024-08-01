import React, { useState,useContext ,useEffect} from 'react';
import Checkbox from '@mui/material/Checkbox';
import { green } from '@mui/material/colors';
import { ChooseContext } from '../ALL/Context1.jsx';
import { useNavigate , useLocation} from 'react-router-dom';

//import { analytics } from '../firebase-config.jsx';
//import { logEvent } from 'firebase/analytics';

//import {  logEvent } from 'firebase/analytics';


import { Box, Card,TextField, Stack, Typography,Avatar,Button,Chip ,IconButton, Divider} from '@mui/material'


function Page1() {

    const navigate = useNavigate();
 
    //const location = useLocation();
  
    /*useEffect(() => {
      // Log page view on route change
      logEvent(analytics, 'page_view', { page_path: location.pathname });
    }, [location]); */// Dependency on location ensures this runs on route change
   
    const { selectedOption,
            setSelectedOption,
            gender,
            setGender
           } = useContext(ChooseContext)
  
           const [error1, setError1] = useState('');
           const [error2, setError2] = useState('');
  
  
    const handleCheckboxChange = (value) => {
      setSelectedOption(value);
    };
  
    const handleGenderChange = (value) => {
      setGender(value);
    };
  
   
    const handleClickC = () => {
      navigate('/test2');
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Validate selection
      if (!gender) {
        setError1('Please select a gender.');
      }
      if (!selectedOption) {
        setError2('Please select a course.');
      }
      if(selectedOption && gender){
        setError1('');
        setError2('');
        console.log('Form submitted with gender:', gender);
        navigate('/ucc_event2');
        // Proceed with form submission logic here
      }
    };
 

  return (
    <>
    <Box bgcolor="white" flex={6} p={1} sx={{display:{xs:"block",sm:"block"},width:{sm:'100%',xs:'100%',md:"45%"}}}>
    
    
    <Card   sx={{height:"auto",marginBottom:1,margin:0,borderRadius:5}}> 
    <div>
      <div>
      <h3>Select Your Gender</h3>
      <div>
        <Checkbox
          checked={gender === 'male'}
          onChange={() => handleGenderChange('male')}
          color="primary"
          inputProps={{ 'aria-label': 'male' }}
        />
        Male
      </div>
      <div>
        <Checkbox
          checked={gender === 'female'}
          onChange={() => handleGenderChange('female')}
          color="primary"
          inputProps={{ 'aria-label': 'female' }}
        />
        Female
      </div>
      {error1 && <div style={{ color: 'red' }}>{error1}</div>}
      </div>
      <Divider sx={{marginBottom:0}}/>
      <h3 >Select The Course You Studied @SHS</h3>
      <div>
        <Checkbox
          checked={selectedOption === 'General Science'}
          onChange={() => handleCheckboxChange('General Science')}
          color="primary"
          inputProps={{ 'aria-label': 'General Science' }}
        />
        General Science
      </div>
      <div>
        <Checkbox
          checked={selectedOption === 'General Arts'}
          onChange={() => handleCheckboxChange('General Arts')}
          color="primary"
          inputProps={{ 'aria-label': 'General Arts' }}
        />
        General Arts
      </div>
      <div>
        <Checkbox
          checked={selectedOption === 'Home Economics'}
          onChange={() => handleCheckboxChange('Home Economics')}
          sx={{color:green}}
          inputProps={{ 'aria-label': 'Home Economics' }}
        />
        Home Economics
      </div>
      <div>
        <Checkbox
          checked={selectedOption === 'Business'}
          onChange={() => handleCheckboxChange('Business')}
          sx={{color:green}}
          inputProps={{ 'aria-label': 'Business' }}
        />
        Business
      </div>
      <div>
        <Checkbox
          checked={selectedOption === 'Visual Arts'}
          onChange={() => handleCheckboxChange('Visual Arts')}
          sx={{color:green}}
          inputProps={{ 'aria-label': 'Visual Arts' }}
        />
        Visual Arts
      </div>
      <div>
        <Checkbox
          checked={selectedOption === 'Agric Science'}
          onChange={() => handleCheckboxChange('Agric Science')}
          sx={{color:green}}
          inputProps={{ 'aria-label': 'Agric Science' }}
        />
        Agric Science
      </div>
      <div>
        <Checkbox
          checked={selectedOption === 'Technical Programme'}
          onChange={() => handleCheckboxChange('Technical Programme')}
          sx={{color:green}}
          inputProps={{ 'aria-label': 'Technical Programme' }}
        />
        Technical Programme
      </div>
      {error2 && <div style={{ color: 'red' }}>{error2}</div>}
    </div>
   
  
    <Button onClick={handleSubmit} variant="outlined" component="label" sx={{width:{xs:"30%",sm:"25%",md:"25%"},marginBottom:3,alignItems:"center",textAlign:"center",justifyContent:"center",borderRadius:20,marginLeft:'60%',display:"block"}}>CONTINUE</Button>
    
    </Card>
  
      </Box>


   

   
    </>
  )
}

export default Page1
