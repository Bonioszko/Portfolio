import ReactLogo from "../../public/react-2.svg";
import ExpressLogo from "../../public/express-109.svg";
import MongoDBLogo from "../../public/mongodb-icon-2.svg";
function ProjectCard() {
    return (
        <div className="bg-third-color w-3/4 p-1.5 flex flex-col sm:flex-row  items-center gap-5">
            <img
                src="../../public/TrainingApp.jpg"
                alt="TrainingApp"
                className="w-4/6 rounded-3xl"
            />
            <div className=" h-13 w-full flex flex-col items-center gap-5">
                <h1 className="col text-white text-3xl">TrainingApp</h1>
                <div className="flex justify-center gap-5">
                    <img
                        src={ReactLogo}
                        alt=""
                        className="w-10 bg-gradient-to-b from-purple-500 to-white rounded-full"
                    />
                    <img
                        src={ExpressLogo}
                        alt=""
                        className="w-10 bg-gradient-to-b from-purple-500 to-white text-black rounded-full"
                    />
                    <img
                        src={MongoDBLogo}
                        alt=""
                        className="w-10 bg-gradient-to-b from-purple-500 to-white text-black rounded-full"
                    />
                </div>

                <p className="bg-third-color">
                    I wanted to create application to track my personal
                    trainings. Application allows you to create your own
                    trainings and exercises. Based on created trainings you can
                    create specific training with repetitions, sets and weigth
                    used. Interesting functionality is a built in timer, so you
                    do not need to use separate application to track time
                    between sets. To access content you need to firstly register
                    and then login into you account
                </p>
            </div>
        </div>
    );
}
export default ProjectCard;
