import React from "react";
import { Route, Routes } from "react-router-dom";
import FirstHome from "./components/Home/Home";
import Appointments from "./components/Appointments/Appoi";
import Contact from "./components/ContactUs/Contact";
import Chat from "./components/Chat/Chat";
import Db from "./components/DB/Db";
import Product from "./components/Product/Product";
import Login from "./components/Login/Login";
import Reg from "./components/Register/Register";
import Doc from "./components/Doctors/Doctors";
import Other from "./components/Other/Other";
import Injection from "./components/Upcoming/Upcoming";
import Medi from "./components/Medicine/AllMedi/Medi";
import AddMedi from "./components/Medicine/Medicine";
import UpdateMedi from "./components/Medicine/UpdateMedi/Update";
function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
          {/* Route configuration */}
          <Route path="/" element={<FirstHome />} />
          <Route path="/products" element={<FirstHome />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/db" element={<Db />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reg" element={<Reg />} />
          <Route path="/doctor" element={<Doc />} />
          <Route path="/other" element={<Other />} />
          <Route path="/injection" element={<Injection />} />
          <Route path="/medi" element={<Medi />} />
          <Route path="/addmedi" element={<AddMedi />} />
          <Route path="/updatemedi/:id" element={<UpdateMedi />} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
