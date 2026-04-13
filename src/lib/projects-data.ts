export interface ProjectType {
  title: string
  description?: string
  link?: string
  screenshots?: string[]
  VideoDemo?: string
  mobileScreenshots?: string[]
  androidApkLink?: string
  inProgress?: boolean
  collaboration?: boolean
  techStack?: string[]
  
  // New Deep Dive Fields
  tagline?: string
  overview?: string
  category?: string
  duration?: string
  status?: 'completed' | 'in-progress' | 'archived'
  githubLink?: string
  keyFeatures?: {
    title: string
    description: string
    icon?: string
  }[]
  architecture?: {
    description: string
    layers?: {
      name: string
      technologies: string[]
      description?: string
    }[]
  }
  challengesAndSolutions?: {
    challenge: string
    solution: string
  }[]
  myRole?: {
    title: string
    contributions: string[]
  }
  metrics?: {
    label: string
    value: string
    icon?: string
  }[]
  learnings?: string[]
}

export const projects: ProjectType[] = [
  {
    title: "PennyPincher by Neski",
    tagline: "Intelligent, Cross-Platform personal finance tracking with real-time AI insights.",
    description:
      "PennyPincher is an intelligent, cross-platform personal finance tracker designed to make managing money simple, insightful, and seamless. It features a fully native Android app built with Kotlin and Jetpack Compose, and a responsive web dashboard using Next.js and Tailwind CSS both integrated with Firebase for real-time synchronization and secure data handling.",
    overview: "Managing finances across multiple platforms often leads to data fragmentation. PennyPincher addresses this by providing a unified experience where data flows seamlessly between a native Android experience and a full-featured web dashboard. The project emphasizes clean architecture, real-time synchronization, and accessibility.",
    category: "Full-Stack & Mobile Development",
    duration: "4 Months",
    status: "completed",
    link: "https://pennypincherbyneski.vercel.app/",
    androidApkLink: "https://drive.google.com/file/d/1MyROEo0Mfr7NQO-CcdIV6-8DPYDzO6Lj/view?usp=sharing",
    screenshots: [
      "/static/PennyPincher/pp1.webp",
      "/static/PennyPincher/pp2.webp",
      "/static/PennyPincher/pp3.webp",
      "/static/PennyPincher/pp4.webp",
      "/static/PennyPincher/pp5.webp",
      "/static/PennyPincher/pp6.webp",
      "/static/PennyPincher/pp7.webp",
      "/static/PennyPincher/pp8.webp",
      "/static/PennyPincher/pp9.webp",
      "/static/PennyPincher/pp10.webp"
    ],
    mobileScreenshots: [
      "/static/PennyPincher/Android/pp1.webp",
      "/static/PennyPincher/Android/pp2.webp",
      "/static/PennyPincher/Android/pp3.webp",
      "/static/PennyPincher/Android/pp4.webp",
      "/static/PennyPincher/Android/pp5.webp",
      "/static/PennyPincher/Android/pp6.webp",
      "/static/PennyPincher/Android/pp7.webp",
      "/static/PennyPincher/Android/pp8.webp",
      "/static/PennyPincher/Android/pp9.webp",
    ],
    techStack: ["Kotlin", "Jetpack Compose", "Next.js", "Tailwind CSS", "Firebase", "TypeScript", "React", "Android Studio", "Vercel", "Material Design"],
    keyFeatures: [
      {
        title: "Real-time Synchronization",
        description: "Instant data parity between Android and Web using Firebase Realtime Database.",
        icon: "RefreshCw"
      },
      {
        title: "AI-Powered Categorization",
        description: "Intelligent transaction tagging based on user behavior and history.",
        icon: "Brain"
      },
      {
        title: "Multi-Currency Support",
        description: "Seamlessly track and convert between multiple currencies for global utility.",
        icon: "Globe"
      },
      {
        title: "Native Performance",
        description: "Fully native Android app built with Kotlin and Jetpack Compose for high-performance interactions.",
        icon: "Zap"
      }
    ],
    architecture: {
      description: "A synchronized client-server architecture leveraging serverless backend services for high scalability and zero-config deployment.",
      layers: [
        {
          name: "Mobile Frontend",
          technologies: ["Kotlin", "Jetpack Compose", "MVVM"],
          description: "Declarative UI with reactive state management for the Android platform."
        },
        {
          name: "Web Frontend",
          technologies: ["Next.js", "React", "Tailwind CSS"],
          description: "Responsive, server-side rendered dashboard optimized for desktop analysis."
        },
        {
          name: "Backend & Storage",
          technologies: ["Firebase Auth", "Realtime Database", "Firebase Storage"],
          description: "Centralized authentication and data synchronization layer."
        }
      ]
    },
    challengesAndSolutions: [
      {
        challenge: "Handling offline data entry and ensuring eventual consistency when the user regains connectivity.",
        solution: "Implemented a local-first repository pattern in the Android app using Room/DataStore and Firebase's native offline persistence."
      },
      {
        challenge: "Maintaining a consistent UI language across different platforms (Jetpack Compose vs. CSS/Tailwind).",
        solution: "Established a shared design token system for colors, spacing, and typography that were manually mapped to both platform libraries."
      }
    ],
    myRole: {
      title: "Solo Full-Stack Developer",
      contributions: [
        "Architected the entire system from mobile client to web dashboard.",
        "Implemented real-time synchronization logic and offline-first data handling.",
        "Designed the database schema for efficient cross-platform querying.",
        "Developed the AI categorization engine using pattern matching and historic data."
      ]
    },
    metrics: [
      { label: "Sync Latency", value: "<100ms", icon: "Timer" },
      { label: "Offline Support", value: "100%", icon: "CloudOff" },
      { label: "Platform Count", value: "2", icon: "Smartphone" }
    ],
    learnings: [
      "Mastery of Firebase's real-time capabilities and security rules.",
      "In-depth knowledge of Jetpack Compose state management and animations.",
      "Optimizing React performance for large, data-heavy dashboards."
    ]
  },

  {
    title: "DesignUrWeb",
    tagline: "Collaborative web development agency empowering small businesses.",
    description:
      "DesignUrWeb is a collaborative web development service company founded by a group of three developers to help small businesses establish their online presence.",
    overview: "Small businesses often struggle with digital transformation. DesignUrWeb was built as a scalable service platform to provide affordable, high-quality web solutions. The project involved intensive collaboration and client-centric design iterations.",
    category: "Agency / SaaS Platform",
    duration: "6 Months",
    status: "completed",
    link: "https://designurweb.com/",
    screenshots: [
      "/static/DesignUrWeb/DUW1.webp",
      "/static/DesignUrWeb/DUW2.webp",
      "/static/DesignUrWeb/DUW3.webp",
      "/static/DesignUrWeb/DUW4.webp",
    ],
    collaboration: true,
    techStack: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Bootstrap", "Git", "Responsive Design"],
    keyFeatures: [
      {
        title: "Service Showcases",
        description: "Dynamic presentation of Basic, Advanced, and Premium service packages.",
        icon: "Layout"
      },
      {
        title: "Template Gallery",
        description: "Interactive browsing of industry-specific website templates.",
        icon: "Image"
      },
      {
        title: "Client Testimonials",
        description: "Social proof integration to build trust with potential small business clients.",
        icon: "Users"
      }
    ],
    myRole: {
      title: "Co-Founder & Lead Frontend Developer",
      contributions: [
        "Led the frontend architectural design using React and Bootstrap.",
        "Created a reusable component library for service packages and testimonials.",
        "Collaborated with two other developers on database schema design.",
        "Managed client feedback cycles and implemented UI refinements."
      ]
    },
    metrics: [
      { label: "Active Packages", value: "4", icon: "Package" },
      { label: "Team Members", value: "3", icon: "Users" },
      { label: "Client Sourcing", value: "Local", icon: "MapPin" }
    ]
  },

  {
    title: "ChantnChroma",
    tagline: "A dedicated visual ecosystem for tattoo artists and creative designers.",
    description:
      "Chantnchroma emerged from the need to create a dedicated space where tattoo artists and template designers could showcase their work while connecting with potential clients.",
    overview: "Managing high-resolution art portfolios requires a balance of visual fidelity and performance. ChantnChroma provides a robust platform for artists to upload, tag, and socialise their work with global delivery via Google CDN.",
    category: "Art Portfolio / Social Community",
    duration: "Ongoing",
    status: "in-progress",
    link: "https://www.chantnchroma.art/",
    screenshots: [
      "/static/Chantnchroma/cnc1.webp",
    ],
    collaboration: true,
    techStack: ["React", "Next.js", "TypeScript", "Google CDN", "Three.js"],
    keyFeatures: [
      {
        title: "High-Performance Gallery",
        description: "Optimized image delivery using Google CDN for global artist reach.",
        icon: "Zap"
      },
      {
        title: "Community Social Features",
        description: "Engage through likes, comments, and direct artist-to-client messaging.",
        icon: "MessageSquare"
      },
      {
        title: "Artist Submission System",
        description: "Sophisticated upload and tagging system for professional portfolio management.",
        icon: "UploadCloud"
      }
    ],
    architecture: {
      description: "Modern Jamstack architecture optimized for SEO and lightning-fast media delivery.",
      layers: [
        {
          name: "Frontend",
          technologies: ["Next.js", "TypeScript", "Three.js"],
          description: "Statically generated pages with dynamic client-side interactivity."
        },
        {
          name: "Media Delivery",
          technologies: ["Google Cloud CDN", "Image Optimization"],
          description: "Globally distributed content for minimal latency in art viewing."
        }
      ]
    },
    challengesAndSolutions: [
      {
        challenge: "Maintaining high image quality while ensuring fast page loads for mobile users.",
        solution: "Implemented automated image optimization and leveraged Google CDN for edge-cached content delivery."
      }
    ],
    myRole: {
      title: "Full-Stack Developer",
      contributions: [
        "Implemented the Google CDN integration for high-speed media delivery.",
        "Developed the responsive gallery system with advanced filtering.",
        "Worked on the artist submission workflow and tagging system."
      ]
    }
  },
  
  {
    title: "Customer Segmentation App",
    tagline: "ML-powered CRM analytics for actionable business intelligence.",
    category: "Data Science / Machine Learning",
    duration: "2 Months",
    status: "completed",
    description: "Customer Segmentation App is a machine learning project developed using Python and Streamlit to turn CRM data into actionable insights using RFM analysis and KMeans clustering.",
    overview: "Businesses often sit on massive datasets without clear segmentation. This app bridges the gap by providing a self-service tool for RFM (Recency, Frequency, Monetary) analysis, allowing non-technical stakeholders to identify high-value customer segments through data-driven clustering.",
    link: "https://neski321-customer-segment-customer-segapp-pl9bfj.streamlit.app/",
    screenshots: [
      "/static/CustomerSegmentationApp/csa1.webp",
      "/static/CustomerSegmentationApp/csa2.webp",
      "/static/CustomerSegmentationApp/csa3.webp",
      "/static/CustomerSegmentationApp/csa4.webp",
      "/static/CustomerSegmentationApp/csa5.webp",
      "/static/CustomerSegmentationApp/csa6.webp",
    ],
    collaboration: true,
    techStack: ["Python", "Streamlit", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Plotly", "KMeans Clustering", "RFM Analysis"],
    keyFeatures: [
      {
        title: "Automated RFM Calculation",
        description: "Intelligent mapping of transactional data into Recency, Frequency, and Monetary scores.",
        icon: "BarChart3"
      },
      {
        title: "Interactive KMeans Clustering",
        description: "Dynamic cluster sizing with visual feedback using Scikit-learn.",
        icon: "Brain"
      },
      {
        title: "Dynamic Data Export",
        description: "Generate summaries and export segmented customer lists for targeted marketing.",
        icon: "UploadCloud"
      }
    ],
    architecture: {
      description: "A Python-centric data processing pipeline focused on speed and mathematical accuracy.",
      layers: [
        {
          name: "Processing Layer",
          technologies: ["Pandas", "NumPy"],
          description: "Data cleaning, encoding detection, and feature engineering for RFM scores."
        },
        {
          name: "ML Engine",
          technologies: ["Scikit-learn"],
          description: "KMeans implementation with dynamic hyperparameter tuning for optimal clustering."
        },
        {
          name: "Visualization",
          technologies: ["Plotly", "Seaborn"],
          description: "Interactive 3D and 2D charts for cluster distribution and density analysis."
        }
      ]
    },
    challengesAndSolutions: [
      {
        challenge: "Handling inconsistent date formats and monetary currency symbols across various user-uploaded datasets.",
        solution: "Developed a robust regex-based preprocessing engine that automatically sanitizes and normalizes datetime and float columns."
      },
      {
        challenge: "Ensuring high-speed clustering for datasets exceeding 100k rows in a browser environment.",
        solution: "Implemented efficient data vectorization with NumPy and optimized the KMeans initialization state (k-means++)."
      }
    ],
    myRole: {
      title: "Data Scientist & Developer",
      contributions: [
        "Architected the data pipeline and ML model selection.",
        "Implemented the Streamlit frontend for interactive parameter tuning.",
        "Created the automated RFM calculation logic and visualization suite."
      ]
    },
    metrics: [
      { label: "Segment Accuracy", value: "~94%", icon: "Target" },
      { label: "Processing Speed", value: "<2s", icon: "Zap" },
      { label: "Data Scalability", value: "Large CSV", icon: "Database" }
    ]
  },

  {
    title: "NeskiApply.AI",
    tagline: "AI-driven job search ecosystem with intelligent resume tailoring.",
    category: "AI / SaaS / Automation",
    duration: "5 Months",
    status: "completed",
    description: "NeskiApply.AI is a smart job search assistant that aggregates listings from Indeed, JSearch, and Adzuna into one place with scheduled automatic searches. Upload your resume and the AI compares it against job descriptions, showing match scores, missing keywords, and improvement suggestions.",
    overview: "Applying for jobs is a time-intensive process. NeskiApply.AI streamlines this by using multiple AI models (Gemini, Perplexity, OpenRouter) to automatically score, tailor, and prepare candidates for specific roles. It includes a full automation suite with Discord notifications and n8n workflows.",
    link: "https://neskiapply.up.railway.app/", 
    screenshots: [
      "/static/NeskiApply/NA1.webp", 
      "/static/NeskiApply/NA2.webp", 
      "/static/NeskiApply/NA3.webp", 
      "/static/NeskiApply/NA4.webp", 
      "/static/NeskiApply/NA5.webp", 
      "/static/NeskiApply/NA6.webp", 
      "/static/NeskiApply/NA7.webp", 
    ],
    collaboration: false,
    techStack: [
      "React 19", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui",
      "Express.js", "Node.js", "PostgreSQL", "Drizzle ORM",
      "Perplexity AI", "Google Gemini AI", "OpenRouter AI",
      "n8n Workflows", "Discord Webhooks", "Railway"
    ],
    keyFeatures: [
      {
        title: "Multi-Source Job Aggregation",
        description: "Unifies listings from Indeed, JSearch, and Adzuna with automated scheduled searches.",
        icon: "Search"
      },
      {
        title: "AI Resume Optimizer",
        description: "Automatically rewrites resumes to match specific job descriptions using LLMs.",
        icon: "FileText"
      },
      {
        title: "Interview Prep Simulator",
        description: "Generates tailored interview questions (Screening, Technical, Pressure Test) using the STAR method.",
        icon: "Mic"
      },
      {
        title: "Automation Workflows",
        description: "Discord alerts and n8n workflows keep users updated on new matches and application status.",
        icon: "Link"
      }
    ],
    architecture: {
      description: "A robust full-stack architecture with a focus on AI integration and background automation.",
      layers: [
        {
          name: "Frontend",
          technologies: ["React 19", "TanStack Query", "shadcn/ui"],
          description: "Modern, responsive SPA with real-time state management."
        },
        {
          name: "Backend",
          technologies: ["Node.js", "Express", "Drizzle ORM", "PostgreSQL"],
          description: "Scalable REST API with structured data persistence."
        },
        {
          name: "AI & Automation",
          technologies: ["Google Gemini", "Perplexity", "n8n", "Node-cron"],
          description: "Distributed AI processing and scheduled background tasks."
        }
      ]
    },
    challengesAndSolutions: [
      {
        challenge: "Managing rate limits and cost-efficiency across multiple heavy AI API providers.",
        solution: "Implemented an intelligent model routing layer that uses cheaper models for scoring and premium models for document rewriting."
      },
      {
        challenge: "Ensuring high-accuracy resume parsing from various PDF/Word formats.",
        solution: "Used a hybrid approach combining 'pdf-parse' for structure and Gemini AI for semantic extraction of skills and experience."
      }
    ],
    myRole: {
      title: "Solo Founder & Developer",
      contributions: [
        "Built the entire platform from concept to deployment.",
        "Integrated 4+ different AI APIs and architected the model switching logic.",
        "Designed and implemented the PostgreSQL schema using Drizzle ORM.",
        "Set up complex automation workflows with n8n and Discord integrations."
      ]
    },
    metrics: [
      { label: "AI Jobs Processed", value: "500+", icon: "Cpu" },
      { label: "Match Accuracy", value: "~95%", icon: "Target" },
      { label: "Alert Latency", value: "Real-time", icon: "Zap" }
    ],
    learnings: [
      "Advanced prompt engineering and LLM output parsing.",
      "Building resilient web scrapers and API aggregators.",
      "Managing complex asynchronous background tasks in Node.js."
    ]
  },

  {
    title: "Josh in a Dream",
    tagline: "Atmospheric 3D platformer built with Unreal Engine 5.5.",
    category: "Game Development",
    duration: "3 Months",
    status: "completed",
    description: "Josh in a Dream is a third-person platformer game developed in Unreal Engine 5.5. Set in a surreal dreamscape, players control Josh as he explores a single, intricately designed level filled with enemies, traps, and environmental challenges.",
    overview: "Creating an immersive 3D experience requires a deep understanding of lighting, character physics, and level design. This project showcases the power of UE5's Nanite and Lumen for achieving high-fidelity visuals in a solo-dev indie project.",
    link: "https://github.com/neski321/Josh-In-A-Dream",
    screenshots: [
      "/static/JoshDream/Josh1.webp",
      "/static/JoshDream/Josh2.webp",
      "/static/JoshDream/Josh3.webp",
      "/static/JoshDream/Josh4.webp",
      "/static/JoshDream/Josh5.webp",
      "/static/JoshDream/Josh6.webp",
      "/static/JoshDream/Josh7.webp",
      "/static/JoshDream/Josh8.webp",
    ],
    VideoDemo: "https://vimeo.com/1086211574?share=copy#t=0",
    techStack: ["Unreal Engine 5.5", "Blueprint Scripting", "C++", "Nanite", "Lumen", "Mixamo", "Game Design", "Animation", "Level Design"],
    keyFeatures: [
      {
        title: "Advanced Traversal",
        description: "Jump stations and moving platforms for dynamic, high-mobility gameplay.",
        icon: "Zap"
      },
      {
        title: "Dynamic Lighting",
        description: "Leveraging UE5 Lumen for realistic, real-time global illumination.",
        icon: "Zap"
      },
      {
        title: "Character Animation",
        description: "Custom animation blueprints for smooth character-environment interaction.",
        icon: "Users"
      }
    ],
    collaboration: true,
    myRole: {
      title: "Lead Game Developer (Team Collaborative)",
      contributions: [
        "Led the technical implementation of gameplay mechanics in a team setting.",
        "Co-designed the level layout and environmental storytelling.",
        "Collaborated on lighting and post-processing stack for 'dream' aesthetic.",
        "Coordinated with team members on animation retargeting and integration."
      ]
    }
  },

  {
    title: "Online Art gallery",
    tagline: "Scalable MERN ecosystem for digital art community management.",
    category: "Full-Stack Web Development",
    duration: "1 Month",
    status: "completed",
    description: "A web-based online art gallery database using ReactJS and mongoDB for user authentication and data management.",
    overview: "Built as a performance-first gallery, this project solves the challenge of organizing and presenting large art collections. It implements secure artist-client workflows and emphasizes clean database schema design for high-speed retrieval of high-resolution media metadata.",
    link: "https://assign6-pvmw.vercel.app/",
    screenshots: [
      "/static/OnlineArt/OnlineArt1.webp",
      "/static/OnlineArt/OnlineArt2.webp",
      "/static/OnlineArt/OnlineArt3.webp",
      "/static/OnlineArt/OnlineArt4.webp",
      "/static/OnlineArt/OnlineArt5.webp",
      "/static/OnlineArt/OnlineArt6.webp",
    ],
    techStack: ["React", "MongoDB", "Express", "Node.js", "CSS", "JWT Auth"],
    keyFeatures: [
      {
        title: "Secure Artist Portfolios",
        description: "JWT-based authentication for artists to manage their private galleries safely.",
        icon: "Shield"
      },
      {
        title: "Dynamic Distribution",
        description: "Responsive grid layouts that adapt to art piece aspect ratios without distortion.",
        icon: "Layout"
      },
      {
        title: "Search & Filtering",
        description: "Sub-second database queries for art metadata using MongoDB indexing.",
        icon: "Search"
      }
    ],
    architecture: {
      description: "Standard MERN stack architecture with a focus on relational data management in a NoSQL environment.",
      layers: [
        {
          name: "Frontend",
          technologies: ["React", "Custom CSS"],
          description: "Single-page application with centralized state for gallery navigation."
        },
        {
          name: "API Service",
          technologies: ["Node.js", "Express", "JWT"],
          description: "RESTful architecture handling business logic and secure middleware."
        },
        {
          name: "Database",
          technologies: ["MongoDB", "Mongoose"],
          description: "Optimized document storage with schema validation for art metadata."
        }
      ]
    },
    challengesAndSolutions: [
      {
        challenge: "Managing authentication persistence across manual page refreshes in a React environment.",
        solution: "Implemented secure HTTP-only cookies and a Redux-like state sync helper for JWT validation."
      },
      {
        challenge: "Efficiently loading hundreds of small art thumbnails without impacting API performance.",
        solution: "Developed an image virtualization strategy and implemented MongoDB projection to only fetch necessary metadata."
      }
    ],
    myRole: {
      title: "Full-Stack Developer",
      contributions: [
        "Architected the MongoDB schema and established Mongoose relationships.",
        "Built the entire React frontend and integrated with Express server.",
        "Implemented the JWT-based security layer."
      ]
    },
    metrics: [
      { label: "Query Speed", value: "<50ms", icon: "Timer" },
      { label: "Auth Security", value: "JWT", icon: "Shield" },
      { label: "Uptime", value: "99.9%", icon: "Zap" }
    ],
    learnings: [
      "Relational modeling in document databases.",
      "Implementing custom middleware for route protection.",
      "Responsive CSS grid techniques for varied image dimensions."
    ]
  },

  {
    title: "NeskiPDFs",
    tagline: "High-performance, privacy-first PDF manipulation in the browser.",
    category: "Utility / Web Tools / Browser Engineering",
    duration: "2 Months",
    status: "completed",
    description: "Combine, split, compress, and convert PDF files for free. NeskiPDFs provides a suite of essential document tools without the need for server-side processing.",
    overview: "Document security is a major concern. NeskiPDFs eliminates the middleman by performing 100% of PDF operations entirely within the user's browser via Web Workers, ensuring sensitive files never leave the machine.",
    link: "https://neskipdfs.up.railway.app/",
    screenshots: [
      "/static/NeskiPDFs/NeskiPDFs1.webp",
      "/static/NeskiPDFs/NeskiPDFs2.webp",
      "/static/NeskiPDFs/NeskiPDFs3.webp",
      "/static/NeskiPDFs/NeskiPDFs4.webp",
    ],
    techStack: ["Next.js", "TypeScript", "PDF-lib", "Web Workers", "Tailwind CSS"],
    keyFeatures: [
      {
        title: "Client-Side Merging",
        description: "Surgically combine PDF pages using binary manipulation with PDF-lib.",
        icon: "Package"
      },
      {
        title: "Privacy-Parity",
        description: "Zero server uploads; all processing happens in localized browser buffers.",
        icon: "Shield"
      },
      {
        title: "UI Performance",
        description: "Web Worker offloading prevents UI freezing during heavy document compression.",
        icon: "Zap"
      }
    ],
    architecture: {
      description: "Distributed browser-based architecture that leverages multi-core processing for file handling.",
      layers: [
        {
          name: "UI Engine",
          technologies: ["Next.js", "Tailwind"],
          description: "Modern drag-and-drop interface for document orchestration."
        },
        {
          name: "Processing Worker",
          technologies: ["Web Workers", "PDF-lib"],
          description: "Isolated background thread handling heavy binary PDF operations."
        }
      ]
    },
    challengesAndSolutions: [
      {
        challenge: "Browser memory limits when processing excessively large PDF files (>500MB).",
        solution: "Implemented binary stream-based processing to handle files in chunks rather than loading full buffers into active memory."
      }
    ],
    myRole: {
      title: "Solo Developer",
      contributions: [
        "Incepted the privacy-first architecture using binary manipulation.",
        "Developed the Web Worker communication bridge.",
        "Designed the reactive document state manager."
      ]
    },
    metrics: [
      { label: "Privacy Rating", value: "Local Only", icon: "Shield" },
      { label: "Processing Speed", value: "Instant", icon: "Zap" }
    ],
    learnings: [
      "Advanced binary data manipulation in JavaScript.",
      "Optimizing complex multi-threaded browser workflows.",
      "UI/UX patterns for complex file manipulation tasks."
    ]
  },

  {
    title: "Ticket Manager App",
    tagline: "Streamlined support ticketing system for internal teams.",
    category: "Backend / Database",
    duration: "2 Months",
    status: "completed",
    description: "A Ticket management app that uses python and django database for user authentication and data management.",
    overview: "Built to solve internal coordination issues, this ticket manager provides a robust workflow for submitting, tracking, and resolving technical issues with role-based permissions.",
    link: "https://github.com/neski321/MyTicketApp",
    screenshots: [
      "/static/Ticketmanager/Ticketmanager1.webp",
      "/static/Ticketmanager/Ticketmanager3.webp",
      "/static/Ticketmanager/Ticketmanager4.webp",
      "/static/Ticketmanager/Ticketmanager6.webp",
      "/static/Ticketmanager/Ticketmanager7.webp",
      "/static/Ticketmanager/ticketmanager21.webp",
      "/static/Ticketmanager/ticketmanager27.webp",
    ],
    techStack: ["Python", "Django", "SQLite", "Bootstrap"],
    keyFeatures: [
      {
        title: "Ticketing Workflow",
        description: "Structured status updates and assignment logic for enterprise efficiency.",
        icon: "CheckCircle2"
      },
      {
        title: "Admin Dashboard",
        description: "High-level overview of team performance and ticket aging metrics.",
        icon: "BarChart3"
      },
      {
        title: "Role-Based Access",
        description: "Granular control over who can view, edit, and resolve specific ticket categories.",
        icon: "Shield"
      }
    ],
    collaboration: true,
    architecture: {
      description: "Robust Model-Template-View (MTV) architecture using Django for strict data integrity.",
      layers: [
        {
          name: "Backend Layer",
          technologies: ["Python 3.x", "Django"],
          description: "Complex business logic handling ticket lifecycles and permission checks."
        },
        {
          name: "Data Layer",
          technologies: ["PostgreSQL / SQLite"],
          description: "Relational schema designed for efficient querying of ticket history and status."
        }
      ]
    },
    challengesAndSolutions: [
      {
        challenge: "Developing a dynamic permission system that allows for manager-level overrides without complicating the codebase.",
        solution: "Utilized Django's built-in Group and Permission models, extended with custom signals for automated role assignment."
      }
    ],
    myRole: {
      title: "Backend Developer (Team Collaborative)",
      contributions: [
        "Developed the Django backend and authentication system as part of a developer team.",
        "Collaborated on database schema design for complex issue tracking.",
        "Contributed to front-end integration and API documentation."
      ]
    },
    metrics: [
      { label: "Resolution Rate", value: "92%", icon: "CheckCircle2" },
      { label: "User Base", value: "Internal", icon: "Users" }
    ],
    learnings: [
      "Django ORM performance optimization.",
      "Implementing RBAC systems in enterprise applications.",
      "Managing technical debt in feature-dense backend services."
    ]
  },

  {
    title: "Spreading Positivity Social app",
    tagline: "A digital oasis for uplifting messages and community support.",
    category: "Social Platform",
    duration: "2 Months",
    status: "completed",
    description: "The Spreading Positivity Social App is a web application I designed to foster a supportive online community by allowing users to share uplifting messages.",
    overview: "In an era of digital noise, this app focuses exclusively on positive interaction. It leverages real-time updates through Firebase to create a live, supportive environment where users can share gratitude and encouragement safely.",
    link: "https://github.com/neski321/Messages_board",
    screenshots: [
      "/static/MessagesBoard/social_app1.webp",
      "/static/MessagesBoard/social_app2.webp",
      "/static/MessagesBoard/social_app3.webp",
    ],
    collaboration: true,
    techStack: ["Flask", "Python", "Firebase Auth", "Firestore", "Bootstrap"],
    keyFeatures: [
      {
        title: "Real-time Feed",
        description: "Uplifting messages appear instantly using Firestore real-time listeners.",
        icon: "RefreshCw"
      },
      {
        title: "Community Moderation",
        description: "Crowdsourced positivity through specific engagement mechanics to filtered toxicity.",
        icon: "Users"
      },
      {
        title: "Global Reach",
        description: "Lightweight architecture optimized for low-bandwidth connections.",
        icon: "Globe"
      }
    ],
    architecture: {
      description: "A hybrid architecture combining a Flask backend for routing with Firebase for real-time data persistence.",
      layers: [
        {
          name: "Application Server",
          technologies: ["Flask", "Python"],
          description: "Handles user sessions, routing, and server-side logic."
        },
        {
          name: "Real-time Data",
          technologies: ["Firebase Firestore"],
          description: "NoSQL document storage with native WebSocket support for push updates."
        }
      ]
    },
    challengesAndSolutions: [
      {
        challenge: "Maintaining a zero-tolerance policy for toxicity while keeping the moderation process decentralized.",
        solution: "Implemented a community-driven reporting system integrated with Firebase Cloud Functions to auto-shadowban highly reported content."
      }
    ],
    myRole: {
      title: "Backend Developer",
      contributions: [
        "Set up the Flask server and modular blueprinted architecture.",
        "Managed the Firebase integration for real-time messaging.",
        "Created the automated moderation logic for community standards."
      ]
    },
    metrics: [
      { label: "Alert Latency", value: "Real-time", icon: "Zap" },
      { label: "Community Rating", value: "Positive", icon: "Sparkles" }
    ],
    learnings: [
      "Real-time state synchronization with Firestore.",
      "Scaling Flask applications with third-party SaaS backends.",
      "Developing social feedback loops focused on wellness."
    ]
  },

  {
    title: "Avoiding game",
    tagline: "Fast-paced arcade action testing player reflexes.",
    category: "Game Development",
    duration: "1 Month",
    status: "completed",
    description: 'The game, titled "Avoid the Enemies," involves a player-controlled block that must dodge falling enemy blocks to accumulate a high score.',
    overview: "An exploration of game loop mechanics and dynamic difficulty scaling. This project demonstrates high-performance collision detection and state management in a Python-based execution environment, requiring sub-millisecond precision for collision checks.",
    link: "https://github.com/neski321/AvoidingGame",
    screenshots: [
      "/static/Avoidinggame/Avoidgame1.webp",
      "/static/Avoidinggame/Avoidgame2.webp",
      "/static/Avoidinggame/Avoidgame3.webp",
    ],
    VideoDemo: "https://vimeo.com/910294731?share=copy",
    techStack: ["Python", "Pygame"],
    keyFeatures: [
      {
        title: "Dynamic Difficulty",
        description: "Scaling enemy speed and spawn rates based on current player progression.",
        icon: "Zap"
      },
      {
        title: "Score Persistence",
        description: "Local data management for tracking high scores across sessions.",
        icon: "Target"
      },
      {
        title: "Fluid Framerate",
        description: "Optimized drawing logic to maintain 60FPS on varied hardware.",
        icon: "RefreshCw"
      }
    ],
    architecture: {
      description: "Classic monolithic game loop architecture (Init -> Event -> Update -> Draw -> Repeat).",
      layers: [
        {
          name: "Game Engine",
          technologies: ["Pygame"],
          description: "Handles low-level input detection and graphical rendering."
        },
        {
          name: "Logic Engine",
          technologies: ["Python"],
          description: "Discrete mathematics for collision calculation and entity movement."
        }
      ]
    },
    challengesAndSolutions: [
      {
        challenge: "Managing hitbox accuracy when objects move at extremely high velocities (Tunneling Effect).",
        solution: "Implemented discrete sub-step physics checks to bridge the gap between frames when objects are moving faster than their hitbox width."
      }
    ],
    myRole: {
      title: "Solo Developer",
      contributions: [
        "Implemented the core game loop and collision detection.",
        "Designed the UI and score accumulation logic.",
        "Created custom assets and sprite management systems."
      ]
    },
    metrics: [
      { label: "Frame Rate", value: "60 FPS", icon: "Zap" },
      { label: "Input Lag", value: "<16ms", icon: "Timer" }
    ],
    learnings: [
      "Mathematical principles of collision detection.",
      "Game loop performance optimization.",
      "Designing for scaleable difficulty in arcade games."
    ]
  },

  {
    title: "E-commerce Store",
    tagline: "High-performance digital marketplace with advanced filtering and secure checkout.",
    category: "Full-Stack Web Development",
    duration: "3 Months",
    status: "completed",
    description: "A comprehensive e-commerce platform featuring a modern storefront, advanced product filtering, and a robust admin dashboard for inventory management.",
    overview: "Modern e-commerce requires more than just a list of products. This project focuses on the 'Search-to-Checkout' pipeline, implementing sophisticated filtering algorithms and a seamless user experience. It includes a dedicated admin area for real-time product updates and order tracking.",
    link: "https://e-commerce-by-neski.up.railway.app/",
    screenshots: [
      "/static/Ecommerce/Ecommerce1.webp",
      "/static/Ecommerce/Ecommerce2.webp",
      "/static/Ecommerce/Ecommerce3.webp",
      "/static/Ecommerce/Ecommerce4.webp",
      "/static/Ecommerce/Ecommerce5.webp",
      "/static/Ecommerce/Ecommerce6.webp",
      "/static/Ecommerce/Ecommerce7.webp",
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Redux Toolkit", "Stripe API", "JWT"],
    keyFeatures: [
      {
        title: "Advanced Search & Filters",
        description: "Multi-layered filtering by category, price, rating, and brand with sub-second response times.",
        icon: "Search"
      },
      {
        title: "Secure Checkout",
        description: "Integrated Stripe payment gateway with webhook-based order confirmation.",
        icon: "Shield"
      },
      {
        title: "Admin Inventory System",
        description: "Full-featured dashboard for tracking metrics, managing stock, and updating product catalogs.",
        icon: "Layout"
      }
    ],
    architecture: {
      description: "MERN stack architecture with coordinated state management for complex shopping flows.",
      layers: [
        {
          name: "Frontend",
          technologies: ["React", "Redux Toolkit", "Tailwind"],
          description: "Declarative UI with centralized state for cart and filter persistence."
        },
        {
          name: "Backend Service",
          technologies: ["Node.js", "Express", "Mongoose"],
          description: "RESTful architecture handling business logic and secure middleware."
        },
        {
          name: "Database",
          technologies: ["MongoDB Atlas"],
          description: "Cloud-hosted NoSQL storage optimized for dynamic product attributes."
        }
      ]
    },
    challengesAndSolutions: [
      {
        challenge: "Synchronizing cart state across multiple devices without requiring frequent database writes.",
        solution: "Implemented a hybrid strategy using Redux Persist for local state and debounced API calls for server-side persistence."
      },
      {
        challenge: "Handling complex product filtering across thousands of variations without UI lag.",
        solution: "Utilized MongoDB aggregation pipelines to perform heavy-lifting on the server while implementing optimistic UI updates on the client."
      }
    ],
    myRole: {
      title: "Full-Stack Developer",
      contributions: [
        "Architected the relational data model in a NoSQL environment.",
        "Developed the advanced filtering engine and search logic.",
        "Integrated Stripe for secure payment processing and webhook handling.",
        "Built the responsive product grid and admin dashboard."
      ]
    },
    metrics: [
      { label: "Filter Latency", value: "<150ms", icon: "Timer" },
      { label: "Product count", value: "500+", icon: "Package" }
    ],
    learnings: [
      "Mastering complex filter state orchestration.",
      "Implementing secure payment workflows with 3rd party APIs.",
      "Optimizing NoSQL queries for multi-parameter search."
    ]
  },

  {
    title: "Travel Bucket List app",
    tagline: "Explore the world and manage your travel dreams.",
    category: "Mobile Application",
    duration: "2 Months",
    status: "completed",
    description: "The Travel Bucket List app allows users to explore information about various countries, view their details, and manage their favorites.",
    overview: "Built for the global traveler, this mobile app aggregates country data and provides a personalized space to plan future adventures. It focuses on clean mobile navigation, offline-friendly data access, and seamless state sync with Firebase.",
    link: "https://github.com/neski321/My-FavoritePlacesApp",
    screenshots: [
      "/static/TravelList/Travellist1.webp",
      "/static/TravelList/Travellist2.webp",
      "/static/TravelList/Travellist3.webp",
    ],
    VideoDemo: "https://vimeo.com/910329944?share=copy",
    techStack: ["React Native", "Firebase Auth", "Cloud Firestore", "Tailwind Native"],
    keyFeatures: [
      {
        title: "Country Intelligence",
        description: "Explore detailed profiles of independent nations worldwide using curated datasets.",
        icon: "Globe"
      },
      {
        title: "Personalized Favorites",
        description: "Save and manage your dream travel destinations with cloud-sync persistence.",
        icon: "Target"
      },
      {
        title: "Native Performance",
        description: "Optimized mobile UI with React Native for 60FPS fluid navigation.",
        icon: "Smartphone"
      }
    ],
    architecture: {
      description: "Cross-platform mobile architecture with a serverless data layer.",
      layers: [
        {
          name: "Mobile Client",
          technologies: ["React Native", "Expo"],
          description: "Responsive mobile interface with native component mapping."
        },
        {
          name: "Cloud Sync",
          technologies: ["Firebase Firestore"],
          description: "Handles user profiles and persistent travel bucket lists."
        }
      ]
    },
    challengesAndSolutions: [
      {
        challenge: "Handling network-loss gracefully while browsing country details.",
        solution: "Implemented localized data caching using Redux Persist, allowing full browsing capability in offline mode."
      }
    ],
    myRole: {
      title: "Solo Mobile Developer",
      contributions: [
        "Developed the cross-platform mobile UI using React Native.",
        "Implemented the Firebase sync engine for user favorites.",
        "Built the custom navigation flow and country search logic."
      ]
    },
    metrics: [
      { label: "Platform Count", value: "iOS / Android", icon: "Smartphone" },
      { label: "Sync Latency", value: "<1s", icon: "Zap" }
    ],
    learnings: [
      "Mobile-first design principles with React Native.",
      "Building resilient offline-first mobile applications.",
      "Managing complex navigation stacks across platforms."
    ]
  },

  {
    title: "Portfolio Website",
    tagline: "The modern home of my engineering journey.",
    category: "Web Application / Portfolio",
    duration: "Ongoing",
    status: "completed",
    description: "A modern and interactive portfolio built with Next.js (App Router).",
    overview: "This website itself is a project showcasing modern web capabilities: server-side rendering, smooth animations, and structured content management. It acts as a live demonstration of my frontend and architectural skills, featuring a custom-built case study engine.",
    link: "https://github.com/neski321/my-website",
    screenshots: [],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "Lucide Icons"],
    keyFeatures: [
      {
        title: "Dynamic Deep Dives",
        description: "Custom-built case study engine for structured technical storytelling.",
        icon: "Layout"
      },
      {
        title: "Animated Interactions",
        description: "Premium feel using coordinated Framer Motion and GSAP for micro-interactions.",
        icon: "Zap"
      },
      {
        title: "Optimized Performance",
        description: "High Lighthouse scores through Image optimization and modern Next.js patterns.",
        icon: "RefreshCw"
      }
    ],
    architecture: {
      description: "Modern App Router architecture focused on SEO and component reusability.",
      layers: [
        {
          name: "View Layer",
          technologies: ["React 19", "Framer Motion"],
          description: "Declarative UI with high-performance animation orchestration."
        },
        {
          name: "Data Layer",
          technologies: ["TypeScript", "JSON Mapping"],
          description: "Structured project data feeding the dynamic routing system."
        }
      ]
    },
    challengesAndSolutions: [
      {
        challenge: "Balancing heavy animations with high performance and accessibility (a11y).",
        solution: "Used 'LayoutId' for smooth transitions and ensured all interactive elements have proper ARIA labels and focus states."
      }
    ],
    myRole: {
      title: "Full-Stack Creator",
      contributions: [
        "Architected the site for SEO and performance.",
        "Built the custom project deep-dive engine.",
        "Integrated modern animation libraries for premium UX."
      ]
    },
    metrics: [
      { label: "Page Speed", value: "95+", icon: "Zap" },
      { label: "A11y Score", value: "100", icon: "CheckCircle2" }
    ],
    learnings: [
      "Advanced Next.js App Router patterns.",
      "Optimizing Framer Motion for complex navigation flows.",
      "SEO best practices for dynamic React applications."
    ]
  },

  {
    title: "PropertyHub",
    tagline: "Modern real-estate marketplace for streamlined property discovery.",
    category: "Marketplace / Real Estate",
    duration: "3 Months (In Dev)",
    status: "in-progress",
    inProgress: true,
    description: "A full-stack real estate platform that revolutionizes property discovery and management. Built with React 18, TypeScript, Node.js, Express, PostgreSQL (Neon), and Firebase Authentication.",
    overview: "The real estate market requires high visual clarity and efficient filtering. PropertyHub provides a modern interface for users to browse, save, and inquire about properties with a focus on high-quality imaging and fast interaction (Currently in Beta).",
    link: "https://properti-hub.vercel.app/",
    screenshots: [
      "/static/PropertyHub/Propertyhub1.webp",
    ],
    techStack: ["React 18", "TypeScript", "Node.js", "Express", "PostgreSQL", "Neon", "Firebase", "Framer Motion"],
    keyFeatures: [
      {
        title: "Advanced Filtering",
        description: "Sort properties by location, price range, and amenities with instant results.",
        icon: "Search"
      },
      {
        title: "Property Favorites",
        description: "Persistent user selections for easy comparison and later viewing.",
        icon: "Target"
      }
    ],
    architecture: {
      description: "Scalable full-stack architecture using a serverless database backend.",
      layers: [
        {
          name: "Frontend",
          technologies: ["React", "TypeScript"],
          description: "Modular component architecture for high-speed browsing."
        },
        {
          name: "Backend",
          technologies: ["Node.js", "Express", "PostgreSQL"],
          description: "Robust API layer with Neon DB for serverless relational data."
        }
      ]
    },
    myRole: {
      title: "Lead Developer",
      contributions: [
        "Architecting the full-stack system and database schema.",
        "Implementing the responsive property search and filter logic.",
        "Developing the user authentication flow with Firebase."
      ]
    }
  },

  {
    title: "MindEase - AI Mental Health Tracker",
    tagline: "Comprehensive mental wellness platform for progress tracking and expert resources.",
    category: "Health & Wellness / SaaS",
    duration: "4 Months (In Dev)",
    status: "in-progress",
    inProgress: true,
    description: "MindEase is a mental wellness platform designed to empower individuals with various meditation techniques, mood tracking, and resources to cultivate inner peace and mental resilience.",
    overview: "Mental health management often lacks structured tracking and accessible expert guidance. MindEase (In Development) is being built to bridge this gap, offering a serene user experience with evidence-based exercises and AI-powered progress visualizations.",
    link: "https://mindease-wellness.vercel.app/",
    screenshots: [
      "/static/MindEase/Mindease1.webp",
    ],
    techStack: ["React", "Next.js", "Tailwind CSS", "Firebase", "Recharts", "Framer Motion"],
    keyFeatures: [
      {
        title: "Mood Tracking",
        description: "Log and visualize emotional trends over time with interactive charts.",
        icon: "BarChart3"
      },
      {
        title: "Curated Meditations",
        description: "Access a library of audio-guided sessions for various mental needs.",
        icon: "Mic"
      }
    ],
    architecture: {
      description: "Secure, wellness-focused architecture with a focus on data privacy.",
      layers: [
        {
          name: "Client App",
          technologies: ["React", "Recharts"],
          description: "Visual-heavy interface for data analysis and serenity."
        },
        {
          name: "Cloud Backend",
          technologies: ["Firebase", "Firestore"],
          description: "Real-time updates and secure secondary storage for user reflections."
        }
      ]
    },
    myRole: {
      title: "Lead Developer",
      contributions: [
        "Designing the UI/UX focused on mindfulness and user serenity.",
        "Implementing the progress tracking charts using Recharts.",
        "Integrating AI-led content recommendations."
      ]
    }
  }
]
