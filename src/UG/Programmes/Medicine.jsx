import React, { useState, useContext,useEffect} from 'react'
import { ChooseContext } from '../../ALL/Context1';


function Medicine() {
    
    let accepted = false;
    const{ 
        pass,
        setPass,
        ug_passed,
        ug_failed,
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
      
        
  const MED = {
      name: 'Bachelor of Medicine and Bachelor of Surgery',
      grade: 7,
      req:["chemistry"],
      main:{
       chemistry:'chemistry'
      },
      university: "UG_LEGON",
      electives: ["emath", "physics", "chemistry","biology"],
      scores:
      {
        physics: 6,
        chemistry: 6,
        emath: 6,
        biology:6,
      },
  }

  let name = MED.name;
  let college = MED.university;
  let elective = electives;


  if (val[0][0] === "chemistry" || val[0][1] === "chemistry"  || val[0][2] === "chemistry"  || val[0][3] === "chemistry") {
    console.log('Electives req included');
    elective = true;
 
 } else {
    console.log('Your electives must include chemistry');
    elective = false;
    if (!ug_failed.some(item => item.name === name)) {
       ug_failed.push({ name, college, reason:"This programme requires you  to have studied chemistry" });
   }
   }
   
 
   console.log(elective)
 
 if (elective == true){
 
   let chemistry;
   if(val[0][0] === MED.main.chemistry){
     chemistry = oneGrade.substring(1)
   } else if(val[0][1] === MED.main.chemistry){
     chemistry = twoGrade.substring(1)
   } else if(val[0][2] === MED.main.chemistry){
      chemistry = threeGrade.substring(1)
   } else  if(val[0][3] === MED.main.chemistry){
      chemistry = fourGrade.substring(1)
   };
 
   console.log(chemistry)
 
 
   
   if (chemistry > MED.scores.chemistry) {
     elective = false;
     console.log(`Sorry, your chemistry grade is ${chemistry}. This is not accepted for university entry`)
     if (!ug_failed.some(item => item.name === name)) {
       ug_failed.push({ name, college, reason:`Sorry, your chemistry grade is ${chemistry}. You need C6 or better ` });
   }
   elective = false;
   } else {
     elective = true;
     console.log('gualified main... continue')
  }
 

 if (MED.electives.includes(val[0][0]) && MED.electives.includes(val[0][1]) && MED.electives.includes(val[0][2])) {
   console.log('Your electives are not in line with this programme ');
   elective = true;
} else if (MED.electives.includes(val[0][0]) && MED.electives.includes(val[0][1]) && MED.electives.includes(val[0][3])) {
   console.log('Your electives are  in line with this programme ');
   elective = true;
} else if (MED.electives.includes(val[0][0]) && MED.electives.includes(val[0][2]) && MED.electives.includes(val[0][3])) {
   console.log('Your electives are  in line with this programme ');
   elective = true;
} else if (MED.electives.includes(val[0][1]) && MED.electives.includes(val[0][2]) && MED.electives.includes(val[0][3])) {
   console.log('Your electives are  in line with this programme ');
   elective = true;
} else {
   console.log('Your electives are not in line with this programme ');
   elective = false;
   if (!ug_failed.some(item => item.name === name)) {
      ug_failed.push({ name, college, reason:"Your electives are not in line with this programme. You will need physics, elective maths and chemistry or biology" });
  }
}




  console.log(elective)

 


  let mainState = true;

  
 

 if(mainState == true){
 if (oneGrade.substring(1) > 6 && twoGrade.substring(1) > 6) {
    mainState = false
    if (!ug_failed.some(item => item.name === name)) {
      ug_failed.push({ name, college, reason:`Sorry, you had ${oneGrade} in ${val[0][0]} and ${twoGrade} in ${val[0][1]}  You need C6 or better ` });
  }
  } else if (oneGrade.substring(1) > 6 && threeGrade.substring(1) > 6) {
    mainState = false
    if (!ug_failed.some(item => item.name === name)) {
      ug_failed.push({ name, college, reason:`Sorry, you had ${oneGrade} in ${val[0][0]} and ${threeGrade} in ${val[0][2]}  You need C6 or better ` });
  }
 } else if(oneGrade.substring(1) > 6 && fourGrade.substring(1) > 6){
    mainState = false
    if (!ug_failed.some(item => item.name === name)) {
      ug_failed.push({ name, college, reason:`Sorry, you had ${oneGrade} in ${val[0][0]} and ${fourGrade} in ${val[0][3]}  You need C6 or better ` });
  }
 } else if(twoGrade.substring(1) > 6 && threeGrade.substring(1) > 6){
    mainState = false
    if (!ug_failed.some(item => item.name === name)) {
      ug_failed.push({ name, college, reason:`Sorry, you had ${twoGrade} in ${val[0][1]} and ${threeGrade} in ${val[0][2]}  You need C6 or better ` });
  }
 } else if(twoGrade.substring(1) > 6 && fourGrade.substring(1) > 6){
    mainState = false
    if (!ug_failed.some(item => item.name === name)) {
      ug_failed.push({ name, college, reason:`Sorry, you had ${twoGrade} in ${val[0][1]} and ${fourGrade} in ${val[0][3]}  You need C6 or better ` });
  }
 } else if(threeGrade.substring(1) > 6 && fourGrade.substring(1) > 6){
    mainState = false
    if (!ug_failed.some(item => item.name === name)) {
      ug_failed.push({ name, college, reason:`Sorry, you had ${threeGrade} in ${val[0][2]} and ${fourGrade} in ${val[0][3]}  You need C6 or better ` });
  }
 }
 }

 let array = []
 if(mainState == true){
  
    let biology = 10;
    if(val[0][0] == "biology"){
       biology = oneGrade.substring(1)
      array.push(Number(biology))
    } else if(val[0][1] == "biology"){
       biology = twoGrade.substring(1)
       array.push(Number(biology))
    } else if(val[0][2] == "biology"){
       biology = threeGrade.substring(1)
       array.push(Number(biology))
    } else if(val[0][3] == "biology"){
       biology = fourGrade.substring(1)
       array.push(Number(biology))
    };
  
    console.log(biology)


 

    let emath =10;
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
 
  
  console.log(array)

  let sortedArr = array.slice().sort((a,b)=>a-b);
  let bestGradeOne = sortedArr[0]
  let bestGradeTwo = sortedArr[1]
  console.log(sortedArr)
  
  
   let myGrade = Number(chemistry)+Number(bestGradeOne)+Number(bestGradeTwo)+ Number(mathsGrade.substring(1)) + Number(englishGrade.substring(1)) + Number(scienceGrade.substring(1))
   console.log(myGrade)
  
   

   if(myGrade > MED.grade){
    console.log("Your grade is bad")
    if (!ug_failed.some(item => item.name === name)) {
      ug_failed.push({ name, college, reason:`Sorry, your aggregate is ${myGrade}. You need aggregate 7 or better ` });
  }
  }else{
 
   if (!ug_passed.some(item => item.name === name)) {
      ug_passed.push({ name, college });
  }
  
   
    console.log('You have been accepted')
    console.log(ug_passed)
    console.log(ug_passed.length)
    accepted = true
 }


}
 }
 


  return (
    <></>
  )
}

export default Medicine
