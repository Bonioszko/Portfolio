function NavbarElement({ text }: { text: string }) {
    return (
        <h1 className=" text-secondary-color text-3xl font-bold border-b-4 border-transparent hover:border-fourth-color hidden sm:block">
            {text}
        </h1>
    );
}
export default NavbarElement;
