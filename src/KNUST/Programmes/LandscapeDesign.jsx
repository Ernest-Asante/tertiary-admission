import React, { useState, useContext,useEffect} from 'react'
import { ChooseContext } from '../../ALL/Context1';


function LandscapeDesign() {
    
    let accepted = false;
    const{ 
        pass,
        setPass,
        selectedOption,
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
      
        
  const LDT = {
      name: 'Bsc. Landscape Design and Management',
      grade: 18,
     
      university: "KNUST",
      electives: ["emath", "physics", "chemistry","general agric","crop and horticulture","biology","geography","economics","gka","technical drawing","picture making","painting","sculpture"],
     
  }

  let name = LDT.name;
  let college = LDT.university;
  let elective = electives;


 


if (selectedOption !== "Business" || selectedOption !== "Home Economics" ) {
   console.log('Electives req included');
   elective = true;

} else {
   console.log('Your electives must include elective maths');
   elective = false;
   if (!knust_failed.some(item => item.name === name)) {
      knust_failed.push({ name, college, reason:"This programme requires you to have studied a science related course or  art course" });
  }
}
  

  console.log(elective)

  
 if (LDT.electives.includes(val[0][0]) && LDT.electives.includes(val[0][1]) && LDT.electives.includes(val[0][2])) {
    console.log('Your electives are not in line with this programme ');
    elective = true;
 } else if (LDT.electives.includes(val[0][0]) && LDT.electives.includes(val[0][1]) && LDT.electives.includes(val[0][3])) {
    console.log('Your electives are  in line with this programme ');
    elective = true;
 } else if (LDT.electives.includes(val[0][0]) && LDT.electives.includes(val[0][2]) && LDT.electives.includes(val[0][3])) {
    console.log('Your electives are  in line with this programme ');
    elective = true;
 } else if (LDT.electives.includes(val[0][1]) && LDT.electives.includes(val[0][2]) && LDT.electives.includes(val[0][3])) {
    console.log('Your electives are  in line with this programme ');
    elective = true;
 } else {
    console.log('Your electives are not in line with this programme ');
    elective = false;
    if (!knust_failed.some(item => item.name === name)) {
       knust_failed.push({ name, college, reason:"Your electives are not in line with this programme. You will need three electives in art or science related courses" });
   }
 }

if (elective == true){
    let mainState= true;

 
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
 

 let array = [oneGrade,twoGrade,threeGrade,fourGrade]
 
  console.log(array)
  
  let sortedArr = array.slice().sort((a,b)=>a-b);
  let bestGradeOne = sortedArr[0]
  let bestGradeTwo = sortedArr[1]
  let bestGradeThree = sortedArr[2]
  console.log(sortedArr)
  
  
   let myGrade = Number(bestGradeOne)+Number(bestGradeTwo)+Number(bestGradeThree)+ Number(mathsGrade.substring(1)) + Number(englishGrade.substring(1)) + Number(scienceGrade.substring(1))
   console.log(myGrade)

   if(myGrade > LDT.grade){
    console.log("Your grade is bad")
    if (!knust_failed.some(item => item.name === name)) {
      knust_failed.push({ name, college, reason:`Sorry, your aggregate is ${myGrade}. You need aggregate 18 or better ` });
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

export default LandscapeDesign

