export default {
  fullName: "Diptanshu Barua",
  firstName: "Diptanshu",
  lastName: "Barua",
  role: "Software Developer",
  bio: "A Tech Lover and developer passionate about open-source, design, and tinkering with technology.",
  avatar: "/assets/img/profile.jpg",
  github_username: "d-barua",

  ui: {
    projectsTitle: "Selected Works",
    projectsSubtitle: "Recent <span class='text-gray-500 italic font-serif'>Creations</span>"
  },

  navigation: {
    main: [
      { title: "Home", url: "/" },
      { title: "Projects", url: "/projects" },
      { title: "About", url: "/about" },
    ],
  },

  socials: [
    { platform: "GitHub", url: "https://github.com/d-barua", icon: "fab fa-github" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/diptanshu-barua", icon: "fab fa-linkedin" },
  ],

  about: {
    title: "Behind the Code",
    image: "/assets/img/profile.jpg", // Change this to your actual image name
    paragraphs: [
      "I'm a software developer and student passionate about open-source, design, and tinkering with technology. I enjoy exploring how things work under the hood, whether I'm preparing for my semester exams or diving into new tech stacks.",
      "Recently, my focus has been on building interactive and cross-platform experiences. I love experimenting with logic and architecture, from scripting a complete UNO game in Python to evaluating tools like Tauri and React for modern application development.",
      "When I'm not coding, I'm always looking for the next challenge to level up my engineering skills."
    ]
  },

  skills: [
    {
      category: "Languages & Core",
      items: [
        { name: "Python", icon: "devicon-python-plain" },
        { name: "JavaScript", icon: "devicon-javascript-plain" },
        { name: "TypeScript", icon: "devicon-typescript-plain" },
        { name: "HTML/CSS", icon: "devicon-html5-plain" }
      ]
    },
    {
      category: "Frameworks & Libs",
      items: [
        { name: "React", icon: "devicon-react-original" },
        { name: "Next.js", icon: "devicon-nextjs-plain" },
        { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain" },
        { name: "Ubuntu", icon: "devicon-ubuntu-plain" }
      ]
    },
    {
      category: "Tools & Version Control",
      items: [
        { name: "Git", icon: "devicon-git-plain" },
        { name: "GitHub", icon: "devicon-github-original" },
        { name: "VS Code", icon: "devicon-vscode-plain" }
      ]
    },
    {
      category: "Design and Media",
      items: [
        { name: "Canva", icon: "devicon-canva-original" },
      ]
    }
  ]
};