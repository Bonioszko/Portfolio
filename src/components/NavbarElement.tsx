function NavbarElement({ text, targetId }: { text: string; targetId: string }) {
    return (
        <a
            href={`#${targetId}`}
            className="text-secondary-color text-3xl font-bold border-b-4 border-transparent hover:cursor-pointer hidden sm:block hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-lime-300 to-green-400"
        >
            {text}
        </a>
    );
}
export default NavbarElement;
