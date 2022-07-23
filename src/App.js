import {BrowserRouter, Routes, Route} from "react-router-dom";
import Register from "./components/Register"
import Login from "./components/Login";
import Home from "./components/Home";
import Admin from "./components/Admin";
import Request from "./components/Request";
import Transfer from "./components/Transfer";
import RegisVerification from "./components/RegisVerification";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/request" element={<Request/>}/>
        <Route path="/transfer" element={<Transfer/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/admin/verify-registration" element={<RegisVerification/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;