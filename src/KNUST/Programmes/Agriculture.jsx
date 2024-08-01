import React, { useState, useContext,useEffect} from 'react'
import { ChooseContext } from '../../ALL/Context1';


function Agriculture() {
    
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

        
       
        const [electives, setElectives] = useState(true);
      
        const [grade, setGrade] = useState(0);
      
        
  const AGR = {
      name: 'Bsc. Agriculture',
      grade: 24,
      req:["chemistry"],
      main:{
       chemistry:'chemistry',
      },
      university: "KNUST",
      electives: ["emath", "physics", "chemistry","biology","general agric","animal husbandry","crop and horticulture"],
      scores:
      {
        chemistry: 6,
        emath: 6,
        biology: 6,
        physics: 6,
        agric: 6,
        animal: 6,
        crop: 6,
      },
  }

  let name = AGR.name;
  let college = AGR.university;
  let elective = electives;


  if (AGR.electives.includes(val[0][0]) && AGR.electives.includes(val[0][1]) && AGR.electives.includes(val[0][2])) {
    console.log('Your electives are not in line with this programme ');
    elective = true;
 } else if (AGR.electives.includes(val[0][0]) && AGR.electives.includes(val[0][1]) && AGR.electives.includes(val[0][3])) {
    console.log('Your electives are  in line with this programme ');
    elective = true;
 } else if (AGR.electives.includes(val[0][0]) && AGR.electives.includes(val[0][2]) && AGR.electives.includes(val[0][3])) {
    console.log('Your electives are  in line with this programme ');
    elective = true;
 } else if (AGR.electives.includes(val[0][1]) && AGR.electives.includes(val[0][2]) && AGR.electives.includes(val[0][3])) {
    console.log('Your electives are  in line with this programme ');
    elective = true;
 } else {
    console.log('Your electives are not in line with this programme ');
    elective = false;
    if (!knust_failed.some(item => item.name === name)) {
       knust_failed.push({ name, college, reason:"Your electives are not in line with this programme. You will need  chemistry and physics, biology, elective math or general agriculture, animal husbandry, crop and horticulture" });
   }
 }


if (val[0][0] === "chemistry" || val[0][1] === "chemistry"  || val[0][2] === "chemistry"  || val[0][3] === "chemistry") {
   console.log('Electives req included');
   elective = true;

} else {
   console.log('Your electives must include chemistry');
   elective = false;
   if (!knust_failed.some(item => item.name === name)) {
      knust_failed.push({ name, college, reason:"This programme requires you  to have studied chemistry" });
  }
  }
  

  console.log(elective)

if (elective == true){

  let chemistry = 0;
  if(val[0][0] === AGR.main.chemistry){
    chemistry = oneGrade.substring(1)
  } else if(val[0][1] === AGR.main.chemistry){
    chemistry = twoGrade.substring(1)
  } else if(val[0][2] === AGR.main.chemistry){
     chemistry = threeGrade.substring(1)
  } else {
     chemistry = fourGrade.substring(1)
  };

  console.log(chemistry)


  let mainState = true;

  
  if (chemistry > AGR.scores.chemistry) {
    mainState = false;
    console.log(`Sorry, your elective chemistry grade is ${chemistry}. This is not accepted for university entry`)
    if (!knust_failed.some(item => item.name === name)) {
      knust_failed.push({ name, college, reason:`Sorry, your elective chemistry grade is ${chemistry}. You need C6 or better ` });
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
    if(val[0][0] ===  "emath"){
        array.push(oneGrade.substring(1))
     } 
      if(val[0][1] === "emath"){
        array.push( twoGrade.substring(1))
     }
      if(val[0][2] == "emath"){
        array.push( threeGrade.substring(1))
     }
      if(val[0][3] == "emath"){
        array.push(fourGrade.substring(1))
     };

        if(val[0][0] ===  "physics"){
            array.push(oneGrade.substring(1))
         } 
          if(val[0][1] === "physics"){
            array.push( twoGrade.substring(1))
         }
          if(val[0][2] == "physics"){
            array.push( threeGrade.substring(1))
         }
          if(val[0][3] == "physics"){
            array.push(fourGrade.substring(1))
         };

         if(val[0][0] ===  "biology"){
            array.push(oneGrade.substring(1))
         } 
          if(val[0][1] === "biology"){
            array.push( twoGrade.substring(1))
         }
          if(val[0][2] == "biology"){
            array.push( threeGrade.substring(1))
         }
          if(val[0][3] == "biology"){
            array.push(fourGrade.substring(1))
         };

         if(val[0][0] ===  "general agric"){
            array.push(oneGrade.substring(1))
         } 
          if(val[0][1] === "general agric"){
            array.push( twoGrade.substring(1))
         }
          if(val[0][2] == "general agric"){
            array.push( threeGrade.substring(1))
         }
          if(val[0][3] == "general agric"){
            array.push(fourGrade.substring(1))
         };

         if(val[0][0] ===  "animal husbandry"){
            array.push(oneGrade.substring(1))
         } 
          if(val[0][1] === "animal husbandry"){
            array.push( twoGrade.substring(1))
         }
          if(val[0][2] == "animal husbandry"){
            array.push( threeGrade.substring(1))
         }
          if(val[0][3] == "animal husbandry"){
            array.push(fourGrade.substring(1))
         };

         if(val[0][0] ===  "crop and horticulture"){
            array.push(oneGrade.substring(1))
         } 
          if(val[0][1] === "crop and horticulture"){
            array.push( twoGrade.substring(1))
         }
          if(val[0][2] == "crop and horticulture"){
            array.push( threeGrade.substring(1))
         }
          if(val[0][3] == "crop and horticulture"){
            array.push(fourGrade.substring(1))
         };
   
  }
  console.log(array)
  
  let sortedArr = array.slice().sort((a,b)=>a-b);
  let bestGradeOne = sortedArr[0]
  let bestGradeTwo = sortedArr[1]
  console.log(sortedArr)
  
  
   let myGrade = Number(chemistry)+Number(bestGradeOne)+Number(bestGradeTwo)+ Number(mathsGrade.substring(1)) + Number(englishGrade.substring(1)) + Number(scienceGrade.substring(1))
   console.log(myGrade)

   if(myGrade > AGR.grade){
    console.log("Your grade is bad")
    if (!knust_failed.some(item => item.name === name)) {
      knust_failed.push({ name, college, reason:`Sorry, your aggregate is ${myGrade}. You need aggregate 24 or better ` });
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

export default Agriculture
