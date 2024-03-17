import GithubIcon from "../assets/icons/GithubIcon";
import LinkedinIcon from "../assets/icons/LinkediIcon";
import Me from "../../public/Me2.jpg";
import Technology from "./Technology";
function MainPage() {
    return (
        <div className="h-full flex flex-col justify-center items-end animate-fadeIn ">
            <div className="p-7 h-3/4 w-full lg:w-3/4 bg-gradient-to-r from-secondary-color to-primary-color flex flex-col sm:flex-row items-center  rounded-3xl">
                <div className="h-full w-1/2 flex flex-col justify-center items-center">
                    {" "}
                    <h1 className="te text-7xl font-bold text-text-color ">
                        Bartosz Pers
                    </h1>
                    <div className="flex gap-3">
                        <Technology text="React"></Technology>
                        <Technology text="Express"></Technology>
                        <Technology text="Python"></Technology>
                        <Technology text="MongoDB"></Technology>
                        <Technology text="SQL"></Technology>
                        <Technology text="C++"></Technology>
                    </div>
                    <p className="text-text-color">
                        I am third year computer science student at put. My
                        passions besides web development is gym
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="https://github.com/Bonioszko"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GithubIcon className="fill-white hover:fill-green-500" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/bartosz-pers-5038812b9/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LinkedinIcon className="fill-white hover:fill-sky-600" />
                        </a>
                    </div>
                </div>
                <div className="h-full w-1/2 hidden lg:flex items-center justify-center">
                    <div className="w-1/2 flex justify-center">
                        <img
                            src={Me}
                            alt=""
                            className="shadow rounded-full max-w-full h-auto align-middle border-none"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
