import React,{useEffect,useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ChooseContextProvider from './ALL/Context2';
import Homepage from './ALL/Homepage';
import Knust_Body1 from './KNUST/Body1';
import Knust_Body2 from './KNUST/Body2';
import Knust_Body3 from './KNUST/Body3';
import Knust_Body4 from './KNUST/Body4';
import Knust_Body5 from './KNUST/Body5';
import Knust_Body6 from './KNUST/Body6';
import Knust_Body7 from './KNUST/Body7';
import Ucc_Body1 from './UCC/Body1';
import Ucc_Body2 from './UCC/Body2';
import Ucc_Body3 from './UCC/Body3';
import Ucc_Body4 from './UCC/Body4';
import Ucc_Body5 from './UCC/Body5';
import Ucc_Body6 from './UCC/Body6';
import Ucc_Body7 from './UCC/Body7';
import Uds_Body1 from './UDS/Body1';
import Uds_Body2 from './UDS/Body2';
import Uds_Body3 from './UDS/Body3';
import Uds_Body4 from './UDS/Body4';
import Uds_Body5 from './UDS/Body5';
import Uds_Body6 from './UDS/Body6';
import Uds_Body7 from './UDS/Body7';
import Ug_Body1 from './UG/Body1';
import Ug_Body2 from './UG/Body2';
import Ug_Body3 from './UG/Body3';
import Ug_Body4 from './UG/Body4';
import Ug_Body5 from './UG/Body5';
import Ug_Body6 from './UG/Body6';
import Ug_Body7 from './UG/Body7';
import Umat_Body1 from './UMAT/Body1';
import Umat_Body2 from './UMAT/Body2';
import Umat_Body3 from './UMAT/Body3';
import Umat_Body4 from './UMAT/Body4';
import Umat_Body5 from './UMAT/Body5';
import Umat_Body6 from './UMAT/Body6';
import Umat_Body7 from './UMAT/Body7';
import Body1 from './ALL/Body1';
import Body2 from './ALL/Body2';
import Body3 from './ALL/Body3';
import Body4 from './ALL/Body4';
import Body5 from './ALL/Body5';
import Body6 from './ALL/Body6';
import Body7 from './ALL/Body7';
import AI_UI from './AIUI';




function App() {
return(
  <ChooseContextProvider>
  <>


    <BrowserRouter>        
      <Routes>  
      <Route index element={<AI_UI/>}/>
      <Route path="/event1" element={<Body1/>}/>
      <Route path="/event2" element={<Body2/>}/>
      <Route path="/event3" element={<Body3/>}/>
      <Route path="/event4" element={<Body4/>}/>
      <Route path="/event5" element={<Body5/>}/>
      <Route path="/event6" element={<Body6/>}/>
      <Route path="/event7" element={<Body7/>}/>

      <Route path="/knust_event1" element={<Knust_Body1/>}/>
      <Route path="/knust_event2" element={<Knust_Body2/>}/>
      <Route path="/knust_event3" element={<Knust_Body3/>}/>
      <Route path="/knust_event4" element={<Knust_Body4/>}/>
      <Route path="/knust_event5" element={<Knust_Body5/>}/>
      <Route path="/knust_event6" element={<Knust_Body6/>}/>
      <Route path="/knust_event7" element={<Knust_Body7/>}/>

      <Route path="/ucc_event1" element={<Ucc_Body1/>}/>
      <Route path="/ucc_event2" element={<Ucc_Body2/>}/>
      <Route path="/ucc_event3" element={<Ucc_Body3/>}/>
      <Route path="/ucc_event4" element={<Ucc_Body4/>}/>
      <Route path="/ucc_event5" element={<Ucc_Body5/>}/>
      <Route path="/ucc_event6" element={<Ucc_Body6/>}/>
      <Route path="/ucc_event7" element={<Ucc_Body7/>}/>

      <Route path="/uds_event1" element={<Uds_Body1/>}/>
      <Route path="/uds_event2" element={<Uds_Body2/>}/>
      <Route path="/uds_event3" element={<Uds_Body3/>}/>
      <Route path="/uds_event4" element={<Uds_Body4/>}/>
      <Route path="/uds_event5" element={<Uds_Body5/>}/>
      <Route path="/uds_event6" element={<Uds_Body6/>}/>
      <Route path="/uds_event7" element={<Uds_Body7/>}/>

      <Route path="/ug_event1" element={<Ug_Body1/>}/>
      <Route path="/ug_event2" element={<Ug_Body2/>}/>
      <Route path="/ug_event3" element={<Ug_Body3/>}/>
      <Route path="/ug_event4" element={<Ug_Body4/>}/>
      <Route path="/ug_event5" element={<Ug_Body5/>}/>
      <Route path="/ug_event6" element={<Ug_Body6/>}/>
      <Route path="/ug_event7" element={<Ug_Body7/>}/>

      <Route path="/umat_event1" element={<Umat_Body1/>}/>
      <Route path="/umat_event2" element={<Umat_Body2/>}/>
      <Route path="/umat_event3" element={<Umat_Body3/>}/>
      <Route path="/umat_event4" element={<Umat_Body4/>}/>
      <Route path="/umat_event5" element={<Umat_Body5/>}/>
      <Route path="/umat_event6" element={<Umat_Body6/>}/>
      <Route path="/umat_event7" element={<Umat_Body7/>}/>









      </Routes> 
      </BrowserRouter>
    </>
    </ChooseContextProvider>
)
}
      
     
  

export default App;
