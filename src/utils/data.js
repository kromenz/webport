export const SKILLS = [
  {
    title: "Frontend",
    icon: "/assets/images/frontend.png",
    skills: [
      { skill: "HTML5", percentage: "50%" },
      { skill: "CSS3 (Sass/SCSS)", percentage: "50%" },
      { skill: "JavaScript", percentage: "50%" },
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
      { skill: "SQL Server", percentage: "50%" },
      { skill: "Mongo DB", percentage: "30%" },
      { skill: "Firebase", percentage: "50%" },
    ],
  },
  {
    title: "Programming Languages",
    icon: "/assets/images/coding.png",
    skills: [
      { skill: "Python", percentage: "50%" },
      { skill: "C#", percentage: "30%" },
      { skill: "PHP", percentage: "30%" },
      { skill: "Kotlin", percentage: "50%" },
      { skill: "JAVA", percentage: "30%" },
    ],
  },
  {
    title: "Tools",
    icon: "/assets/images/tools.png",
    skills: [
      { skill: "Git & GitHub", percentage: "75%" },
      { skill: "Visual Studio Code", percentage: "75%" },
      { skill: "DBeaver", percentage: "70%" },
      { skill: "Postman", percentage: "70%" },
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
      "XML file into a relational database. First we have a non-relational database, where we make X-Path queries. Then the data is processed, and goes into a relational database. API's where created to make queries.",
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
];

export const WORK_EXPERIENCE = [
  {
    title: "Waiter at Petiscas Restaurant (Summer Job)",
    date: "July 2022 - September 2022",
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
    title: "More Work Coming Soon",
    date: "Present",
    responsibilities: [],
  },
];
