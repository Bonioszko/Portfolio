import GithubIcon from "../assets/icons/GithubIcon";
import LiveSiteIcon from "../assets/icons/LiveSiteIcon";
import ReactLogo from "../../public/icons/react-2.svg";
import TailwindLogo from "../../public/icons/tailwind-svgrepo-com.svg";
import MongoDBLogo from "../../public/icons/mongodb-icon-1.svg";
import TypescriptLogo from "../../public/icons/typescript-16-svgrepo-com.svg";
import ExpressLogo from "../../public/icons/expressjs-icon.svg";
import KotlinLogo from "../../public/icons/kotlin-16-svgrepo-com.svg";
import SQLLogo from "../../public/icons/sql-file-format-svgrepo-com.svg";
import cLogo from "../../public/icons/c.svg";
import image1 from "../../public/TrainingApp.jpg";
import image2 from "../../public/Portfolio.jpg";
import image from "../../public/PaymentPal.jpg";
type ImageLinks = {
    [key: string]: string;
};
const images: ImageLinks = {
    PaymentPal: image,
    TrainingApp: image1,
    Portfolio: image2,

    // Add more images as needed
};
type TechnologyLogos = {
    [key: string]: string;
};
const technologyLogos: TechnologyLogos = {
    React: ReactLogo,
    Express: ExpressLogo,
    MongoDB: MongoDBLogo,
    Tailwind: TailwindLogo,
    Typescript: TypescriptLogo,
    Kotlin: KotlinLogo,
    SQL: SQLLogo,
    C: cLogo,
};
type ProjectProps = {
    name: string;
    imageLink: string;
    description: string;
    technologies: string[];
    githubLink: string;
    liveSiteLink: string | null;
    active: boolean;
};

const CurrentProject: React.FC<ProjectProps> = ({
    name,

    description,
    technologies,
    githubLink,
    liveSiteLink,
    active,
}) => {
    const image = images[name];
    return (
        <>
            {active ? (
                <div className="flex flex-col sm:flex-row gap-3 animate-slideInFromLeft">
                    <div className="w-full flex items-center justify-center relative group">
                        <img
                            src={image}
                            alt={name}
                            className="w-full rounded-3xl border-2 group-hover:opacity-45"
                        />
                        {liveSiteLink && (
                            <div className="text-text-color absolute opacity-0 group-hover:opacity-100 group-hover:animate-slideInFromLeft">
                                <a
                                    href={liveSiteLink}
                                    className="text-bold text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-300 to-green-400"
                                >
                                    Site
                                </a>
                            </div>
                        )}
                    </div>
                    <div className=" h-13 w-full flex flex-col items-center gap-5">
                        <h1 className="col text-text-color text-5xl">{name}</h1>
                        <div className="flex justify-center gap-5  ">
                            {technologies.map((technology) => (
                                <img
                                    key={technology}
                                    src={technologyLogos[technology]}
                                    alt={technology}
                                    className="w-10"
                                />
                            ))}
                        </div>

                        <p className="text-text-color w-3/5">{description}</p>
                        <div className="flex justify-center gap-3">
                            <a
                                href={githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GithubIcon className="fill-white hover:fill-green-500" />
                            </a>
                            {liveSiteLink && (
                                <a
                                    href={liveSiteLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <LiveSiteIcon className="fill-text-color hover:fill-red-600" />
                                </a>
                            )}
                        </div>
                    </div>{" "}
                </div>
            ) : (
                <></>
            )}
        </>
    );
};
export default CurrentProject;
