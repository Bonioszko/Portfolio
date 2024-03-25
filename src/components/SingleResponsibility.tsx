export default function SingleResonsibility({ text }: { text: string }) {
    return (
        <li className="flex gap-4 items-center bg-primary-color rounded-xl p-3">
            <div className="min-w-6  lg:w-11  h-1  bg-secondary-color rounded-lg"></div>
            <p className="text-text-color">{text}</p>
        </li>
    );
}
