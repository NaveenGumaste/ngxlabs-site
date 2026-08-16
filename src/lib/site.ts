export const site = {
  name: "ngxlabs.tech",
  shortName: "ngx",
  url: "https://ngxlabs.tech",
  tagline: "Bold Brands, resonate deep.",
  email: "contact@naveengumaste.me",
  location: "Dharwad, Karnataka, India",
  locale: "en_IN",
  description:
    "ngxlabs.tech is a Dharwad tech studio led by Naveen Gumaste. DevOps, Cloud and Frontend, work for startups that need to ship.",
  founder: {
    name: "Naveen Gumaste",
    role: "DevOps/Cloud and Web Frontend engineer",
    photo: "/images/naveen-gumaste.webp",
    bio: "I'm a DevOps/Cloud and Web Frontend engineer focused on creating performant, accessible, uniquely designed digital products. I specialize in building fast web apps and cloud infrastructure for startups and small businesses.",
    education: [
      {
        school: "KLE Technological University, Hubballi",
        credential: "B.E. Electronics and Communication Engineering",
      },
      {
        school: "K.H Kabbur Institute of Engineering, Dharwad",
        credential: "Diploma in Electronics and Communication Engineering",
      },
    ],
    experience: [
      {
        company: "Congle Innovations Pvt Ltd",
        role: "Software Engineer (Intern)",
        dates: "Feb 2025 - June 2025",
        summary:
          "Built the complete frontend architecture for the CongleX Events ticketing platform using React.js and Tailwind CSS.",
      },
      {
        company: "KLETech-Center for Intelligent Mobility",
        role: "Project Intern",
        dates: "Nov 2023 - Dec 2024",
        summary:
          "Built autonomous driving and smart infrastructure systems with computer vision, sensor fusion, and full-stack development. Work covered ADAS, YOLO models, CARLA, and a smart parking web app with Express.js, Docker, Kubernetes, and Google Cloud.",
      },
    ],
    skills: {
      Frontend: [
        "HTML",
        "CSS",
        "JavaScript",
        "React 19",
        "Tailwind CSS 4",
        "Next.js 16",
        "TypeScript 5.5",
        "Vite",
        "Framer Motion",
        "Zod v4",
        "Zustand 5",
      ],
      Backend: [
        "Node.js",
        "MongoDB",
        "Supabase",
        "Appwrite",
        "Express.js",
        "Bun runtime",
      ],
      "DevOps / Cloud": [
        "Docker",
        "Kubernetes",
        "Google Cloud",
        "AWS",
        "GitHub Actions",
        "GitLab CI",
        "Terraform",
        "Pulumi",
        "Prometheus",
        "Grafana",
        "Redis",
      ],
      Tools: ["Git", "GitHub", "Figma", "VS Code"],
    },
  },
  social: {
    github: "https://github.com/NaveenGumaste",
    linkedin: "https://www.linkedin.com/in/naveenkumar-gumaste",
    x: "https://x.com/Z0D404",
    peerlist: "https://peerlist.io/zod404",
  },
  nav: [
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export const cta = {
  primary: { href: "/contact", label: "Start a project" },
  projects: { href: "/projects", label: "View projects" },
  blog: { href: "/blog", label: "Read the blog" },
  x: { href: site.social.x, label: "Follow on X" },
} as const;
