import ProjectCard from "./ProjectCard";
import { Slide } from "react-awesome-reveal";
function Projects() {
    return (
        <Slide triggerOnce={true} direction="left">
            <ProjectCard></ProjectCard>
        </Slide>
    );
}
export default Projects;
