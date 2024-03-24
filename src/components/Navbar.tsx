import NavbarElement from "./NavbarElement";
function Navbar() {
    return (
        <div className=" w-full bg-primary-color h-24 px-10 f items-center justify-end flex">
            <div className="flex justify-normal gap-6">
                <NavbarElement text="About Me" targetId="Main"></NavbarElement>
                <NavbarElement
                    text="Projects"
                    targetId="Projects"
                ></NavbarElement>
                <NavbarElement
                    text="Experience"
                    targetId="work-experience"
                ></NavbarElement>
                <NavbarElement
                    text="Contact"
                    targetId="Contact"
                ></NavbarElement>
            </div>
        </div>
    );
}
export default Navbar;
