export const Section: React.FC<{
    left: boolean;
    children: React.ReactNode;
    id: string;
}> = ({ left, children, id }) => {
    return (
        <div className="h-full flex flex-col justify-center items-start animate-fadeIn  ">
            <div
                id={`${id}`}
                className={`h-3/4 w-full ${
                    left ? "bg-gradient-to-l" : "bg-gradient-to-r"
                }  flex flex-col  items-center  justify-centerrounded-3xl p-7 gap-5 `}
            >
                {children}
            </div>
        </div>
    );
};
