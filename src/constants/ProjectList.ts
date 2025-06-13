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

  challenge: string;
  solution: string;
  techStack: string[];
  features: string[];
  screenshots?: string[];
  obstacles?: string;
  learnings?: string;
  improvements?: string;
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
    challenge:
      "Users often struggle to find anime that matches their current mood or emotional state. Traditional recommendation systems focus on genres and popularity, but they lack the emotional nuance and context users are often looking for.",
    solution:
      "Anime Matchmaker delivers personalized anime recommendations using user mood, favorite shows, and watch history as inputs. By integrating the Jikan API and Gemini AI, it returns up to 10 recommendations at a time. It also includes trending seasonal picks and a responsive, user-friendly interface.",
    techStack: [
      "React",
      "JavaScript",
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
    // screenshots: ["/images/anime1.png", "/images/anime2.png"],
    obstacles:
      "At the start, fewer than 10% of requests were returning useful results due to aggressive rate limiting from the Jikan API. After implementing caching with Node-Cache, throttling using Bottleneck, and a retry mechanism with manual delays, I increased the successful response rate to over 90%. This ensured users consistently received 10 meaningful recommendations, dramatically improving both reliability and user experience.",
    learnings:
      "This project taught me how to work across both the frontend and backend to build a complete web application. I learned how to prompt an AI model effectively, manage user interactions with React, handle changing URLs, and deploy a live app for the first time. It also helped me improve how I organize and manage app state to keep everything running smoothly.",
    improvements:
      "I plan to extend Anime Matchmaker to include manga recommendations, allowing users to discover stories beyond anime. I also want to experiment with other anime APIs such as AniList, which offers more generous rate limits and enriched metadata, potentially improving both performance and recommendation quality. Additionally, I aim to integrate the official MyAnimeList API so users can log in and bookmark anime directly to their personal watch lists. These enhancements will make the app more versatile, user-friendly, and deeply integrated with the anime community.",
  },
  {
    id: 2,
    slug: "true-north-search",
    title: "True North Search 🍁",
    description:
      "An AI-powered web app developed in a 24-hour BrainStation x Microsoft Hackathon. True North Search helps Canadians identify genuinely Canadian-made products and discover local alternatives while building trust in AI through a friendly, informative experience.",
    video: "/videos/true-north-search-demo.mp4",
    image: "/images/true-north-search.png",
    challenge:
      "There’s a growing distrust of AI among the public, paired with increasing tension from cross-border trade between Canada and the U.S. Canadians often unknowingly support foreign products, lacking accessible tools to verify product origin or find local alternatives. At the same time, common misconceptions about AI make adoption difficult.",
    solution:
      "We built an AI-driven product search platform that helps users make more informed purchasing decisions while demystifying the role of AI. The app identifies whether a product is truly Canadian-made and suggests local alternatives if available. A built-in quiz adds an engaging, myth-busting experience that fosters camaraderie between Canadians and AI.",
    techStack: [
      "React",
      "JavaScript",
      "SASS",
      "Node.js",
      "Express.js",
      "Google Gemini API",
    ],
    features: [
      "Real-time suggestions for local product alternatives",
      "Responsive and accessible UI for desktop and mobile",
      "AI-powered quiz that debunks myths about AI",
    ],
    obstacles:
      "Working within a 24-hour hackathon posed challenges in scoping, aligning on a single solution, and executing under time pressure. Balancing Microsoft’s problem space with our vision for a Canadian-focused tool required fast pivots and clear team communication across time zones.",
    learnings:
      "I learned how to collaborate effectively under extreme time constraints, aligning quickly on team roles and product goals. It pushed me to prioritize features, build rapidly with clarity, and contribute meaningfully to both frontend functionality and UX decisions. I also sharpened my communication and Git workflow skills during this fast-paced build.",
  },
  {
    id: 3,
    slug: "auto-scroller",
    title: "Auto Scroller",
    description:
      "A lightweight Chrome extension designed to enhance the reading experience for visual storytelling formats like manhwas, mangas, and comics. Auto Scroller allows readers to scroll automatically at their own pace, maintaining immersion without the distraction of manual interaction.",
    image: "/images/auto-scroller.png",
    github: "https://github.com/dpurkays/auto-scroller",
    challenge:
      "Most digital comics and scroll-based content require frequent manual scrolling, which breaks immersion and disrupts the reading flow. I wanted to solve a personal pain point: maintaining a consistent rhythm while reading webtoons, without the fatigue of constant interaction.",
    solution:
      "I created a Chrome extension that lets users toggle automatic vertical scrolling at a comfortable pace. Users can toggle the scroll, set their preferred speed, and enjoy hands-free reading.",
    techStack: ["JavaScript", "HTML", "CSS", "Chrome APIs"],
    features: [
      "Start/stop/adjust scroll speed",
      "Lightweight, minimal UI",
      "Ideal for teleprompting or focused reading",
    ],
    learnings:
      "This was my first time building a Chrome extension, and it gave me the opportunity to experiment with Chrome APIs while solving a real problem I personally experience. I learned how to inject scripts into webpages, manipulate the DOM through content scripts, and control browser behavior. It was rewarding to build something functional and lightweight that improved a specific, day-to-day experience for me as a reader.",
    improvements:
      "I'd like to fine-tune the scroll speed for manhwa and webtoon readers by testing it with users and adjusting it based on real reading behavior. I also want to expand Auto Scroller to support long-form text, making it useful for reading articles, essays, and other written content in a hands-free way.",
  },
  {
    id: 4,
    slug: "portfolio",
    title: "Personal Developer Portfolio",
    description:
      "A custom-built developer portfolio showcasing my projects, skills, and style with Next.js and Tailwind CSS.",
    image: "/images/portfolio.png",
    github: "https://github.com/dpurkays/portfolio",
    live: "https://dula-purkaystha.vercel.app",
    challenge:
      "As a developer, I needed a space to showcase my work beyond GitHub repositories. I wanted to create a portfolio that reflects my personality, demonstrates my technical skills, and highlights the projects I’ve worked on in a visually engaging and organized way.",
    solution:
      "I built a personal portfolio site using Next.js, styled with Tailwind CSS, and added interactive animations using Motion. The site includes dedicated sections for project case studies, and an about page to present a holistic view of who I am as a developer.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Motion",
      "tsParticles",
    ],
    features: [
      "Responsive design",
      "Dynamic project section with detail pages",
      "Subtle UI animations using Motion",
      "Animated background using tsParticles",
      "Modular and reusable components for scalability",
    ],
    obstacles:
      "One of the biggest challenges was translating my creative ideas into a clean, functional layout. I had multiple design inspirations but struggled to decide on a cohesive aesthetic. I learned Tailwind CSS and animation tools like Motion and tsParticles on the fly while building the site, which added to the complexity.",
    learnings:
      "This project gave me hands-on experience with Next.js, Tailwind CSS, and Motion, deepening my understanding of component-based architecture and animation in modern web development. I also learned the importance of having a distinct UI mockup before development. Being indecisive with design led to time-consuming revisions.",
  },
];
