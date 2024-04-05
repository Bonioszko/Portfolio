import { Section } from "./Section";
import SectionHeading from "./SectionHeading";
import { Slide } from "react-awesome-reveal";
import SingleResonsibility from "./SingleResponsibility";
function WorkExperience() {
    return (
        <Slide triggerOnce={true} direction="right">
            <Section left={true} id="work-experience">
                <SectionHeading text="Work Experience"></SectionHeading>
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl  bg-gradient-to-r to-lime-300 from-green-400 text-primary-color font-bold p-2 rounded-xl">
                        Air Spiralo Poland - Information Communication
                        Technology Support
                    </h2>
                    <h1 className="text-3xl text-center text-text-color"></h1>
                    <h1 className="text-3xl text-center text-text-color">
                        My responsibilities
                    </h1>

                    <ul className="gap-4 flex flex-col">
                        <SingleResonsibility
                            text="Developing apps using Power Apps and Power
                                Automate (ex. User request, tracking signed documents, tracking scrap)"
                        ></SingleResonsibility>
                        <SingleResonsibility
                            text="Creating reports in
                            SSRS using SQL data, creating new and chaning existing stored procedures"
                        ></SingleResonsibility>

                        <SingleResonsibility
                            text="Doing reasearch about new topics and
                            implementing them (ex. moving intranet to
                            Sharepoint)"
                        ></SingleResonsibility>

                        <SingleResonsibility text="Managing PRTG Hosted Monitor instance"></SingleResonsibility>

                        <SingleResonsibility text="Creating manuals for users so they can use software and hardware"></SingleResonsibility>
                    </ul>
                </div>
            </Section>
        </Slide>
    );
}
export default WorkExperience;
