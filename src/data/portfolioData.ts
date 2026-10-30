export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: "all" | "mern" | "frontend" | "fullstack";
  categoryLabel: string;
  techStack: string[];
  features: string[];
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
  accentColor: string;
  gradient: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: number; // 1-100
    icon?: string;
    tag?: string;
  }[];
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  badge: string;
}

export const portfolioData = {
  personalInfo: {
    name: "Robiaul Aual Masum", // Change this to your name
    title: "Front-End & MERN Stack Developer",
    badge: "Available for Full-time Roles & Immediate Joining",
    tagline:
      "Crafting High-Performance Web Applications & Dynamic User Experiences",
    shortBio:
      "Passionate Front-End and MERN Stack Developer with expertise in building responsive, modern web applications with JavaScript, TypeScript, React, Next.js, Node.js, Express, and MongoDB. Driven fresher with deep hands-on project experience, clean code principles, and rapid problem-solving abilities.",
    location: "Dhaka, Bangladesh (Open to Worldwide Remote & Relocation)",
    email: "Robiaul555@gmail.com",
    phone: "+880 1915179084 | +880 01718489836",
    experienceYears: "Fresher / Entry-Level Pro",
    statusText:
      "Actively seeking Junior / Associate Web Developer opportunities",
    resumeUrl: "/resume.pdf",
    github: "https://github.com/Robiaul-Aual-Masum1313",
    linkedin: "https://www.linkedin.com/in/ramasum/",
    twitter: "https://x.com",
    avatarUrl: "/profile.png",
  },

  heroStats: [
    { label: "Projects Completed", value: "15+" },
    { label: "Core Technologies", value: "12+" },
    { label: "Git Commits", value: "850+" },
    { label: "Ready to Join", value: "Immediately" },
  ],

  about: {
    headline: "Driven by Curiosity, Grounded in Clean Architecture",
    paragraphs: [
      "Hello! I am a passionate, motivated Front-End and MERN Stack Developer with a solid foundation in modern web engineering. Although I am a fresher stepping into the professional arena, I have dedicated countless hours to mastering modern JavaScript (ES6+), TypeScript, React, Next.js, Node.js, Express, and MongoDB through building comprehensive full-stack applications from scratch.",
      "My passion lies in bridging the gap between elegant UI/UX design and scalable backend systems. I write modular, clean, and testable code, adhere strictly to mobile-first responsive principles, and obsess over user experience, speed, and accessibility.",
      "As an entry-level engineer with no legacy biases, I bring relentless curiosity, rapid adaptability, up-to-date knowledge of the latest web standards, and genuine dedication to contributing to collaborative engineering teams.",
    ],
    strengths: [
      {
        title: "Modern Frontend Mastery",
        desc: "Pixel-perfect, accessible, and responsive layouts built with React, Next.js (App Router), TypeScript, and Tailwind CSS.",
        icon: "Layout",
      },
      {
        title: "Full-Stack MERN Architecture",
        desc: "RESTful API development, JWT authentication, MongoDB schemas, and seamless client-server integration.",
        icon: "Server",
      },
      {
        title: "Clean & Maintainable Code",
        desc: "Component-driven architecture, reusable hooks, type safety, modular structures, and meaningful Git version control.",
        icon: "Code2",
      },
      {
        title: "Agile & Fast Learner",
        desc: "Quick at grasping new libraries, design patterns, debugging complex issues, and adapting to modern CI/CD workflows.",
        icon: "Zap",
      },
    ],
    education: [
      // {
      //   degree: "Bachelor of Science in Computer Science & Engineering",
      //   institution: "University / Institute of Technology",
      //   period: "2021 - 2025",
      //   description:
      //     "Focused on Data Structures, Algorithms, Software Engineering, Database Management, and Web Technologies.",
      // },
      {
        degree: "AI-Driven Full Stack Engineering ",
        institution: "Programming-hero",
        period: "2026",
        description:
          "Intensive hands-on training on MERN Stack, Next.js, TypeScript, REST APIs, and state management.",
      },
    ],
  },

  whatIDo: [
    {
      id: "frontend",
      icon: "Code",
      title: "Frontend Web Development",
      tagline: "Modern, interactive, and high-performance interfaces",
      description:
        "Building responsive, accessible, and high-performance user interfaces using React, Next.js, and TypeScript. I craft fluid animations, interactive state logic, and mobile-friendly experiences that delight users.",
      highlights: [
        "React.js (v18 & v19) with Hooks & Context API",
        "Next.js App Router, SSR, SSG & Server Actions",
        "TypeScript for robust, type-safe development",
        "Tailwind CSS for ultra-modern responsive design",
        "State management with Redux Toolkit and Zustand",
      ],
      badge: "Core Expertise",
    },
    {
      id: "mern",
      icon: "Layers",
      title: "MERN Full-Stack Development",
      tagline: "End-to-end web applications with seamless data flow",
      description:
        "Developing complete full-stack web applications connecting modern React/Next.js frontends to resilient Node.js & Express backends, integrated with MongoDB databases.",
      highlights: [
        "RESTful API design and implementation",
        "CRUD operations with Mongoose schemas & validation",
        "Secure JWT authentication and bcrypt password hashing",
        "Cloudinary file/image upload integration",
        "Role-based access control (RBAC)",
      ],
      badge: "Full-Stack",
    },
    {
      id: "backend",
      icon: "Server",
      title: "Backend & API Development",
      tagline: "Reliable, structured, and secure server-side logic",
      description:
        "Writing scalable Node.js and Express.js backends that handle business logic, database queries, authentication flows, error handling, and third-party integrations.",
      highlights: [
        "Node.js runtime & Express.js middleware pipeline",
        "Postman testing & API documentation",
        "CORS, Helmet & security best practices",
        "Error handling and request validation",
        "Environment configuration & dotenv security",
      ],
      badge: "Backend",
    },
    {
      id: "database",
      icon: "Database",
      title: "Database Modeling & Management",
      tagline: "Clean data structures and fast queries",
      description:
        "Designing schema models, indexing strategies, and relationships with MongoDB and Mongoose, ensuring data consistency and query efficiency for web applications.",
      highlights: [
        "MongoDB Atlas cloud database setup",
        "Mongoose schemas, models, and virtuals",
        "Aggregation pipelines & filtering",
        "Data normalization and indexing",
      ],
      badge: "Database",
    },
    {
      id: "responsive",
      icon: "Smartphone",
      title: "Responsive & Mobile-First UI/UX",
      tagline: "Pixel-perfect views on phones, tablets, and desktops",
      description:
        "Ensuring every application looks stunning and operates smoothly across all screen sizes, from mobile smartphones to ultra-wide desktop monitors.",
      highlights: [
        "Mobile-first responsive design principles",
        "Flexbox and CSS Grid layout mastery",
        "Cross-browser testing (Chrome, Firefox, Safari)",
        "Fluid typography and dynamic breakpoints",
      ],
      badge: "UI/UX",
    },
    {
      id: "tools",
      icon: "Terminal",
      title: "Git & Best Practices",
      tagline: "Continuous delivery and disciplined version control",
      description:
        "Leveraging modern development tools, Git version control, GitHub pull requests, Turbopack, and cloud deployment on Vercel, Netlify, and Render.",
      highlights: [
        "Git version control and collaborative branching",
        "CI/CD deployment on Vercel & Netlify",
        "ESLint, Prettier & clean coding standards",
        "Lighthouse performance auditing & optimization",
        "Modern npm & Turbopack build workflows",
      ],
      badge: "Workflow",
    },
  ],

  skillsData: [
    {
      category: "Frontend Development",
      skills: [
        { name: "JavaScript (ES6+)", level: 95, tag: "Language" },
        { name: "TypeScript", level: 85, tag: "Language" },
        { name: "React.js", level: 92, tag: "Library" },
        { name: "Next.js (App Router)", level: 90, tag: "Framework" },
        { name: "Tailwind CSS", level: 95, tag: "Styling" },
        { name: "HTML5 & CSS3", level: 98, tag: "Core" },
        { name: "Redux Toolkit / Zustand", level: 82, tag: "State" },
      ],
    },
    {
      category: "Backend & Database",
      skills: [
        { name: "Node.js", level: 88, tag: "Runtime" },
        { name: "Express.js", level: 89, tag: "Framework" },
        { name: "MongoDB & Mongoose", level: 86, tag: "Database" },
        { name: "RESTful APIs", level: 92, tag: "Architecture" },
        { name: "JWT Authentication", level: 88, tag: "Security" },
        { name: "Postman API Testing", level: 90, tag: "Testing" },
      ],
    },
    {
      category: "Tools & Deployment",
      skills: [
        { name: "Git & GitHub", level: 90, tag: "Version Control" },
        { name: "VS Code & Debugging", level: 95, tag: "Editor" },
        { name: "Vercel & Netlify", level: 92, tag: "Hosting" },
        { name: "Turbopack / Vite", level: 85, tag: "Bundler" },
        { name: "Responsive Web Design", level: 96, tag: "UI/UX" },
        { name: "npm / pnpm", level: 90, tag: "Package Manager" },
      ],
    },
  ],
  //  category : frontend and mern
  projects: [
    {
      id: "project-bazar-dor",
      title: "Bazar-Dor — Smart Market Price Tracker",
      subtitle: "Bangla Grocery Price Tracking & Market Comparison Platform",
      description:
        "A responsive market-price tracking platform designed to help users explore the latest prices of everyday essentials in Bangladesh. Users can browse products by category, compare prices across different markets, track daily price changes, and view detailed market-price information. Features secure authentication, protected product pages, user profile management, product sorting, and a Bengali-friendly interface.",
      category: "frontend",
      categoryLabel: "Next.js & TypeScript",
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "DaisyUI",
        "MongoDB",
        "Better Auth",
        "REST API",
        "Vercel",
      ],
      features: [
        "Real-time-style price ticker displaying product prices and daily changes",
        "Product categories with price sorting and responsive product cards",
        "Market-wise price comparison with minimum, maximum, and average prices",
        "Secure authentication with email/password and social login",
        "Protected product details and user profile management",
        "Responsive Bengali-first interface with light and dark themes",
        "Skeleton loading states, error handling, and user-friendly 404 pages",
      ],
      demoUrl: "https://bazar-dor-rho.vercel.app/",
      githubUrl: "https://github.com/Robiaul-Aual-Masum1313/Bazar-Dor",
      featured: true,
      accentColor: "#16A34A",
      gradient: "from-green-600 via-emerald-600 to-teal-700",
    },

    {
      id: "project-fitlog",
      title: "FitLog — Smart Workout Tracker",
      subtitle: "Workout Discovery, Planning & Fitness Progress Tracking",
      description:
        "A modern, responsive fitness platform designed to help users discover exercises, plan daily workouts, and build consistent training habits. Users can explore a curated workout library, view detailed exercise information, create personalized workout plans, save favorite exercises, and track completed workouts. Featuring a clean fitness-focused interface, interactive workout cards, and a responsive dark-themed design, FitLog makes workout planning simple and accessible.",
      category: "frontend",
      categoryLabel: "Next.js & TypeScript",
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "REST API",
        "Vercel",
      ],
      features: [
        "Curated workout library covering major muscle groups",
        "Detailed exercise pages with equipment, duration, difficulty, and instructions",
        "Daily workout planner for organizing selected exercises",
        "Save favorite workouts for quick access",
        "Mark exercises as completed and manage workout progress",
        "Exercise discovery with category-based browsing",
        "Responsive dark-themed interface optimized for desktop and mobile",
        "Interactive workout cards with fitness statistics and ratings",
      ],
      demoUrl: "https://fit-log-gules-seven.vercel.app/",
      githubUrl: "https://github.com/Robiaul-Aual-Masum1313/FitLog",
      featured: true,
      accentColor: "#A3E635",
      gradient: "from-lime-400 via-lime-500 to-emerald-600",
    },
    {
      id: "project-devstack",
      title: "DevStack — Development Stack Builder",
      subtitle: "A Personalized Technology Stack Builder for Developers",
      description:
        "A lightweight, interactive web application that helps developers choose, organize, and manage the technologies they want to use for their next project. Users can build a personalized development stack by adding preferred technologies, removing individual selections, or clearing the entire stack to start fresh. Built with React and TypeScript, DevStack features a clean, responsive interface and instant notifications to make technology selection and project planning simple and efficient.",
      category: "frontend",
      categoryLabel: "Frontend Development",
      techStack: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
        "React Toastify",
        "JSON",
      ],
      features: [
        "Add technologies to build a personalized development stack",
        "Remove individual technologies from the selected stack",
        "Clear all selected technologies with a single action",
        "Instant toast notifications for user interactions",
        "Flexible technology selection for different project requirements",
        "Reusable React components with TypeScript type safety",
        "Responsive user interface styled with Tailwind CSS",
        "Fast development and optimized production builds using Vite",
      ],
      demoUrl: "https://devstack-masum.netlify.app/",
      githubUrl: "https://github.com/Robiaul-Aual-Masum1313/DevStack",
      featured: true,
      accentColor: "#38BDF8",
      gradient: "from-sky-500 via-blue-600 to-indigo-700",
    },
  ] as Project[],

  contact: {
    title: "Let's Build Something Exceptional Together",
    subtitle:
      "Have a job opening, internship opportunity, or project inquiry? My inbox is always open!",
    status: "Open for Full-time Roles, Internships & Freelance Contracts",
    notice:
      "As a fresher developer, I am available immediately for entry-level / junior front-end and full-stack positions.",
    email: "Robiaul555@gmail.com",
    phone: "+880 1915179084",
    location: "Dhaka, Bangladesh",
    availability: "Available immediately",
  },
};
