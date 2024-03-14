import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import Projects from "./components/Projects";
import "./App.css";

function App() {
    return (
        <div className="w-full min-h-screen bg-primary-color font-default flex flex-col gap-8">
            <Navbar></Navbar>
            <MainPage></MainPage>
            <Projects></Projects>
        </div>
    );
}

export default App;
