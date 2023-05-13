import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Service from "../components/Services";
import Gal from "../components/Gallery";
function Navigation(){
    return(
        <>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/service" element={<Service/>}></Route>
        <Route path="/gallery" element={<Gal/>}></Route>

        </Routes>
        </>
    )
}
export default Navigation