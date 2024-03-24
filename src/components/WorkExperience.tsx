import { Section } from "./Section";
import SectionHeading from "./SectionHeading";
function WorkExperience() {
    return (
        <Section left={true} id="work-experience">
            <SectionHeading text="Work Experience"></SectionHeading>
            <div className="flex flex-col">
                <h2 className="text-2xl bg-text-color text-primary-color p-2 rounded-xl">
                    Air Spiralo Poland -Information Communication Technology
                    Support
                </h2>
                <h1 className="text-3xl">My responsibilities</h1>

                <ul className="gap-4 flex flex-col">
                    <li className="flex gap-4 items-center bg-primary-color rounded-xl p-3">
                        Creating manuals for users so they can use Software and
                        Hardware faster and better
                    </li>
                    <li className="flex gap-4 items-center bg-primary-color rounded-xl p-3">
                        Creating manuals for users so they can use Software and
                        Hardware faster and better
                    </li>
                    <li className="flex gap-4 items-center bg-primary-color rounded-xl p-3">
                        Creating manuals for users so they can use Software and
                        Hardware faster and better
                    </li>
                    <li className="flex gap-4 items-center bg-primary-color rounded-xl p-3">
                        Creating manuals for users so they can use Software and
                        Hardware faster and better
                    </li>
                    <li className="flex gap-4 items-center bg-primary-color rounded-xl p-3">
                        Creating manuals for users so they can use Software and
                        Hardware faster and better
                    </li>
                    <li className="flex gap-4 items-center bg-primary-color rounded-xl p-3">
                        Creating manuals for users so they can use Software and
                        Hardware faster and better
                    </li>
                </ul>
            </div>
        </Section>
    );
}
export default WorkExperience;
