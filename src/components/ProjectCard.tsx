import ReactLogo from "../../public/react-2.svg";
import ExpressLogo from "../../public/express-109.svg";
import MongoDBLogo from "../../public/mongodb-icon-1.svg";
import GithubIcon from "../assets/icons/GithubIcon";
import LiveSiteIcon from "../assets/icons/LiveSiteIcon";

const data = [
    {
        name: "TrainingApp",
        imageLink: "https://example.com/image1.jpg",
        description: "This is a description for Project 1",
        array: ["item1", "item2", "item3"],
        githubLink: "ss",
    },
    {
        name: "Portfolio",
        imageLink: "https://example.com/image2.jpg",
        description: "This is a description for Project 2",
        array: ["item4", "item5", "item6"],
        githubLink: "ss",
    },
    {
        name: "BoardGameCollector",
        imageLink: "https://example.com/image3.jpg",
        description: "This is a description for Project 3",
        array: ["item7", "item8", "item9"],
        githubLink: "ss",
    },
    {
        name: "Server",
        imageLink: "https://example.com/image3.jpg",
        description: "This is a description for Project 3",
        array: ["item7", "item8", "item9"],
        githubLink: "ss",
    },
    // Add more objects as needed
];
function ProjectCard() {
    return (
        <div className="bg-gradient-to-l from-secondary-color to-primary-color w-full  sm:w-3/4 p-2 flex flex-col sm:flex-row  items-center gap-5 rounded-3xl">
            <img
                src="../../public/TrainingApp.jpg"
                alt="TrainingApp"
                className=" w-3/5 rounded-3xl"
            />
            <div className=" h-13 w-full flex flex-col justify-center items-center gap-5">
                <h1 className="col text-white text-3xl">TrainingApp</h1>
                <div className="flex justify-center gap-5  ">
                    <img src={ReactLogo} alt="" className="w-10 " />
                    <img src={ExpressLogo} alt="" className="w-10 " />
                    <img
                        src={MongoDBLogo}
                        alt=""
                        className="w-10  text-black rounded-full"
                    />
                </div>

                <p className="text-white">
                    I wanted to create application to track my personal
                    trainings. Application allows you to create your own
                    trainings and exercises. Based on created trainings you can
                    create specific training with repetitions, sets and weigth
                    used. Interesting functionality is a built in timer, so you
                    do not need to use separate application to track time
                    between sets. To access content you need to firstly register
                    and then login into you account
                </p>
                <div className="flex justify-center gap-3">
                    <a
                        href="https://github.com/Bonioszko/TrainingApp"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GithubIcon className="fill-white hover:fill-green-500" />
                    </a>
                    <a
                        href="https://github.com/Bonioszko/TrainingApp"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LiveSiteIcon className="fill-black hover:fill-red-600" />
                    </a>
                </div>
            </div>
        </div>
    );
}
export default ProjectCard;
