import React, { useState, useContext,useEffect} from 'react'
import { ChooseContext } from '../../ALL/Context1';


function Respiratory_Therapy() {
    
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
      
        
  const BCH = {
      name: 'Bsc. Respiratory Therapy', 
      grade: 11,
      req:["physics","chemistry"],
      main:{
       physics:'physics',
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

  let name = BCH.name;
  let college = BCH.university;
  let elective = electives;


 if (BCH.electives.includes(val[0][0]) && BCH.electives.includes(val[0][1]) && BCH.electives.includes(val[0][2])) {
   console.log('Your electives are not in line with this programme ');
   elective = true;
} else if (BCH.electives.includes(val[0][0]) && BCH.electives.includes(val[0][1]) && BCH.electives.includes(val[0][3])) {
   console.log('Your electives are  in line with this programme ');
   elective = true;
} else if (BCH.electives.includes(val[0][0]) && BCH.electives.includes(val[0][2]) && BCH.electives.includes(val[0][3])) {
   console.log('Your electives are  in line with this programme ');
   elective = true;
} else if (BCH.electives.includes(val[0][1]) && BCH.electives.includes(val[0][2]) && BCH.electives.includes(val[0][3])) {
   console.log('Your electives are  in line with this programme ');
   elective = true;
} else {
   console.log('Your electives are not in line with this programme ');
   elective = false;
   if (!ug_failed.some(item => item.name === name)) {
      ug_failed.push({ name, college, reason:"Your electives are not in line with this programme. You will need physics, elective maths and chemistry or biology" });
  }
}




 if (elective == true){


if (BCH.req.includes(val[0][0]) && BCH.req.includes(val[0][1])) {
   console.log('Electives req included');
   elective = true;
} else if (BCH.req.includes(val[0][0]) && BCH.req.includes(val[0][2])) {
   console.log('Electives req included');
   elective = true;
} else if (BCH.req.includes(val[0][0]) && BCH.req.includes(val[0][3])) {
   console.log('Electives req included');
   elective = true;
} else if (BCH.req.includes(val[0][1]) && BCH.req.includes(val[0][2])) {
   console.log('Electives req included');
   elective = true;
} else if (BCH.req.includes(val[0][1]) && BCH.req.includes(val[0][3])) {
   console.log('Electives req included');
   elective = true;
} else if (BCH.req.includes(val[0][2]) && BCH.req.includes(val[0][3])) {
   console.log('Electives req included');
   elective = true;
} else {
   console.log('Your electives are not in line with this programme');
   elective = false;
   if (!ug_failed.some(item => item.name === name)) {
      ug_failed.push({ name, college, reason:"Your electives are not in line with this programme. You must have both biology and chemistry" });
  }
  }
  




 }

  console.log(elective)

  if (elective == true){
  let physics = 0;
  if(val[0][0] == BCH.main.physics){
     physics = oneGrade.substring(1)
    
  } else if(val[0][1] == BCH.main.physics){
     physics = twoGrade.substring(1)
  } else if(val[0][2] == BCH.main.physics){
     physics = threeGrade.substring(1)
  } else if(val[0][3] == BCH.main.physics){
     physics = fourGrade.substring(1)
  };

  console.log(physics)

  let chemistry = 0;
  if(val[0][0] == BCH.main.chemistry){
     chemistry = oneGrade.substring(1)
    
  } else if(val[0][1] == BCH.main.chemistry){
    chemistry = twoGrade.substring(1)
  } else if(val[0][2] == BCH.main.chemistry){
    chemistry = threeGrade.substring(1)
  } else {
    chemistry = fourGrade.substring(1)
  };

  console.log(chemistry)


  let mainState = true;

  
  if (physics > BCH.scores.physics) {
    mainState = false;
    console.log(`Sorry, your physics grade is ${physics}. This is not accepted for university entry`)
    if (!ug_failed.some(item => item.name === name)) {
      ug_failed.push({ name, college, reason:`Sorry, your physics grade is ${physics}. You need C6 or better ` });
  }
  } else if(chemistry > BCH.scores.chemistry) {
    mainState = false;
    console.log(`Sorry, your chemistry grade is ${chemistry}. This is not accepted for university entry`)
    if (!ug_failed.some(item => item.name === name)) {
      ug_failed.push({ name, college, reason:`Sorry, your chemistry grade is ${chemistry}. You need C6 or better ` });
  }
 } else {
    mainState = true;
    console.log('gualified main... continue')
 }

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


 

    let biology  = 10;
    if(val[0][0] == "biology "){
        biology  = oneGrade.substring(1)
       
      array.push(Number(biology))
     
    } else if(val[0][1] == "biology "){
        biology  = twoGrade.substring(1)
       array.push(Number(biology ))
    } else if(val[0][2] == "physics"){
        biology  = threeGrade.substring(1)
       array.push(Number(physics ))
    } else if(val[0][3] == "biology"){
        biology  = fourGrade.substring(1)
       array.push(Number(biology))
    };
  
    console.log(biology)
 
  
 
  }
  console.log(array)
  
   const otherGrade = Math.min(...array)
  
   let myGrade = Number(chemistry)+Number(physics)+ otherGrade+ Number(mathsGrade.substring(1)) + Number(englishGrade.substring(1)) + Number(scienceGrade.substring(1))
   console.log(myGrade)

   if(myGrade > BCH.grade){
    console.log("Your grade is bad")
    if (!ug_failed.some(item => item.name === name)) {
      ug_failed.push({ name, college, reason:`Sorry, your aggregate is ${myGrade}. You need aggregate 11 or better ` });
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



  return (
    <></>
  )
}

export default Respiratory_Therapy
