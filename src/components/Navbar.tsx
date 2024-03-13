import NavbarElement from "./NavbarElement";
function Navbar() {
    return (
        <div className=" w-full bg-secondary-color h-24 px-10 flex items-center justify-between ">
            <NavbarElement text="PORTFOLIO"></NavbarElement>
            <div className="flex justify-normal gap-6">
                <NavbarElement text="About Me"></NavbarElement>
                <NavbarElement text="Projects"></NavbarElement>
                <NavbarElement text="Contact"></NavbarElement>
            </div>
        </div>
    );
}
export default Navbar;
