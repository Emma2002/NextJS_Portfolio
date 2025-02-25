export type ProjectProps = {
    id: number;
    name: string;
    description: string;
    technologies: string[];
    // github: string;
    demo: string;
    image: string;
    video: string;
    available: boolean;
  };
  
  export const universityProjects = [
    {
      id: 5,
      name: "Graduation Project",
      description:
        "For my graduation project, I developed a visualisation tool for an organ-on-a-chip model of fibrotic diseases. Using Unity, I created an interactive 3D game to help a general audience in understanding fibrosis progression and organ-on-chip technology. The project involved 3D modelling in Blender, and UI/UX design in Photoshop. Additionally, C# was used for scripting.",
      technologies: ["Unity", "C#","Blender", "Photoshop", ],
      // github: "https://github.com/Emma2002/GP_FibOoC_v1",
      demo: "https://emmavdb2.itch.io/visualisation-tool-for-an-organ-on-a-chip-model-of-fibrotic-diseases",
      image: require("public/images/Projects/ECMRoom.png"),
      // video: "/images/Projects/Videos/Module4.mp4",
      available: true,
    }, 
    
        {
      id: 4,
      name: "Dots and Boxes",
      description:
        "For my minor elective in computer science, my teammate and I developed a multiplayer Dots and Boxes game in Java, using a client-server architecture. Players could either compete against each other or challenge an AI with adjustable difficulty levels. The game ran  in the terminal.",
      technologies: ["Java", "IntelliJ"],
      // demo: "https://emma2002.github.io/ProfDevJourney/",
      image: require("../../../../public/images/Projects/DotsAndBoxes.png"),
      // video: "/images/Projects/Videos/Module5.mp4",
      available: false,
    },
    {
      id: 1,
      name: "Brain Drain",
      description:
        "This project visually represents the negative impact of social media addiction on dopamine receptors through an installation. Using LED strips pulsing in real-time with screen taps, it communicates the importance of alternative activities, like playing sports or music. The installation won the Creative Technology Module 8 Craftsmanship Award. A total of 12 people worked on this project.",
      technologies: ["Arduino"],
      // github: "",
      demo: "",
      image: require("../../../../public/images/Projects/Module8_3.jpg"),
      video: "/images/Projects/Videos/Module8.mp4",
      available: false,
    },
     
  
    {
      id: 2,
      name: "Professional Development Journey",
      description:
        "At the end of my 2 years of Creative Technology, I had to create a final project. I did it by creating a island about all professional journey of the last two years, using Three.js to bring it to life in an 3D environment.",
      technologies: ["ThreeJS", "Blender"],
      demo: "https://emma2002.github.io/ProfDevJourney/",
      image: require("../../../../public/images/Projects/ProfDev.png"),
      available: true,
    },
    {
      id: 3,
      name: "Night At The Arcade",
      description:
        "Game made in Unity for module 5, toghether with my project partner. During this module I learned about 3D modelling, 3D animation, Sound Engineering, Game Design and Unity, which all contributed to the development of this game where you must escape a haunted arcade by solving puzzles.",
      technologies: ["Unity", "Blender", "FMOD"],
      // demo: "https://emma2002.github.io/ProfDevJourney/",
      image: require("../../../../public/images/Projects/Module5_logo.png"),
      video: "/images/Projects/Videos/Module5.mp4",
      available: true,
    },

    {
      id: 0,
      name: "GogBot Installation",
      description:
        "Project of module 4 OILY MONEY: THE ATM FROM HELL, displayed at the GogBot festival in 2022. This project was created with a total of 8 people. My role was mostly focused on helping create the visualizations and helping with decorating the ATM itself.",
      technologies: ["Blender", "Processing"],
      // github: "",
      demo: "",
      image: require("../../../../public/images/Projects/GogBot.jpg"),
      video: "/images/Projects/Videos/Module4.mp4",
      available: true,
    },  

    

   
    // {
    //   id: 3,
    //   name: "Link Shortener",
    //   description:
    //     "A website that reduces the length of your URL using Bit.ly's API",
    //   technologies: ["JavaScript", "CSS", "Bit.ly's API"],
    //   github: "https://github.com/victorcodess/url-shortener",
    //   demo: "https://url-shortener-nine-delta.vercel.app",
    //   image: require(".//../../public/projects/shortener-new.webp"),
    //   available: true,
    // },
    // {
    //   id: 4,
    //   name: "Carpooling Service",
    //   description:
    //     "TMTM helps Covenant University students find fellow students who are headed to the same location, so they can share a ride and split the cost.",
    //   technologies: ["Material UI", "React", "Formik"],
    //   github: "https://github.com/victorcodess/carpooling-service",
    //   demo: "",
    //   image: require(".//../../public/projects/carpool-new.webp"),
    //   available: false,
    // },
    // {
    //   id: 5,
    //   name: "MLSC.ng",
    //   description:
    //     "This is platform for Microsoft Learn Student Ambassadors to shorten links, append their sharing IDs and generate event certificates.",
    //   technologies: ["Next.js", "Next Auth", "Tailwind CSS"],
    //   github: "https://github.com/msp-nigeria/mlsc.ng-frontend",
    //   demo: "",
    //   image: require(".//../../public/projects/mlsc.png"),
    //   available: false,
    // },
  ];
  
  export const otherProjects = [
  
    {
      id: 2,
      name: "VPRO Hackathon",
      description:
        "In a two-day hackathon, I collaborated with Team NOS on an educational prototype. We came up with a game that teaches primary school students how to fact-check news and recognize reliable sources. My role was designing the UI in Figma.",
      technologies: ["Figma"],
      // github: "",
      demo: "https://www.vpro.nl/medialab/projecten/overzicht/hackathon/verslag-publiekepioniers2.html",
      image: require("../../../../public/images/Projects/VPROHackathon2.png"),
      available: true,
    },
    {
      id: 1,
      name: "Game Jam Game",
      description:
        "In a GameJam with the theme \"In a heartbeat\" me and two of my teammates created this game.You play as a red blood cell inside a human body. You have 10 heartbeats to prevent the heart from dying. If you use all 10 heartbeats, you will respawn to the start and your heartbeats reset. Try to find a way to finish all quests in the 10 heartbeat limit. ",
      technologies: ["Unity", "Blender", "Photoshop"],
      // github: "",
      demo: "https://wilkuu.itch.io/affoe-the-heart-attack-game",
      image: require("../../../../public/images/Projects/AffoeGameJam.png"),
      available: true,
    },
  
    {
      id: 0,
      name: "Instagram promotion poster S.A. Proto",
      description:
        "Made for the student association Proto to promote their instagram.",
      technologies: ["Photoshop"],
      // github: "",
      // demo: "",
      image: require("../../../../public/images/Projects/ProtoInsta.png"),
      available: true,
    },
    // {
    //   id: 2,
    //   name: "RAGS Scrubs Website",
    //   description:
    //     "An image generator website that allows users to generate, combine, and download images.",
    //   technologies: ["UX Research", "UI Design", "Prototyping"],
    //   github: "",
    //   demo: "",
    //   image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    //   available: false,
    // },
    // {
    //   id: 3,
    //   name: "Crown Branding Agency Website",
    //   description:
    //     "A website that reduces the length of your URL using Bit.ly's API",
    //   technologies: ["UX Research", "UI Design", "Prototyping"],
    //   github: "",
    //   demo: "",
    //   image:
    //     "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    //   available: false,
    // },
    // {
    //   id: 4,
    //   name: "Titi Mobile App",
    //   description:
    //     "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    //   technologies: ["UX Research", "UI Design", "Prototyping"],
    //   github: "",
    //   demo: "",
    //   image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    //   available: false,
    // },
  ];