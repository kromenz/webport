export const SKILLS = [
  {
    title: "Frontend",
    icon: "/assets/images/frontend.png",
    skills: [
      { skill: "HTML5", percentage: "75%" },
      { skill: "CSS3 (Sass/SCSS)", percentage: "60%" },
      { skill: "Tailwind", percentage: "60%" },
      { skill: "React.js", percentage: "50%" },
    ],
  },
  {
    title: "Backend",
    icon: "/assets/images/backend.png",
    skills: [
      { skill: "Node.js", percentage: "50%" },
      { skill: "Express.js", percentage: "30%" },
    ],
  },
  {
    title: "Databases",
    icon: "/assets/images/db.png",
    skills: [
      { skill: "Postgres", percentage: "70%" },
      { skill: "SQL Server", percentage: "80%" },
      { skill: "Mongo DB", percentage: "30%" },
      { skill: "Firebase", percentage: "50%" },
      { skill: "Neo4J", percentage: "20%" },
    ],
  },
  {
    title: "Programming Languages",
    icon: "/assets/images/coding.png",
    skills: [
      { skill: "Python", percentage: "50%" },
      { skill: "C#", percentage: "30%" },
      { skill: "C", percentage: "30%" },
      { skill: "PHP", percentage: "30%" },
      { skill: "Kotlin", percentage: "50%" },
      { skill: "JAVA", percentage: "30%" },
      { skill: "JavaScript", percentage: "50%" },
      { skill: "Typescript", percentage: "30%" },
    ],
  },
  {
    title: "Tools",
    icon: "/assets/images/tools.png",
    skills: [
      { skill: "Git & GitHub", percentage: "75%" },
      { skill: "Visual Studio Code", percentage: "75%" },
      { skill: "DBeaver", percentage: "70%" },
      { skill: "Docker", percentage: "50%" },
      { skill: "Postman", percentage: "50%" },
      { skill: "Insomnia", percentage: "50%" },
    ],
  },
  {
    title: "Soft Skills",
    icon: "/assets/images/soft-skills.png",
    skills: [
      { skill: "Problem-solving", percentage: "75%" },
      { skill: "Teamwork", percentage: "80%" },
      { skill: "Empathy", percentage: "80%" },
      { skill: "Creative Thinking", percentage: "65%" },
      { skill: "Organization", percentage: "90%" },
      { skill: "Communication", percentage: "90%" },
    ],
  },
];

export const PROJECTS = [
  {
    title: "XML_Parsing - RPC_Server",
    imageUrl: "/assets/images/xml.png",
    description:
      "XML file uploaded to a relational database. First we have a non-relational database, where we make X-Path queries. Then the data is processed, and goes into a relational database. API's where created to make queries.",
    githubUrl: "https://github.com/DiogoBernardes/TP2-IS",
    videoUrl: "https://youtu.be/s4XdCShQvlY",
  },
  {
    title: "T-Pot Honeypot",
    imageUrl: "/assets/images/honey.png",
    description:
      "In this project, T-Pot was installed in a Google Cloud instance, using the repository linked below. Gathering valuable information from the hackers attacks, and then analysing it for a mini project.",
    githubUrl: "https://github.com/telekom-security/tpotce",
    videoUrl: "https://youtu.be/fe6f_AdqOiM",
  },
  {
    title: "Journeys - Mobile App",
    imageUrl: "/assets/images/journeys.png",
    description:
      "This app has the purpose to be a travels management app, allowing users to create trips, share those trips, add locations to the trips, etc. For this project, an API was made.  ",
    githubUrl: "https://github.com/yourusername/project3",
    videoUrl: "https://youtu.be/y3Dcxy0BGRA",
  },
  {
    title: "Talent Management App",
    imageUrl: "/assets/images/c_sharp.png",
    description: "In C#, this project is a talent management web app.",
    githubUrl: "https://github.com/kromenz/TP-ES2",
    videoUrl: "https://youtu.be/LIPNNmdEoNg",
  },
  {
    title: "Majorities Board Game w/ AI",
    imageUrl: "/assets/images/maj.png",
    description:
      "In Python, this project consists in the Majorities Board game, can be played in duos, or against the computer, with the Random, Monte Carlo and Greedy algorithms.",
    githubUrl: "https://github.com/kromenz/Majorities",
    videoUrl: "https://youtu.be/KBlNqazdbkM",
  },
  {
    title: "Web Scrapping / Sentiment Analysis",
    imageUrl: "/assets/images/aoop_tp3.png",
    description:
      "In this project, a Python script was made to scrap information in the IMDb website, to gather comments in movies. After, using a notebook created in Kaggle, the dataset is processed and given the positive or negative quotation. Then this information is passed to Kibana, using Elastic. The dashboard created gives a visual interpretation of the data gathered.",
    githubUrl: "https://github.com/diogoPinheiro11/tp3-project",
    videoUrl: "https://www.youtube.com/watch?v=zZJqdd4O98g",
  },
  {
    title: "Phaser Racing Game",
    imageUrl: "/assets/images/phaser.png",
    description:
      "In this project, a racing game in 2D, using the Phaser Framework.",
    githubUrl: "https://github.com/kromenz/TECMUL---TP1---28234",
  },
  {
    title: "PHP Expense Management App",
    imageUrl: "/assets/images/php.png",
    description:
      "This project is an Expense Managament Web App, using PHP for backend, and HTML, Bootstrap for the frontend.",
    githubUrl: "https://github.com/diogoPinheiro11/php-project",
  },
  {
    title: "Borgwarner Testing Apps",
    imageUrl: "/assets/images/borg.png",
    description:
      "In cooperation with Borgwarner, this project was degined to investigate applications that provided usefull insights in testing of web apps, in this case a Python web app. ",
    githubUrl: "https://github.com/diogoPinheiro11/borgwarner-test-app",
  },
  {
    title: "Money Map",
    imageUrl: "/assets/images/moneymap.png",
    description:
      "expense management application developed with React and Prisma, helping you monitor and organize your finances in a simple and intuitive way. ",
    githubUrl: "https://github.com/kromenz/Money-Map",
  },
  {
    title: "n2yo-api example",
    description:
      "Micro service in Node + Typescript, in which the n2yo API is consumed, exposing a simple endpoint. ",
    githubUrl: "https://github.com/kromenz/n2yo-api",
  },
  {
    title: "Face-Detection — Real-time detection, tracking & recognition",
    imageUrl: "/assets/images/face_det.png",
    description:
      "A small, practical project that runs real-time face detection → landmark refinement → tracking → recognition with a focus on being fast and configurable. It uses a hybrid approach: a fast detector (OpenCV Haar), landmark-based refinement, lightweight trackers (KCF/CSRT) and face_recognition encodings for identity matching. Includes a persistent cache for face encodings so you don't re-encode images every run. ",
    githubUrl: "https://github.com/kromenz/Face-Detection",
  },
  {
    title: "Magic Graph / Reports",
    imageUrl: "/assets/images/magic.png",
    description:
      "Small demo project. It collects collectible-card data (example: Scryfall for Magic: The Gathering), stores it in Neo4J, and produces a PDF report rendered from HTML using Node + TypeScript and Puppeteer.",
    githubUrl: "https://github.com/kromenz/magic-graph-report",
  },
];

export const WORK_EXPERIENCE = [
  {
    title: "Waiter at Petiscas Restaurant (Summer Job)",
    date: "Jul 2022 - Sep 2022",
    responsibilities: [
      "Provided excellent customer service, ensuring quick and efficient service which resulted in positive feedback and increased customer satisfaction.",
      "Managed reservations and table organization to optimize the restaurant's capacity during peak hours.",
      "Coordinated with the kitchen staff to ensure orders were fulfilled correctly and in a timely manner.",
      "Developed strong communication and customer service skills.",
      "Learned to work effectively under pressure in a dynamic and fast-paced environment.",
      "Improved time management and organizational skills to handle multiple tasks simultaneously.",
      "Enhanced teamwork and collaboration skills to ensure a smooth dining experience for guests.",
    ],
  },
  {
    title: "BorgWarner (Summer Internship)",
    date: "Jul 2024 - Aug 2024",
    responsibilities: [
      "I began my internship at BorgWarner focusing on integrating Jasper with Python to generate various reports for the factory's production lines. My key responsibilities include:",
      [
        "Developing Python scripts to interface with JasperReports for automated report generation;",
        "Reworking and customizing detailed reports to meet the diverse needs of different production lines;",
        "Collaborating with team members to troubleshoot and resolve any issues related to data and report generation.",
      ],
      "Developed an application from scratch for suggestions, allowing operators or any company personnel to make proposals for improvements. A supervisor would then be assigned to evaluate and, if viable, oversee the implementation process.",
      "Throughout my internship, I was fully integrated into the department's processes and was consistently tested in various situations, always making myself available to assist wherever needed.",
    ],
  },
  {
    title: "BorgWarner (Professional Internship)",
    date: "Sep 2024 - Jun 2025",
    responsibilities: [
      "I am continuing my internship at BorgWarner, focusing on the development of a new project, Maintenance Management System (MMS). This system streamlines all aspects of factory maintenance.",

      "Key contributions and features of the MMS include:",

      [
        "Frontend Interface for SAP: enables the opening/closing of corrective and preventive work orders, including autonomous (operator-led) and predictive maintenance modules.",
        "Real-Time Notifications: sends SMS alerts to technicians when maintenance is requested, logs technician inputs (e.g., time tracking, photos upload).",
        "System Integration and Reporting: transfers data to SAP via RPA and auto-generates shift/daily reports (using Jasper).",
      ],

      "I also collaborate with the Digital Transformation team to identify the factory needs, refine system features, and ensure seamless integration with existing SAP workflows.",

      "My involvement in this MMS project demonstrates my ability to manage complex, multi-faceted initiatives in a demanding production environment.",
    ],
  },
];
