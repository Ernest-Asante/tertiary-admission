import React, { useState, useContext,useEffect} from 'react'
import { ChooseContext } from '../../ALL/Context1';


function ActurialScience() {
    
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
      
        
  const ATS = {
      name: 'Bsc. Acturial Science',
      grade: 11,
      req:["emath"],
      main:{
       emath:'emath'
      },
      university: "KNUST",
      scores:
      {
        emath: 6,
      },
  }

  let name = ATS.name;
  let college = ATS.university;
  let elective = electives;


 


if (val[0][0] === "emath" || val[0][1] === "emath"  || val[0][2] === "emath"  || val[0][3] === "emath") {
   console.log('Electives req included');
   elective = true;

} else {
   console.log('Your electives must include elective maths');
   elective = false;
   if (!knust_failed.some(item => item.name === name)) {
      knust_failed.push({ name, college, reason:"This programme requires you  to have studied elective maths" });
  }
  }
  

  console.log(elective)

if (elective == true){

  let emath = 0;
  if(val[0][0] === ATS.main.emath){
    emath = oneGrade.substring(1)
  } else if(val[0][1] === ATS.main.emath){
    emath = twoGrade.substring(1)
  } else if(val[0][2] === ATS.main.emath){
     emath = threeGrade.substring(1)
  } else {
     emath = fourGrade.substring(1)
  };

  console.log(emath)


  let mainState = true;

  
  if (emath > ATS.scores.emath) {
    mainState = false;
    console.log(`Sorry, your elective maths grade is ${emath}. This is not accepted for university entry`)
    if (!knust_failed.some(item => item.name === name)) {
      knust_failed.push({ name, college, reason:`Sorry, your elective maths grade is ${emath}. You need C6 or better ` });
  }
  mainState = false;
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
    if(val[0][0] !==  ATS.main.emath){
        array.push(oneGrade.substring(1))
     } 
      if(val[0][1] !== ATS.main.emath){
        array.push( twoGrade.substring(1))
     }
      if(val[0][2] !== ATS.main.emath){
        array.push( threeGrade.substring(1))
     }
      if(val[0][3] !== ATS.main.emath){
        array.push(fourGrade.substring(1))
     };
   
  }
  console.log(array)
  
  let sortedArr = array.slice().sort((a,b)=>a-b);
  let bestGradeOne = sortedArr[0]
  let bestGradeTwo = sortedArr[1]
  console.log(sortedArr)
  
  
   let myGrade = Number(emath)+Number(bestGradeOne)+Number(bestGradeTwo)+ Number(mathsGrade.substring(1)) + Number(englishGrade.substring(1)) + Number(scienceGrade.substring(1))
   console.log(myGrade)

   if(myGrade > ATS.grade){
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

export default ActurialScience
