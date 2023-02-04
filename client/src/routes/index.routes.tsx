import { Routes, Route } from "react-router-dom";
import { Register } from "../pages";

const RoutesMain = () => {

  return( 
    <Routes>
         <Route path='/' element={<Register/>}/>
         {/* <Route path='/error' element={<Error/>}/> */}
    </Routes>
  )
}

export default RoutesMain;