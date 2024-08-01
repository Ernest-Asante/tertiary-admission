
import React, { useState, useContext,useEffect } from 'react'
import { ChooseContext } from './Context1';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select'
//import { array } from './Test1'




import { Box, Card,TextField, Stack, Typography,Avatar,Button,Chip ,IconButton, Divider} from '@mui/material'

const science = [
    {value:'chemistry', label:'Chemistry'},
    {value:'emaths', label:'E.Maths'},
    {value:'physics', label:'Physics'},
    {value:'biology', label:'Biology'}, 
    {value:'ict', label:'ICT'},
    {value:'french', label:'French'},
    {value:'music', label:'Music'},
    {value:'geography', label:'Geography'},
]

const generalArt = [
  {value:'geography', label:'Geography'},
  {value:'government', label:'Government'},
  {value:'economics', label:'Economics'},
  {value:'literature', label:'Literature'},
  {value:'islamic studies', label:'Islamic Studies'},
  {value:'traditional', label:'Traditional Religion'},
  {value:'history', label:'History'},
  {value:'e.Math', label:'E.Maths'},
  {value:'gka', label:'GKA'},
  {value:'crs', label:'CRS'},
  {value:'ict', label:'ICT'},
  {value:'french', label:'French'},
  {value:'akuapem twi', label:'Akuapem Twi'},
  {value:'asante twi', label:'Asante Twi'},
  {value:'nzema', label:'Nzema'},
  {value:'kasem', label:'Kasem'},
  {value:'gonja', label:'Gonja'},
  {value:'ga', label:'Ga'},
  {value:'ewe', label:'Ewe'},  
  {value:'damgme', label:'Dangme'},  
  {value:'dagbani', label:'Dagbani'},  
  {value:'dagaare', label:'Dagaare'},  
  {value:'arabic', label:'Arabic'},
  
]

const visualArt = [
  {value:'gka', label:'GKA'},
  {value:'graphic design', label:'Graphic Design'},
  {value:'picture making', label:'Picture Making'},
  {value:'basketry', label:'Basketry'},
  {value:'ceramics', label:'Ceramics'},
  {value:'jewellery', label:'Jewellery'},
  {value:'leatherwork', label:'Leatherwork'},
  {value:'sculpture', label:'Sculpture'},
  {value:'textiles', label:'Textiles'},
  {value:'chemistry', label:'Chemistry'},
  {value:'e.maths', label:'E.Maths'},
  {value:'physics', label:'Physics'},
  {value:'biology', label:'Biology'},
  {value:'ict', label:'ICT'},
  {value:'french', label:'French'},
  {value:'music', label:'Music'},
  {value:'economics', label:'Economics'},
  {value:'literature', label:'Literature'},
 
]

const agricScience = [
  {value:'general agric', label:'General Agric'},
  {value:'aniamal husbandry', label:'Animal Husbandry'},
  {value:'crop and horticulture', label:'Crop and Horticulture'},
  {value:'fisheries', label:'Fisheries'},
  {value:'forestry', label:'Forestry'},
  {value:'chemistry', label:'Chemistry'},
  {value:'e.maths', label:'E.Maths'},
  {value:'physics', label:'Physics'},
  {value:'biology', label:'Biology'},
  {value:'ict', label:'ICT'},
  {value:'french', label:'French'},
  {value:'music', label:'Music'},
  {value:'geography', label:'Geography'},
]

const technical = [
  {value:'chemistry', label:'Chemistry'},
  {value:'e.maths', label:'E.Maths'},
  {value:'physics', label:'Physics'},
  {value:'electricity', label:'Electricity'},
  {value:'electronics', label:'Electronics'},
  {value:'auto mechanics', label:'Auto Mechancis'},
  {value:'building construction', label:'Building Construction'},
  {value:'metalwork', label:'Metalwork'},
  {value:'woodwork', label:'Woodwork'},
  {value:'French', label:'French'},
  {value:'ict', label:'ICT'},
]

const business = [
  {value:'business management', label:'Business Management'},
  {value:'financial accounting', label:'Financial Accounting'},
  {value:'cost accounting', label:'Cost Accounting'},
  {value:'typewriting', label:'Typewriting'},
  {value:'clerical office duties', label:'Clerical Office Duties'},
  {value:'french', label:'French'},
  {value:'music', label:'Music'},
  {value:'economics', label:'Economics'},
  {value:'e.maths', label:'E.Maths'},
  {value:'ict', label:'ICT'},
  {value:'literature', label:'Literature'},
]

const homeEcons = [
  {value:'management-in-living', label:'Management-In-Living'},
  {value:'clothing and textiles', label:'Clothing and Textiles'},
  {value:'food and nutrition', label:'Food and Nutrition'},
  {value:'gka', label:'GKA'},
  {value:'french', label:'French'},
  {value:'music', label:'Music'},
  {value:'economics', label:'Economics'},
  {value:'chemistry', label:'Chemistry'},
  {value:'e.maths', label:'E.Maths'},
  {value:'physics', label:'Physics'},
  {value:'biology', label:'Biology'},
  {value:'ict', label:'ICT'},
 
]

function Page2() {
    const { selectedItems, setSelectedItems, selectedOption } = useContext(ChooseContext)
    // const [selected, setSelected]=useState([])
    const [error, setError] = useState(null);
    console.log(selectedItems)
 
     const val =[selectedItems.map((all)=>(`${all.value}`))]
    
    console.log(val[0][0])
 
    const navigate = useNavigate();
 
    const handleChange = (selected) => {
     if (selected.length > 4) {
       setError('You cannot select more than 4 items.');
       return;
     } else if (selected.length < 4) {
       setError('You must select exactly 4 items.');
       return;
     } else {
       setError(''); // clear error if exactly 4 items are selected
     }
 
     setSelectedItems(selected);
   };
 
   const handleSubmit = () => {
     
   
   
     if (!error && val[0].length == 4) {
       navigate('/event3');
         // Process the inputs as needed
     } else{
        setError("your input must be exactly four electives")
     }
   };
 
    
     const handleClickB = () => {
       navigate('/test3');
     }
     const handleClickC = () => {
       navigate('/event1');
     }
  return (
    <Box bgcolor="white" flex={6} p={1} sx={{display:{xs:"block",sm:"block"},width:{sm:'100%',xs:'100%',md:"45%"}}}>
    
    
    <Card   sx={{height:"88vh",marginBottom:1,margin:0,borderRadius:5}}> 
    <div><p>SELECT YOUR ELECTIVE SUBJECTS YOU TOOK IN WASSCE</p></div>
    <div>
      <Select
        defaultValue={selectedItems}
        onChange={handleChange}
        options={selectedOption == "Business"?(business):selectedOption =="Visual Arts"?(visualArt):selectedOption =="Agric Science"?(agricScience):selectedOption =="Technical Programme"?
      (technical):selectedOption =="General Arts"?(generalArt):selectedOption =="General Science"?(science):selectedOption =="Home Economics"?(homeEcons):""}
        isMulti
      />
       {error && <p style={{ color: 'red' }}>{error}</p>}
    </div> 
  
    {val[0].length ==4?( <><p>You have selected</p>
    <ul>
        <li>{val[0][0] && val[0][0]}</li>
       <li> {val[0][1] && val[0][1]}</li>
       <li> {val[0][2] && val[0][2]}</li>
       <li> {val[0][3] && val[0][3]}</li>
    </ul>
            </> ):(<h2>SELEC THE FOUR ELECTIVE SUBJECTS YOU STUDIED AT SHS/SHTS/VOCATIONAL </h2>)}
   
    <Box sx={{marginTop:"30%"}}>
        <Stack direction="row" spacing={12} sx={{justifyContent:"space-around"}}>
           
    <Button onClick={handleClickC} variant="outlined" component="label" sx={{width:{xs:"30%",sm:"25%",md:"25%"},marginBottom:3,alignItems:"center",textAlign:"center",justifyContent:"center",borderRadius:20,marginLeft:'60%',display:"block"}}>GO BACK</Button>
    
    <Button onClick={handleSubmit} variant="outlined" component="label" sx={{width:{xs:"30%",sm:"25%",md:"25%"},marginBottom:3,alignItems:"center",textAlign:"center",justifyContent:"center",borderRadius:20,marginLeft:'60%',display:"block"}}>CONTINUE</Button>
        </Stack>
    </Box>
    </Card>
    </Box>
  )
}

export default Page2