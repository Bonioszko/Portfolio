const SectionHeading: React.FC<{ text: string }> = ({ text }) => {
    return (
        <h1 className="text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-300 to-green-400">
            {text}
        </h1>
    );
};
export default SectionHeading;
