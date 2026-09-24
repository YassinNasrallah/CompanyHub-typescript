
import { Routes, Route } from "react-router-dom";
import './App.css'
import Dashboard from './module/overview/layout/Dashboard'
import CompanyProfile from "./module/companyprofile/layout/CompanyProfile";
import Users from "./module/users/layout/Users";
import Settings from "./module/setting/layout/Settings";

function App() {
 

  return (
    <>
      <Routes>
         <Route path="/" element={<Dashboard />} />
         <Route path="/Compagnyprofile" element={<CompanyProfile />}/>
         <Route path="/users" element={<Users />}/>
         <Route path="/settings" element={<Settings />} />
      </Routes>
   
      
   </>
  )
}

export default App
