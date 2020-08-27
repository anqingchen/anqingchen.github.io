import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Anqing Chen | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: "Anqing Chen's Portfolio", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Anqing Chen',
  subtitle: 'Student | Software Engineer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    "Hello there! 👋 I am Anqing Chen, or known as Samaritans online. I am currently a student 🎓 at the University of Texas at Austin studying Electrical and Computer Engineering. I'm working towards becoming a software engineer!",
  paragraphTwo:
    'I can program in C, C++, Java, JavaScript and Python 💻. I like making full-stack web applications and Minecraft mods! My favorite libraries and tools are: React, Express, Electron, Flask, Docker and MongoDB',
  paragraphThree: 'Check out my resume for my experiences -->',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'spectral.png',
    title: 'Spectral Launcher',
    info:
      'Spectral Launcher is a cross-platform, modded Minecraft launcher. Specifically designed to distribute and launch Spectral Studios mods.',
    info2:
      'Traverse through the menu and pick your favorite mod published by Spectral Studios, click play and the launcher will do the rest. Always keep you up to date with the newest releases and videos from TinyTurtle and LittleLizard on YouTube 👀',
    url: 'https://www.youtube.com/channel/UCgnSuUx2jlBP9PvQP6fUzKA',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'visa.png',
    title: 'Futura',
    info:
      'Futura is a proof of concept, web application utilizes Visa Direct payment API to allow merchants and customers to conduct secure payments over the phone through one - time tokens; in effort to reduce the need for face-to-face transactions for small businesses during the COVID-19 pandemic.',
    info2: 'Developed during Summer 2020 Visa Intern Hackathon',
    url: 'https://phonepayhack.web.app/',
    repo: 'https://github.com/visahackathon2020/phonepayhack', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'minecraft.png',
    title: 'Minecraft Mod Development',
    info:
      'With over 1.6 milion downloads, I enhanced the magical world of Minecraft: Java Edition by adding hundreds of blocks and items, along with many quality of life changes.',
    info2: 'Notable projects include: Bewitchment, Rustic Witchcraft, Engmatica Mod',
    url: 'https://www.curseforge.com/members/samaritans07/projects',
    repo: 'https://github.com/Um-Mitternacht/Bewitchment', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'benjamin.c0427@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Samaritans07',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/anqingchen/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/anqingchen',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
