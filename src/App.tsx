import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import Projects from "./components/Projects";
import { Contact } from "./components/Contact";
import WorkExperience from "./components/WorkExperience";

import "./App.css";

function App() {
    return (
        <div className="w-full min-h-screen bg-primary-color font-default flex flex-col gap-24  overflow-x-hidden">
            <Navbar></Navbar>
            <MainPage></MainPage>
            <Projects></Projects>
            <WorkExperience></WorkExperience>
            <Contact></Contact>
        </div>
    );
}

export default App;
