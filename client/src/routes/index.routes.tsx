import { Routes, Route } from "react-router-dom";
import { Dashboard, Login, Register } from "../pages";

const RoutesMain = () => {

  return( 
    <Routes>
         <Route path='/' element={<Login/>}/>
         <Route path='/register' element={<Register/>}/>
         <Route path='/dashboard' element={<Dashboard/>}/>

         {/* <Route path='/error' element={<Error/>}/> */}
    </Routes>
  )
}

export default RoutesMain;