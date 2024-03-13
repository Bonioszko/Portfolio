import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import "./App.css";

function App() {
    return (
        <div className="w-full h-screen bg-primary-color font-default flex flex-col">
            <Navbar></Navbar>
            <MainPage></MainPage>
        </div>
    );
}

export default App;
