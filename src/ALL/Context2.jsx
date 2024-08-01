import React, { useState } from 'react'

import { ChooseContext } from './Context1'

function ChooseContextProvider(props) {
    const [selectedItems, setSelectedItems]=useState([])
    const val = [selectedItems.map((all)=>(`${all.value}`))]
  
    const [selectedOption, setSelectedOption] = useState('');
    const [gender, setGender] = useState('');


    const [englishGrade, setEnglishGrade] = useState(0);
    const [mathsGrade, setMathsGrade] = useState(0);
    const [scienceGrade, setScienceGrade] = useState(0);
    const [socialGrade, setSocialGrade] = useState(0);


    const [oneGrade, setOneGrade] = useState(0);
    const [twoGrade, setTwoGrade] = useState(0);
    const [threeGrade, setThreeGrade] = useState(0);
    const [fourGrade, setFourGrade] = useState(0);

    
    const [data, setData] = useState('')
    const [datal, setDatal] = useState('')

    let my= ""
    const [ref, setRef] = useState(0);
   
    let knust_passed = []
    let knust_failed = []
    let knustcore_failed = []

    let uds_passed = []
    let uds_failed = []
    let udscore_failed = []

    let umat_passed = []
    let umat_failed = []
    let umatcore_failed = []

    let ug_passed = []
    let ug_failed = []
    let ugcore_failed = []
    //const [pass, setPass]=useState([])
   // const [passed, setPassed]=useState([])

    return (
        <div>
            <ChooseContext.Provider 
            value={{ selectedItems, setSelectedItems,
                     selectedOption, setSelectedOption,
                     gender, setGender,
                     englishGrade, setEnglishGrade,
                     mathsGrade, setMathsGrade,
                     scienceGrade, setScienceGrade,
                     socialGrade, setSocialGrade,
                     oneGrade, setOneGrade,
                     twoGrade, setTwoGrade,
                     threeGrade, setThreeGrade,
                     fourGrade, setFourGrade,
                    knust_passed,knust_failed,
                    knustcore_failed,
                    uds_passed,uds_failed,
                    udscore_failed,
                    umat_passed,umat_failed,
                    umatcore_failed,
                    ug_passed,ug_failed,
                    ugcore_failed,
                    ref,setRef,
                    data,setData,
                    datal, setDatal,
                     val, my
                     }}>
              {props.children}
            </ChooseContext.Provider>

        </div>
    )
       

}

export default ChooseContextProvider
