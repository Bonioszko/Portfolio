import React, {
    FormEvent,
    useRef,
    useState,
    ChangeEvent,
    useEffect,
} from "react";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Section } from "./Section";
import SectionHeading from "./SectionHeading";
import { Slide } from "react-awesome-reveal";
type Errors = {
    email?: string;
    message?: string;
    captcha?: string;
};
export const Contact: React.FC = () => {
    const [captchaDone, setCaptchaDone] = useState(false);
    const form = useRef<HTMLFormElement>(null);
    const [errors, setErrors] = useState<Errors>({});
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const [changed, setChanged] = useState<{
        user_email: boolean;
        message: boolean;
    }>({
        user_email: false,
        message: false,
    });
    const [formData, setFormData] = useState({
        user_email: "",
        user_name: "",
        message: "",
    });
    useEffect(() => {
        if (changed["user_email"] || changed["message"]) {
            validateForm();
        }
    }, [formData]);
    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setChanged((prevState) => ({ ...prevState, [name]: true }));
        setFormData({
            ...formData,
            [name]: value,
        });
        validateForm();
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {
            email: "",
            message: "",
            captcha: "",
        };
        if (!formData.user_email && changed.user_email) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (
            !/\S+@\S+\.\S+/.test(formData.user_email) &&
            changed.user_email
        ) {
            newErrors.email = "Email is not valid";
            isValid = false;
        }
        if (!formData.message) {
            newErrors.message = "Message is required";
            isValid = false;
        }
        if (!captchaDone) {
            newErrors.captcha = "Captcha is required";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };
    const sendEmail = (e: FormEvent) => {
        e.preventDefault();
        setChanged({ user_email: true, message: true });
        if (validateForm()) {
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
                setChanged({ user_email: false, message: false });
                setFormData({
                    user_email: "",
                    user_name: "",
                    message: "",
                });
                setErrors({});
                setCaptchaDone(false);
                form.current.reset();
                if (recaptchaRef.current) {
                    recaptchaRef.current.reset();
                }
            }
        } else {
            setChanged({ user_email: true, message: true });
        }
    };
    function onChange() {
        setCaptchaDone(true);
        errors.captcha = "";
    }

    return (
        <>
            <Slide direction="left" triggerOnce={true}>
                <Section left={true} id="Contact">
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className=" text-text-color flex flex-col justify-center items-center gap-2"
                    >
                        <SectionHeading text="Contact me"></SectionHeading>
                        <div className="w-56 flex justify-start">
                            <label className="">Name</label>
                        </div>

                        <input
                            type="text"
                            name="user_name"
                            onChange={handleInputChange}
                            className="p-1 bg-primary-color border-2 border-secondary-color focus:outline-none focus:scale-110 rounded-lg w-56"
                        />

                        <div className="w-56 flex justify-between">
                            <label className="">Email</label>
                            <div className="bg-clip-text font-bold text-transparent bg-gradient-to-r from-red-500 to-pink-700">
                                {errors.email}
                            </div>
                        </div>
                        <div
                            className={`w-56 ${
                                changed["user_email"] &&
                                (!formData.user_email ||
                                    !/\S+@\S+\.\S+/.test(formData.user_email))
                                    ? "bg-gradient-to-r from-red-500 to-pink-700"
                                    : "bg-secondary-color"
                            } p-0.5 rounded-lg focus-within:scale-105  `}
                        >
                            <input
                                type="email"
                                name="user_email"
                                onChange={handleInputChange}
                                placeholder="example@example.com"
                                className="p-1 bg-primary-color border-2 focus:outline-none border-transparent  rounded-lg w-full h-full"
                            />
                        </div>

                        <div className="w-56 flex justify-between">
                            <label className="">Message</label>
                            {changed["message"] && !formData.message ? (
                                <div className="bg-clip-text font-bold text-transparent bg-gradient-to-r from-red-500 to-pink-700">
                                    {errors.message}
                                </div>
                            ) : null}
                        </div>

                        <div
                            className={`w-56   ${
                                changed["message"] && !formData.message
                                    ? "bg-gradient-to-r from-red-500 to-pink-700"
                                    : "bg-secondary-color"
                            } pt-2 px-2 rounded-lg focus-within:scale-105 `}
                        >
                            <textarea
                                name="message"
                                onChange={handleInputChange}
                                className="p-1 bg-primary-color border-2 focus:outline-none border-transparent rounded-lg w-full h-full"
                            />
                        </div>
                        <div className=" w-full text-end bg-clip-text font-bold text-transparent bg-gradient-to-r from-red-500 to-pink-700">
                            {errors.captcha}
                        </div>
                        <div
                            className={`  ${
                                errors.captcha
                                    ? "bg-gradient-to-r from-red-500 to-pink-700"
                                    : "bg-secondary-color"
                            } p-1 pt-1.5 pl-1.5 rounded-lg focus-within:scale-105`}
                        >
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey="6LfD85opAAAAAM9edr0f03lTH0pYwHfR7TXNNVqc"
                                onChange={onChange}
                                onExpired={() => setCaptchaDone(false)}
                                theme="dark"
                            />
                        </div>
                        <input
                            type="submit"
                            value="Send"
                            className=" font-bold bg-primary-color border-2 border-secondary-color hover:cursor-pointer hover:bg-gradient-to-r from-lime-300 to-green-400 hover:text-primary-color py-2 rounded-lg px-4 active:scale-110"
                        />
                    </form>

                    <div className="h-full flex justify-start items-start ">
                        <h1></h1>
                    </div>
                </Section>
            </Slide>
            <ToastContainer theme="dark" />
        </>
    );
};
