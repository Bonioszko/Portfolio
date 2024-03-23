export const Section: React.FC<{
    left: boolean;
    children: React.ReactNode;
}> = ({ left, children }) => {
    return (
        <div className="h-full flex flex-col justify-center items-start animate-fadeIn  ">
            <div
                className={`h-3/4 w-full ${
                    left ? "bg-gradient-to-l" : "bg-gradient-to-r"
                } from-secondary-color to-primary-color flex flex-col  items-center  justify-centerrounded-3xl p-7 gap-3 `}
            >
                {children}
            </div>
        </div>
    );
};
