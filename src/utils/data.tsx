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
    tagLine: "Native Android Engineer",
  },
  about: {
    tag: "about",
    name: "Chukwuka",
    bio: `I’ve 2+ years of experience in building applications on the Android platform, and 
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
            data: ["kotlin", "java"],
          },
          {
            name: "android architecture",
            data: ["MVVM", "MVP"],
          },
          {
            name: "dependency injection",
            data: ["Dagger Hilt"],
          },
          {
            name: "styling",
            data: ["Compose", "XML"],
          },
          {
            name: "Testing",
            data: [
              "JUnit4",
              "Mockito",
              "Espresso",
              "Google Truth",
            ],
          },
          {
            name: "Others",
            data: ["Git", "Github", "REST APIs", "Jetpack libraries", "Clean architecture", "kotlin coroutines/Flow", "retrofit", "Googling"],
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
        url: "/assets/Chukwuka_Resume.pdf",
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
      {
        title: "roomie",
        tags: ["Mobile"],
        desc: "Utility library that utilizes KSP to generate Room converter classes.",
        links: [
          {
            icon: <GithubLogo size={24} />,
            url: "https://github.com/ezechuka/roomie",
            tooltip: "View on github",
          },
        ],
      },
      {
        title: "weather whiz",
        tags: ["Mobile"],
        desc: "A 7-day weather forecast app.",
        links: [
          {
            icon: <GooglePlayLogo size={24} />,
            url: "https://play.google.com/store/apps/details?id=com.javalon.weatherwhiz",
            tooltip: "View on playstore",
          },
          {
            icon: <GithubLogo size={24} />,
            url: "https://github.com/ezechuka/WeatherWhiz",
            tooltip: "View on github",
          },
        ],
      },
      {
        title: "SwiftTopUp",
        tags: ["Mobile"],
        desc: "SwiftTopUp VTU mobile app allows you pay for airtime & databundle bills easily from the comfort of your home at cheaper rate.",
        links: [
          {
            icon: <GooglePlayLogo size={24} />,
            url: "https://play.google.com/store/apps/details?id=com.javalon.swifttopup",
            tooltip: "View on playstore",
          },
          {
            icon: <GithubLogo size={24} />,
            url: "https://github.com/ezechuka/SwiftTopup",
            tooltip: "View on playstore"
          },
        ],
      },
      {
        title: "DigitConverter",
        tags: ["Mobile"],
        desc: "An Android utility library that simply returns the word interpretation of a given digit.",
        links: [
          {
            icon: <GithubLogo size={24} />,
            url: "https://github.com/ezechuka/DigitConverter",
            tooltip: "View on github",
          },
        ],
      },
    ],
  },
};

export default app;
