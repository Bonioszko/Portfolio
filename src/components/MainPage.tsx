import Image from "next";
function MainPage() {
    return (
        <div className="d h-full flex flex-col justify-center items-end">
            <div className="h-3/4 w-3/4 bg-third-color flex items-center">
                <div className="h-full w-1/2 flex flex-col justify-center items-center">
                    {" "}
                    <h1 className="te text-7xl font-bold text-white ">
                        Bartosz Pers
                    </h1>
                    <p>I want to change your website to be better</p>
                </div>
                <div className="h-full w-1/2 flex items-center">
                    <div className="w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1514501259756-f4b6fbeffa67?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            className="shadow rounded-full max-w-full h-auto align-middle border-none"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
