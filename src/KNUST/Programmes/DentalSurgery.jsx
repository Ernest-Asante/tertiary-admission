import React, { useState, useContext,useEffect} from 'react'
import { ChooseContext } from '../../ALL/Context1';


function DentalSurgery() {
    
    let accepted = false;
    const{ 
        pass,
        setPass,
        knust_passed,
        knust_failed,
        setPassed,
        englishGrade,
        mathsGrade,
        scienceGrade,
        oneGrade,
        twoGrade,
        threeGrade,
        fourGrade, 
        val} = useContext(ChooseContext)

        const [one, setOne] = useState(true)
        const [two, setTwo] = useState(true)
        const [three, setThree] = useState(true);
        const [four, setFour] = useState(true);
       
        const [electives, setElectives] = useState(true);
      
        const [grade, setGrade] = useState(0);
      
        
  const DTS = {
      name: 'Bachelor of Dental Surgery',
      grade: 6,
      req:["biology","chemistry"],
      main:{
       biology:'biology',
       chemistry:'chemistry'
      },
      university: "KNUST",
      electives: ["emath", "physics", "chemistry","biology"],
      scores:
      {
        physics: 6,
        chemistry: 6,
        emath: 6,
        biology:6,
      },
  }

  let name =DTS.name;
  let college =DTS.university;
  let elective = electives;


 if (DTS.electives.includes(val[0][0]) && DTS.electives.includes(val[0][1]) &&DTS.electives.includes(val[0][2])) {
   console.log('Your electives are not in line with this programme ');
   elective = true;
} else if (DTS.electives.includes(val[0][0]) && DTS.electives.includes(val[0][1]) &&DTS.electives.includes(val[0][3])) {
   console.log('Your electives are  in line with this programme ');
   elective = true;
} else if (DTS.electives.includes(val[0][0]) && DTS.electives.includes(val[0][2]) &&DTS.electives.includes(val[0][3])) {
   console.log('Your electives are  in line with this programme ');
   elective = true;
} else if (DTS.electives.includes(val[0][1]) &&DTS.electives.includes(val[0][2]) &&DTS.electives.includes(val[0][3])) {
   console.log('Your electives are  in line with this programme ');
   elective = true;
} else {
   console.log('Your electives are not in line with this programme ');
   elective = false;
   if (!knust_failed.some(item => item.name === name)) {
      knust_failed.push({ name, college, reason:"Your electives are not in line with this programme. You will need physics, elective maths and chemistry or biology" });
  }
}




 if (elective == true){


if (DTS.req.includes(val[0][0]) &&DTS.req.includes(val[0][1])) {
   console.log('Electives req included');
   elective = true;
} else if (DTS.req.includes(val[0][0]) &&DTS.req.includes(val[0][2])) {
   console.log('Electives req included');
   elective = true;
} else if (DTS.req.includes(val[0][0]) &&DTS.req.includes(val[0][3])) {
   console.log('Electives req included');
   elective = true;
} else if (DTS.req.includes(val[0][1]) &&DTS.req.includes(val[0][2])) {
   console.log('Electives req included');
   elective = true;
} else if (DTS.req.includes(val[0][1]) &&DTS.req.includes(val[0][3])) {
   console.log('Electives req included');
   elective = true;
} else if (DTS.req.includes(val[0][2]) &&DTS.req.includes(val[0][3])) {
   console.log('Electives req included');
   elective = true;
} else {
   console.log('Your electives are not in line with this programme');
   elective = false;
   if (!knust_failed.some(item => item.name === name)) {
      knust_failed.push({ name, college, reason:"Your electives are not in line with this programme. You must have both biology and chemistry" });
  }
  }
  




 }

  console.log(elective)

  if (elective == true){
  let biology = 0;
  if(val[0][0] ==DTS.main.biology){
     biology = oneGrade.substring(1)
    
  } else if(val[0][1] ==DTS.main.biology){
     biology = twoGrade.substring(1)
  } else if(val[0][2] ==DTS.main.biology){
     biology = threeGrade.substring(1)
  } else {
     biology = fourGrade.substring(1)
  };

  console.log(biology)

  let chemistry = 0;
  if(val[0][0] ==DTS.main.chemistry){
     chemistry = oneGrade.substring(1)
    
  } else if(val[0][1] ==DTS.main.chemistry){
    chemistry = twoGrade.substring(1)
  } else if(val[0][2] ==DTS.main.chemistry){
    chemistry = threeGrade.substring(1)
  } else {
    chemistry = fourGrade.substring(1)
  };

  console.log(chemistry)


  let mainState = true;

  
  if (biology >DTS.scores.biology) {
    mainState = false;
    console.log(`Sorry, your biology grade is ${biology}. This is not accepted for university entry`)
    if (!knust_failed.some(item => item.name === name)) {
      knust_failed.push({ name, college, reason:`Sorry, your biology grade is ${biology}. You need C6 or better ` });
  }
  } else if(chemistry >DTS.scores.chemistry) {
    mainState = false;
    console.log(`Sorry, your chemistry grade is ${chemistry}. This is not accepted for university entry`)
    if (!knust_failed.some(item => item.name === name)) {
      knust_failed.push({ name, college, reason:`Sorry, your chemistry grade is ${chemistry}. You need C6 or better ` });
  }
 } else {
    mainState = true;
    console.log('gualified main... continue')
 }

 if(mainState == true){
 if (oneGrade.substring(1) > 6 && twoGrade.substring(1) > 6) {
    mainState = false
    if (!knust_failed.some(item => item.name === name)) {
      knust_failed.push({ name, college, reason:`Sorry, you had ${oneGrade} in ${val[0][0]} and ${twoGrade} in ${val[0][1]}  You need C6 or better ` });
  }
  } else if (oneGrade.substring(1) > 6 && threeGrade.substring(1) > 6) {
    mainState = false
    if (!knust_failed.some(item => item.name === name)) {
      knust_failed.push({ name, college, reason:`Sorry, you had ${oneGrade} in ${val[0][0]} and ${threeGrade} in ${val[0][2]}  You need C6 or better ` });
  }
 } else if(oneGrade.substring(1) > 6 && fourGrade.substring(1) > 6){
    mainState = false
    if (!knust_failed.some(item => item.name === name)) {
      knust_failed.push({ name, college, reason:`Sorry, you had ${oneGrade} in ${val[0][0]} and ${fourGrade} in ${val[0][3]}  You need C6 or better ` });
  }
 } else if(twoGrade.substring(1) > 6 && threeGrade.substring(1) > 6){
    mainState = false
    if (!knust_failed.some(item => item.name === name)) {
      knust_failed.push({ name, college, reason:`Sorry, you had ${twoGrade} in ${val[0][1]} and ${threeGrade} in ${val[0][2]}  You need C6 or better ` });
  }
 } else if(twoGrade.substring(1) > 6 && fourGrade.substring(1) > 6){
    mainState = false
    if (!knust_failed.some(item => item.name === name)) {
      knust_failed.push({ name, college, reason:`Sorry, you had ${twoGrade} in ${val[0][1]} and ${fourGrade} in ${val[0][3]}  You need C6 or better ` });
  }
 } else if(threeGrade.substring(1) > 6 && fourGrade.substring(1) > 6){
    mainState = false
    if (!knust_failed.some(item => item.name === name)) {
      knust_failed.push({ name, college, reason:`Sorry, you had ${threeGrade} in ${val[0][2]} and ${fourGrade} in ${val[0][3]}  You need C6 or better ` });
  }
 }
 }

 let array = []
 if(mainState == true){
  
    let emath = 10;
    if(val[0][0] == "emath"){
       emath = oneGrade.substring(1)
      array.push(Number(emath))
    } else if(val[0][1] == "emath"){
       emath = twoGrade.substring(1)
       array.push(Number(emath))
    } else if(val[0][2] == "emath"){
       emath = threeGrade.substring(1)
       array.push(Number(emath))
    } else if(val[0][3] == "emath"){
       emath = fourGrade.substring(1)
       array.push(Number(emath))
    };
  
    console.log(emath)


 

    let physics  = 10;
    if(val[0][0] == "physics "){
        physics  = oneGrade.substring(1)
       
      array.push(Number(physics ))
     
    } else if(val[0][1] == "physics "){
        physics  = twoGrade.substring(1)
       array.push(Number(physics ))
    } else if(val[0][2] == "physics"){
        physics  = threeGrade.substring(1)
       array.push(Number(physics ))
    } else if(val[0][3] == "physics"){
        physics  = fourGrade.substring(1)
       array.push(Number(physics ))
    };
  
    console.log(physics)
 
  
 
  }
  console.log(array)
  
   const otherGrade = Math.min(...array)
  
   let myGrade = Number(chemistry)+Number(biology)+ otherGrade+ Number(mathsGrade.substring(1)) + Number(englishGrade.substring(1)) + Number(scienceGrade.substring(1))
   console.log(myGrade)

   if(myGrade >DTS.grade){
    console.log("Your grade is bad")
    if (!knust_failed.some(item => item.name === name)) {
      knust_failed.push({ name, college, reason:`Sorry, your aggregate is ${myGrade}. You need aggregate 6 or better ` });
  }
  }else{
 
   if (!knust_passed.some(item => item.name === name)) {
      knust_passed.push({ name, college });
  }
  
   
    console.log('You have been accepted')
    console.log(knust_passed)
    console.log(knust_passed.length)
    accepted = true
 }


}



  return (
    <></>
  )
}

export default DentalSurgery