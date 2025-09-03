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
}

export const projects: ProjectType[] = [
    {
    title: "PennyPincher by Neski",
    description:
  "PennyPincher is an intelligent, cross-platform personal finance tracker designed to make managing money simple, insightful, and seamless. It features a fully native Android app built with Kotlin and Jetpack Compose, and a responsive web dashboard using Next.js and Tailwind CSS both integrated with Firebase for real-time synchronization and secure data handling. Users can easily track income and expenses across multiple currencies, organize transactions with AI-powered category suggestions, manage recurring subscriptions, and gain budgeting insights through intuitive filters and interactive charts. With support for dark and light themes, swipe-to-delete, pull-to-refresh, and modern design principles, PennyPincher offers a smooth and practical experience for everyday financial management.",
    link: "https://pennypincherbyneski.vercel.app/",
    androidApkLink: "https://drive.google.com/file/d/1MyROEo0Mfr7NQO-CcdIV6-8DPYDzO6Lj/view?usp=sharing",
    screenshots: [
      "/static/PennyPincher/pp1.png",
      "/static/PennyPincher/pp2.png",
      "/static/PennyPincher/pp3.png",
      "/static/PennyPincher/pp4.png",
      "/static/PennyPincher/pp5.png",
      "/static/PennyPincher/pp6.png",
      "/static/PennyPincher/pp7.png",
      "/static/PennyPincher/pp8.png",
      "/static/PennyPincher/pp9.png",
      "/static/PennyPincher/pp10.png"
    ],
    mobileScreenshots: [
      "/static/PennyPincher/Android/pp1.png",
      "/static/PennyPincher/Android/pp2.png",
      "/static/PennyPincher/Android/pp3.png",
      "/static/PennyPincher/Android/pp4.png",
      "/static/PennyPincher/Android/pp5.png",
      "/static/PennyPincher/Android/pp6.png",
      "/static/PennyPincher/Android/pp7.png",
      "/static/PennyPincher/Android/pp8.png",
      "/static/PennyPincher/Android/pp9.png",
    ],
    techStack: ["Kotlin", "Jetpack Compose", "Next.js", "Tailwind CSS", "Firebase", "TypeScript", "React", "Android Studio", "Vercel", "Material Design"],
  },

  {
    title: "DesignUrWeb",
    description:
      "DesignUrWeb is a collaborative web development service company founded by a group of three developers to help small businesses establish their online presence. The company offers comprehensive website development services including Basic, Advanced, Premium, and Wedding website packages. The platform features a modern, responsive design with service showcases, client testimonials, and template galleries. Built with a focus on helping small businesses grow their digital footprint, DesignUrWeb provides custom solutions ranging from restaurant websites to e-commerce platforms, fitness sites, and blog templates. The collaborative nature of this project demonstrates effective teamwork in creating a business that serves the community's web development needs.",
    link: "https://designurweb.com/",
    screenshots: [
      "/static/DesignUrWeb/DUW1.png",
      "/static/DesignUrWeb/DUW2.png",
      "/static/DesignUrWeb/DUW3.png",
      "/static/DesignUrWeb/DUW4.png",
    ],
    collaboration: true,
    techStack: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Bootstrap", "Git", "Responsive Design"],
  },

  {
    title: "ChantnChroma",
    description:
      "Chantnchroma emerged from the need to create a dedicated space where tattoo artists and template designers could showcase their work while connecting with potential clients and collaborators. The platform needed to handle high-quality image uploads, provide intuitive browsing experiences, and foster community engagement through social features. The main challenge was balancing visual appeal with performance, especially when dealing with large image galleries. Built with React and Next.js for optimal performance and SEO, the platform utilizes Google CDN for fast image delivery worldwide. The submission system allows artists to upload their work with detailed descriptions and tags for easy discovery. The community features include commenting, liking, and direct messaging between artists and clients. The responsive design ensures the gallery looks stunning on all devices, while the markdown support enables rich content creation for artist portfolios and project descriptions.",
    link: "https://www.chantnchroma.art/",
    screenshots: [
      "/static/Chantnchroma/cnc1.png",
    ],
    collaboration: true,
    techStack: ["React", "Next.js", "TypeScript", "Google CDN", "Three.js"],
  },
  
  {
    title: "Customer Segmentation App",
    description:
      "Customer Segmentation App is a machine learning and data science project I developed using Python and Streamlit to turn CRM data into actionable business insights. The app enables users to upload CSV or Excel datasets, intelligently map custom column names, and perform RFM (Recency, Frequency, Monetary) analysis to better understand customer behavior. Using KMeans clustering, the tool segments customers based on purchase patterns and presents results through intuitive dashboards and interactive visualizations. Designed with flexibility and usability in mind, it features encoding detection, dynamic cluster sizing, country-based filtering, and exportable summaries. This project reflects my passion for applying machine learning and data science techniques to real-world problems, bridging the gap between technical analysis and decision-making.",
    link: "https://neski321-customer-segment-customer-segapp-pl9bfj.streamlit.app/",
    screenshots: [
      "/static/CustomerSegmentationApp/csa1.png",
      "/static/CustomerSegmentationApp/csa2.png",
      "/static/CustomerSegmentationApp/csa3.png",
      "/static/CustomerSegmentationApp/csa4.png",
      "/static/CustomerSegmentationApp/csa5.png",
      "/static/CustomerSegmentationApp/csa6.png",
    ],
    collaboration: true,
    techStack: ["Python", "Streamlit", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Plotly", "KMeans Clustering", "RFM Analysis"],
  },

  {
    title: "Josh in a Dream",
    description:
      "Josh in a Dream is a third-person platformer game developed in Unreal Engine 5.5. Set in a surreal dreamscape, players control Josh as he explores a single, intricately designed level filled with enemies, traps, and environmental challenges. The main objective is to find two hidden keys placed in different sections of the map, unlock two doors, and reach the gem at the end of the level. Gameplay features include moving platforms, jump stations for enhanced traversal, combat with enemies, health pickups, and strategically placed checkpoints that allow players to respawn and continue their journey. Josh's character model was sourced from Mixamo and enhanced with custom animation blueprints for smooth movement and interaction. Built using UE5.5's Nanite and Lumen technologies, the game delivers high-quality visuals, responsive gameplay, and immersive lighting—all powered through Blueprint scripting.",
    link: "https://github.com/neski321/Josh-In-A-Dream",
    screenshots: [
      "/static/JoshDream/Josh1.png",
      "/static/JoshDream/Josh2.png",
      "/static/JoshDream/Josh3.png",
      "/static/JoshDream/Josh4.png",
      "/static/JoshDream/Josh5.png",
      "/static/JoshDream/Josh6.png",
      "/static/JoshDream/Josh7.png",
      "/static/JoshDream/Josh8.png",
    ],
    VideoDemo: "https://vimeo.com/1086211574?share=copy#t=0",
    techStack: ["Unreal Engine 5.5", "Blueprint Scripting", "C++", "Nanite", "Lumen", "Mixamo", "3D Modeling", "Game Design", "Animation", "Level Design"],
  },
  {
    title: "E-commerce Store",
    description: "A comprehensive full-stack e-commerce platform featuring a modern, responsive design with advanced user experience enhancements. Built with React frontend and Django backend, the application now includes sophisticated product management, real-time cart functionality, and seamless payment processing with Stripe integration. The platform features role-based access control with Firebase authentication, PostgreSQL Cloud for robust data storage, and is deployed on Render for optimal performance. Key features include advanced product filtering and search capabilities, real-time inventory management, secure checkout with custom error handling, and a beautifully redesigned checkout experience with progress indicators and modern UI components. The application supports user favorites, order tracking, and comprehensive admin controls for product management. Enhanced with proper pagination, optimized API endpoints, and modern dialog components for improved user interaction.",
    link: "https://e-commerce-by-neski.up.railway.app",
    screenshots: [
      "/static/Ecommerce/Ecommerce1.png",
      "/static/Ecommerce/Ecommerce2.png",
      "/static/Ecommerce/Ecommerce3.png",
      "/static/Ecommerce/Ecommerce4.png",
      "/static/Ecommerce/Ecommerce5.png",
      "/static/Ecommerce/Ecommerce6.png",
      "/static/Ecommerce/Ecommerce7.png",
    ],
    techStack: ["React", "Django", "Python", "PostgreSQL", "Firebase", "Stripe", "JavaScript", "CSS3", "HTML5", "Render", "Railway"],
  },
  {
    title: "Online Art gallery",
    description:
      "A web-based online art gallery database using ReactJS and mongoDB for user authentication and data management.",
    link: "https://assign6-pvmw.vercel.app/",
    screenshots: [
      "/static/OnlineArt/OnlineArt1.png",
      "/static/OnlineArt/OnlineArt2.png",
      "/static/OnlineArt/OnlineArt3.png",
      "/static/OnlineArt/OnlineArt4.png",
      "/static/OnlineArt/OnlineArt5.png",
      "/static/OnlineArt/OnlineArt6.png",
    ],
  },
  {
    title: "Ticket Manager App",
    description:
      "A Ticket management app that uses python and django database for user authentication and data management.",
    link: "https://github.com/neski321/MyTicketApp",
    screenshots: [
      "/static/Ticketmanager/Ticketmanager1.png",
      "/static/Ticketmanager/Ticketmanager3.png",
      "/static/Ticketmanager/Ticketmanager4.png",
      "/static/Ticketmanager/Ticketmanager6.png",
      "/static/Ticketmanager/Ticketmanager7.png",
      "/static/Ticketmanager/ticketmanager21.png",
      "/static/Ticketmanager/ticketmanager27.png",
    ],
  },
  {
    title: "Spreading Positivity Social app",
    description:
      "The Spreading Positivity Social App is a web application I designed to foster a supportive online community by allowing users to share uplifting messages and engage with positive content. Built on the Flask web framework and integrated with Firebase services, the platform provides user authentication, real-time updates, and a dynamic messaging system.",
    link: "https://github.com/neski321/Messages_board",
    screenshots: [
      "/static/MessagesBoard/social_app1.png",
      "/static/MessagesBoard/social_app2.png",
      "/static/MessagesBoard/social_app3.png",
    ],
    collaboration: true,
  },
  {
    title: "Avoiding game",
    description:
      'The game, titled "Avoid the Enemies," involves a player-controlled block that must dodge falling enemy blocks to accumulate a high score. The player moves the block horizontally to avoid collisions with descending enemy blocks. The game features dynamic difficulty, as the speed of the falling enemy blocks gradually increases with the players score. The entire game is written in Python using Pygame library.',
    link: "https://github.com/neski321/AvoidingGame",
    screenshots: [
      "/static/Avoidinggame/Avoidgame1.png",
      "/static/Avoidinggame/Avoidgame2.png",
      "/static/Avoidinggame/Avoidgame3.png",
    ],
    VideoDemo: "https://vimeo.com/910294731?share=copy",
  },
  {
    title: "This Website",
    description:
      "A modern and interactive portfolio built with Next.js (App Router). This site includes a featured project showcase, animated transitions, an embedded resume viewer, and a responsive contact form. It also supports dark/light themes, smooth animations with Framer Motion, and mobile-first responsive design — all deployed on Vercel.",
    link: "https://github.com/neski321/my-website",
    screenshots: [],
  },
  {
    title: "Travel Bucket List app",
    description:
      "The Travel Bucket List app is a mobile application that allows users to explore information about various countries, view their details, and manage their favorites. The app utilizes the React Native framework for cross-platform development, providing a seamless experience on both iOS and Android devices. It integrates with Firebase for user authentication and Firestore for storing user-specific data such as favorites. Users can log in, view a list of independent countries, access detailed information about each country, and manage their favorite countries.",
    link: "https://github.com/neski321/My-FavoritePlacesApp",
    screenshots: [
      "/static/TravelList/Travellist1.png",
      "/static/TravelList/Travellist2.png",
      "/static/TravelList/Travellist3.png",
    ],
    VideoDemo: "https://vimeo.com/910329944?share=copy",
  },
  // Projects in Progress
  {
    title: "PropertyHub",    
    description:
       "A full-stack real estate platform that revolutionizes property discovery and management. Built with React 18, TypeScript, Node.js, Express, PostgreSQL (Neon), and Firebase Authentication. Features include intelligent property search with location-based filtering, multi-image property galleries, user review and rating systems, booking/inquiry management, responsive dashboard with analytics, and modern UI components. The platform supports both property buyers and sellers with features like featured listings, user profiles, and real-time notifications.",
    inProgress: true,
    screenshots: [
      "/static/PropertyHub/Propertyhub1.png",
    ],
    techStack: ["React 18", "TypeScript", "Node.js", "Express", "PostgreSQL", "Neon", "Firebase", "JavaScript", "CSS3", "HTML5"],
  },
  {
    title: "MindEase - AI Mental Health Tracker",
    description:
    "MindEase is a comprehensive mental wellness companion application that helps users track their mood, access personalized interventions, and build healthy mental habits. The app is built using React with TypeScript and Vite for a modern, responsive web experience. It integrates with Firebase for user authentication and PostgreSQL for storing user data including mood entries, interventions, progress tracking, and community interactions. Users can create accounts, track their daily mood with intensity levels, receive AI-powered personalized intervention recommendations, participate in breathing exercises and meditation sessions, engage with a supportive community through anonymous posts, and monitor their wellness progress over time. The app features a beautiful, accessible interface with smooth animations and provides crisis resources for users in need of immediate support.",
    inProgress: true,
    screenshots: [
      "/static/MindEase/Mindease1.png",
    ],
    techStack: ["React", "TypeScript", "Vite", "Firebase", "PostgreSQL", "AI/ML", "JavaScript", "CSS3", "HTML5", "Mental Health APIs"],
  },
]
