import { Route, Routes } from "react-router-dom";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import About from "./Component/Pages/About";
import CheckOut from "./Component/Pages/CheckOut";
import Home from "./Component/Pages/Home";
import Login from "./Component/Pages/Login";
import Register from "./Component/Pages/Register";
import ServiceDetail from "./Component/Pages/ServiceDetail";
import RequireAuth from "./Component/RequireAuth";

function App() {
  return (
    <div className="px-4 md:px-16">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/service/:serviceId' element={<ServiceDetail/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/checkout" element={<RequireAuth><CheckOut/></RequireAuth>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
