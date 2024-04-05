const data = [
    {
        name: "PaymentPal",
        imageLink: "../../public/PaymentPal.jpg",
        description:
            "App to manage bills for landlors. Login was done using cookies and JWT token. I created MongoDB database and API endpoints to access it from fontend. Landlord can easily send email to tenant (implemented with nodemailer). App supports English and Polish language  (my parents does not speak English and they inspired my app)",
        technologies: ["React", "Express", "MongoDB", "Tailwind", "Typescript"],
        githubLink: "https://github.com/Bonioszko/BillTracker",
        liveSiteLink: "https://paymentpal.onrender.com/",
    },
    {
        name: "TrainingApp",
        imageLink: "../../public/TrainingApp.jpg",
        description:
            "I wanted to create application to track my personal trainings. Application allows you to create your own trainings and exercises. Based on created trainings you can create specific training with repetitions, sets and weight used. Interesting functionality is a built in timer, so you do not need to use separate application to track time between sets. To access content you need to firstly register and then login into your account",
        technologies: ["React", "Express", "MongoDB"],
        githubLink: "https://github.com/Bonioszko/TrainingApp",
        liveSiteLink: "https://trainingappfull.onrender.com/",
    },
    {
        name: "Portfolio",
        imageLink: "../../public/Portfolio.jpg",
        description:
            "This is my personal website to showcase myself and my skills in creating appealing and responsive webistes",
        technologies: ["React", "Tailwind", "Typescript"],
        githubLink: "ss",
        liveSiteLink: "trainingappfull.onrender.com",
    },
    // {
    //     name: "BoardGameCollector",
    //     imageLink: "https://example.com/image3.jpg",
    //     description:
    //         "This project was part of my mobile application course at my uni. BoardGamesGeek about is used to get data about boardgames. Application stores data in SQL database and we can synchronize it with our BoardGamesGeek account.  ",
    //     technologies: ["Kotlin", "SQL"],
    //     githubLink: "https://github.com/Bonioszko/BoardGameCollector",
    //     liveSiteLink: null,
    // },
    // {
    //     name: "TCP Server",
    //     imageLink: "https://example.com/image3.jpg",
    //     description:
    //         "This project was part of my computer networks course at my uni. The assignment was to create TCP server that allows multiple clients to communicate between each other. As a client we can see every other client and if we have rights we can shutdown other client",
    //     technologies: ["C"],
    //     githubLink: "https://github.com/Bonioszko/ComputerNetworkProject",
    //     liveSiteLink: null,
    // },
    // Add more objects as needed
];
export default data;
