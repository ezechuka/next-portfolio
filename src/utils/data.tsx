import {
  AppStoreLogo,
  GooglePlayLogo,
  GithubLogo,
  Globe,
  LinkedinLogo,
  TwitterLogo,
  FilePdf,
} from "phosphor-react";
import { IApp } from "./interfaces";

const app: IApp = {
  title: "Chukwuka Eze",
  desc: "Chukwuka's Porfolio and Resume",
  hero: {
    tag: "hero",
    name: "Chukwuka Eze",
    catchPhrase: "10x",
    tagLine: "Frontend developer",
  },
  about: {
    tag: "about",
    name: "Chukwuka",
    bio: `I’ve 1+ years of experience in building frontend applications, and 
    I strive to provide the best user experience possible. My focus is on 
    performance, minimalistic user interfaces, clean & efficient code.
    As a software engineer, I'm driven to influence the customer positively and how my 
    work impacts them. Also, I’m very passionate about the Open-source space 
    and I actively contribute to Open source software (OSS).`,
    skills: [
      {
        title: "I'm proficient and actively working with",
        list: [
          {
            name: "language",
            data: ["typescript", "javascript"],
          },
          // {
          //   name: "android architecture",
          //   data: ["MVVM", "MVP"],
          // },
          // {
          //   name: "dependency injection",
          //   data: ["Dagger Hilt"],
          // },
          {
            name: "framework",
            data: ["Reactjs", "Nextjs"]
          },
          {
            name: "styling",
            data: ["CSS3", "TailwindCSS", "ChakraUI"],
          },
          // {
          //   name: "Testing",
          //   data: [
          //     "JUnit4",
          //     "Mockito",
          //     "Espresso",
          //     "Google Truth",
          //   ],
          // },
          // {
          //   name: "Architecture Components",
          //   data: [
          //     "Room",
          //     "ViewModel",
          //     "Navigation",
          //     "WorkManager",
          //   ],
          // },
          {
            name: "Others",
            data: ["Git/Github", "Axios", "Redux", "Firebase", "Sentry", "Googling"],
          },
        ],
      },
    ],
  },
  contact: {
    tag: "contact",
    email: "chukwuka.eze@eng.uniben.edu",
    urls: [
      {
        icon: <FilePdf size={22} />,
        url: "/assets/resume.pdf",
        title: "Resume",
      },
      {
        icon: <LinkedinLogo size={22} />,
        url: "https://www.linkedin.com/in/iameze/",
        title: "Linkedin",
      },
      {
        icon: <TwitterLogo size={22} />,
        url: "https://twitter.com/javalon007",
        title: "Twitter",
      },
      {
        icon: <GithubLogo size={22} />,
        url: "https://github.com/ezechuka",
        title: "Github",
      },
    ],
  },

  project: {
    tag: "projects",
    projects: [
      {
        title: "Urban Interiors",
        tags: ["Web"],
        desc: "A furniture e-commerce web store powered by firebase and built using Nextjs and ChakraUI which features a products listing page, cart, wishlist, checkout and an admin panel.",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https://urban-interiors.vercel.app/",
            tooltip: "View on web",
          },
          {
            icon: <GithubLogo size={24} />,
            url: "https://github.com/ezechuka/urban-interiors",
            tooltip: "View on github",
          },
        ],
      },
      {
        title: "World Countries",
        tags: ["Web"],
        desc: "This project utilizes Next.js library to statically generate dynamic pages with optimized image loading from the REST COUNTRIES API. It also features color scheme toggling between light/dark mode.",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https://world-countries-plum.vercel.app/",
            tooltip: "View on web",
          },
          {
            icon: <GithubLogo size={24} />,
            url: "https://github.com/ezechuka/world-countries",
            tooltip: "View on github",
          },
        ],
      },
      {
        title: "Shortly",
        tags: ["Web"],
        desc: "Reactjs application that uses the shrtcode API (https.//app.shrtco.de/) to minify URL links while using the local storage to persist them.",
        links: [
          {
            icon: <Globe size={24} />,
            url: "https://shoortly.netlify.app/",
            tooltip: "View on web",
          },
          {
            icon: <GithubLogo size={24} />,
            url: "https://github.com/ezechuka/shortly",
            tooltip: "View on github"
          },
        ],
      },
      {
        title: "Xpense whiz",
        tags: ["Mobile"],
        desc: "An income and expense money tracker app designed to enabled users keep track of their monetary activities.",
        links: [
          {
            icon: <GooglePlayLogo size={24} />,
            url: "https://play.google.com/store/apps/details?id=com.javalon.xpensewhiz",
            tooltip: "View on playstore",
          },
          {
            icon: <GithubLogo size={24} />,
            url: "https://github.com/ezechuka/xpense-whiz",
            tooltip: "View on github",
          },
        ],
      },
      {
        title: "English Whiz",
        tags: ["Mobile"],
        desc: "Yet Another English Dictionary App. EnglishWhiz is an offline dictionary app that features fast word look-up.",
        links: [
          {
            icon: <GooglePlayLogo size={24} />,
            url: "https://play.google.com/store/apps/details?id=com.javalon.englishwhiz",
            tooltip: "View on playstore",
          },
          {
            icon: <GithubLogo size={24} />,
            url: "https://github.com/ezechuka/EnglishWhiz",
            tooltip: "View on github",
          },
        ],
      },
      {
        title: "jamb360",
        tags: ["Mobile"],
        desc: "JAMB360 is an offline mobile/desktop based learning software built to assist intending candidates in preparing for the JAMB CBT exam.",
        links: [
          {
            icon: <GooglePlayLogo size={24} />,
            url: "https://play.google.com/store/apps/details?id=com.javalon.jamb360",
            tooltip: "View on playstore",
          }
        ],
      },
    ],
  },
};

export default app;
