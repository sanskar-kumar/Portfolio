/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sanskar Kumar",
  title: "Hello, I'm Sanskar Kumar",
  subTitle: emoji(
    "A Software Engineer at Salesforce 🚀 building enterprise-scale Financial Services Cloud products, AI-powered agents on Agentforce, and Next-Gen Wealth Advisory experiences. Passionate about distributed systems, platform engineering, and shipping products that impact millions of users globally."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1izi83jn526JIaSbpNY-9LdfCArQ1dntO/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sanskar-kumar/",
  linkedin: "https://www.linkedin.com/in/sanskarkumar/",
  gmail: "sanskarkumar0106@gmail.com",
  facebook: "https://www.facebook.com/sanskar.lohani.1/",
  instagram: "https://www.instagram.com/_sanskar01_/",
  twitter: "https://twitter.com/Sanskar0106/",
  display: true
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle:
    "FULL-STACK ENGINEER WHO LOVES BUILDING ENTERPRISE PLATFORMS & AI-DRIVEN PRODUCTS",
  skills: [
    emoji(
      "⚡ Building enterprise Financial Services Cloud features — Apex, LWC, Flow, and Java"
    ),
    emoji(
      "⚡ Developing AI-powered agents on Agentforce & Slack for self-service banking experiences"
    ),
    emoji(
      "⚡ Designing scalable backend systems — Spring Boot, microservices, JWT-based auth, and licensing platforms"
    ),
    emoji(
      "⚡ End-to-end mobile & web development with Kotlin, Jetpack Compose, React, and Node.js"
    )
  ],

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Apex",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "Kotlin",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "LWC",
      fontAwesomeClassname: "fab fa-salesforce"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "National Institute of Technology Delhi",
      logo: require("./assets/images/nitdelhilogo.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "December 2020 - May 2024",
      desc: "Department Rank #1",
      descBullets: [
        "General Secretary of Alumni Cell",
        "Senior Coordinator, Training and Placement Cell",
        "Programming Society Head, UpVision — Tech Club of NIT Delhi",
        "Executive Member, GDSC NIT Delhi",
        "Represented College at All India Inter NIT in Kabaddi",
        "Part of College Badminton and Kabaddi Team"
      ]
    },
    {
      schoolName: "Navyug Convent Senior Secondary School, New Delhi",
      logo: require("./assets/images/navyugconvent.jpg"),
      subHeader: "Senior Secondary Education (Class XII)",
      duration: "2018 - 2020",
      desc: "88.2%",
      descBullets: [
        "Part of school Table Tennis Team",
        "Represented school in various olympiads"
      ]
    },
    {
      schoolName: "Creane Memorial High School, Gaya",
      logo: require("./assets/images/cmhs.jpg"),
      subHeader: "Secondary Education (Class X)",
      duration: "2008 - 2018",
      desc: "96.2%",
      descBullets: [
        "Member of School Parliament",
        "Member of Tech (Computer) Club",
        "Part of School Table Tennis Team"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Backend & Platform Engineering",
      progressPercentage: "90%"
    },
    {
      Stack: "Full-Stack Development",
      progressPercentage: "85%"
    },
    {
      Stack: "AI/ML & Agents",
      progressPercentage: "75%"
    },
    {
      Stack: "Mobile Development",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Associate Member of Technical Staff",
      company: "Salesforce",
      companylogo: require("./assets/images/salesforce.png"),
      date: "January 2025 – Present",
      desc: "Building enterprise Financial Services Cloud products and AI-powered agents on Agentforce.",
      descBullets: [
        "Onboarded 10+ Retail Banking features in Financial Services Cloud — Transaction Dispute Management with real-time Visa/Mastercard integration, Card Lock/Unlock, Address Update, Report/Replace Card — built across Apex, LWC, Flow, and Java for Tier-1 banking customers.",
        "Productized the Banking Service Assistance Agent on Agentforce + Slack, delivering AI-driven self-service that lifted customer self-service rates by 40–60% at Tier-1 banks.",
        "Building the Client 360 experience for the Next-Gen Wealth Advisor App — a unified workspace with AI-driven Account Pulse summaries and proactive risk/opportunity alerts surfaced to advisors via Slack.",
        "Reduced product onboarding time by 90% for the Financial Services Dispute Solution by building an automated deployment engine handling 250+ configuration components.",
        "Designed a secure JWT-based Identity Bridge integrating the Banking Agent into third-party portals using certificate-based authentication.",
        "Built the Enterprise Licensing Foundation (SKU) for the multi-agent AI platform, enabling scalable global deployment of 5+ specialized AI agents across Agentforce."
      ]
    },
    {
      role: "Software Development Engineer",
      company: "Zscaler",
      companylogo: require("./assets/images/zscaler.png"),
      date: "March 2024 – January 2025",
      desc: "Built the Executive Insights mobile app from scratch and owned production delivery.",
      descBullets: [
        "Bootstrapped the 'Executive Insights' mobile app from scratch, architecting in MVVM + Jetpack Compose to surface real-time security posture and Risk 360 analytics for CISO-level dashboards.",
        "Owned end-to-end delivery of production features, shipping new Risk 360 views and partnering with backend, design, and PM stakeholders cross-functionally.",
        "Designed a data-prefetching engine for high-traffic widgets, reducing application latency by 80% and improving Time-to-Interactive.",
        "Implemented centralized exception handling for network-level failures (SSL/DNS), reducing client-side crash rates and improving MTTR.",
        "Served as 'Release Guru' — built a real-time observability suite using Firebase + Crashlytics with custom performance KPIs.",
        "Scaled Kotlin unit test coverage to 80%+ using modern testing frameworks."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Bosscoder Academy",
      companylogo: require("./assets/images/bosscoder.png"),
      date: "January 2024 – February 2024",
      desc: "Built mentorship platform features using React, TypeScript, and Firebase.",
      descBullets: [
        "Developed a streamlined mentorship flow using clean architecture with ReactJS and TailwindCSS for responsive UI.",
        "Implemented CRUD operations collaborating on frontend with TypeScript and backend with Firebase, Python, and Flask."
      ]
    },
    {
      role: "Backend Developer Intern",
      company: "Visit Health",
      companylogo: require("./assets/images/visithealth.jpg"),
      date: "July 2022 – August 2022",
      desc: "Built client dashboard for seamless report tracking using Node.js, Express, and MySQL.",
      descBullets: [
        "Created client dashboard for seamless report tracking with significant backend contributions.",
        "Designed optimized database schema and implemented efficient backend APIs and SQL queries for report retrieval."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true",
  display: true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "ENTERPRISE PRODUCTS AND PLATFORMS I'VE BUILT",
  projects: [],
  display: false
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements 🏆"),
  subtitle: "",

  achievementsCards: [
    {
      title: "IEEE Research Publication",
      subtitle:
        "Published 'Integrated Violence and Weapon Detection Using Deep Learning' at IEEE — achieving 98% accuracy and 131 fps processing speed using CNN + LSTM + Vision Transformer architectures.",
      image: require("./assets/images/nitdelhilogo.png"),
      imageAlt: "IEEE Logo",
      footerLink: [
        {
          name: "View Publication",
          url: "https://ieeexplore.ieee.org/document/10696591"
        }
      ]
    },
    {
      title: "Department Rank #1 — NIT Delhi",
      subtitle:
        "Graduated with the highest rank in the Computer Science department at National Institute of Technology Delhi (2020-2024).",
      image: require("./assets/images/nitdelhilogo.png"),
      imageAlt: "NIT Delhi Logo",
      footerLink: []
    },
    {
      title: "FFE Scholar",
      subtitle:
        "Recipient of Foundation for Excellence Scholarship, recognizing academic excellence and commitment to education.",
      image: require("./assets/images/ffe.png"),
      imageAlt: "FFE Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://ffe.org/"
        }
      ]
    },
    {
      title: "Semi-Finalist Flipkart Grid 4.0",
      subtitle:
        "Reached semi-final of Flipkart Grid 4.0 among 1,46,000+ teams all over India.",
      image: require("./assets/images/flipkart grid.jpg"),
      imageAlt: "Flipkart Grid Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://unstop.com/certificate-preview/9d75d399-e5d7-4a35-910a-3d0c8f4b701c"
        }
      ]
    }
  ],
  display: true
};

// Publications Section

const publicationSection = {
  title: "Publications",
  subtitle: "RESEARCH WORK IN DEEP LEARNING AND COMPUTER VISION",
  publications: [
    {
      title: "Integrated Violence and Weapon Detection Using Deep Learning",
      description:
        "Proposed an innovative approach combining CNNs for spatial feature extraction and LSTM networks for temporal relation learning, integrated with Vision Transformer for enhanced feature representation. Achieved 98% accuracy and 131 frames/sec processing speed across diverse datasets.",
      link: "https://ieeexplore.ieee.org/document/10696591",
      publisher: "IEEE"
    }
  ],
  display: true
};

// Hobbies Section

const hobbiesSection = {
  title: emoji("Hobbies & Interests 🎯"),
  subtitle: "BEYOND CODE — THINGS THAT KEEP ME ENERGIZED",
  hobbies: [
    {
      name: "Badminton",
      emoji: "🏸",
      description: "Regular player — part of college team at NIT Delhi"
    },
    {
      name: "Table Tennis",
      emoji: "🏓",
      description: "Competitive player since school days"
    },
    {
      name: "Cycling",
      emoji: "🚴",
      description: "Weekend rides to explore new trails"
    },
    {
      name: "Kabaddi",
      emoji: "🤼",
      description:
        "Represented NIT Delhi at All India Inter NIT tournaments"
    },
    {
      name: "Reading",
      emoji: "📚",
      description: "Tech blogs, system design papers, and non-fiction"
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true",
  blogs: [],
  display: false
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),
  talks: [],
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [],
  display: false
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to discuss a project, collaborate on something exciting, or just say hi? My inbox is open for all.",
  number: "+91-9667650530",
  email_address: "sanskarkumar0106@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "sanskar0106",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  publicationSection,
  hobbiesSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
