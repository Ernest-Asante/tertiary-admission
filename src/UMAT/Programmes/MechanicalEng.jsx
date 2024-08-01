import React, { useState, useContext,useEffect} from 'react'
import { ChooseContext } from '../../ALL/Context1';


function MechanicalEng() {
    
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
      
        
  const ELC = {
      name: 'Bsc. Mechanical Engineering',
      grade: 11,
      req:["emath","physics"],
      main:{
       emath:'emath',
       physics:'physics'
      },
      university: "UMAT",
      electives: ["emath", "physics", "chemistry","metalwork", "technical drawing"],
      scores:
      {
        physics: 6,
        chemistry: 6,
        emath: 6,
        technical_drawing:6,
      },
  }

  let name = ELC.name;
  let college = ELC.university;
  let elective = electives;


 if (ELC.electives.includes(val[0][0]) && ELC.electives.includes(val[0][1]) && ELC.electives.includes(val[0][2])) {
   console.log('Your electives are not in line with this programme ');
   elective = true;
} else if (ELC.electives.includes(val[0][0]) && ELC.electives.includes(val[0][1]) && ELC.electives.includes(val[0][3])) {
   console.log('Your electives are  in line with this programme ');
   elective = true;
} else if (ELC.electives.includes(val[0][0]) && ELC.electives.includes(val[0][2]) && ELC.electives.includes(val[0][3])) {
   console.log('Your electives are  in line with this programme ');
   elective = true;
} else if (ELC.electives.includes(val[0][1]) && ELC.electives.includes(val[0][2]) && ELC.electives.includes(val[0][3])) {
   console.log('Your electives are  in line with this programme ');
   elective = true;
} else {
   console.log('Your electives are not in line with this programme ');
   elective = false;
   if (!knust_failed.some(item => item.name === name)) {
      knust_failed.push({ name, college, reason:"Your electives are not in line with this programme. You will need physics, elective maths and physics or emath" });
  }
}




 if (elective == true){


if (ELC.req.includes(val[0][0]) && ELC.req.includes(val[0][1])) {
   console.log('Electives req included');
   elective = true;
} else if (ELC.req.includes(val[0][0]) && ELC.req.includes(val[0][2])) {
   console.log('Electives req included');
   elective = true;
} else if (ELC.req.includes(val[0][0]) && ELC.req.includes(val[0][3])) {
   console.log('Electives req included');
   elective = true;
} else if (ELC.req.includes(val[0][1]) && ELC.req.includes(val[0][2])) {
   console.log('Electives req included');
   elective = true;
} else if (ELC.req.includes(val[0][1]) && ELC.req.includes(val[0][3])) {
   console.log('Electives req included');
   elective = true;
} else if (ELC.req.includes(val[0][2]) && ELC.req.includes(val[0][3])) {
   console.log('Electives req included');
   elective = true;
} else {
   console.log('Your electives are not in line with this programme');
   elective = false;
   if (!knust_failed.some(item => item.name === name)) {
      knust_failed.push({ name, college, reason:"Your electives are not in line with this programme. You must have both emath and physics" });
  }
  }
  




 }

  console.log(elective)

  if (elective == true){
  let emath = 0;
  if(val[0][0] == ELC.main.emath){
     emath = oneGrade.substring(1)
    
  } else if(val[0][1] == ELC.main.emath){
     emath = twoGrade.substring(1)
  } else if(val[0][2] == ELC.main.emath){
     emath = threeGrade.substring(1)
  } else {
     emath = fourGrade.substring(1)
  };

  console.log(emath)

  let physics = 0;
  if(val[0][0] == ELC.main.physics){
     physics = oneGrade.substring(1)
    
  } else if(val[0][1] == ELC.main.physics){
    physics = twoGrade.substring(1)
  } else if(val[0][2] == ELC.main.physics){
    physics = threeGrade.substring(1)
  } else {
    physics = fourGrade.substring(1)
  };

  console.log(physics)


  let mainState = true;

  
  if (emath > ELC.scores.emath) {
    mainState = false;
    console.log(`Sorry, your emath grade is ${emath}. This is not accepted for university entry`)
    if (!knust_failed.some(item => item.name === name)) {
      knust_failed.push({ name, college, reason:`Sorry, your emath grade is ${emath}. You need C6 or better ` });
  }
  } else if(physics > ELC.scores.physics) {
    mainState = false;
    console.log(`Sorry, your physics grade is ${physics}. This is not accepted for university entry`)
    if (!knust_failed.some(item => item.name === name)) {
      knust_failed.push({ name, college, reason:`Sorry, your physics grade is ${physics}. You need C6 or better ` });
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
  
    let chemistry = 10;
    if(val[0][0] == "chemistry"){
       chemistry = oneGrade.substring(1)
      array.push(Number(chemistry))
    } else if(val[0][1] == "chemistry"){
       chemistry = twoGrade.substring(1)
       array.push(Number(chemistry))
    } else if(val[0][2] == "chemistry"){
       chemistry = threeGrade.substring(1)
       array.push(Number(chemistry))
    } else if(val[0][3] == "chemistry"){
       chemistry = fourGrade.substring(1)
       array.push(Number(chemistry))
    };
  
    console.log(chemistry)


 

    let metalwork  = 10;
    if(val[0][0] == "metalwork"){
        metalwork  = oneGrade.substring(1)
       
      array.push(Number(metalwork))
     
    } else if(val[0][1] == "metalwork"){
        metalwork  = twoGrade.substring(1)
       array.push(Number(metalwork))
    } else if(val[0][2] == "metalwork"){
        metalwork  = threeGrade.substring(1)
       array.push(Number(metalwork))
    } else if(val[0][3] == "metalwork"){
        metalwork  = fourGrade.substring(1)
       array.push(Number(metalwork))
    };
  
    console.log(metalwork)


    let technical_drawing  = 10;
    if(val[0][0] == "technical drawing"){
        technical_drawing  = oneGrade.substring(1)
       
      array.push(Number(technical_drawing))
     
    } else if(val[0][1] == "technical drawing"){
        technical_drawing  = twoGrade.substring(1)
       array.push(Number(technical_drawing))
    } else if(val[0][2] == "technical drawing"){
        technical_drawing  = threeGrade.substring(1)
       array.push(Number(technical_drawing))
    } else if(val[0][3] == "technical drawing"){
        technical_drawing  = fourGrade.substring(1)
       array.push(Number(technical_drawing))
    };
  
    console.log(technical_drawing)
 
  
 
  }
  console.log(array)
  
   const otherGrade = Math.min(...array)
  
   let myGrade = Number(physics)+Number(emath)+ otherGrade+ Number(mathsGrade.substring(1)) + Number(englishGrade.substring(1)) + Number(scienceGrade.substring(1))
   console.log(myGrade)

   if(myGrade > ELC.grade){
    console.log("Your grade is bad")
    if (!knust_failed.some(item => item.name === name)) {
      knust_failed.push({ name, college, reason:`Sorry, your aggregate is ${myGrade}. You need aggregate 11 or better ` });
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

export default MechanicalEng
