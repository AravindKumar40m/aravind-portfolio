// All site content lives here. Edit this file to change the text on the page.

export const profile = {
  name: 'Aravind Kumar M',
  role: 'Software Engineer',
  company: 'Log2Base2',
  location: 'Chennai, India',
  email: 'aravindkumar40m@gmail.com',
  linkedin: 'https://www.linkedin.com/in/aravindkumar-m-206702263/',
  github: 'https://github.com/AravindKumar40m',
  resume: '/Aravind-Kumar-M-Resume.pdf',
  tagline:
    'I build full-stack products for an AI-powered learning platform, with React, Node.js and MongoDB.',
}

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export const stats = [
  { value: 8, suffix: '+', label: 'features shipped to production at Log2Base2' },
  { value: 380, suffix: '', label: 'practice problems in Adaptive DSA Coach, with 8,271 test cases' },
  { value: 4, suffix: '', label: 'languages run in a self-hosted code sandbox' },
]

export const about = {
  paragraphs: [
    'I am a full-stack software engineer based in Chennai. At Log2Base2 I work on Leyaa.ai, an AI-powered adaptive learning platform, building features end to end: the React screens and the Node.js and MongoDB APIs behind them.',
    'I started there as an intern in January 2026 and moved to a full-time Software Engineer role after six months. Before that I built and deployed REST APIs as a remote full-stack intern for Ablelyf, in Doha.',
    'On my own time I build Adaptive DSA Coach, a practice platform that grades how you solve a problem, not only whether the tests pass.',
  ],
  facts: [
    { label: 'Based in', value: 'Chennai, India' },
    { label: 'Role', value: 'Software Engineer, Log2Base2' },
    { label: 'Education', value: 'M.Sc. IT (Integrated), CEG, Anna University' },
    { label: 'Works with', value: 'React, Node.js, MongoDB, AWS Lambda' },
  ],
}

export const experience = [
  {
    role: 'Software Engineer',
    company: 'Log2Base2',
    place: 'Chennai, on-site',
    date: 'Jul 2026 – Present',
    points: [
      'Built Ask Doubt AI for Leyaa.ai, an AI doubt-solving assistant with conversation history, thread continuation and a responsive light and dark interface. Tested its usage limits end to end before release.',
      'Shipped 8+ features to production between July and October 2026 across the React frontend and the Node.js and MongoDB backend, including Verified Profile, an Exit Test flow and in-app issue and question reporting.',
      'Built the Goal Share popup with per-goal tracking APIs, and social-preview images for shared profile links.',
      'Developed the Interview Preparation test flows: a multi-subject test engine with APIs, subject, topic and pattern levels, and a Goal Dashboard. Also fixed compiler-service bugs in error reporting, exit codes and the test harness.',
    ],
  },
  {
    role: 'Full-Stack Developer Intern',
    company: 'Log2Base2',
    place: 'Chennai, on-site',
    date: 'Jan 2026 – Jun 2026',
    points: [
      'Worked on Leyaa.ai across the frontend, backend, cloud services, databases, APIs and production deployments. Converted to a full-time Software Engineer after six months.',
    ],
  },
  {
    role: 'Full-Stack Developer Intern',
    company: 'Ablelyf',
    place: 'Doha, Qatar, remote',
    date: 'Jul 2024 – Dec 2024',
    points: [
      'Built and deployed RESTful APIs for scalable web applications, connecting the front end and back end.',
      'Contributed to three product launches.',
    ],
  },
]

export const featured = {
  name: 'Adaptive DSA Coach',
  tag: 'Flagship project · version 1 complete',
  description:
    'A data-structures and algorithms practice platform that grades how you solve a problem, not only whether the tests pass, and uses that to choose your next problem.',
  points: [
    'Its own Monaco editor and run flow. Code runs in a self-hosted Judge0 sandbox on Docker, in Python, JavaScript, Java and C++.',
    'Hidden tests, a mistake classifier, a complexity check on growing inputs, a hint ladder and a step-through debugger for Python.',
    'A placement quiz and per-concept Elo ratings drive a problem recommender with spaced review.',
    'Email and Google sign-in, with a consent step and a delete-my-data flow.',
  ],
  metrics: [
    { value: '380', label: 'problems' },
    { value: '8,271', label: 'test cases' },
    { value: '16', label: 'concepts' },
    { value: '33', label: 'test scripts' },
  ],
  stack: ['React', 'Vite', 'Monaco Editor', 'Node.js', 'Express', 'MongoDB', 'Docker', 'Judge0'],
  github: 'https://github.com/AravindKumar40m/adaptive-dsa-coach',
  caseStudy: '/case-studies/adaptive-dsa-coach',
  shots: [
    {
      id: 'path',
      tab: 'Path',
      src: '/images/dsa-coach-path.jpg',
      alt: 'The Path screen of Adaptive DSA Coach recommending a Strings review problem with a 60% expected chance of success',
      caption:
        'The Path picks one problem at a time and says why. Here it suggests a spaced review of Strings, with a 60% expected chance of success.',
    },
    {
      id: 'practice',
      tab: 'Practice',
      src: '/images/dsa-coach-practice.jpg',
      alt: 'The practice screen with the problem statement on the left and a Python code editor on the right',
      caption:
        'Its own editor and run flow. Run tries the visible examples and never changes your rating. Submit grades against every hidden test.',
    },
    {
      id: 'problems',
      tab: 'Problems',
      src: '/images/dsa-coach-problems.jpg',
      alt: 'The problem library listing 380 problems with topic and level, some locked until prerequisites are solved',
      caption: 'The library of 380 problems. Topics unlock as you solve problems in the topics they depend on.',
    },
  ],
}

// Content for /case-studies/adaptive-dsa-coach. Every number here comes from the project's own docs and repo.
export const caseStudy = {
  title: 'Adaptive DSA Coach',
  subtitle: 'A practice platform that grades how you solve a problem, not only whether you pass.',
  facts: [
    { label: 'Role', value: 'Built solo' },
    { label: 'Status', value: 'Version 1 complete' },
    { label: 'Stack', value: 'React, Node.js, MongoDB, Docker, Judge0' },
  ],
  problem: [
    'Most practice sites tell you pass or fail and leave the next choice to you. A learner who is stuck on arrays gets the same long list as one who is ready for graphs.',
    'The idea behind this project: grade the way a learner solves a problem, keep a skill rating for each concept, and use those ratings to choose the next problem.',
  ],
  steps: [
    { title: 'Place', text: 'An optional placement quiz sets a starting rating for each of 16 concepts.' },
    { title: 'Pick', text: 'The recommender chooses one problem at a time, aiming for a problem the learner can probably solve, and explains why.' },
    { title: 'Solve', text: 'The learner writes code in the built-in Monaco editor, with a hint ladder and a step-through debugger for Python.' },
    { title: 'Run', text: 'The code runs in a self-hosted Judge0 sandbox on Docker, in Python, JavaScript, Java or C++.' },
    { title: 'Grade', text: 'Hidden tests, a mistake classifier, and a complexity check that times the code on growing inputs.' },
    { title: 'Update', text: 'The per-concept rating changes, and tomorrow\'s problems follow from it, with spaced review for skills that fade.' },
  ],
  architecture: [
    { name: 'Browser', detail: 'React, Vite and the Monaco editor' },
    { name: 'API', detail: 'Node.js and Express, with Mongoose' },
    { name: 'MongoDB', detail: 'Problems, learners, attempts and logs' },
    { name: 'Judge0 sandbox', detail: 'Docker. Runs learner code with time and memory limits' },
    { name: 'LLM (optional)', detail: 'An "explain my result" feature that can be switched off' },
  ],
  decisions: [
    {
      title: 'Learner code never runs in the API',
      text: 'Everything a learner writes runs inside Judge0, in Docker. Infinite loops are killed and show as Time Limit Exceeded, and a division by zero shows as a Runtime Error. I tested both.',
    },
    {
      title: 'Start simple: one Elo rating per concept',
      text: 'I did not reach for machine learning. Each concept has a rating that updates after every graded submit. Training a model needs real learner data, and there was none yet.',
    },
    {
      title: 'Test ideas before shipping them',
      text: 'I built a richer knowledge model with uncertainty, forgetting and transfer between skills, and ran it in shadow mode: it predicts silently next to the live Elo and logs the result. An "arena" replays simulated learners across five worlds. Nothing got worse when an effect was absent, and the model was slightly better when forgetting was strong.',
    },
    {
      title: 'Let the data say no',
      text: 'I also built a second recommender. In simulation it was not clearly better than the first, and its one consistent gain was about 10% fewer sessions with three failures in a row. So the original picker stays the default, and the new one waits for a real pilot.',
    },
    {
      title: 'Privacy from the first day',
      text: 'Consent at sign-up with versioned wording, a "delete my data" flow, nothing recorded outside the editor, and rate limits on sign-up and login.',
    },
    {
      title: 'A real bug: Judge0 on Docker Desktop',
      text: 'Docker Desktop uses cgroup v2 but Judge0 1.13.1 expects v1, so I ran it without cgroups. Without them the JVM sized itself from the Docker VM and about one Java compile in seven failed. Capping the compiler memory fixed it.',
    },
  ],
  numbers: [
    { value: '380', label: 'problems with hidden tests' },
    { value: '8,271', label: 'test cases' },
    { value: '16', label: 'concepts' },
    { value: '4', label: 'languages in the sandbox' },
    { value: '5', label: 'simulated worlds in the arena' },
    { value: '33', label: 'test scripts' },
  ],
  limits: [
    'The recommender and knowledge model were compared on simulated learners that I wrote, not on real people. The results show how the policies behave, not what helps real learners.',
    'There are no real users yet, so the live system still uses the simple Elo rating.',
    'Judge0 runs without cgroups on my machine. A production host should be Linux with proper per-run memory limits.',
  ],
  next: [
    'Run a pilot with 30 to 50 real learners and keep their logs.',
    'Compare the knowledge model with Elo on those real logs, and decide about the second recommender then.',
  ],
}

export const projects = [
  {
    name: 'ProShop',
    description:
      'A full-stack store with product browsing, a cart, PayPal checkout and an admin panel to manage products, users and orders.',
    stack: ['React', 'Redux Toolkit', 'Node.js', 'MongoDB', 'PayPal'],
    github: 'https://github.com/AravindKumar40m/ProShop',
    // live: add the link here when the app is hosted again.
    shots: [
      {
        id: 'store',
        tab: 'Storefront',
        src: '/images/proshop-storefront.jpg',
        alt: 'ProShop storefront with a product carousel and a grid of four products with prices and ratings',
        caption: 'The storefront: a carousel of top products and the latest products with ratings and prices.',
      },
      {
        id: 'product',
        tab: 'Product',
        src: '/images/proshop-product.jpg',
        alt: 'ProShop product page showing an iPhone with price, stock status, quantity and an Add to Cart button',
        caption: 'A product page with price, stock status, quantity and add to cart.',
      },
      {
        id: 'admin',
        tab: 'Admin',
        src: '/images/proshop-admin.jpg',
        alt: 'ProShop admin product list with edit and delete buttons and a Create Product button',
        caption: 'The admin panel lists products with edit, delete and create actions. Users and orders have their own pages.',
      },
    ],
  },
  {
    name: 'MERN Estate',
    description:
      'Real-estate listings with email and Google sign-in, image upload, and search with filters for type, offers, parking and furnishing.',
    stack: ['React', 'Redux', 'Firebase', 'Node.js', 'MongoDB'],
    github: 'https://github.com/AravindKumar40m/mern-estate',
    // live: the hosted site's database no longer exists, so there is no working demo to link to.
  },
  {
    name: 'Student Dashboard',
    description:
      'Interactive charts for GPA trends, CGPA, grade distribution, attendance and class ranking, with data tables.',
    stack: ['React', 'Chart.js', 'AG Grid', 'Tailwind CSS'],
    github: 'https://github.com/AravindKumar40m/Student-dashboard',
    live: 'https://student-dashboard-self.vercel.app',
    shots: [
      {
        id: 'home',
        tab: 'Dashboard',
        src: '/images/dashboard-home.jpg',
        alt: 'Student dashboard home with the student name, an overall CGPA ring and a CGPA comparison chart',
        caption: 'The home view: overall CGPA as a progress ring, a class comparison chart and a semester GPA table. Sample data.',
      },
      {
        id: 'grades',
        tab: 'Grades',
        src: '/images/dashboard-grades.jpg',
        alt: 'Two charts, a pie chart of grade counts for all students and a doughnut chart for one student',
        caption: 'Grade distribution for the whole class next to the individual student. Sample data.',
      },
      {
        id: 'attendance',
        tab: 'Attendance',
        src: '/images/dashboard-attendance.jpg',
        alt: 'Attendance tracking chart with a bar of attendance percentage for each subject',
        caption: 'Attendance percentage for each subject. Sample data.',
      },
    ],
  },
  {
    name: 'AI Quiz Builder',
    description:
      'Type a topic and get a multiple-choice quiz with answers and explanations from the Gemini API, saved in MongoDB.',
    stack: ['React', 'Express', 'MongoDB', 'Gemini API'],
    github: 'https://github.com/AravindKumar40m/AI_Quiz_Builder',
    shots: [
      {
        id: 'quiz',
        tab: 'Quiz',
        src: '/images/quiz-builder-result.jpg',
        alt: 'AI Quiz Builder showing a generated Python basics quiz with options, the answer and an explanation',
        caption: 'A generated quiz on "Python basics": each question has four options, the answer and a short explanation.',
      },
    ],
  },
  {
    name: 'ScheduLink',
    description:
      'A timetable generator for universities and colleges, with a Django REST API and a React front end.',
    stack: ['Django REST', 'Python', 'React'],
    github: 'https://github.com/AravindKumar40m/ScheduLink-TT',
  },
]

export const skills = [
  { group: 'Languages', items: ['JavaScript (ES6+)', 'Python', 'C++', 'SQL'] },
  { group: 'Frontend', items: ['React', 'Redux Toolkit', 'Tailwind CSS', 'HTML5', 'CSS3', 'Vite', 'Material-UI', 'Chart.js'] },
  { group: 'Backend', items: ['Node.js', 'Express', 'REST APIs', 'JWT and Google sign-in', 'Mongoose', 'Django', 'FastAPI'] },
  { group: 'Data', items: ['MongoDB', 'MySQL'] },
  { group: 'Cloud and tools', items: ['AWS Lambda', 'Docker', 'Git', 'GitHub'] },
  { group: 'Core concepts', items: ['Full-stack development', 'REST API design', 'Data structures and algorithms', 'Agile'] },
]

export const education = [
  {
    title: 'M.Sc. Information Technology (Integrated)',
    place: 'College of Engineering Guindy, Anna University',
    date: 'Dec 2021 – Apr 2026',
    detail: 'CGPA 7.41',
  },
]

export const leadership = [
  {
    title: "Technical Lead, Mathirx'25 Math Colloquium",
    place: 'College of Engineering Guindy',
    date: 'Sep 2024 – Mar 2025',
    text: 'Led development and launch of the event website and directed the team using agile practices.',
  },
  {
    title: 'Techops Organizer, CEG Tech Forum',
    place: 'College of Engineering Guindy',
    date: 'Aug 2023 – Feb 2024',
    text: 'Part of the team that built the Kurukshetra 2024 website in React.',
  },
]
