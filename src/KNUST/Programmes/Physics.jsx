import React, { useState, useContext,useEffect} from 'react'
import { ChooseContext } from '../../ALL/Context1';


function Physics() {
    
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
      
        
  const PHY = {
      name: 'Bsc. Physics',
      grade: 17,
      req:["physics","emath"],
      main:{
       physics:'physics',
       emath:'emath'
      },
      university: "KNUST",
      electives: ["emath", "physics", "chemistry","electronics"],
      scores:
      {
        physics: 6,
        chemistry: 6,
        emath: 6,
        electronics:6,
      },
  }

  let name = PHY.name;
  let college = PHY.university;
  let elective = electives;


 if (PHY.electives.includes(val[0][0]) && PHY.electives.includes(val[0][1]) && PHY.electives.includes(val[0][2])) {
   console.log('Your electives are not in line with this programme ');
   elective = true;
} else if (PHY.electives.includes(val[0][0]) && PHY.electives.includes(val[0][1]) && PHY.electives.includes(val[0][3])) {
   console.log('Your electives are  in line with this programme ');
   elective = true;
} else if (PHY.electives.includes(val[0][0]) && PHY.electives.includes(val[0][2]) && PHY.electives.includes(val[0][3])) {
   console.log('Your electives are  in line with this programme ');
   elective = true;
} else if (PHY.electives.includes(val[0][1]) && PHY.electives.includes(val[0][2]) && PHY.electives.includes(val[0][3])) {
   console.log('Your electives are  in line with this programme ');
   elective = true;
} else {
   console.log('Your electives are not in line with this programme ');
   elective = false;
   if (!knust_failed.some(item => item.name === name)) {
      knust_failed.push({ name, college, reason:"Your electives are not in line with this programme. You will need physics, lective maths and chemistry or electronics" });
  }
}




 if (elective == true){


if (PHY.req.includes(val[0][0]) && PHY.req.includes(val[0][1])) {
   console.log('Electives req included');
   elective = true;
} else if (PHY.req.includes(val[0][0]) && PHY.req.includes(val[0][2])) {
   console.log('Electives req included');
   elective = true;
} else if (PHY.req.includes(val[0][0]) && PHY.req.includes(val[0][3])) {
   console.log('Electives req included');
   elective = true;
} else if (PHY.req.includes(val[0][1]) && PHY.req.includes(val[0][2])) {
   console.log('Electives req included');
   elective = true;
} else if (PHY.req.includes(val[0][1]) && PHY.req.includes(val[0][3])) {
   console.log('Electives req included');
   elective = true;
} else if (PHY.req.includes(val[0][2]) && PHY.req.includes(val[0][3])) {
   console.log('Electives req included');
   elective = true;
} else {
   console.log('Your electives are not in line with this programme');
   elective = false;
   if (!knust_failed.some(item => item.name === name)) {
      knust_failed.push({ name, college, reason:"Your electives are not in line with this programme. You must have both physics and elective maths" });
  }
  }
  




 }

  console.log(elective)

  if (elective == true){
  let physics = 0;
  if(val[0][0] == PHY.main.physics){
     physics = oneGrade.substring(1)
    
  } else if(val[0][1] == PHY.main.physics){
     physics = twoGrade.substring(1)
  } else if(val[0][2] == PHY.main.physics){
     physics = threeGrade.substring(1)
  } else {
     physics = fourGrade.substring(1)
  };

  console.log(physics)

  let emath = 0;
  if(val[0][0] == PHY.main.emath){
     emath = oneGrade.substring(1)
    
  } else if(val[0][1] == PHY.main.emath){
     emath = twoGrade.substring(1)
  } else if(val[0][2] == PHY.main.emath){
     emath = threeGrade.substring(1)
  } else {
     emath = fourGrade.substring(1)
  };

  console.log(emath)


  let mainState = true;

  
  if (physics > PHY.scores.physics) {
    mainState = false;
    console.log(`Sorry, your physics grade is ${physics}. This is not accepted for university entry`)
    if (!knust_failed.some(item => item.name === name)) {
      knust_failed.push({ name, college, reason:`Sorry, your physics grade is ${physics}. You need C6 or better ` });
  }
  } else if(emath > PHY.scores.emath) {
    mainState = false;
    console.log(`Sorry, your math grade is ${emath}. This is not accepted for university entry`)
    if (!knust_failed.some(item => item.name === name)) {
      knust_failed.push({ name, college, reason:`Sorry, your elective maths grade is ${emath}. You need C6 or better ` });
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


 

    let electronics =10;
    if(val[0][0] == "electronics"){
      electronics = oneGrade.substring(1)
       
      array.push(Number(electronics))
     
    } else if(val[0][1] == "electronics"){
      electronics = twoGrade.substring(1)
       array.push(Number(electronics))
    } else if(val[0][2] == "electronics"){
      electronics = threeGrade.substring(1)
       array.push(Number(electronics))
    } else if(val[0][3] == "electronics"){
      electronics = fourGrade.substring(1)
       array.push(Number(electronics))
    };
  
    console.log(electronics)
 
  
 
  }
  console.log(array)
  
   const otherGrade = Math.min(...array)
  
   let myGrade = Number(emath)+Number(physics)+ otherGrade+ Number(mathsGrade.substring(1)) + Number(englishGrade.substring(1)) + Number(scienceGrade.substring(1))
   console.log(myGrade)

   if(myGrade > PHY.grade){
    console.log("Your grade is bad")
    if (!knust_failed.some(item => item.name === name)) {
      knust_failed.push({ name, college, reason:`Sorry, your aggregate is ${myGrade}. You need aggregate 17 or better ` });
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

export default Physics