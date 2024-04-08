function Technology({ text }: { text: string }) {
    return (
        <div
            className="bg-secondary-color text-text-color rounded-lg p-1 w-20 lg:p-2
        flex justify-center font-semibold "
        >
            {text}
        </div>
    );
}
export default Technology;
