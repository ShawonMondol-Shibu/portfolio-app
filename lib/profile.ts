export type TechnicalSkill = {
  name: string;
  description: string;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
};

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  result?: string;
  board?: string;
};

export type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
};

export type ContactItem = {
  label: string;
  value: string;
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  status: string;
  location: string;
  yearsOfExperience: number;
  about: string;
  heroTagline: string;
  technicalSkills: TechnicalSkill[];
  projects: Project[];
  education: EducationItem[];
  experience: ExperienceItem[];
  contactItems: ContactItem[];
  phone: string;
  email: string;
  address: string;
  resumeUrl: string;
};

export const profile: Profile = {
  name: "Shawon Mondol Shibu",
  role: "Frontend Developer",
  status: "Available for new projects",
  location: "2400 Netrakona, Mymensingh",
  yearsOfExperience: 2,
  heroTagline:
    "Frontend developer passionate about creating beautiful, functional, and user-friendly web applications using the latest technologies and best practices.",
  about:
    "Expertise in modern frontend technologies and frameworks for building exceptional web experiences.",
  technicalSkills: [
    {
      name: "HTML5",
      description: "Semantic markup and accessibility",
    },
    {
      name: "CSS3",
      description: "Modern styling and animations",
    },
    {
      name: "JavaScript",
      description: "Modern JavaScript for interactive experiences",
    },
    {
      name: "SCSS",
      description: "Advanced CSS preprocessing",
    },
    {
      name: "ReactJS",
      description: "Component-based architecture",
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first styling and design systems",
    },
    {
      name: "Next.js",
      description: "Full-stack React framework",
    },
    {
      name: "TypeScript",
      description: "Type-safe JavaScript",
    },
    {
      name: "Node.js",
      description: "JavaScript runtime for backend services",
    },
    {
      name: "Express.js",
      description: "Backend framework for building APIs",
    },
    {
      name: "shadcn/ui",
      description: "Modern, accessible React component library",
    },
    {
      name: "Daisy UI",
      description: "Tailwind CSS component library",
    },
  ],
  projects: [
    {
      title: "Shibu-hub",
      description:
        "Product's buying shop, also providing electronics, shipping, and delivery services.",
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Recharts",
        "TanStack Query",
      ],
    },
    {
      title: "Furniro-Shop",
      description:
        "Furniture buying system where users can purchase their favourite furniture.",
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Clerk Auth",
      ],
    },
    {
      title: "E-commerce Dashboard",
      description:
        "A modern admin dashboard with real-time analytics and inventory management.",
      tech: ["Next.js", "Tailwind CSS", "TypeScript", "shadcn/ui", "Recharts"],
    },
    {
      title: "Memorial-Magazine",
      description: "A digital magazine experience to explore old memories.",
      tech: ["Next.js", "Tailwind CSS", "TypeScript", "shadcn/ui"],
    },
    {
      title: "Discount ME",
      description:
        "A restaurant booking and food ordering website focused on great deals.",
      tech: ["Next.js", "Tailwind CSS", "TypeScript", "shadcn/ui"],
    },
    {
      title: "Portfolio Website",
      description:
        "Responsive portfolio website showcasing modern web development practices and clean design principles.",
      tech: ["Next.js", "Tailwind CSS", "TypeScript", "shadcn/ui"],
    },
  ],
  education: [
    {
      degree: "Diploma in Engineering in C.S.T",
      institution: "Kishoreganj Polytechnic Institute",
      period: "2021 - 2024",
      result: "Result: 3.00 out of 4.00",
      board: "BTEB",
    },
    {
      degree: "S.S.C in Welding and Fabrication",
      institution: "Netrakona Govt. TSC",
      period: "2020",
      result: "GPA: 4.46 out of 5.00",
      board: "Technical",
    },
  ],
  experience: [
    {
      title: "Industrial Training in MERN-Stack Development",
      company: "BdCalling Academy",
      period: "2024",
      description:
        "Hands-on industrial training covering the full MERN stack with modern development practices and industry standards.",
      technologies: [
        "MongoDB",
        "Mongoose",
        "Express.js",
        "React.js",
        "Next.js",
        "Node.js",
        "Full-Stack Development",
      ],
    },
  ],
  contactItems: [
    {
      label: "Phone",
      value: "+880 1812-014377",
      href: "tel:+8801812014377",
    },
    {
      label: "Email",
      value: "shawonmondolshibu@gmail.com",
      href: "mailto:shawonmondolshibu@gmail.com",
    },
    {
      label: "Location",
      value: "2400 Netrakona, Mymensingh",
      href: "https://maps.google.com/?q=2400+Netrakona,+Mymensingh",
    },
    {
      label: "Facebook",
      value: "Facebook",
      href: "https://facebook.com",
    },
    {
      label: "LinkedIn",
      value: "LinkedIn",
      href: "https://linkedin.com",
    },
  ],
  phone: "+880 1812-014377",
  email: "shawonmondolshibu@gmail.com",
  address: "2400 Netrakona, Mymensingh",
  resumeUrl: "https://shawon-mondol-shibu.vercel.app",
};

