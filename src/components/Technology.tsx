function Technology({ text }: { text: string }) {
    return (
        <div
            className="bg-gradient-to-r from-secondary-color to-primary-color text-text-color rounded-lg lg:w-20 lg:p-2
        flex justify-center font-semibold hover:text-secondary-color hover:bg-gradient-to-r hover:from-white"
        >
            {text}
        </div>
    );
}
export default Technology;
