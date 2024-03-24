import { Section } from "./Section";
import SectionHeading from "./SectionHeading";
import { Slide } from "react-awesome-reveal";
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
                    <h1 className="text-3xl text-center text-text-color">
                        My responsibilities
                    </h1>

                    <ul className="gap-4 flex flex-col">
                        <li className="flex gap-4 items-center bg-primary-color rounded-xl p-3">
                            <div className="w-1/12 h-1  bg-secondary-color rounded-lg"></div>
                            <p className="text-text-color">
                                Developing apps using Power Apps and Power
                                Automate
                            </p>
                        </li>
                        <li className="flex gap-4 items-center bg-primary-color rounded-xl p-3">
                            <div className="w-1/12 h-1  bg-secondary-color rounded-lg"></div>
                            <p className="text-text-color">
                                Using Microsoft SQL data to create reporrts in
                                SSRS
                            </p>
                        </li>
                        <li className="flex gap-4 items-center bg-primary-color rounded-xl p-3">
                            <div className="w-1/12 h-1  bg-secondary-color rounded-lg"></div>
                            <p className="text-text-color">
                                Creating manuals for users so they can use
                                Software and Hardware faster and better
                            </p>
                        </li>
                        <li className="flex gap-4 items-center bg-primary-color rounded-xl p-3">
                            <div className="w-1/12 h-1  bg-secondary-color rounded-lg"></div>
                            <p className="text-text-color">
                                Managin PRTG Hosted Monitor instance
                            </p>
                        </li>
                        <li className="flex gap-4 items-center bg-primary-color rounded-xl p-3">
                            <div className="w-1/12 h-1  bg-secondary-color rounded-lg"></div>
                            <p className="text-text-color">
                                Doing reasearch about new topics and
                                implementing them (moving intranet to
                                Sharepoint)
                            </p>
                        </li>
                    </ul>
                </div>
            </Section>
        </Slide>
    );
}
export default WorkExperience;
