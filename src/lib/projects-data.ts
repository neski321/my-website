export interface ProjectType {
  title: string
  description?: string
  link?: string
  screenshots?: string[]
  VideoDemo?: string
}

export const projects: ProjectType[] = [
  {
    title: "Customer Segmentation App",
    description:
      "Customer Segmentation App is a machine learning and data science project I developed using Python and Streamlit to turn CRM data into actionable business insights. The app enables users to upload CSV or Excel datasets, intelligently map custom column names, and perform RFM (Recency, Frequency, Monetary) analysis to better understand customer behavior. Using KMeans clustering, the tool segments customers based on purchase patterns and presents results through intuitive dashboards and interactive visualizations. Designed with flexibility and usability in mind, it features encoding detection, dynamic cluster sizing, country-based filtering, and exportable summaries. This project reflects my passion for applying machine learning and data science techniques to real-world problems, bridging the gap between technical analysis and decision-making.",
    link: "https://github.com/neski321/Customer_segment",
    screenshots: [
      "/static/CustomerSegmentationApp/csa1.png",
      "/static/CustomerSegmentationApp/csa2.png",
      "/static/CustomerSegmentationApp/csa3.png",
    ],
  },

  {
    title: "Josh in a Dream",
    description:
      "Josh in a Dream is a third-person platformer game developed in Unreal Engine 5.5. Set in a surreal dreamscape, players control Josh as he explores a single, intricately designed level filled with enemies, traps, and environmental challenges. The main objective is to find two hidden keys placed in different sections of the map, unlock two doors, and reach the gem at the end of the level. Gameplay features include moving platforms, jump stations for enhanced traversal, combat with enemies, health pickups, and strategically placed checkpoints that allow players to respawn and continue their journey. Josh’s character model was sourced from Mixamo and enhanced with custom animation blueprints for smooth movement and interaction. Built using UE5.5’s Nanite and Lumen technologies, the game delivers high-quality visuals, responsive gameplay, and immersive lighting—all powered through Blueprint scripting.",
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
  },
  {
    title: "E-commerce Store",
    description:
      "The E-commerce Store is a full-stack web application that allows users to browse, search, and manage products while providing role-based access for administrative functions. The frontend is developed using React to deliver an intuitive user interface, and the backend is powered by Django. Firebase is integrated for user authentication and role management, while PostgreSQL Cloud handles the product backlog and ensures efficient data storage. The app is deployed on Render for a smooth and scalable hosting solution. Users can explore a catalog of products, manage their accounts, and administrators can oversee product inventory and updates.",
    link: "https://github.com/neski321/E-Commerce",
    screenshots: [
      "/static/Ecommerce/Ecommerce1.png",
      "/static/Ecommerce/Ecommerce2.png",
      "/static/Ecommerce/Ecommerce3.png",
      "/static/Ecommerce/Ecommerce4.png",
      "/static/Ecommerce/Ecommerce5.png",
    ],
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
  }  
]
