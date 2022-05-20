import React from "react";
import "./App.scss";
import {Sidebar} from "./components/Sidebar";
import {Header} from "./components/Header";
import {Route, Routes } from "react-router-dom";
import {MyShops} from "./components/MyShops";

function App() {
  return (
    <div className="wrapper">
            <Sidebar/>
            <Header/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/" element={<h1>Home</h1>}/>
                    <Route path="/myshops" element={<MyShops/>}/>
                    <Route path="*" element={<h1>404</h1>}/>
                </Routes>
            </div>
    </div>
  );
}

export default App;
