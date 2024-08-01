
import React,  { useContext , useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChooseContext } from '../ALL/Context1'
import { Box, Button, Card, Stack } from '@mui/material';

function Page3() {
    const [error1, setError1] = useState('');
  const [error2, setError2] = useState('');
  const [error3, setError3] = useState('');
  const [error4, setError4] = useState('');
  const [error5, setError5] = useState('');
  const [error6, setError6] = useState('');
  const [error7, setError7] = useState('');
  const [error8, setError8] = useState('');


  const { selectedItems,
    englishGrade,
    mathsGrade,
    scienceGrade,
    socialGrade,
    oneGrade,
    twoGrade,
    threeGrade,
    fourGrade, 
     setEnglishGrade,
     setMathsGrade,
     setScienceGrade,
     setSocialGrade,
     setOneGrade,
     setTwoGrade,
     setThreeGrade,
     setFourGrade, } = useContext(ChooseContext)
  console.log(selectedItems)

  const val =[selectedItems.map((all)=>(`${all.value}`))]
 
 console.log(val[0][0])

 const navigate = useNavigate();
 const handleClickB = () => {
   navigate('/uds_event2');
 }
 const handleClickC = () => {
    navigate('/uds_event1');
  }

 
 const handleInputChange1 = (e) => {
  const value = e.target.value;
  setError1('');

  if (value.length > 2) {
      setError1('Input should be exactly 2 characters long.');
      return;
  }

 

  setEnglishGrade(value.toUpperCase());
};


const handleInputChange2 = (e) => {
  const value = e.target.value;
  setError2('');

  if (value.length > 2) {
      setError2('Input should be exactly 2 characters long.');
      return;
  }

 

  setMathsGrade(value.toUpperCase());
};


const handleInputChange3 = (e) => {
  const value = e.target.value;
  setError3('');

  if (value.length > 2) {
      setError3('Input should be exactly 2 characters long.');
      return;
  }

 

  setSocialGrade(value.toUpperCase());
};


const handleInputChange4 = (e) => {
  const value = e.target.value;
  setError4('');

  if (value.length > 2) {
      setError4('Input should be exactly 2 characters long.');
      return;
  }

 

  setScienceGrade(value.toUpperCase());
};


const handleInputChange5 = (e) => {
  const value = e.target.value;
  setError5('');

  if (value.length > 2) {
      setError5('Input should be exactly 2 characters long.');
      return;
  }

 

  setOneGrade(value.toUpperCase());
};


const handleInputChange6 = (e) => {
  const value = e.target.value;
  setError6('');

  if (value.length > 2) {
      setError6('Input should be exactly 2 characters long.');
      return;
  }

 

  setTwoGrade(value.toUpperCase());
};


const handleInputChange7 = (e) => {
  const value = e.target.value;
  setError7('');

  if (value.length > 2) {
      setError7('Input should be exactly 2 characters long.');
      return;
  }

 

  setThreeGrade(value.toUpperCase());
};


const handleInputChange8 = (e) => {
  const value = e.target.value;
  setError8('');

  if (value.length > 2) {
      setError8('Input should be exactly 2 characters long.');
      return;
  }

 

  setFourGrade(value.toUpperCase());
};

const validateInput = (input, setErrorFunc) => {
  if (input.length !== 2) {
      setErrorFunc('Input should be exactly 2 character long.');
      return false;
  }

  const char = input.charAt(0);
  const num = input.charAt(1);

  if (!char.match(/[A-Z]/)) {
      setErrorFunc('Input must start with a letter.');
      return false;
  }
  if (!num.match(/[0-9]/)) {
      setErrorFunc('Input must end with a number.');
      return false;
  }

  return true;
};


const handleSubmit = (e) => {
  e.preventDefault();

  const isValid1 = validateInput(englishGrade, setError1);
  const isValid2 = validateInput(mathsGrade, setError2);
  const isValid3 = validateInput(socialGrade, setError3);
  const isValid4 = validateInput(scienceGrade, setError4);
  const isValid5 = validateInput(oneGrade, setError5);
  const isValid6 = validateInput(twoGrade, setError6);
  const isValid7 = validateInput(threeGrade, setError7);
  const isValid8 = validateInput(fourGrade, setError8);


  if (isValid1 && isValid2 && isValid3 && isValid4 && isValid5 && isValid6 && isValid7 && isValid8) {
      console.log('Inputs are valid:', englishGrade);
      // Process the inputs as needed
      navigate('/uds_event4');
  }
};
  return (
    <Box bgcolor="white" flex={6} p={1} sx={{display:{xs:"block",sm:"block"},width:{sm:'100%',xs:'100%',md:"45%"}}}>
    
    
    <Card   sx={{height:"auto",marginBottom:1,margin:0,borderRadius:5}}> 
    <div>
      <h3>ENTER YOUR GRADE FOR EACH SUBJECT</h3>
      <div style={{display:"flex", justifyContent:"space-around",alignItems:"center"}}><p>English</p> <input style={{height:"20px", width:"50px"}} placeholder='english grade' value={englishGrade} onChange={handleInputChange1} /></div>  
      {error1 && <p style={{ color: 'red' }}>{error1}</p>}
      <div style={{display:"flex", justifyContent:"space-around",alignItems:"center"}}> <p>Maths</p>  <input style={{height:"20px", width:"50px"}} placeholder='maths grade' value={mathsGrade} onChange={handleInputChange2} /></div>  
      {error2 && <p style={{ color: 'red' }}>{error2}</p>}
     
      <div style={{display:"flex", justifyContent:"space-around",alignItems:"center"}}> <p>Social</p>  <input style={{height:"20px", width:"50px"}} placeholder='social grade' value={socialGrade} onChange={handleInputChange3} /></div> 
      {error3 && <p style={{ color: 'red' }}>{error3}</p>} 
      <div style={{display:"flex", justifyContent:"space-around",alignItems:"center"}}> <p>Science</p>  <input style={{height:"20px", width:"50px"}} placeholder='science grade' value={scienceGrade} onChange={handleInputChange4} /></div>  
      {error4 && <p style={{ color: 'red' }}>{error4}</p>}
      {val[0][0]?(<div style={{display:"flex", justifyContent:"space-around",alignItems:"center"}}> <p>{val[0][0]}</p>  <input style={{height:"20px", width:"50px"}} placeholder={`${val[0][0]} grade`} value={oneGrade} onChange={handleInputChange5} /></div>):(<p></p>)}
      {error5 && val[0][0]? (<p style={{ color: 'red' }}>{error5}</p>):(<p></p>)} 
      {val[0][1]?(<div style={{display:"flex", justifyContent:"space-around",alignItems:"center"}}> <p>{val[0][1]}</p>  <input style={{height:"20px", width:"50px"}} placeholder={`${val[0][1]} grade`} value={twoGrade} onChange={handleInputChange6} /></div>  ):(<p></p>)}
      {error6 && val[0][1]? ( <p style={{ color: 'red' }}>{error6}</p>):(<p></p>)}
      {val[0][2]?(<div style={{display:"flex", justifyContent:"space-around",alignItems:"center"}}> <p>{val[0][2]}</p>  <input style={{height:"20px", width:"50px"}} placeholder={`${val[0][2]} grade`} value={threeGrade} onChange={handleInputChange7} /></div>  ):(<p></p>)}
      {error7 &&  val[0][2]? ( <p style={{ color: 'red' }}>{error7}</p>):(<p></p>)}
      {val[0][3]?( <div style={{display:"flex", justifyContent:"space-around",alignItems:"center"}}> <p>{val[0][3]}</p>  <input style={{height:"20px", width:"50px"}} placeholder={`${val[0][3]} grade`} value={fourGrade} onChange={handleInputChange8} /></div>  ):(<p></p>)}
      {error8 &&  val[0][3]? ( <p style={{ color: 'red' }}>{error8}</p>):(<p></p>)}
    </div>
    <Box sx={{marginTop:"10%", marginBottom:4}}>
    <div>{val[0][1]?(<p></p>):(<h2>Select your electives</h2>)}</div>
    {val[0][1] ?( 
        <Stack direction="row" spacing={12} sx={{justifyContent:"space-around"}}>
           
    <Button onClick={handleClickB} variant="outlined" component="label" sx={{width:{xs:"30%",sm:"25%",md:"25%"},marginBottom:3,alignItems:"center",textAlign:"center",justifyContent:"center",borderRadius:20,marginLeft:'60%',display:"block"}}>GO BACK</Button>
    
    <Button onClick={handleSubmit} variant="outlined" component="label" sx={{width:{xs:"30%",sm:"25%",md:"25%"},marginBottom:3,alignItems:"center",textAlign:"center",justifyContent:"center",borderRadius:20,marginLeft:'60%',display:"block"}}>CONTINUE</Button>
  
        </Stack>
          ):(  <Button onClick={handleClickC} variant="outlined" component="label" sx={{width:{xs:"40%",sm:"40%",md:"45%"},marginBottom:3,alignItems:"center",textAlign:"center",justifyContent:"center",borderRadius:20,marginLeft:'25%',display:"block"}}>START OPERATION</Button>
          )}
    </Box>
   

    </Card>
    </Box>
  )
}

export default Page3
