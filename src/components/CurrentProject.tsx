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
    imageLink,
    description,
    technologies,
    githubLink,
    liveSiteLink,
    active,
}) => {
    return (
        <>
            {active ? (
                <div className="flex flex-col sm:flex-row gap-3 animate-slideInFromLeft">
                    <div className="w-full">
                        <img
                            src={imageLink}
                            alt={name}
                            className="w-full rounded-3xl border-2"
                        />
                    </div>
                    <div className=" h-13 w-full flex flex-col items-center gap-5">
                        <h1 className="col text-text-color text-5xl">{name}</h1>
                        <div className="flex justify-center gap-5  ">
                            {technologies.map((technology) => (
                                <img
                                    key={technology}
                                    src={technologyLogos[technology]}
                                    alt={technology}
                                    className="w-10 "
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
