import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import Scrolltotop from "./Scrolltop";
import Main from "../core/Main/Main";
import Homepage from "../components/homepage";
import Coursepage from "../components/Coursepage";
import Coursedetailpage from "../components/Coursedetailpage";
import Aboutpage from "../components/Aboutpage";
import Contactpage from "../components/Contactpage";




export default function Approuter() {
    return (
      <BrowserRouter>
    <Scrolltotop/>
          <Routes>
             
            <Route  element={<Main />}> 
            <Route path="/"  element={<Homepage />}/>     
            <Route path="/course" element={<Coursepage/>}/>
            <Route path="/courses/:id" element={<Coursedetailpage />} />
            <Route path="/aboutus" element={<Aboutpage/>}/>
            <Route path="/contact" element={<Contactpage/>}/>
            </Route>
          </Routes>
        
      </BrowserRouter>
    );
  }