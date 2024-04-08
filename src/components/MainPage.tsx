import GithubIcon from "../assets/icons/GithubIcon";
import LinkedinIcon from "../assets/icons/LinkediIcon";
import Me from "../../public/Me2.jpg";
import Technology from "./Technology";
import { Section } from "./Section";
import { Slide } from "react-awesome-reveal";
function MainPage() {
    return (
        <Slide triggerOnce={true} direction="right">
            <Section left={true} id="Main">
                <div className="h-full w-full hidden lg:flex justify-end pr-36">
                    <div className="w-1/8 flex justify-center">
                        <img
                            src={Me}
                            alt=""
                            className="shadow rounded-full max-w-full h-auto align-middle border-none"
                        />
                    </div>
                </div>
                <div className="flex justify-center items-center w-full">
                    <div className="h-full w-4/5 flex flex-col justify-center items-center gap-6">
                        {" "}
                        <h1 className="text-6xl sm:text-9xl font-bold text-text-color text-center">
                            Bartosz Pers
                        </h1>
                        <div className="flex  flex-col sm:flex-row gap-3">
                            <div className="flex gap-1 sm:gap-3 ">
                                {" "}
                                <Technology text="React"></Technology>
                                <Technology text="Express"></Technology>
                                <Technology text="Python"></Technology>
                            </div>
                            <div className="flex gap-1 sm:gap-3">
                                {" "}
                                <Technology text="MongoDB"></Technology>
                                <Technology text="SQL"></Technology>
                                <Technology text="C++"></Technology>
                            </div>
                        </div>
                        <p className="text-text-color text-center text-lg sm:text-4xl">
                            Third year computer science student at Poznan
                            University Of Technology. Passionate in web
                            development and gym
                        </p>
                        <div className="flex justify-center gap-5">
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
                </div>
            </Section>
        </Slide>
    );
}

export default MainPage;
