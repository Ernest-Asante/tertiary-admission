import React, { useState, useContext,useEffect} from 'react'
import { ChooseContext } from '../../ALL/Context1';


function AgriBusiness() {
    
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
      
        
  const AGB = {
      name: 'Bsc. agribusiness Management',
      grade: 15,
      university: "KNUST",
      Artelectives: ["emath", "geography","economics"],
      Scienceelectives: ["emath", "chemistry","biology","physics","general agric","crop and horticulture"],
      Businesselectives: ["emath", "business management","cost accounting", "financial accounting","economics"],
     
  }

  let name =AGB.name;
  let college =AGB.university;
  let elective = electives;

  if (selectedOption == "Visual Arts" || selectedOption == "Home Economics" ) {

    console.log('Your electives must include elective maths');
   
    if (!knust_failed.some(item => item.name === name)) {
       knust_failed.push({ name, college, reason:"This programme requires you to have studied a science related course,business or  art course" });
   }
   elective = false;
 
 } else {
   elective = true;
   console.log('Electives req included');
 }
   
 if (elective == true){
 
if(elective == true && selectedOption == "General Arts"){
 if (AGB.Artelectives.includes(val[0][0]) && AGB.Artelectives.includes(val[0][1]) && AGB.Artelectives.includes(val[0][2])) {
    console.log('Your electives are not in line with this programme ');
    elective = true;
 } else if (AGB.Artelectives.includes(val[0][0]) && AGB.Artelectives.includes(val[0][1]) && AGB.Artelectives.includes(val[0][3])) {
    console.log('Your electives are  in line with this programme ');
    elective = true;
 } else if (AGB.Artelectives.includes(val[0][0]) && AGB.Artelectives.includes(val[0][2]) && AGB.Artelectives.includes(val[0][3])) {
    console.log('Your electives are  in line with this programme ');
    elective = true;
 } else if (AGB.Artelectives.includes(val[0][1]) && AGB.Artelectives.includes(val[0][2]) && AGB.Artelectives.includes(val[0][3])) {
    console.log('Your electives are  in line with this programme ');
    elective = true;
 } else {
    console.log('Your electives are not in line with this programme ');
    elective = false;
    if (!knust_failed.some(item => item.name === name)) {
       knust_failed.push({ name, college, reason:"Your electives are not in line with this programme. You will need elective math, geography and economics" });
   }
 }
}

if(elective == true && selectedOption == "General Science"){
    if (AGB.Scienceelectives.includes(val[0][0]) && AGB.Scienceelectives.includes(val[0][1]) && AGB.Scienceelectives.includes(val[0][2])) {
       console.log('Your electives are not in line with this programme '); 
       elective = true;
    } else if (AGB.Scienceelectives.includes(val[0][0]) && AGB.Scienceelectives.includes(val[0][1]) && AGB.Scienceelectives.includes(val[0][3])) {
       console.log('Your electives are  in line with this programme ');
       elective = true;
    } else if (AGB.Scienceelectives.includes(val[0][0]) && AGB.Scienceelectives.includes(val[0][2]) && AGB.Scienceelectives.includes(val[0][3])) {
       console.log('Your electives are  in line with this programme ');
       elective = true;
    } else if (AGB.Scienceelectives.includes(val[0][1]) && AGB.Scienceelectives.includes(val[0][2]) && AGB.Scienceelectives.includes(val[0][3])) {
       console.log('Your electives are  in line with this programme ');
       elective = true;
    } else {
       console.log('Your electives are not in line with this programme ');
       elective = false;
       if (!knust_failed.some(item => item.name === name)) {
          knust_failed.push({ name, college, reason:"Your electives are not in line with this programme. You will need  chemistry and physics, biology, elective math " });
      }
    }
   }
    

   if(elective == true && selectedOption == "Agric Science"){
      if (AGB.Scienceelectives.includes(val[0][0]) && AGB.Scienceelectives.includes(val[0][1]) && AGB.Scienceelectives.includes(val[0][2])) {
         console.log('Your electives are not in line with this programme '); 
         elective = true;
      } else if (AGB.Scienceelectives.includes(val[0][0]) && AGB.Scienceelectives.includes(val[0][1]) && AGB.Scienceelectives.includes(val[0][3])) {
         console.log('Your electives are  in line with this programme ');
         elective = true;
      } else if (AGB.Scienceelectives.includes(val[0][0]) && AGB.Scienceelectives.includes(val[0][2]) && AGB.Scienceelectives.includes(val[0][3])) {
         console.log('Your electives are  in line with this programme ');
         elective = true;
      } else if (AGB.Scienceelectives.includes(val[0][1]) && AGB.Scienceelectives.includes(val[0][2]) && AGB.Scienceelectives.includes(val[0][3])) {
         console.log('Your electives are  in line with this programme ');
         elective = true;
      } else {
         console.log('Your electives are not in line with this programme ');
         elective = false;
         if (!knust_failed.some(item => item.name === name)) {
            knust_failed.push({ name, college, reason:"Your electives are not in line with this programme. You will need  chemistry " });
        }
      }
     }
 
   console.log(elective)

   if(elective == true && selectedOption == "Business"){
      if (AGB.Businesselectives.includes(val[0][0]) && AGB.Businesselectives.includes(val[0][1]) && AGB.Businesselectives.includes(val[0][2])) {
         console.log('Your electives are not in line with this programme '); 
         elective = true;
      } else if (AGB.Businesselectives.includes(val[0][0]) && AGB.Businesselectives.includes(val[0][1]) && AGB.Businesselectives.includes(val[0][3])) {
         console.log('Your electives are  in line with this programme ');
         elective = true;
      } else if (AGB.Businesselectives.includes(val[0][0]) && AGB.Businesselectives.includes(val[0][2]) && AGB.Businesselectives.includes(val[0][3])) {
         console.log('Your electives are  in line with this programme ');
         elective = true;
      } else if (AGB.Businesselectives.includes(val[0][1]) && AGB.Businesselectives.includes(val[0][2]) && AGB.Businesselectives.includes(val[0][3])) {
         console.log('Your electives are  in line with this programme ');
         elective = true;
      } else {
         console.log('Your electives are not in line with this programme ');
         elective = false;
         if (!knust_failed.some(item => item.name === name)) {
            knust_failed.push({ name, college, reason:"Your electives are not in line with this programme. You will need three of elective math, business management,cost accounting, financial accounting,economics" });
        }
      }
     }
      
   
     console.log(elective)

   if(elective == true){
if (selectedOption == "Business" || selectedOption == "General Arts") {
    if(scienceGrade.substring(1) > 3){
   console.log('Your integrated Science grade must be 3 or better');
   if (!knust_failed.some(item => item.name === name)) {
    knust_failed.push({ name, college, reason:"Your integrated Science grade must be 3 or better" });
}
   elective = false;

} else {
   console.log('qualified for integrated science');
   
   elective = true;
 
  }
}
if (selectedOption == "General Science" && val[0].includes(!"biology") ){
   if (!knust_failed.some(item => item.name === name)) {
      knust_failed.push({ name, college, reason:"Your electives must include biology" });
  }
     elective = false;
}

if (selectedOption == "General Science" && val[0].includes(!"chemistry") ){
   if (!knust_failed.some(item => item.name === name)) {
      knust_failed.push({ name, college, reason:"Your electives must include chemistry" });
  }
     elective = false;
}

if (selectedOption == "Agric Science" && val[0].includes(!"general agric")){
   if (!knust_failed.some(item => item.name === name)) {
      knust_failed.push({ name, college, reason:"Your electives must include general agric " });
  }
     elective = false;
}

}

  console.log(elective)

if (elective == true){

 
 if (oneGrade.substring(1) > 6 && twoGrade.substring(1) > 6) {
    elective = false
    if (!knust_failed.some(item => item.name === name)) {
        knust_failed.push({ name, college, reason:`Sorry, you had ${oneGrade} in ${val[0][0]} and ${twoGrade} in ${val[0][1]}  You need C6 or better ` });
    }
  } else if (oneGrade.substring(1) > 6 && threeGrade.substring(1) > 6) {
    elective = false
    if (!knust_failed.some(item => item.name === name)) {
        knust_failed.push({ name, college, reason:`Sorry, you had ${oneGrade} in ${val[0][0]} and ${threeGrade} in ${val[0][2]}  You need C6 or better ` });
    }
 } else if(oneGrade.substring(1) > 6 && fourGrade.substring(1) > 6){
    elective = false
    if (!knust_failed.some(item => item.name === name)) {
        knust_failed.push({ name, college, reason:`Sorry, you had ${oneGrade} in ${val[0][0]} and ${fourGrade} in ${val[0][3]}  You need C6 or better ` });
    }
 } else if(twoGrade.substring(1) > 6 && threeGrade.substring(1) > 6){
    elective = false
    if (!knust_failed.some(item => item.name === name)) {
        knust_failed.push({ name, college, reason:`Sorry, you had ${twoGrade} in ${val[0][1]} and ${threeGrade} in ${val[0][2]}  You need C6 or better ` });
    }
 } else if(twoGrade.substring(1) > 6 && fourGrade.substring(1) > 6){
    elective = false
    if (!knust_failed.some(item => item.name === name)) {
        knust_failed.push({ name, college, reason:`Sorry, you had ${twoGrade} in ${val[0][1]} and ${fourGrade} in ${val[0][3]}  You need C6 or better ` });
    }
 } else if(threeGrade.substring(1) > 6 && fourGrade.substring(1) > 6){
    elective = false
    if (!knust_failed.some(item => item.name === name)) {
        knust_failed.push({ name, college, reason:`Sorry, you had ${threeGrade} in ${val[0][2]} and ${fourGrade} in ${val[0][3]}  You need C6 or better ` });
    }
 }
 


 let chemistry ;
 let physics = 10 ;
 let emath =10;
 if(selectedOption == "General Science" || selectedOption == "Agric Science"  ){
 
 if(val[0][0] == "chemistry"){
    chemistry = oneGrade.substring(1)
   
 } else if(val[0][1] == "chemistry"){
   chemistry = twoGrade.substring(1)
 } else if(val[0][2] == "chemistry"){
   chemistry = threeGrade.substring(1)
 } else {
   chemistry = fourGrade.substring(1)
 };


 if(val[0][0] == "physics"){
   physics = oneGrade.substring(1)
  
} else if(val[0][1] == "physics"){
  physics = twoGrade.substring(1)
} else if(val[0][2] == "physics"){
  physics = threeGrade.substring(1)
} else if(val[0][3] == "physics") {
  physics = fourGrade.substring(1)
};


if(val[0][0] == "emath"){
   emath = oneGrade.substring(1)
  
} else if(val[0][1] == "emath"){
  emath = twoGrade.substring(1)
} else if(val[0][2] == "emath"){
  emath = threeGrade.substring(1)
} else if(val[0][3] == "emath") {
  emath = fourGrade.substring(1)
};


}
console.log(chemistry)

let biology;
if(selectedOption == "General Science"){
   if(val[0][0] == "biology"){
      biology = oneGrade.substring(1)
     
   } else if(val[0][1] == "biology"){
      biology = twoGrade.substring(1)
   } else if(val[0][2] == "biology"){
      biology = threeGrade.substring(1)
   } else {
      biology = fourGrade.substring(1)
   };
 
   console.log(biology)
}

let agric;
if(selectedOption == "Agric Science"){
   if(val[0][0] == "general agric"){
      agric = oneGrade.substring(1)
     
   } else if(val[0][1] == "general agric"){
      agric = twoGrade.substring(1)
   } else if(val[0][2] == "general agric"){
      agric = threeGrade.substring(1)
   } else {
      agric = fourGrade.substring(1)
   };
 
   console.log(agric)
}

let emaths ;
let geography ;
let economics ;
if(selectedOption == "General Arts"){
   if(val[0][0] == "economics"){
      economics = oneGrade.substring(1)
     
   } else if(val[0][1] == "economics"){
      economics = twoGrade.substring(1)
   } else if(val[0][2] == "economics"){
      economics = threeGrade.substring(1)
   } else {
      economics = fourGrade.substring(1)
   };
 
   if(val[0][0] == "geography"){
      geography = oneGrade.substring(1)
     
   } else if(val[0][1] == "geography"){
      geography = twoGrade.substring(1)
   } else if(val[0][2] == "geography"){
      geography = threeGrade.substring(1)
   } else {
      geography = fourGrade.substring(1)
   };
 
   if(val[0][0] == "emath"){
      emaths = oneGrade.substring(1)
     
   } else if(val[0][1] == "emath"){
      emaths = twoGrade.substring(1)
   } else if(val[0][2] == "emath"){
      emaths = threeGrade.substring(1)
   } else {
      emaths = fourGrade.substring(1)
   };
 
  
}

 
if (chemistry > 6 && selectedOption=="General Science" ) {
   elective = false;
   console.log(`Sorry, your chemistry grade is ${chemistry}. This is not accepted for university entry`)
   if (!knust_failed.some(item => item.name === name)) {
     knust_failed.push({ name, college, reason:`Sorry, your chemistry grade is ${chemistry}. You need C6 or better ` });
 }
 } else if(biology > 6 && selectedOption=="General Science") {
   elective = false;
   console.log(`Sorry, your biology grade is ${biology}. This is not accepted for university entry`)
   if (!knust_failed.some(item => item.name === name)) {
     knust_failed.push({ name, college, reason:`Sorry, your biology grade is ${biology}. You need C6 or better ` });
 }
} else if(agric > 6 && selectedOption=="Agric Science") {
   elective = false;
   console.log(`Sorry, your general agriculture grade is ${agric}. This is not accepted for university entry`)
   if (!knust_failed.some(item => item.name === name)) {
     knust_failed.push({ name, college, reason:`Sorry, your general agriculture grade is ${agric}. You need C6 or better ` });
 }
}
else if(chemistry > 6 && selectedOption=="Agric Science") {
   elective = false;
   console.log(`Sorry, your chemistry grade is ${chemistry}. This is not accepted for university entry`)
   if (!knust_failed.some(item => item.name === name)) {
     knust_failed.push({ name, college, reason:`Sorry, your chemistry grade is ${chemistry}. You need C6 or better ` });
 }
}
 else {
   elective = true;
   console.log('gualified main... continue')
}


if(selectedOption == "General Arts" && economics > 6 ){
   if (!knust_failed.some(item => item.name === name)) {
      knust_failed.push({ name, college, reason:`Sorry, you had ${economics}. You need C6 or better ` });
  }
  elective = false;
}

if(selectedOption == "General Arts" && emaths > 6 ){
   if (!knust_failed.some(item => item.name === name)) {
      knust_failed.push({ name, college, reason:`Sorry, you had ${emaths} in elective math. You need C6 or better ` });
  }
  elective = false;
}

if(selectedOption == "General Arts" && geography > 6 ){
   if (!knust_failed.some(item => item.name === name)) {
      knust_failed.push({ name, college, reason:`Sorry, you had ${geography}. You need C6 or better ` });
  }
  elective = false;
}


 
 let array1 = [oneGrade,twoGrade,threeGrade,fourGrade]
 let array2 =[];
 if(selectedOption == "General Science" || selectedOption == "Agric Science" ){
   array2 = [physics,emath]
 }

 if(elective == true){
  
   const otherGrade = Math.min(...array2)
  
  console.log(array1)
  
  let sortedArr = array1.slice().sort((a,b)=>a-b);
  let bestGradeOne = sortedArr[0]
  let bestGradeTwo = sortedArr[1]
  let bestGradeThree = sortedArr[2]
  console.log(sortedArr)
  
  let myAgricGrade;
  let myScienceGrade;
  let myArtGrade;
  let myBusinessGrade;

  if (selectedOption == 'Agric Science'){
    myAgricGrade = Number(chemistry)+Number(agric)+Number(otherGrade)+ Number(mathsGrade.substring(1)) + Number(englishGrade.substring(1)) + Number(scienceGrade.substring(1))
  } else if(selectedOption == 'General Science'){
    myScienceGrade = Number(chemistry)+Number(biology)+Number(otherGrade)+ Number(mathsGrade.substring(1)) + Number(englishGrade.substring(1)) + Number(scienceGrade.substring(1))
  }  else if(selectedOption == 'General Arts'){
    myArtGrade = Number(economics)+Number(geography)+Number(emaths)+ Number(mathsGrade.substring(1)) + Number(englishGrade.substring(1)) + Number(scienceGrade.substring(1))
  }  else if(selectedOption == 'Business'){
    myBusinessGrade = Number(bestGradeOne)+Number(bestGradeTwo)+Number(bestGradeThree)+ Number(mathsGrade.substring(1)) + Number(englishGrade.substring(1)) + Number(scienceGrade.substring(1))
  }
 
   
  
  
   console.log(myBusinessGrade)

   if( selectedOption == "Agric Science" && myAgricGrade > AGB.grade){
    console.log("Your grade is bad")
    if (!knust_failed.some(item => item.name === name)) {
      knust_failed.push({ name, college, reason:`Sorry, your aggregate is ${myAgricGrade}. You need aggregate 15 or better ` });
  }
  } else if(selectedOption == "General Science" && myScienceGrade > AGB.grade){
   console.log("Your grade is bad")
   if (!knust_failed.some(item => item.name === name)) {
     knust_failed.push({ name, college, reason:`Sorry, your aggregate is ${myScienceGrade}. You need aggregate 15 or better ` });
 }
  }  else if(selectedOption == "General Arts" && myArtGrade > AGB.grade){
   console.log("Your grade is bad")
   if (!knust_failed.some(item => item.name === name)) {
     knust_failed.push({ name, college, reason:`Sorry, your aggregate is ${myArtGrade}. You need aggregate 15 or better ` });
 }
  }  else if(selectedOption == "Business" && myBusinessGrade > AGB.grade){
   console.log("Your grade is bad")
   if (!knust_failed.some(item => item.name === name)) {
     knust_failed.push({ name, college, reason:`Sorry, your aggregate is ${myBusinessGrade}. You need aggregate 15 or better ` });
 }
  } 
  else{
 
   if (!knust_passed.some(item => item.name === name)) {
      knust_passed.push({ name, college });
  }
  
   
    console.log('You have been accepted')
    console.log(knust_passed)
    console.log(knust_passed.length)
    accepted = true
 }
 }

}

 }

  return (
    <></>
  )
}

export default AgriBusiness
