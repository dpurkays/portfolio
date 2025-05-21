export type Project = {
  id: number;
  isFeatured?: boolean;
  slug: string;
  title: string;
  description: string;
  image: string;
  video?: string;
  github?: string;
  live?: string;
  techStack: string[];
  features: string[];
  challenges?: string;
  learnings?: string;
};

export const projectList: Project[] = [
  {
    id: 1,
    isFeatured: true,
    slug: "anime-matchmaker",
    title: "Anime Matchmaker 💖",
    description:
      "A full-stack anime recommendation app that suggests shows based on mood, history, and preferences. Built with React, TypeScript, Node.js, and Express.",
    image: "/images/anime-matchmaker.png",
    github: "https://github.com/dpurkays/anime-matchmaker",
    live: "https://animematchmaker.netlify.app/",
    techStack: [
      "React",
      "Sass",
      "Node.js",
      "Express",
      "Axios",
      "Google Gemini API",
      "Jikan API",
    ],
    features: [
      "Get recommendations based on mood",
      "Get recommendations based on favorite TV show or movie",
      "Suggests anime using user's watch history",
      "Seasonal trending anime display",
      "Fully responsive design (mobile, tablet, desktop)",
    ],
    challenges:
      "Handling rate limiting from the Jikan API while ensuring a smooth user experience. I implemented request throttling with Bottleneck, caching with Node-Cache, and added a retry mechanism with manual delays to deliver results gracefully instead of showing an empty state.",
    learnings:
      "This project taught me how to work across both the frontend and backend to build a complete web application. I learned how to prompt an AI model effectively, manage user interactions with React, handle changing URLs, and deploy a live app for the first time. It also helped me improve how I organize and manage app state to keep everything running smoothly.",
  },
  {
    id: 2,
    slug: "true-north-search",
    title: "True North Search 🍁",
    description:
      "An AI-powered web app developed in a 24-hour Industry Hackathon hosted by BrainStation in partnership with Microsoft. The platform helps Canadians identify genuinely Canadian-made products and offers local alternatives when available, with an AI-powered quiz to engage users and raise awareness.",
    video: "/videos/true-north-demo.mp4",
    image: "/images/true-north-search.png",
    techStack: ["React", "SASS", "Node.js", "Express.js", "Google Gemini API"],
    features: [
      "Real-time suggestions for local product alternatives",
      "Responsive and accessible UI for desktop and mobile",
      "AI-powered quiz that debunks myths about AI",
    ],
    challenges:
      "Working within a 24-hour timeframe was challenging in every way — from planning and building features to communicating effectively under pressure. We had to prioritize quickly, collaborate closely, and make fast decisions while still producing a polished result.",
    learnings:
      "Strengthened my ability to collaborate in high-pressure environments, implement dynamic routing, handle APIs, and integrate AI into user experiences. I also improved my code review and Git workflow practices.",
  },
  {
    id: 3,
    slug: "auto-scroller",
    title: "Auto Scroller",
    description:
      "A Chrome extension built specifically to improve the reading experience for visual storytelling formats like manhwas, mangas, and comics. It lets users scroll automatically at a chosen pace, making it easier to stay immersed without constant manual scrolling.",
    image: "/images/auto-scroller.png",
    github: "https://github.com/dpurkays/auto-scroller",
    techStack: ["JavaScript", "HTML", "CSS", "Chrome APIs"],
    features: [
      "Start/stop/adjust scroll speed",
      "Lightweight interface",
      "Ideal for teleprompting or focus reading",
    ],
    challenges:
      "The biggest challenge was testing the scroll behavior across different comic and webtoon readers to ensure a smooth, immersive experience. I spent time adjusting timing logic and manually testing in my browser to fine-tune the scrolling pace and prevent jitter or stutter.",
    learnings:
      "This was my first time building a Chrome extension, and it taught me how browser extensions interact with web pages through the DOM. I also learned how to test browser behavior manually and improve performance through careful timing adjustments.",
  },
  {
    id: 4,
    slug: "portfolio",
    title: "Portfolio Site",
    description:
      "A fully custom-built developer portfolio created to showcase my technical projects, skills, and personality. The design balances structure and creativity while maintaining performance and accessibility standards.",
    image: "/images/portfolio.png",
    github: "https://github.com/dpurkays/portfolio",
    live: "https://dula.dev/",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "tsParticles",
    ],
    features: [
      "Responsive design optimized for mobile, tablet, and desktop",
      "Dynamic project section",
      "Subtle UI animations using Framer Motion",
      "Animated background using tsParticles",
      "Modular and reusable components for easy updates",
    ],
    challenges:
      "The biggest challenge was translating design inspiration into a cohesive and clean user experience without a fixed layout plan. I explored different layout ideas, iterated on the visual hierarchy, and refined the interface gradually until it aligned with the tone I wanted to express.",
    learnings:
      "This was my first time working with both Next.js and Tailwind CSS. I learned how to structure a scalable Next.js project, build fast and responsive layouts using Tailwind utility classes, and apply consistent design decisions across components.",
  },
];
