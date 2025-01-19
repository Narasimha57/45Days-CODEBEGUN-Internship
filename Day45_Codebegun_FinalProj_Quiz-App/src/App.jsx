import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import LoginPage from './Components/LoginPage'
import RoleSection from './Components/RoleSection'
import Dropdown from './Components/Dropdown'
import SignupForm from './Components/SignupForm';
import NavigationButtons from './Components/NavigationButtons';
import AdminSignIn from './Components/AdminSignIn';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Routes>
      <Route path="/" element={ <RoleSection/> } />
      <Route path="/user" element={ <LoginPage /> } />
      <Route path="/admin" element={ <AdminSignIn /> } />
      <Route path="/createQuiz" element={ <Dropdown/> } />
      <Route path="/signup" element={ <SignupForm/> } />
      <Route path="/navoptions" element={ <NavigationButtons/> } />
      <Route path="/createuser" element={ <SignupForm/> } />
      <Route path="/showdropdown" element={ <Dropdown/> } />
     
    </Routes>
    {/* <Dropdown/>  */}
     
    </>
  )
}

export default App
