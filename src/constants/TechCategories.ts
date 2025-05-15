export interface BadgeItem {
  src: string;
  alt: string;
  link?: string;
}

export interface TechCategory {
  title: string;
  bg: string;
  badges: BadgeItem[];
}

export const techCategories: TechCategory[] = [
  {
    title: "Languages",
    bg: "bg-box",
    badges: [
      {
        alt: "JavaScript",
        src: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        alt: "C",
        src: "https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white",
        link: "https://en.wikipedia.org/wiki/C_(programming_language)",
      },
      {
        alt: "C++",
        src: "https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white",
        link: "https://isocpp.org/",
      },
      {
        alt: "Java",
        src: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white",
        link: "https://www.oracle.com/java/",
      },
      {
        alt: "Python",
        src: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
        link: "https://www.python.org/",
      },
      {
        alt: "TypeScript",
        src: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
        link: "https://www.typescriptlang.org/",
      },
    ],
  },
  {
    title: "Frontend",
    bg: "bg-box2",
    badges: [
      {
        alt: "HTML5",
        src: "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        alt: "CSS3",
        src: "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        alt: "React",
        src: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
        link: "https://react.dev/",
      },
      {
        alt: "Next JS",
        src: "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
        link: "https://nextjs.org/",
      },
      {
        alt: "SASS",
        src: "https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white",
        link: "https://sass-lang.com/",
      },
      {
        alt: "TailwindCSS",
        src: "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
        link: "https://tailwindcss.com/",
      },
      {
        alt: "MUI",
        src: "https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white",
        link: "https://mui.com/",
      },
      {
        alt: "Bootstrap",
        src: "https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white",
        link: "https://getbootstrap.com/",
      },
      {
        alt: "Axios",
        src: "https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white",
        link: "https://axios-http.com/",
      },
    ],
  },
  {
    title: "Backend",
    bg: "bg-box2",
    badges: [
      {
        alt: "NodeJS",
        src: "https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
        link: "https://nodejs.org/",
      },
      {
        alt: "Express.js",
        src: "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
        link: "https://expressjs.com/",
      },
      {
        alt: "Axios",
        src: "https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white",
        link: "https://axios-http.com/",
      },
      {
        alt: "Chai",
        src: "https://img.shields.io/badge/chai-A30701?style=for-the-badge&logo=chai&logoColor=white",
        link: "https://www.chaijs.com/",
      },
      {
        alt: "Mocha",
        src: "https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=Mocha&logoColor=white",
        link: "https://mochajs.org/",
      },
    ],
  },
  {
    title: "Database",
    bg: "bg-box",
    badges: [
      {
        alt: "MySQL",
        src: "https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white",
        link: "https://www.mysql.com/",
      },
      {
        alt: "MongoDB",
        src: "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
        link: "https://www.mongodb.com/",
      },
    ],
  },
  {
    title: "Data Science",
    bg: "bg-box",
    badges: [
      {
        alt: "Chart.js",
        src: "https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white",
        link: "https://www.chartjs.org/",
      },
      {
        alt: "NumPy",
        src: "https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white",
        link: "https://numpy.org/",
      },
      {
        alt: "Pandas",
        src: "https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white",
        link: "https://pandas.pydata.org/",
      },
      {
        alt: "Matplotlib",
        src: "https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black",
        link: "https://matplotlib.org/",
      },
      {
        alt: "scikit-learn",
        src: "https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white",
        link: "https://scikit-learn.org/",
      },
    ],
  },
  {
    title: "Tools",
    bg: "bg-box2",
    badges: [
      {
        alt: "Git",
        src: "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
        link: "https://git-scm.com/",
      },
      {
        alt: "GitLab",
        src: "https://img.shields.io/badge/gitlab-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white",
        link: "https://about.gitlab.com/",
      },
      {
        alt: "GitHub",
        src: "https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white",
        link: "https://github.com/",
      },
      {
        alt: "Postman",
        src: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white",
        link: "https://www.postman.com/",
      },
      {
        alt: "Jira",
        src: "https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white",
        link: "https://www.atlassian.com/software/jira",
      },
      {
        alt: "Canva",
        src: "https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white",
        link: "https://www.canva.com/",
      },
    ],
  },
];
