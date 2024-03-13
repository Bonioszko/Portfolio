function NavbarElement({ text }: { text: string }) {
    return (
        <h1 className="text-3xl font-bold border-b-4 border-transparent hover:border-fourth-color">
            {text}
        </h1>
    );
}
export default NavbarElement;
