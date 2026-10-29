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
    tagline: "Crafting High-Performance Web Applications & Dynamic User Experiences",
    shortBio:
      "Passionate Front-End and MERN Stack Developer with expertise in building responsive, modern web applications with JavaScript, TypeScript, React, Next.js, Node.js, Express, and MongoDB. Driven fresher with deep hands-on project experience, clean code principles, and rapid problem-solving abilities.",
    location: "Dhaka, Bangladesh (Open to Worldwide Remote & Relocation)",
    email: "Robiaul555@gmail.com",
    phone: "+880 1718489836",
    experienceYears: "Fresher / Entry-Level Pro",
    statusText: "Actively seeking Junior / Associate Web Developer opportunities",
    resumeUrl: "/resume.pdf",
    github: "https://github.com/Robiaul-Aual-Masum1313",
    linkedin: "https://www.linkedin.com/in/ramasum/",
    twitter: "https://x.com",
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
      "As an entry-level engineer with no legacy biases, I bring relentless curiosity, rapid adaptability, up-to-date knowledge of the latest web standards, and genuine dedication to contributing to collaborative engineering teams."
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
      {
        degree: "Bachelor of Science in Computer Science & Engineering",
        institution: "University / Institute of Technology",
        period: "2021 - 2025",
        description: "Focused on Data Structures, Algorithms, Software Engineering, Database Management, and Web Technologies.",
      },
      {
        degree: "Full-Stack Web Development Bootcamp & Specialization",
        institution: "Advanced Web Development Certification",
        period: "2024",
        description: "Intensive hands-on training on MERN Stack, Next.js, TypeScript, REST APIs, and state management.",
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
        "Transactions and data integrity checks",
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
        "Touch gestures and accessible interactions",
      ],
      badge: "UI/UX",
    },
    {
      id: "tools",
      icon: "Terminal",
      title: "DevOps, Git & Best Practices",
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

  projects: [
    {
      id: "project-devsphere",
      title: "DevSphere — MERN Developer Hub",
      subtitle: "Full-Stack Community & Knowledge Sharing Platform",
      description:
        "A full-featured social platform for software engineers to publish technical articles, comment on discussions, bookmark tutorials, and connect with peers. Features JWT authentication, rich markdown editing, dynamic tagging, and user profile management.",
      category: "mern",
      categoryLabel: "MERN Full-Stack",
      techStack: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"],
      features: [
        "Secure User Registration & Login with JWT & bcrypt",
        "Rich Markdown article editor with live syntax preview",
        "Nested comment threads and interactive upvoting system",
        "User profile pages with published articles and activity logs",
        "Responsive drawer and dark/light UI modes",
      ],
      demoUrl: "https://devsphere-mern.vercel.app",
      githubUrl: "https://github.com",
      featured: true,
      accentColor: "#6366f1",
      gradient: "from-indigo-600 via-indigo-700 to-purple-800",
    },
    {
      id: "project-shopnex",
      title: "ShopNex — Modern E-Commerce Platform",
      subtitle: "Dynamic Storefront with Shopping Cart & Checkout",
      description:
        "A high-performance modern e-commerce storefront with live product filtering, multi-category navigation, instant search autocomplete, persistent cart drawer, and interactive simulated checkout workflow.",
      category: "fullstack",
      categoryLabel: "Full-Stack App",
      techStack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Redux Toolkit", "REST API"],
      features: [
        "Dynamic category filtering, price range slider & instant search",
        "Cart state management with persistent storage",
        "Interactive product modal with image carousel & variant select",
        "Simulated checkout process with input validation",
        "Optimized image loading with Next.js Image",
      ],
      demoUrl: "https://shopnex-store.vercel.app",
      githubUrl: "https://github.com",
      featured: true,
      accentColor: "#06b6d4",
      gradient: "from-cyan-600 via-sky-700 to-indigo-800",
    },
    {
      id: "project-taskmatrix",
      title: "TaskMatrix — Agile Kanban Board",
      subtitle: "Collaborative Project & Sprint Management",
      description:
        "An intuitive project tracking application designed for development teams. Supports drag-and-drop task organization across customizable columns (Backlog, In Progress, Review, Completed), priority tagging, and search filters.",
      category: "mern",
      categoryLabel: "MERN Stack",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      features: [
        "Interactive Drag-and-drop task movement across Kanban boards",
        "Task prioritization badges (High, Medium, Low) and due dates",
        "Subtasks checklist and progress indicators",
        "Full CRUD REST API with MongoDB backend",
        "Real-time task search, status filtering, and statistics",
      ],
      demoUrl: "https://taskmatrix-kanban.vercel.app",
      githubUrl: "https://github.com",
      featured: true,
      accentColor: "#8b5cf6",
      gradient: "from-purple-600 via-violet-700 to-indigo-900",
    },
    {
      id: "project-eatndivide",
      title: "EatNDivide Pro — Bill & Expense Splitter",
      subtitle: "Shared Expense Tracking for Roommates & Travel Groups",
      description:
        "Inspired by Shubham Vandara's portfolio project! A sleek financial utility for roommates, friends, and travel groups to log group expenses, split restaurant bills fairly, calculate who owes whom, and visualize spending by category.",
      category: "frontend",
      categoryLabel: "Frontend & TypeScript",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "LocalStorage"],
      features: [
        "Add, edit, and delete shared group expenses seamlessly",
        "Smart algorithm to calculate minimum repayment transactions",
        "Interactive spending breakdown charts with category badges",
        "Persistent data storage with LocalStorage & export capability",
        "100% responsive design built with Tailwind CSS",
      ],
      demoUrl: "https://eatndivide-pro.netlify.app",
      githubUrl: "https://github.com",
      featured: false,
      accentColor: "#10b981",
      gradient: "from-emerald-600 via-teal-700 to-cyan-800",
    },
    {
      id: "project-cinewave",
      title: "CineWave — Movie & TV Discovery Hub",
      subtitle: "Entertainment Explorer with TMDB API Integration",
      description:
        "An immersive media browsing platform powered by the TMDB API. Users can discover trending movies, explore detailed cast information, watch HD trailers, search with debounced queries, and manage their personal watchlist.",
      category: "frontend",
      categoryLabel: "Next.js & API",
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "TMDB API"],
      features: [
        "Live debounced search with instant poster suggestions",
        "Genre filtering, IMDb ratings, and overview summaries",
        "YouTube video trailer embed modal",
        "Personal bookmark/watchlist with local persistence",
        "Sleek cinematic dark UI with glassmorphic elements",
      ],
      demoUrl: "https://cinewave-app.vercel.app",
      githubUrl: "https://github.com",
      featured: false,
      accentColor: "#f43f5e",
      gradient: "from-rose-600 via-pink-700 to-purple-800",
    },
    {
      id: "project-cloudvault",
      title: "CloudVault — Secure Cloud Asset Manager",
      subtitle: "MERN Stack Media & Document Storage",
      description:
        "A full-stack file hosting dashboard allowing users to upload, organize, preview, and download documents and media files. Includes file size gauges, folder categorization, and secure download tokens.",
      category: "mern",
      categoryLabel: "MERN Full-Stack",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Multer", "Tailwind CSS"],
      features: [
        "Multi-file upload with progress bar indicators",
        "Media previews for images, PDF documents, and code files",
        "Folder organization, file tagging, and sorting by date/size",
        "Storage usage metric bar and quota limits",
        "REST API endpoints with secure file streaming",
      ],
      demoUrl: "https://cloudvault-demo.vercel.app",
      githubUrl: "https://github.com",
      featured: false,
      accentColor: "#3b82f6",
      gradient: "from-blue-600 via-indigo-700 to-slate-900",
    },
  ] as Project[],

  contact: {
    title: "Let's Build Something Exceptional Together",
    subtitle: "Have a job opening, internship opportunity, or project inquiry? My inbox is always open!",
    status: "Open for Full-time Roles, Internships & Freelance Contracts",
    notice: "As a fresher developer, I am available immediately for entry-level / junior front-end and full-stack positions.",
    email: "Robiaul555@gmail.com",
    phone: "+880 1915179084",
    location: "Dhaka, Bangladesh",
    availability: "Available immediately",
  },
};

