import GithubIcon from "../assets/icons/GithubIcon";
import LinkedinIcon from "../assets/icons/LinkediIcon";
import Me from "../../public/Me.jpg";
function MainPage() {
    return (
        <div className="h-full flex flex-col justify-center items-end animate-fadeIn ">
            <div className="h-3/4 w-3/4 bg-gradient-to-r from-secondary-color to-primary-color flex items-center  rounded-3xl">
                <div className="h-full w-1/2 flex flex-col justify-center items-center">
                    {" "}
                    <h1 className="te text-7xl font-bold text-white ">
                        Bartosz Pers
                    </h1>
                    <p>I want to change your website to be better</p>
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
                <div className="h-full w-1/2 flex items-center ">
                    <div className="w-1/2">
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
