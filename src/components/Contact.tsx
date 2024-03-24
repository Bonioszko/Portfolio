import React, { FormEvent, useRef, useState } from "react";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Section } from "./Section";
import SectionHeading from "./SectionHeading";
function onChange(value) {
    console.log("Captcha value:", value);
}
export const Contact: React.FC = () => {
    const [captchaDone, setCaptchaDone] = useState(false);
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();
        if (captchaDone) {
            if (form.current) {
                emailjs
                    .sendForm(
                        "service_7wez88i",
                        "template_w2tdb3t",
                        form.current,
                        "_TAyPYK5RnC_Of3u3"
                    )
                    .then(
                        (result: EmailJSResponseStatus) => {
                            console.log("SUCCESS!", result.text);
                        },
                        (error: Error) => {
                            console.log("FAILED...", error);
                        }
                    );
                toast.success("Mail sent");
            }
        } else {
            toast.error("Check captcha");
        }
    };
    function onChange() {
        setCaptchaDone(true);
    }
    //add captcha there
    return (
        <Section left={true} id="Contact">
            <form
                ref={form}
                onSubmit={sendEmail}
                className=" text-text-color flex flex-col justify-center items-center gap-2"
            >
                <SectionHeading text="Contact me"></SectionHeading>
                <label>Name</label>
                <input
                    type="text"
                    name="user_name"
                    className="bg-primary-color border-2 border-secondary-color rounded-lg"
                />
                <label>Email</label>
                <input
                    type="email"
                    name="user_email"
                    className="bg-primary-color border-2 border-secondary-color rounded-lg"
                />
                <label>Message</label>
                <textarea
                    name="message"
                    className="rounded-lg text-black h-32 w-56 bg-primary-color bg-opacity-95 border-2 border-secondary-color"
                />
                <ReCAPTCHA
                    sitekey="6LfD85opAAAAAM9edr0f03lTH0pYwHfR7TXNNVqc"
                    onChange={onChange}
                    onExpired={() => setCaptchaDone(false)}
                    theme="dark"
                />
                <input
                    type="submit"
                    value="Send"
                    className="font-bold bg-primary-color border-2 border-secondary-color hover:cursor-pointer hover:bg-gradient-to-r from-lime-300 to-green-400 hover:text-primary-color py-2 rounded-lg px-4 active:scale-110"
                />
            </form>

            <div className="h-full flex justify-start items-start ">
                <h1></h1>
            </div>
            <ToastContainer theme="dark" />
        </Section>
    );
};
