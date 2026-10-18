export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  isResearch?: boolean;
  problem: string;
  contribution: string;
  technologies: string[];
  metrics?: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  detailedOverview: string;
  keyFeatures: string[];
  architectureDetails: string[];
  accentColor: string;
  accentBorder: string;
  accentBg: string;
  accentBadge: string;
  previewBadge: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  achievements: string[];
  skills: string[];
}

export interface SkillCategory {
  name: string;
  skills: { name: string; iconName?: string; note?: string }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  cgpa: string;
  highlight: string;
  location: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  badgeCode?: string;
  description: string;
  category: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Anchal Chaurasiya',
    titles: [
      'Software Developer',
      'Shopify Developer',
      'Full Stack Developer',
      'Professional Bug Hunter 🐛',
    ],
    headlineLine1: "HI, I'M ANCHAL.",
    headlineLine2: "I TURN COFFEE INTO CODE",
    headlineLine3: "AND IDEAS INTO WEBSITES.",
    statusBadge: "Currently debugging reality ☕",
    shortBio:
      'Passionate about building responsive websites, improving e-commerce experiences, solving technical challenges, customizing Shopify themes, and architecting useful digital products with modern web technologies and AI-assisted workflows.',
    extendedBio: [
      "I am a Software Developer and Website Developer with a strong focus on modern frontend engineering, full-stack web applications, and high-performance Shopify e-commerce experiences.",
      "In my current role at Ninton Technology, I maintain and optimize Shopify-based e-commerce storefronts, write custom Liquid logic, refine frontend interactions with JavaScript and Tailwind, integrate essential customer communication tools like Chatwoot, and produce creative multimedia assets with Adobe tools.",
      "My journey spans developing responsive React applications at K Y Holidays, implementing secure JWT authentication and RESTful APIs at Infotact Solutions (where we achieved a 40% faster load time), and co-authoring an AI fairness research paper evaluating over 1,500 generated images.",
      "I believe in clean architecture, purposeful UI/UX, and leveraging AI-assisted development tools like Claude to accelerate shipping cycles while maintaining meticulous code craftsmanship."
    ],
    email: 'chaurasiyanchal07@gmail.com',
    phone: '+91 9219673644',
    location: 'India',
    linkedin: 'https://linkedin.com/in/anchal-chaurasiya',
    github: 'https://github.com/Ancha2003',
    status: 'Available for full-time roles & high-impact projects',
  },

  metrics: [
    { label: 'Academic Standing', value: 'Top 5%', detail: 'AKTU Information Technology' },
    { label: 'CGPA', value: '8.04 / 10', detail: 'Consistent High Merit' },
    { label: 'AI Research Scope', value: '1,500+', detail: 'Generated Images Evaluated' },
    { label: 'Performance Metric', value: '40% Faster', detail: 'Reported Load Time Optimization' },
  ],

  skillCategories: [
    {
      category: 'Frontend',
      description: 'Responsive, accessible, and high-performance user interfaces',
      skills: ['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5', 'CSS3', 'Bootstrap'],
    },
    {
      category: 'E-commerce & CMS',
      description: 'Storefront customization, Liquid templates, and conversion optimization',
      skills: ['Shopify', 'Shopify Liquid', 'Theme Customization', 'Storefront Maintenance', 'E-commerce Workflows'],
    },
    {
      category: 'Backend & APIs',
      description: 'Scalable server-side logic and robust endpoints',
      skills: ['Node.js', 'Express.js', 'PHP', 'REST APIs', 'JWT Authentication'],
    },
    {
      category: 'Databases',
      description: 'Relational & document database design and queries',
      skills: ['MongoDB', 'MySQL', 'Database Modeling', 'CRUD Optimization'],
    },
    {
      category: 'AI & Development',
      description: 'Modern development workflows powered by artificial intelligence',
      skills: ['Claude AI', 'Prompt Engineering', 'AI-Assisted Development', 'Evaluation Pipelines'],
    },
    {
      category: 'Core Programming',
      description: 'Strong foundations in algorithms, data structures, and logic',
      skills: ['Python', 'C++', 'C', 'Object-Oriented Programming'],
    },
    {
      category: 'Tools & DevOps',
      description: 'Version control, API testing, and daily engineering utilities',
      skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Excel', 'Chatwoot'],
    },
    {
      category: 'Creative Multimedia',
      description: 'Visual asset design and promotional media production',
      skills: ['Adobe Tools', 'Image Editing', 'Graphic Design', 'Video Editing'],
    },
  ],

  experiences: [
    {
      id: 'ninton',
      role: 'Website Developer',
      company: 'Ninton Technology Pvt. Ltd.',
      period: 'June 2026 – Present',
      location: 'India',
      type: 'Full-time',
      achievements: [
        'Maintain, update, and enhance an active Shopify-based e-commerce platform ensuring high uptime and smooth purchasing flows.',
        'Implement bespoke HTML, CSS, JavaScript, and Shopify Liquid modifications to optimize UX, mobile responsiveness, and store conversion.',
        'Diagnose and resolve critical website bugs, layout anomalies, and cross-browser discrepancies.',
        'Manage and configure integrated support systems including Chatwoot to enhance customer engagement.',
        'Design and edit engaging website imagery and promotional marketing videos using Adobe Creative tools.',
        'Leverage Claude AI and prompt engineering for accelerated feature prototyping and AI-assisted development.'
      ],
      skills: ['Shopify', 'Shopify Liquid', 'JavaScript', 'CSS3', 'Chatwoot', 'Adobe Suite', 'Claude AI'],
    },
    {
      id: 'ky-holidays',
      role: 'Frontend Web Developer',
      company: 'K Y Holidays Pvt. Ltd.',
      period: 'April 2026 – May 2026',
      location: 'India',
      type: 'Contract / Project',
      achievements: [
        'Engineered responsive and interactive web applications utilizing HTML, CSS, JavaScript, and React.js.',
        'Seamlessly integrated RESTful APIs to deliver dynamic content feeds and intuitive search experiences.',
        'Audited and optimized frontend loading performance and interaction responsiveness across diverse devices.',
        'Resolved technical hurdles and upheld high standards for modular, clean, and maintainable code.'
      ],
      skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'Performance Optimization'],
    },
    {
      id: 'infotact',
      role: 'Web Development Intern',
      company: 'Infotact Solutions',
      period: 'July 2025 – September 2025',
      location: 'India',
      type: 'Internship',
      achievements: [
        'Developed reusable, responsive UI components for a real-time on-demand food delivery platform using React.js and CSS.',
        'Architected backend REST APIs and secure JSON Web Token (JWT) user authentication with Node.js, Express.js, and MongoDB.',
        'Executed rigorous API endpoint testing using Postman and implemented comprehensive database CRUD operations.',
        'Contributed to code refactoring and asset optimization resulting in a reported 40% faster initial load time.'
      ],
      skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'Postman', 'CRUD'],
    },
  ],

  projects: [
    {
      id: 'ai-fairness',
      title: 'AI Fairness Research Platform & Pipeline',
      subtitle: 'Scalable Evaluation Pipeline & Bias Analysis of 1,500+ Images',
      tag: 'Research Publication',
      isResearch: true,
      problem:
        'Generative image models often reflect and amplify societal biases across demographic axes without transparent metric reporting or standardized evaluation frameworks.',
      contribution:
        'Co-authored a formal research paper on AI fairness. Built an end-to-end evaluation pipeline that analyzed 1,500+ synthetically generated images, engineered automated metric calculators for demographic balance, and developed an interactive dashboard to visualize bias vectors.',
      technologies: ['Python', 'AI Evaluation', 'Data Analysis', 'Interactive Dashboards', 'Statistical Modeling'],
      metrics: '1,500+ Images Audited · Automated Disparity Ratio Scoring',
      image: '/src/assets/images/project_ai_fairness_1792335288918.jpg',
      detailedOverview:
        'This research initiative investigated algorithmic fairness in modern text-to-image synthesis models. By synthesizing 1,500+ prompts representing diverse professional and social roles, we measured demographic parity, token correlation, and presentation frequency across gender and ethnicity. The interactive dashboard allows researchers to inspect data distributions and query model behavior across test slices.',
      keyFeatures: [
        'Automated batch ingestion and feature extraction for 1,500+ generated image samples',
        'Multi-dimensional disparity ratio calculation and statistical significance testing',
        'Interactive filtering dashboard to explore bias indicators by role and archetype',
        'Co-authored research manuscript documenting experimental methodology and discoveries'
      ],
      architectureDetails: [
        'Python automated batch evaluation scripts',
        'Data cleaning and attribute aggregation with Pandas & NumPy',
        'Interactive visualization front-end for real-time model auditing',
        'Exportable metrics reports for benchmark comparison'
      ],
      githubUrl: 'https://github.com/Ancha2003/ai-fairness-evaluation',
      accentColor: 'text-violet-400',
      accentBorder: 'border-violet-500/30 hover:border-violet-400/60',
      accentBg: 'bg-violet-950/20',
      accentBadge: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
      previewBadge: 'Conceptual Research UI Preview',
    },
    {
      id: 'smart-onion-storage',
      title: 'Smart Onion Storage IoT Monitoring System',
      subtitle: 'Real-Time Temperature & Moisture Sensor Telemetry with Cloud Sync',
      tag: 'IoT & Web Platform',
      isResearch: false,
      problem:
        'Post-harvest vegetable storage suffers high spoilage rates due to unmonitored fluctuations in microclimate temperature and humidity within storage warehouses.',
      contribution:
        'Developed an IoT-integrated monitoring ecosystem connecting hardware sensor microcontrollers with cloud backends. Built secure user authentication modules, real-time sensor visualization dashboards, and alerting thresholds to preserve storage yield.',
      technologies: ['Flask', 'Firebase', 'IoT Hardware', 'REST APIs', 'Python', 'Chart.js'],
      metrics: 'Real-Time Sensor Ingestion · Microclimate Alerts',
      image: '/src/assets/images/project_onion_iot_1792335289275.jpg',
      detailedOverview:
        'An industrial IoT solution designed for agricultural cold-storage and warehouse managers. Microcontrollers equipped with temperature and relative humidity sensors continuously stream environmental readings to a Flask REST API and Firebase database. A responsive web console renders real-time telemetry curves and triggers automated safety notifications when ambient thresholds drift.',
      keyFeatures: [
        'Real-time streaming ingestion of temperature and moisture telemetry',
        'Chamber status dashboard with historical environmental curves',
        'Role-based access control and secure authentication modules',
        'Hardware-to-cloud REST API interface with retry reliability'
      ],
      architectureDetails: [
        'Flask Python API server handling sensor JSON payloads',
        'Firebase Firestore for real-time state synchronization',
        'Hardware sensors (DHT22 / ESP series) transmitting over HTTP/MQTT',
        'Responsive analytics dashboard with dynamic alerting indicators'
      ],
      githubUrl: 'https://github.com/Ancha2003/smart-onion-iot-storage',
      accentColor: 'text-lime-400',
      accentBorder: 'border-lime-500/30 hover:border-lime-400/60',
      accentBg: 'bg-lime-950/20',
      accentBadge: 'bg-lime-500/15 text-lime-300 border-lime-500/30',
      previewBadge: 'Conceptual IoT Dashboard Preview',
    },
    {
      id: 'hotel-booking',
      title: 'Luxury Boutique Hotel Booking Platform',
      subtitle: 'Full-Featured Reservation Engine with Administrative Suite & SQL Database',
      tag: 'Web Application',
      isResearch: false,
      problem:
        'Hospitality businesses need an intuitive, friction-free booking flow for guests combined with a comprehensive administrative panel for managing suite inventory and reservations.',
      contribution:
        'Engineered a responsive hotel reservation platform featuring an interactive suite showcase, room calendar check-in workflow, structured SQL relational database, and an administrative dashboard for managing room status and guest bookings.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'SQL Database', 'REST APIs', 'Admin UI'],
      metrics: 'Comprehensive Booking Workflow · Secure Inventory Controls',
      image: '/src/assets/images/project_hotel_booking_1792335289529.jpg',
      detailedOverview:
        'A comprehensive web platform engineered for modern boutique hotels. The guest portal showcases room amenities, high-resolution visual galleries, and instant date-picker reservations. The admin portal gives hotel staff complete control over room inventories, seasonal pricing adjustments, occupancy schedules, and guest logs backed by a structured relational SQL schema.',
      keyFeatures: [
        'Interactive date-range room availability and booking workflow',
        'Administrative dashboard for inventory and reservation management',
        'Relational SQL database structure for guests, rooms, and booking records',
        'Secure session handling and modular frontend architecture'
      ],
      architectureDetails: [
        'Client-side reservation interface with dynamic state management',
        'Relational SQL schema normalizing room types, rates, and bookings',
        'Admin backend endpoints with CRUD capabilities for room schedules',
        'Responsive UI tailored for desktop planners and mobile travelers'
      ],
      githubUrl: 'https://github.com/Ancha2003/hotel-booking-management',
      accentColor: 'text-cyan-400',
      accentBorder: 'border-cyan-500/30 hover:border-cyan-400/60',
      accentBg: 'bg-cyan-950/20',
      accentBadge: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
      previewBadge: 'Conceptual Booking Interface Preview',
    },
  ],

  education: {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Information Technology',
    institution: 'Dr. A. P. J. Abdul Kalam Technical University (AKTU)',
    period: '2022 – 2026',
    cgpa: '8.04',
    highlight: 'Ranked among the Top 5% of the academic batch',
    location: 'Uttar Pradesh, India',
    coursework: [
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Object-Oriented Programming',
      'Web Technology & Cloud Concepts',
      'Operating Systems & Networking'
    ]
  },

  certifications: [
    {
      name: 'Red Hat Certified System Administrator (RHCSA)',
      issuer: 'Red Hat',
      badgeCode: 'RHCSA Verified',
      category: 'Systems & Infrastructure',
      description: 'Demonstrated core system administration skills across Red Hat Enterprise Linux environments, including storage, security, and process automation.'
    },
    {
      name: 'Full Stack MERN Developer',
      issuer: 'Infotact Solutions',
      badgeCode: 'MERN Specialist',
      category: 'Software Engineering',
      description: 'Comprehensive certification covering full-stack web development with MongoDB, Express.js, React.js, and Node.js with REST API architecture.'
    }
  ]
};
