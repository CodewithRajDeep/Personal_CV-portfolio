import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";
import { meta, shopify, starbucks, tesla} from "../assets/images";
export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
];

export const experiences = [
    {
     title: "System Developer",
     company_name: "Accenture",
     icon: shopify,
     iconBg: "#b7e4c7",
        date: "July 2024 - Aug 2024",
        points: [
            "Designed a custom algorithm using pseudocode and effectively communicated its logic by creating a detailed flow diagram.",
            "Completed  Developer and Technology Job Program where I developed an end to end understanding of the Software Development Lifecycle.",
            "Debugged a program written in Python by fixing syntax and logic errors in the code.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },

    {
        title: "Software Engineer Intern",
        company_name: "Blackbird",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jun 2024 - July 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Prepared an temperature warning system using Arduino, demonstrating technical expertise and the ability to transform design specifications into working prototypes.",
            "Developed open source project using Morse Micro to validate front-end login and email pages.",
        ],
    },

    {
        title: "Product Developer IBM",
        company_name: "IBM",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "June 2024 - July 2024",
        points: [
            "Designed and implemented automated testing scripts, enhancing the defect detection rate,improving overall software quality and reliability",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Proposed and executed UI/UX improvements, leading to a  increase in user satisfaction ratings by making the interface more intuitive and user-friendly for individuals with disabilities.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },

    {
        title: "Full stack Developer",
        company_name: "Academic Minor",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2024-May 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Developed a precise MERN stack-based website to retrieve headlines and optimize search functionality, focusing on preventing duplicated keys in search results.",
            "Leveraged the JavaScript ecosystem and libraries to enhance search result speed and efficiency.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/CodewithRajDeep',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/deep-raj-b48310229/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Connect: Responsive Real-Time Chat Application',
        description: 'Developed "Connect," a responsive real-time chat application using ReactJs for the front-end, leveraging custom hooks to maintain clean and efficient code management.',
        link: 'https://github.com/CodewithRajDeep/connect-complete-chat-app',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Headline Application',
        description: 'Developed a precise MERN stack-based website to retrieve headlines and optimize search functionality, focusing on preventing duplicated keys in search results.',
        link: 'https://github.com/CodewithRajDeep/Headline-Application-/tree/master',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Temperature Warning System',
        description: 'Developed a real-time temperature monitoring system using Python and Arduino, integrating sensor data, threshold-based alerts, and data visualization.',
        link: 'https://github.com/CodewithRajDeep/Temperature-warning-System-using-Adruimo',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Text Word generation',
        description: 'Built a text word generation system combining KNN for pattern recognition and a Deep Learning-based OCR model for accurate text extraction from images.',
        link: 'https://github.com/CodewithRajDeep/Text-word-generation-using-Deep-Learning-/tree/master',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Adaptive Compiler Model',
        description: 'Developed a compiler model encompassing lexical analysis, parsing, semantic analysis, and intermediate code generation using C++, C, and YACC to represent all stages included in compiler.',
        link: 'https://github.com/CodewithRajDeep/compiler-model/tree/main/compiler-design-c-compiler-master',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AnimePlayer Application',
        description: 'Developed a video streaming Android app using Java and XML, enabling seamless video playback and user interaction.',
        link: 'https://github.com/CodewithRajDeep/Anime-player-/tree/master',
    }
];