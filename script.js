/* ================================================
   TechPath — IT Career Guidance
   script.js
   ================================================ */

/* ================================================
   DATA — All IT Job Roles
   ================================================ */
const jobs = [
  {
    id: 'swe',
    title: 'Software Engineer',
    icon: '💻',
    color: 'rgba(0,245,160,0.15)',
    tag: 'High Demand',
    salary: '₹8–35 LPA',
    category: 'Development',
    top: true,
    desc: 'Design and build scalable software applications and systems.',
    avgSalary: '₹18 LPA',
    minSalary: '₹8 LPA',
    maxSalary: '₹35 LPA',
    demand: 'Very High',
    skills: [
      { name: 'Data Structures & Algorithms', level: 'Expert',       pct: 90 },
      { name: 'Java / Python / C++',          level: 'Expert',       pct: 90 },
      { name: 'System Design',                level: 'Advanced',     pct: 75 },
      { name: 'SQL / NoSQL Databases',        level: 'Advanced',     pct: 70 },
      { name: 'Git & Version Control',        level: 'Intermediate', pct: 60 },
      { name: 'REST APIs',                    level: 'Advanced',     pct: 75 },
    ],
    roadmap: [
      { phase: 'Month 1–2',   title: 'Programming Fundamentals',   desc: 'Learn a core language (Java/Python), understand variables, loops, functions, OOP.',      duration: '2 months' },
      { phase: 'Month 3–4',   title: 'Data Structures & Algorithms', desc: 'Arrays, linked lists, trees, graphs, sorting, searching algorithms.',                  duration: '2 months' },
      { phase: 'Month 5–6',   title: 'Databases & Backend',         desc: 'SQL, MySQL/PostgreSQL, REST API design with Node/Django.',                               duration: '2 months' },
      { phase: 'Month 7–8',   title: 'System Design Basics',        desc: 'Scalability, load balancing, caching, microservices fundamentals.',                      duration: '2 months' },
      { phase: 'Month 9–10',  title: 'Projects & Portfolio',        desc: 'Build 3 real projects, contribute to open source, deploy on GitHub.',                    duration: '2 months' },
      { phase: 'Month 11–12', title: 'Internship & Placement',      desc: 'Apply for internships, crack coding rounds on LeetCode/HackerRank.',                     duration: '2 months' },
    ],
    resources: [
      { type: 'Book',      name: 'Clean Code – Robert Martin', desc: 'Writing maintainable production code',            free: false, icon: '📖', color: 'rgba(255,200,0,0.15)'   },
      { type: 'Playlist',  name: 'Software Engineering — YouTube Playlist', desc: 'Curated playlist covering core software engineering topics', free: true, icon: '▶️', color: 'rgba(0,212,255,0.12)', url: 'https://www.youtube.com/watch?v=Ubg3PenEdNw&list=PLEiEAq2VkUUJfeP9bgWAEs-NbGJyYXc-v' },
    ],
  },
  {
    id: 'ds',
    title: 'Data Scientist',
    icon: '📊',
    color: 'rgba(0,212,255,0.15)',
    tag: 'Top Paid',
    salary: '₹10–50 LPA',
    category: 'Data',
    top: true,
    desc: 'Analyze complex data to extract actionable business insights using ML.',
    avgSalary: '₹22 LPA',
    minSalary: '₹10 LPA',
    maxSalary: '₹50 LPA',
    demand: 'Very High',
    skills: [
      { name: 'Python (Pandas, NumPy)',     level: 'Expert',       pct: 90 },
      { name: 'Machine Learning',           level: 'Expert',       pct: 85 },
      { name: 'Statistics & Probability',   level: 'Advanced',     pct: 80 },
      { name: 'SQL',                        level: 'Advanced',     pct: 70 },
      { name: 'Data Visualization',         level: 'Advanced',     pct: 70 },
      { name: 'Deep Learning (TensorFlow)', level: 'Intermediate', pct: 60 },
    ],
    roadmap: [
      { phase: 'Month 1–2',   title: 'Python & Math Foundations', desc: 'Python programming, linear algebra, statistics, probability.',                                duration: '2 months' },
      { phase: 'Month 3–4',   title: 'Data Wrangling',            desc: 'Pandas, NumPy, data cleaning, exploratory data analysis.',                                    duration: '2 months' },
      { phase: 'Month 5–6',   title: 'Machine Learning',          desc: 'Supervised/unsupervised learning with scikit-learn.',                                          duration: '2 months' },
      { phase: 'Month 7–8',   title: 'Deep Learning & NLP',       desc: 'Neural networks, CNNs, RNNs, NLP with TensorFlow/PyTorch.',                                   duration: '2 months' },
      { phase: 'Month 9–10',  title: 'ML Projects',               desc: 'End-to-end projects, Kaggle competitions, model deployment.',                                  duration: '2 months' },
      { phase: 'Month 11–12', title: 'Industry Applications',     desc: 'Business case studies, domain expertise, interviews.',                                         duration: '2 months' },
    ],
    resources: [
      { type: 'Course',   name: 'Andrew Ng ML Course',   desc: 'The gold standard ML course on Coursera',             free: true,  icon: '🤖', color: 'rgba(0,212,255,0.15)'   },
      { type: 'Platform', name: 'Kaggle',                desc: 'Competitions and real-world datasets',                 free: true,  icon: '🏆', color: 'rgba(255,200,0,0.15)'   },
      { type: 'Course',   name: 'fast.ai Deep Learning', desc: 'Practical deep learning for coders',                  free: true,  icon: '🧠', color: 'rgba(0,245,160,0.15)'   },
      { type: 'Book',     name: 'Hands-On ML – Géron',   desc: 'Comprehensive ML with scikit-learn & TF',             free: false, icon: '📗', color: 'rgba(255,107,107,0.15)' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps Engineer',
    icon: '⚙️',
    color: 'rgba(255,200,0,0.15)',
    tag: 'Growing Fast',
    salary: '₹10–45 LPA',
    category: 'Infrastructure',
    top: true,
    desc: 'Bridge development and operations with automation and CI/CD pipelines.',
    avgSalary: '₹20 LPA',
    minSalary: '₹10 LPA',
    maxSalary: '₹45 LPA',
    demand: 'High',
    skills: [
      { name: 'Linux & Shell Scripting',  level: 'Expert',       pct: 90 },
      { name: 'Docker & Kubernetes',      level: 'Expert',       pct: 85 },
      { name: 'CI/CD Pipelines',          level: 'Advanced',     pct: 80 },
      { name: 'AWS / Azure / GCP',        level: 'Advanced',     pct: 75 },
      { name: 'Terraform / Ansible',      level: 'Intermediate', pct: 65 },
      { name: 'Monitoring (Prometheus)',  level: 'Intermediate', pct: 60 },
    ],
    roadmap: [
      { phase: 'Month 1–2',   title: 'Linux & Networking',        desc: 'Linux commands, bash scripting, TCP/IP fundamentals.',                                       duration: '2 months' },
      { phase: 'Month 3–4',   title: 'Containers & Docker',       desc: 'Docker, images, containers, Docker Compose.',                                                duration: '2 months' },
      { phase: 'Month 5–6',   title: 'CI/CD & Version Control',   desc: 'Git, Jenkins, GitHub Actions, automated pipelines.',                                         duration: '2 months' },
      { phase: 'Month 7–8',   title: 'Kubernetes & Orchestration',desc: 'K8s clusters, pods, deployments, services.',                                                 duration: '2 months' },
      { phase: 'Month 9–10',  title: 'Cloud Platforms',           desc: 'AWS/Azure/GCP core services, cloud architecture.',                                            duration: '2 months' },
      { phase: 'Month 11–12', title: 'IaC & Monitoring',          desc: 'Terraform, Ansible, Prometheus, Grafana, ELK stack.',                                        duration: '2 months' },
    ],
    resources: [
      { type: 'Course', name: 'KodeKloud DevOps',       desc: 'Hands-on DevOps learning path',            free: false, icon: '🛠️', color: 'rgba(255,200,0,0.15)'  },
      { type: 'Cert',   name: 'AWS Certified DevOps',   desc: 'Industry-standard cloud certification',    free: false, icon: '☁️', color: 'rgba(0,212,255,0.15)'   },
      { type: 'Docs',   name: 'Kubernetes Docs',        desc: 'Official K8s documentation',               free: true,  icon: '⛵', color: 'rgba(0,245,160,0.15)'   },
    ],
  },
  {
    id: 'cybersec',
    title: 'Cybersecurity Analyst',
    icon: '🔐',
    color: 'rgba(255,107,107,0.15)',
    tag: 'Critical Role',
    salary: '₹8–40 LPA',
    category: 'Security',
    top: true,
    desc: 'Protect systems and networks from cyber threats and vulnerabilities.',
    avgSalary: '₹18 LPA',
    minSalary: '₹8 LPA',
    maxSalary: '₹40 LPA',
    demand: 'High',
    skills: [
      { name: 'Network Security',               level: 'Expert',       pct: 90 },
      { name: 'Ethical Hacking / Pen Testing',  level: 'Advanced',     pct: 80 },
      { name: 'SIEM Tools',                     level: 'Advanced',     pct: 75 },
      { name: 'Cryptography',                   level: 'Intermediate', pct: 65 },
      { name: 'Incident Response',              level: 'Advanced',     pct: 78 },
      { name: 'Python Scripting',               level: 'Intermediate', pct: 60 },
    ],
    roadmap: [
      { phase: 'Month 1–2',  title: 'Networking Fundamentals', desc: 'OSI model, TCP/IP, DNS, HTTP, firewalls.',                                                      duration: '2 months' },
      { phase: 'Month 3–4',  title: 'Security Concepts',       desc: 'CIA triad, threat modeling, vulnerability assessment.',                                         duration: '2 months' },
      { phase: 'Month 5–6',  title: 'Ethical Hacking',         desc: 'Kali Linux, Metasploit, Burp Suite, OWASP Top 10.',                                             duration: '2 months' },
      { phase: 'Month 7–8',  title: 'Certifications Prep',     desc: 'CompTIA Security+, CEH, or OSCP preparation.',                                                  duration: '2 months' },
      { phase: 'Month 9–12', title: 'Specialize & Apply',      desc: 'SOC analysis, penetration testing, bug bounty programs.',                                       duration: '4 months' },
    ],
    resources: [
      { type: 'Platform', name: 'TryHackMe',           desc: 'Beginner-friendly hacking challenges',      free: true,  icon: '🎯', color: 'rgba(255,107,107,0.15)' },
      { type: 'Cert',     name: 'CompTIA Security+',   desc: 'Entry-level security certification',        free: false, icon: '🔒', color: 'rgba(0,245,160,0.15)'   },
      { type: 'Platform', name: 'HackTheBox',          desc: 'Advanced pen testing practice',             free: true,  icon: '💀', color: 'rgba(255,200,0,0.15)'   },
    ],
  },
  {
    id: 'ux',
    title: 'UI/UX Designer',
    icon: '🎨',
    color: 'rgba(150,100,255,0.15)',
    tag: 'Creative',
    salary: '₹6–30 LPA',
    category: 'Design',
    top: true,
    desc: 'Create intuitive, beautiful digital experiences users love.',
    avgSalary: '₹14 LPA',
    minSalary: '₹6 LPA',
    maxSalary: '₹30 LPA',
    demand: 'Moderate',
    skills: [
      { name: 'Figma / Adobe XD',          level: 'Expert',       pct: 90 },
      { name: 'User Research',              level: 'Advanced',     pct: 75 },
      { name: 'Wireframing & Prototyping',  level: 'Expert',       pct: 88 },
      { name: 'Design Systems',             level: 'Advanced',     pct: 72 },
      { name: 'HTML/CSS Basics',            level: 'Intermediate', pct: 55 },
      { name: 'Accessibility Standards',   level: 'Intermediate', pct: 60 },
    ],
    roadmap: [
      { phase: 'Month 1–2',  title: 'Design Principles', desc: 'Color theory, typography, layout, visual hierarchy.',                                                 duration: '2 months' },
      { phase: 'Month 3–4',  title: 'Figma Mastery',     desc: 'Wireframes, prototypes, components, auto-layout.',                                                    duration: '2 months' },
      { phase: 'Month 5–6',  title: 'UX Research',       desc: 'User interviews, usability testing, personas, journey maps.',                                          duration: '2 months' },
      { phase: 'Month 7–8',  title: 'Portfolio Projects',desc: 'Design 5 case studies covering mobile and web apps.',                                                  duration: '2 months' },
      { phase: 'Month 9–12', title: 'Internship & Growth',desc: 'Apply to design roles, build Behance/Dribbble profile.',                                              duration: '4 months' },
    ],
    resources: [
      { type: 'Course',     name: 'Google UX Design Certificate', desc: 'Beginner-friendly design program',        free: false, icon: '📱', color: 'rgba(150,100,255,0.15)' },
      { type: 'Platform',   name: 'Figma Community',              desc: 'Free UI kits, templates, plugins',        free: true,  icon: '🎨', color: 'rgba(0,212,255,0.15)'   },
      { type: 'Community',  name: 'Dribbble',                     desc: 'Design inspiration and portfolio',        free: true,  icon: '🏀', color: 'rgba(255,107,107,0.15)' },
    ],
  },
  {
    id: 'pm',
    title: 'Product Manager',
    icon: '📋',
    color: 'rgba(0,245,160,0.15)',
    tag: 'Leadership',
    salary: '₹15–60 LPA',
    category: 'Management',
    top: true,
    desc: 'Define product vision and drive cross-functional teams to ship great products.',
    avgSalary: '₹28 LPA',
    minSalary: '₹15 LPA',
    maxSalary: '₹60 LPA',
    demand: 'High',
    skills: [
      { name: 'Product Strategy',   level: 'Expert',       pct: 88 },
      { name: 'Data Analysis',      level: 'Advanced',     pct: 75 },
      { name: 'Agile / Scrum',      level: 'Expert',       pct: 85 },
      { name: 'User Story Writing', level: 'Expert',       pct: 90 },
      { name: 'SQL Basics',         level: 'Intermediate', pct: 55 },
      { name: 'Roadmap Planning',   level: 'Expert',       pct: 88 },
    ],
    roadmap: [
      { phase: 'Month 1–2',  title: 'PM Fundamentals',       desc: 'Product lifecycle, market research, competitive analysis.',                                       duration: '2 months' },
      { phase: 'Month 3–4',  title: 'Agile & Execution',     desc: 'Scrum, sprint planning, backlog grooming, stakeholder management.',                                duration: '2 months' },
      { phase: 'Month 5–6',  title: 'Data & Analytics',      desc: 'Metrics, A/B testing, SQL basics, product analytics tools.',                                       duration: '2 months' },
      { phase: 'Month 7–8',  title: 'Strategy & Vision',     desc: 'OKRs, product vision, GTM strategy, pricing.',                                                    duration: '2 months' },
      { phase: 'Month 9–12', title: 'APM Program / Roles',   desc: 'Apply to APM programs at companies like Google, Microsoft.',                                       duration: '4 months' },
    ],
    resources: [
      { type: 'Book',      name: 'Inspired – Marty Cagan', desc: 'The bible of product management',         free: false, icon: '📘', color: 'rgba(0,245,160,0.15)'   },
      { type: 'Course',    name: 'Product School',          desc: 'PM bootcamp and certification',           free: false, icon: '🎓', color: 'rgba(0,212,255,0.15)'   },
      { type: 'Community', name: 'Product Hunt',            desc: 'Discover and launch products',            free: true,  icon: '🐱', color: 'rgba(255,200,0,0.15)'   },
    ],
  },
  /* ---- Additional Roles (not featured on home) ---- */
  {
    id: 'ml',
    title: 'ML Engineer',
    icon: '🤖',
    color: 'rgba(0,212,255,0.15)',
    tag: 'AI/ML',
    salary: '₹15–55 LPA',
    category: 'AI/ML',
    top: false,
    desc: 'Build and deploy machine learning models at production scale.',
    avgSalary: '₹25 LPA',
    minSalary: '₹15 LPA',
    maxSalary: '₹55 LPA',
    demand: 'Very High',
    skills: [
      { name: 'Python & PyTorch/TF',  level: 'Expert',       pct: 90 },
      { name: 'MLOps & Deployment',   level: 'Advanced',     pct: 78 },
      { name: 'Feature Engineering',  level: 'Advanced',     pct: 75 },
      { name: 'SQL & Spark',          level: 'Intermediate', pct: 65 },
      { name: 'Cloud ML Services',    level: 'Intermediate', pct: 62 },
      { name: 'Statistics',           level: 'Advanced',     pct: 80 },
    ],
    roadmap: [
      { phase: 'Month 1–3',   title: 'ML Foundations',   desc: 'Python, statistics, core ML algorithms.',               duration: '3 months' },
      { phase: 'Month 4–6',   title: 'Deep Learning',    desc: 'Neural networks, CNN, RNN, transformers.',              duration: '3 months' },
      { phase: 'Month 7–9',   title: 'MLOps',            desc: 'Model serving, monitoring, CI/CD for ML.',              duration: '3 months' },
      { phase: 'Month 10–12', title: 'Production Projects', desc: 'Deploy models, work with real datasets.',            duration: '3 months' },
    ],
    resources: [
      { type: 'Course',   name: 'MLOps Specialization',    desc: 'Deploying ML in production – Coursera',   free: false, icon: '⚙️', color: 'rgba(0,212,255,0.15)'  },
      { type: 'Platform', name: 'Weights & Biases',        desc: 'MLOps experiment tracking',               free: true,  icon: '📈', color: 'rgba(0,245,160,0.15)'  },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud Architect',
    icon: '☁️',
    color: 'rgba(0,212,255,0.15)',
    tag: 'Enterprise',
    salary: '₹20–70 LPA',
    category: 'Infrastructure',
    top: false,
    desc: 'Design scalable, cost-efficient cloud infrastructure solutions.',
    avgSalary: '₹35 LPA',
    minSalary: '₹20 LPA',
    maxSalary: '₹70 LPA',
    demand: 'High',
    skills: [
      { name: 'AWS / Azure / GCP',   level: 'Expert',   pct: 92 },
      { name: 'Architecture Design', level: 'Expert',   pct: 88 },
      { name: 'Security & Compliance', level: 'Advanced', pct: 78 },
      { name: 'Cost Optimization',   level: 'Advanced', pct: 72 },
      { name: 'Terraform',           level: 'Advanced', pct: 75 },
      { name: 'Networking',          level: 'Expert',   pct: 85 },
    ],
    roadmap: [
      { phase: 'Month 1–3',   title: 'Cloud Fundamentals',       desc: 'AWS/Azure core services, compute, storage, networking.',      duration: '3 months' },
      { phase: 'Month 4–6',   title: 'Solutions Architecture',   desc: 'High availability, disaster recovery, serverless.',           duration: '3 months' },
      { phase: 'Month 7–9',   title: 'Security & DevOps',        desc: 'IAM, VPCs, CloudFormation, CI/CD.',                           duration: '3 months' },
      { phase: 'Month 10–12', title: 'Certification',            desc: 'AWS Solutions Architect or Azure Architect certification.',   duration: '3 months' },
    ],
    resources: [
      { type: 'Cert',     name: 'AWS Solutions Architect', desc: 'Most sought cloud certification',          free: false, icon: '☁️', color: 'rgba(0,212,255,0.15)'  },
      { type: 'Platform', name: 'A Cloud Guru',            desc: 'Cloud training platform',                  free: false, icon: '🎓', color: 'rgba(0,245,160,0.15)'  },
    ],
  },
  {
    id: 'fullstack',
    title: 'Full Stack Developer',
    icon: '🌐',
    color: 'rgba(0,245,160,0.15)',
    tag: 'Versatile',
    salary: '₹8–35 LPA',
    category: 'Development',
    top: false,
    desc: 'Build complete web applications from frontend to backend.',
    avgSalary: '₹18 LPA',
    minSalary: '₹8 LPA',
    maxSalary: '₹35 LPA',
    demand: 'Very High',
    skills: [
      { name: 'React / Vue / Angular',  level: 'Expert',       pct: 88 },
      { name: 'Node.js / Django',       level: 'Expert',       pct: 85 },
      { name: 'SQL & NoSQL',            level: 'Advanced',     pct: 75 },
      { name: 'REST APIs & GraphQL',    level: 'Advanced',     pct: 78 },
      { name: 'Docker / Cloud',         level: 'Intermediate', pct: 60 },
      { name: 'HTML/CSS/JS',            level: 'Expert',       pct: 95 },
    ],
    roadmap: [
      { phase: 'Month 1–2',   title: 'Frontend Basics',        desc: 'HTML, CSS, JavaScript, responsive design.',             duration: '2 months' },
      { phase: 'Month 3–4',   title: 'React / Frontend Framework', desc: 'Component architecture, state management, hooks.', duration: '2 months' },
      { phase: 'Month 5–6',   title: 'Backend Development',    desc: 'Node.js/Express or Django, REST APIs.',                 duration: '2 months' },
      { phase: 'Month 7–8',   title: 'Databases',              desc: 'PostgreSQL, MongoDB, ORMs, query optimization.',        duration: '2 months' },
      { phase: 'Month 9–12',  title: 'Projects & Deployment',  desc: 'Full-stack apps, Docker, cloud deployment.',            duration: '4 months' },
    ],
    resources: [
      { type: 'Course', name: 'The Odin Project', desc: 'Free full-stack web curriculum',    free: true, icon: '⚔️', color: 'rgba(0,245,160,0.15)'   },
      { type: 'Course', name: 'freeCodeCamp',     desc: 'Free web dev certifications',       free: true, icon: '🔥', color: 'rgba(255,107,107,0.15)'  },
    ],
  },
  {
    id: 'blockchain',
    title: 'Blockchain Developer',
    icon: '⛓️',
    color: 'rgba(255,200,0,0.15)',
    tag: 'Web3',
    salary: '₹15–60 LPA',
    category: 'Development',
    top: false,
    desc: 'Build decentralized applications and smart contracts on blockchain.',
    avgSalary: '₹28 LPA',
    minSalary: '₹15 LPA',
    maxSalary: '₹60 LPA',
    demand: 'Moderate',
    skills: [
      { name: 'Solidity',             level: 'Expert',       pct: 88 },
      { name: 'Ethereum / Web3.js',   level: 'Expert',       pct: 85 },
      { name: 'Smart Contracts',      level: 'Advanced',     pct: 80 },
      { name: 'DeFi & NFT Concepts',  level: 'Advanced',     pct: 72 },
      { name: 'JavaScript',           level: 'Advanced',     pct: 75 },
      { name: 'Cryptography',         level: 'Intermediate', pct: 60 },
    ],
    roadmap: [
      { phase: 'Month 1–2',  title: 'Blockchain Basics',     desc: 'How Bitcoin/Ethereum work, consensus mechanisms.',                  duration: '2 months' },
      { phase: 'Month 3–5',  title: 'Solidity & Smart Contracts', desc: 'ERC standards, security patterns, testing.',               duration: '3 months' },
      { phase: 'Month 6–9',  title: 'DApp Development',      desc: 'React + Web3.js/Ethers.js, MetaMask integration.',                  duration: '4 months' },
      { phase: 'Month 10–12',title: 'Projects & Community',  desc: 'Deploy contracts on mainnet, audit practice, hackathons.',          duration: '3 months' },
    ],
    resources: [
      { type: 'Platform', name: 'CryptoZombies',      desc: 'Learn Solidity by building a game',     free: true,  icon: '🧟', color: 'rgba(255,200,0,0.15)'  },
      { type: 'Course',   name: 'Ethereum.org Docs',  desc: 'Official Ethereum development docs',    free: true,  icon: '💎', color: 'rgba(0,212,255,0.15)'  },
    ],
  },
  {
    id: 'dba',
    title: 'Database Administrator',
    icon: '🗄️',
    color: 'rgba(150,100,255,0.15)',
    tag: 'Core IT',
    salary: '₹7–28 LPA',
    category: 'Data',
    top: false,
    desc: 'Design, optimize, and manage enterprise database systems.',
    avgSalary: '₹14 LPA',
    minSalary: '₹7 LPA',
    maxSalary: '₹28 LPA',
    demand: 'Moderate',
    skills: [
      { name: 'SQL (Advanced)',              level: 'Expert',   pct: 95 },
      { name: 'Performance Tuning',          level: 'Expert',   pct: 88 },
      { name: 'Backup & Recovery',           level: 'Expert',   pct: 88 },
      { name: 'Oracle / MySQL / PostgreSQL', level: 'Expert',   pct: 90 },
      { name: 'Replication & Clustering',    level: 'Advanced', pct: 75 },
      { name: 'NoSQL (MongoDB)',             level: 'Intermediate', pct: 60 },
    ],
    roadmap: [
      { phase: 'Month 1–3',   title: 'SQL Mastery',              desc: 'DDL, DML, joins, subqueries, window functions.',               duration: '3 months' },
      { phase: 'Month 4–6',   title: 'DB Administration',        desc: 'MySQL/PostgreSQL installation, backup, user management.',      duration: '3 months' },
      { phase: 'Month 7–9',   title: 'Performance & Optimization', desc: 'Query optimization, indexing, execution plans.',            duration: '3 months' },
      { phase: 'Month 10–12', title: 'High Availability',        desc: 'Replication, clustering, disaster recovery.',                  duration: '3 months' },
    ],
    resources: [
      { type: 'Course', name: 'SQL Fundamentals – Mode', desc: 'Free SQL analytics course',              free: true,  icon: '📊', color: 'rgba(150,100,255,0.15)' },
      { type: 'Cert',   name: 'Oracle DBA Certification',desc: 'Industry-standard DB certification',     free: false, icon: '🔴', color: 'rgba(255,107,107,0.15)' },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile App Developer',
    icon: '📱',
    color: 'rgba(0,245,160,0.15)',
    tag: 'Mobile',
    salary: '₹8–35 LPA',
    category: 'Development',
    top: false,
    desc: 'Build native and cross-platform mobile apps for iOS and Android.',
    avgSalary: '₹16 LPA',
    minSalary: '₹8 LPA',
    maxSalary: '₹35 LPA',
    demand: 'High',
    skills: [
      { name: 'React Native / Flutter', level: 'Expert',       pct: 88 },
      { name: 'Swift / Kotlin',         level: 'Advanced',     pct: 75 },
      { name: 'REST API Integration',   level: 'Advanced',     pct: 78 },
      { name: 'App Store Deployment',   level: 'Advanced',     pct: 72 },
      { name: 'UI/UX for Mobile',       level: 'Intermediate', pct: 65 },
      { name: 'Performance Optimization',level: 'Intermediate',pct: 60 },
    ],
    roadmap: [
      { phase: 'Month 1–2',  title: 'Mobile Fundamentals', desc: 'iOS or Android basics, mobile UX patterns.',                       duration: '2 months' },
      { phase: 'Month 3–5',  title: 'Core Development',    desc: 'Flutter or React Native, state management, navigation.',           duration: '3 months' },
      { phase: 'Month 6–8',  title: 'APIs & Storage',      desc: 'REST integration, local storage, SQLite.',                         duration: '3 months' },
      { phase: 'Month 9–12', title: 'Publish & Scale',     desc: 'Play Store / App Store submission, monetization.',                 duration: '4 months' },
    ],
    resources: [
      { type: 'Docs',   name: 'Flutter Docs',           desc: 'Official Flutter documentation',           free: true,  icon: '💙', color: 'rgba(0,212,255,0.15)'   },
      { type: 'Course', name: 'Angela Yu iOS Bootcamp', desc: 'Complete iOS app development',             free: false, icon: '🍎', color: 'rgba(255,107,107,0.15)'  },
    ],
  },
];

/* ================================================
   HELPERS
   ================================================ */

/** Build a single job card's HTML string */
function buildJobCard(job) {
  return `
    <div class="job-card" onclick="showRole('${job.id}')">
      <button class="quick-view" onclick="openCareer('${job.id}'); event.stopPropagation();">Quick View</button>
      <div class="job-icon" style="background:${job.color}">${job.icon}</div>
      <div class="job-title">${job.title}</div>
      <div class="job-desc">${job.desc}</div>
      <div class="job-meta">
        <span class="job-salary">${job.salary}</span>
        <span class="job-tag">${job.tag}</span>
      </div>
    </div>`;
}

/** Derive unique category list */
const categories = ['All', ...[...new Set(jobs.map(j => j.category))]];

/* ================================================
   RENDER — TOP JOBS
   ================================================ */
function renderTopJobs() {
  const grid = document.getElementById('topJobsGrid');
  grid.innerHTML = jobs.filter(j => j.top).map(buildJobCard).join('');
}

/* ================================================
   RENDER — ALL JOBS
   ================================================ */
function renderAllJobs(filter = 'All') {
  const grid = document.getElementById('allJobsGrid');
  const list = filter === 'All' ? jobs : jobs.filter(j => j.category === filter);
  grid.innerHTML = list.map(buildJobCard).join('');
}

/* ================================================
   RENDER — FILTER BUTTONS
   ================================================ */
function renderFilters() {
  const bar = document.getElementById('filterBar');
  categories.forEach((cat, i) => {
    const btn = document.createElement('button');
    btn.className  = 'filter-btn' + (i === 0 ? ' active' : '');
    btn.textContent = cat;
    btn.onclick = () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderAllJobs(cat);
    };
    bar.appendChild(btn);
  });
}

/* ================================================
   SHOW / HIDE — ALL JOBS SECTION
   ================================================ */
function showAllJobs() {
  document.getElementById('all-jobs').classList.add('visible');
  renderAllJobs();
  document.getElementById('all-jobs').scrollIntoView({ behavior: 'smooth' });
}

function hideAllJobs() {
  document.getElementById('all-jobs').classList.remove('visible');
}

/* ================================================
   SHOW ROLE DETAIL
   ================================================ */
const locations = [
  { city: 'Bengaluru',  multiplier: 1.3  },
  { city: 'Mumbai',     multiplier: 1.2  },
  { city: 'Hyderabad',  multiplier: 1.15 },
  { city: 'Pune',       multiplier: 1.05 },
  { city: 'Delhi NCR',  multiplier: 1.1  },
  { city: 'Chennai',    multiplier: 1.0  },
];

function showRole(id) {
  const job = jobs.find(j => j.id === id);
  if (!job) return;

  const el = document.getElementById('role-detail');
  el.classList.add('visible');

  document.getElementById('roleContent').innerHTML = `
    <!-- Role Hero -->
    <div class="role-hero">
      <div>
        <div class="section-label">${job.category}</div>
        <div class="role-title">${job.icon} ${job.title}</div>
        <p style="color:var(--muted);line-height:1.7;margin-bottom:1rem;">${job.desc}</p>
        <div class="demand-badge demand-high">🔥 ${job.demand} Demand</div>
      </div>
      <div style="background:var(--surface2);border:1px solid var(--border);border-radius:16px;padding:28px;">
        <div style="font-size:0.78rem;color:var(--muted);margin-bottom:4px;">Average Annual Salary (India)</div>
        <div class="salary-big">${job.avgSalary}</div>
        <div class="salary-range">Range: ${job.minSalary} – ${job.maxSalary}</div>
        <div style="margin-top:20px;font-size:0.78rem;color:var(--muted);margin-bottom:12px;">Top Cities Premium</div>
        ${locations.map(l => `
          <div style="display:flex;justify-content:space-between;margin-bottom:6px;font-size:0.82rem;">
            <span style="color:var(--muted)">${l.city}</span>
            <span style="color:var(--accent);font-weight:600;">+${Math.round((l.multiplier - 1) * 100)}%</span>
          </div>`).join('')}
      </div>
    </div>

    <!-- Tabs -->
    <div class="role-tabs">
      <button class="tab active" onclick="switchTab(this,'skills-tab')">Skills</button>
      <button class="tab" onclick="switchTab(this,'roadmap-tab')">Roadmap</button>
      <button class="tab" onclick="switchTab(this,'salary-tab')">Salary</button>
      <button class="tab" onclick="switchTab(this,'resources-tab')">Resources</button>
    </div>

    <!-- Skills Tab -->
    <div id="skills-tab" class="tab-content active">
      <h3 style="font-family:Syne,sans-serif;font-weight:700;margin-bottom:1.5rem;">Required Skills</h3>
      <div class="skills-grid">
        ${job.skills.map(s => `
          <div class="skill-chip">
            <div class="skill-name">${s.name}</div>
            <div class="skill-level">${s.level}</div>
            <div class="skill-bar"><div class="skill-fill" style="width:${s.pct}%"></div></div>
          </div>`).join('')}
      </div>
    </div>

    <!-- Roadmap Tab -->
    <div id="roadmap-tab" class="tab-content">
      <h3 style="font-family:Syne,sans-serif;font-weight:700;margin-bottom:2rem;">Learning Roadmap</h3>
      <div class="roadmap">
        ${job.roadmap.map(r => `
          <div class="roadmap-step">
            <div class="step-phase">${r.phase}</div>
            <div class="step-title">${r.title}</div>
            <div class="step-desc">${r.desc}</div>
            <div class="step-duration">⏱ ${r.duration}</div>
          </div>`).join('')}
      </div>
    </div>

    <!-- Salary Tab -->
    <div id="salary-tab" class="tab-content">
      <h3 style="font-family:Syne,sans-serif;font-weight:700;margin-bottom:1.5rem;">Salary Breakdown</h3>
      <div class="salary-cards">
        <div class="salary-card"><div class="label">Entry Level</div><div class="amount">${job.minSalary}</div><div class="note">0–2 years exp</div></div>
        <div class="salary-card"><div class="label">Mid Level</div><div class="amount">${job.avgSalary}</div><div class="note">3–6 years exp</div></div>
        <div class="salary-card"><div class="label">Senior Level</div><div class="amount">${job.maxSalary}</div><div class="note">7+ years exp</div></div>
      </div>
      <h4 style="font-weight:600;margin-bottom:1.2rem;margin-top:2rem;">Salary by Location</h4>
      ${locations.map(l => `
        <div class="prog-bar-wrap">
          <div class="prog-label">
            <span>${l.city}</span>
            <span>${job.avgSalary} × ${l.multiplier}</span>
          </div>
          <div class="prog-track">
            <div class="prog-fill" style="width:${Math.min(100, (l.multiplier - 0.8) * 200)}%"></div>
          </div>
        </div>`).join('')}
    </div>

    <!-- Resources Tab -->
    <div id="resources-tab" class="tab-content">
      <h3 style="font-family:Syne,sans-serif;font-weight:700;margin-bottom:1.5rem;">Learning Resources</h3>
      <div class="resources-grid">
        ${job.resources.map(r => `
          <div class="resource-card">
            <div class="res-icon" style="background:${r.color}">${r.icon}</div>
            <div>
              <div class="res-type">${r.type}</div>
              ${r.url ? `<div class="res-name"><a href="${r.url}" target="_blank" rel="noopener noreferrer">${r.name}</a></div>` : `<div class="res-name">${r.name}</div>`}
              <div class="res-desc">${r.desc}</div>
              ${r.free ? '<span class="res-free">Free</span>' : ''}
            </div>
          </div>`).join('')}
      </div>
    </div>
  `;

  el.scrollIntoView({ behavior: 'smooth' });
}

/* ================================================
   TABS
   ================================================ */
function switchTab(btn, tabId) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(tabId).classList.add('active');
}

function closeRole() {
  document.getElementById('role-detail').classList.remove('visible');
  document.getElementById('top-jobs').scrollIntoView({ behavior: 'smooth' });
}

/* ================================================
   RESUME BUILDER — LIVE PREVIEW
   ================================================ */
function updatePreview() {
  const name     = document.getElementById('r-name').value     || 'Your Name';
  const role     = document.getElementById('r-role').value     || 'Job Title';
  const email    = document.getElementById('r-email').value    || 'email@example.com';
  const phone    = document.getElementById('r-phone').value    || '+91 00000 00000';
  const location = document.getElementById('r-location').value || 'City';
  const linkedin = document.getElementById('r-linkedin').value || 'LinkedIn';
  const summary  = document.getElementById('r-summary').value  || 'Your professional summary will appear here...';

  const skillsRaw = document.getElementById('r-skills').value;
  const skills    = skillsRaw
    ? skillsRaw.split(',').map(s => s.trim()).filter(Boolean)
    : ['JavaScript', 'React', 'Node.js'];

  /* Update preview fields */
  document.getElementById('pv-name').textContent    = name;
  document.getElementById('pv-role').textContent    = role;
  document.getElementById('pv-contact').textContent = `${email} · ${phone} · ${location} · ${linkedin}`;
  document.getElementById('pv-summary').textContent = summary;
  document.getElementById('pv-skills').innerHTML    = skills.map(s => `<span class="rv-skill">${s}</span>`).join('');

  /* Experience entries */
  const expEntries = document.querySelectorAll('.exp-entry');
  let expHtml = '';
  expEntries.forEach(e => {
    const title    = e.querySelector('.exp-title')?.value    || '';
    const company  = e.querySelector('.exp-company')?.value  || '';
    const duration = e.querySelector('.exp-duration')?.value || '';
    const desc     = e.querySelector('.exp-desc')?.value     || '';
    if (title || company) {
      expHtml += `
        <div class="rv-exp-item">
          <div class="rv-exp-title">${title}</div>
          <div class="rv-exp-company">${company} · ${duration}</div>
          <div class="rv-exp-desc">${desc}</div>
        </div>`;
    }
  });
  document.getElementById('pv-exp').innerHTML =
    expHtml || '<div style="color:#999;font-size:0.8rem">Add your experience above</div>';

  /* Education entries */
  const eduEntries = document.querySelectorAll('.edu-entry');
  let eduHtml = '';
  eduEntries.forEach(e => {
    const degree = e.querySelector('.edu-degree')?.value || '';
    const school = e.querySelector('.edu-school')?.value || '';
    const year   = e.querySelector('.edu-year')?.value   || '';
    if (degree || school) {
      eduHtml += `
        <div style="margin-bottom:8px">
          <div class="rv-edu-degree">${degree}</div>
          <div class="rv-edu-school">${school} · ${year}</div>
        </div>`;
    }
  });
  document.getElementById('pv-edu').innerHTML =
    eduHtml || '<div style="color:#999;font-size:0.8rem">Add your education above</div>';
}

/* ================================================
   RESUME BUILDER — ADD ENTRIES
   ================================================ */
function addExperience() {
  const list = document.getElementById('expList');
  const div  = document.createElement('div');
  div.className = 'exp-entry';
  div.style.cssText = 'margin-top:1.2rem;padding-top:1.2rem;border-top:1px solid var(--border)';
  div.innerHTML = `
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Job Title</label>
        <input class="form-input exp-title" placeholder="Backend Developer" oninput="updatePreview()" />
      </div>
      <div class="form-group">
        <label class="form-label">Company</label>
        <input class="form-input exp-company" placeholder="Infosys" oninput="updatePreview()" />
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Duration</label>
        <input class="form-input exp-duration" placeholder="Jun 2022 – Dec 2022" oninput="updatePreview()" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Description</label>
      <textarea class="form-textarea exp-desc" placeholder="• Key responsibilities..." oninput="updatePreview()"></textarea>
    </div>`;
  list.appendChild(div);
}

function addEducation() {
  const list = document.getElementById('eduList');
  const div  = document.createElement('div');
  div.className = 'edu-entry';
  div.style.cssText = 'margin-top:1.2rem;padding-top:1.2rem;border-top:1px solid var(--border)';
  div.innerHTML = `
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Degree</label>
        <input class="form-input edu-degree" placeholder="MCA" oninput="updatePreview()" />
      </div>
      <div class="form-group">
        <label class="form-label">Institution</label>
        <input class="form-input edu-school" placeholder="JNTU" oninput="updatePreview()" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Year</label>
      <input class="form-input edu-year" placeholder="2023 – 2025" oninput="updatePreview()" />
    </div>`;
  list.appendChild(div);
}

/* ================================================
   RESUME BUILDER — DOWNLOAD (Print)
   ================================================ */
function downloadResume() {
  const preview = document.getElementById('resumePreview');
  const name    = document.getElementById('r-name').value || 'Resume';

  const css = [
    '* { margin:0; padding:0; box-sizing:border-box; }',
    "body { font-family:'DM Sans',sans-serif; padding:40px; color:#111; max-width:800px; margin:0 auto; }",
    ".rv-name { font-family:'Syne',sans-serif; font-size:2rem; font-weight:800; margin-bottom:4px; }",
    '.rv-role { font-size:1rem; color:#555; margin-bottom:12px; }',
    '.rv-contact { display:flex; flex-wrap:wrap; gap:12px; font-size:0.8rem; color:#666; margin-bottom:20px; padding-bottom:16px; border-bottom:2px solid #111; }',
    '.rv-section { margin-bottom:18px; }',
    '.rv-section-title { font-size:0.68rem; font-weight:700; letter-spacing:0.15em; text-transform:uppercase; color:#111; margin-bottom:10px; padding-bottom:4px; border-bottom:1px solid #ddd; }',
    '.rv-skill-wrap { display:flex; flex-wrap:wrap; gap:6px; }',
    '.rv-skill { font-size:0.72rem; padding:3px 10px; border-radius:100px; background:#f0f0f0; color:#333; }',
    '.rv-exp-item { margin-bottom:12px; }',
    '.rv-exp-title { font-weight:700; font-size:0.9rem; }',
    '.rv-exp-company { font-size:0.8rem; color:#555; margin-bottom:4px; }',
    '.rv-exp-desc { font-size:0.8rem; color:#666; line-height:1.5; }',
    '.rv-edu-degree { font-weight:700; font-size:0.9rem; }',
    '.rv-edu-school { font-size:0.8rem; color:#555; }',
    '.rv-summary { font-size:0.84rem; color:#444; line-height:1.6; }'
  ].join('\n');

  const html = '<!DOCTYPE html><html><head>' +
    '<title>' + name + ' - Resume</title>' +
    '<link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">' +
    '<style>' + css + '</style>' +
    '</head><body>' + preview.innerHTML + '</body></html>';

  const printWindow = window.open('', '_blank');
  printWindow.document.write(html);
  printWindow.document.close();
  printWindow.focus();
  setTimeout(function() { printWindow.print(); }, 500);
}

/* ================================================
   SCROLL HELPER
   ================================================ */
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

/* ================================================
   MODAL — Quick view (careerModal)
   ================================================ */
function openCareer(id) {
  const job = jobs.find(j => j.id === id);
  if (!job) return;

  const modal = document.getElementById('careerModal');
  document.getElementById('modalTitle').textContent = job.title;
  document.getElementById('modalDesc').textContent  = job.desc;

  const mustEl  = document.getElementById('must');
  const goodEl  = document.getElementById('good');
  const bonusEl = document.getElementById('bonus');
  mustEl.innerHTML = '';
  goodEl.innerHTML = '';
  bonusEl.innerHTML = '';

  job.skills.forEach(s => {
    const cls = s.pct >= 80 ? 'skill blue' : (s.pct >= 65 ? 'skill green' : 'skill yellow');
    const span = `<span class="skill ${cls.split(' ')[1]}">${s.name}</span>`;
    if (s.pct >= 80) mustEl.innerHTML += span;
    else if (s.pct >= 65) goodEl.innerHTML += span;
    else bonusEl.innerHTML += span;
  });

  modal.classList.add('show');
  modal.setAttribute('aria-hidden','false');
}

function closeModal() {
  const modal = document.getElementById('careerModal');
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden','true');
}

// close when clicking overlay
document.addEventListener('click', (e) => {
  const modal = document.getElementById('careerModal');
  if (!modal) return;
  if (!modal.classList.contains('show')) return;
  const content = modal.querySelector('.modal-content');
  if (e.target === modal.querySelector('.modal-overlay')) closeModal();
});

/* ================================================
   INIT — Run on page load
   ================================================ */
renderTopJobs();
renderFilters();
renderAllJobs();