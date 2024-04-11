import GitHub from "@mui/icons-material/GitHub"
import { bravaaart, crypto, css, defi, firebase, framer, grilli, html, i18n, javascript, next, omni, poshnike, react, redux, social, tailwind, three, ts, unda } from "../../assets"
import { Attractions, ContactMail, DeveloperBoard, Home, Info, LinkedIn, Person, Science, Twitter, WhatsApp } from "@mui/icons-material"
import VisibilityIcon from '@mui/icons-material/Visibility';
import PinterestIcon from '@mui/icons-material/Pinterest';

export const navIcons = [
    {
        id: '#home',
        icon: <Home />
    },
    {
        id: '#about',
        icon: <Person />
    },
    {
        id: '#skills',
        icon: <Attractions />
    },
    {
        id: '#journey',
        icon: <Science />
    },
    {
        id: '#project',
        icon: <DeveloperBoard />
    },
    {
        id: '#contactme',
        icon: <ContactMail />
    },
]

export const socialIcons = [
    {
        icon: <GitHub style={{ padding: '6px', borderRadius: '50%', fontSize: '31px', }} className="icon bg-black dark:bg-slate-800 text-white" />,
        link: 'https://github.com/freshposh-code'
    },
    {
        icon: <LinkedIn style={{ color: 'white', backgroundColor: '#1f41ffee', padding: '6px', borderRadius: '50%', fontSize: '31px' }} className="icon" />,
        link: 'https://www.linkedin.com/in/farouk-ayomide-b81225290/'
    },
    {
        icon: <Twitter style={{ backgroundColor: '#4a6fff', color: 'white', padding: '6px', borderRadius: '50%', fontSize: '31px' }} className="icon" />,
        link: 'https://twitter.com/farouk_ayo'
    },
    {
        icon: <WhatsApp style={{ color: 'white', backgroundColor: 'green', padding: '6px', borderRadius: '50%', fontSize: '31px' }} className="icon" />,
        link: 'https://wa.me/+2349068620646?text=Hi%20there👋'
    },
]

export const aboutme = [
    {
        personalInfo: 'First Name:',
        response: 'Farouk',
        personalInfo2: 'Last Name:',
        response2: 'Olawuyi',
    },
    {
        personalInfo: 'Address:',
        response: 'Lagos',
        personalInfo2: 'Nationality:',
        response2: 'Nigerian',
    },
    {
        personalInfo: 'Freelance:',
        response: 'Available',
        personalInfo2: 'Completed Projects:',
        response2: '25+',
    },
    // {
    //     personalInfo: 'Phone:',
    //     response: '+2349068620646',
    //     personalInfo2: 'Email:',
    //     response2: 'freshposh97@..',
    // },

]

export const circularProgressbar = [
    {
        valueStart: 0,
        valueEnd: 99,
        skillText: 'HTML',
        skillLevel: 'Expert'
    },
    {
        valueStart: 0,
        valueEnd: 98,
        skillText: 'CSS',
        skillLevel: 'Expert'
    },
    {
        valueStart: 0,
        valueEnd: 68,
        skillText: 'JAVASCRIPT',
        skillLevel: 'Intermediate'
    },
    {
        valueStart: 0,
        valueEnd: 83.5,
        skillText: 'REACTJS',
        skillLevel: 'Advance'
    },
    {
        valueStart: 0,
        valueEnd: 66,
        skillText: 'TYPESCRIPT',
        skillLevel: 'Intermediate'
    },
    {
        valueStart: 0,
        valueEnd: 65.6,
        skillText: 'NEXTJS',
        skillLevel: 'intermediate'
    },
    {
        valueStart: 0,
        valueEnd: 35,
        skillText: 'REACTNATIVE',
        skillLevel: 'Biginner'
    },
]
export const circularProgressbarII = [
    {
        valueStart: 0,
        valueEnd: 98,
        skillText: 'TAILWINDCSS',
        skillLevel: 'Expert'
    },
    {
        valueStart: 0,
        valueEnd: 96,
        skillText: 'SCSS',
        skillLevel: 'Expert'
    },
    {
        valueStart: 0,
        valueEnd: 80,
        skillText: 'BOOTSTRAP',
        skillLevel: 'Advance'
    },
    {
        valueStart: 0,
        valueEnd: 85,
        skillText: 'FRAMERMOTION',
        skillLevel: 'Advance'
    },
    {
        valueStart: 0,
        valueEnd: 64,
        skillText: 'REDUX',
        skillLevel: 'Intermediate'
    },
    {
        valueStart: 0,
        valueEnd: 65,
        skillText: 'MATERIALUI',
        skillLevel: 'Intermediate'
    },
    {
        valueStart: 0,
        valueEnd: 61,
        skillText: 'FIREBASE',
        skillLevel: 'intermediate'
    },
    {
        valueStart: 0,
        valueEnd: 88.8,
        skillText: 'GIT/HUB/LAB',
        skillLevel: 'Advance'
    },
]

export const experience = [
    {
        language: html,
        languageName: 'Language Name: HTML (HyperText Markup Language)',
        date: 'june 2022',
        progress: 'Progression',
        progressII: 'Started with basic HTML tags and structures.',
        implement: 'Implementation:',
        implementII: 'Initially used inline styling within HTML before learning CSS.',
        learn: 'Learning Resources:',
        learnII: 'YouTube videos, W3Schools',
        apply: 'Application:',
        applyII: 'I began by using HTML to structure web content and pages, focused on visual appeal(CSS).',
        project: 'Projects:',
        projectII: 'Engaged in projects involving responsive design and semantic HTML/CSS structures.'
    },
    {
        language: css,
        languageName: 'Language Name: CSS (Cascading Style Sheets)',
        date: 'june 2022',
        progress: 'Progression',
        progressII: 'Gradually progressed from basic CSS to building complex UI/UX designs..',
        implement: 'Implementation:',
        implementII: ' Strong expertise in implementing media queries for responsive design..',
        learn: 'Learning Resources:',
        learnII: 'YouTube videos, W3Schools',
        apply: 'Application:',
        applyII: 'Advanced CSS for UI/UX, knowledge of Bootstrap, Tailwind CSS, SCSS',
        project: 'Projects:',
        projectII: ' Engage in projects that challenge my skills, especially in creating intricate layouts and animations.'
    },
    {
        language: javascript,
        languageName: 'Language Name: JavaScript',
        date: 'july 2022',
        progress: 'Progression',
        progressII: ' Developed an interest in React.js, exploring its concepts and potential applications.',
        implement: 'Implementation:',
        implementII: 'Implemented JavaScript for form validation, DOM manipulation to enhance interactivity.',
        learn: 'Learning Resources:',
        learnII: 'Utilized project-based learning, YouTube videos, and tutorials.',
        apply: 'React Mastery:',
        applyII: 'Focus on deepening knowledge and expertise in React.js.',
        project: 'Advanced JavaScript:',
        projectII: ' Continue exploring advanced JavaScript concepts for broader proficiency.'
    },
    {
        language: react,
        languageName: 'Library Name: React.js',
        date: 'october 2022 to date',
        progress: 'Progression:',
        progressII: 'Proficiency in building complex web applications using React.',
        implement: 'Implementation:',
        implementII: 'Proficiently used React for modern UI/UX designs, adding functionality to interfaces.',
        learn: 'Learning Resources:',
        learnII: 'Self-learning through personal projects, open-source contributions.',
        apply: 'Application:',
        applyII: 'Gained expertise in Redux, Next.js (with TypeScript), Context API for state management.',
        project: 'Projects: my first ever react project. oct2022',
        background: 'bg-white sm:p-2 p-1',
        backgroundGit: 'bg-black p-1 flex justify-center rounded-full',
        button: 'first react project',
        github: <GitHub style={{ fontSize: '1em' }} />,
        buttonII: 'Project UI'
    },
]

export const project = [
    {
        id: 1,
        projectIMG: poshnike,
        github: <GitHub />,
        linkgit: 'https://github.com/freshposh-code/NikeCommerce',
        visibility: <PinterestIcon />,
        linkvisible: 'https://www.pinterest.com/pin/1105211564790550279/',
        siteLink: 'https://poshnike-ecommerce.netlify.app/',
        head: 'Nike Store',
        tech: 'Technologies & Tools Utilized:',
        live: 'Live',
        details: 'Project Details',
        cardShadow: 'card-shadow',

        tools: [
            {
                languages: react,
                alt: 'react'
            },
            {
                languages: redux,
                alt: 'redux'
            },
            {
                languages: firebase,
                alt: 'redux'
            },
            {
                languages: tailwind,
                alt: 'redux'
            },
        ],

        projectDeatils: [
            {
                projectIMG: poshnike,
                header: 'Nike Store',
                preview: 'https://poshnike-ecommerce.netlify.app/',
                previewGit: 'https://github.com/freshposh-code/NikeCommerce',
                cardShadow: 'card-shadow',
                projectDetail: `Developed in early 2023, this project is an ecommerce application called "PoshNikeStore." 
                It leverages React and Redux for state management, along with Firebase for authentication,
                providing users with a seamless shopping experience.`,

                tech: `Technologies Utilized:`,
                techdetails: `Languages & Libraries:
                  Utilized React and Redux to handle the application's functionality, integrating Firebase's Context
                  API for secure user authentication.Styling: Tailwind CSS was employed to craft a visually appealing
                   and responsive user interface.`,

                func: `Key Functionalities:`,
                funcdetails: `Users can perform various actions, such as:
                   Account Management: Creating an account and securely logging in.
                   Shopping Cart Operations: Adding, deleting, and adjusting item quantities in the cart.`,

                userInter: `User Interface Highlights:`,
                userInterdetails: ` The app showcases a diverse collection of Nike shoes, elevating
                   the user experience through visual appeal and ease of navigation.`,

                languages: `#REACT #REDUX #FIREBASE #TAILWINDCSS`
            },
        ]
    },
    {
        id: 2,
        projectIMG: omni,
        github: <GitHub />,
        linkgit: 'https://github.com/freshposh-code/ModernCrypto-App',
        visibility: <PinterestIcon />,
        linkvisible: 'https://www.pinterest.com/pin/1105211564789008713/',
        siteLink: 'https://crypto-access.netlify.app/',
        head: 'Crypto Landing Page',
        tech: 'Technologies & Tools Utilized:',
        live: 'Live',
        details: 'Project Details',
        cardShadow: 'card-green-shadow',

        tools: [
            {
                languages: react,
                alt: 'react'
            },
            {
                languages: i18n,
                alt: 'redux'
            },
            {
                languages: tailwind,
                alt: 'redux'
            },
        ],

        projectDeatils: [
            {
                projectIMG: omni,
                header: 'Crypto Page',
                cardShadow: 'card-green-shadow',
                preview: 'https://crypto-access.netlify.app/',
                previewGit: 'https://github.com/freshposh-code/ModernCrypto-App',
                projectDetail: `The UI/UX design project is centered around a cryptocurrency
                 landing page that implements international translation features using React i18n.
                  It offers multilingual support in French, English, and Spanish, enhancing accessibility for a wider audience.`,

                tech: `International Translation:`,
                techdetails: `Leveraging React i18n, the project facilitates seamless
                   translation across multiple languages.`,

                func: `Cryptocurrency Information:`,
                funcdetails: `Showcases trending cryptocurrencies, providing real-time market values, exchange rates, 
                   and insightful FAQs related to the crypto market.`,

                userInter: `User Interface Highlights:`,
                userInterdetails: ` Through the integration of React i18n, TailwindCSS for design, and a user-centric approach,
                    this project successfully demonstrates the power of UI/UX design in delivering an informative, visually appealing platform for the crypto community.`,

                languages: `#REACT #I18NEXT #TAILWINDCSS`
            },
        ]
    },

    {
        id: 3,
        projectIMG: bravaaart,
        github: <GitHub />,
        linkgit: 'https://github.com/freshposh-code/BravaaArt_WEBAPP',
        visibility: <PinterestIcon />,
        linkvisible: 'https://www.pinterest.com/pin/1105211564790419423/',
        siteLink: 'https://bravaaart.netlify.app',
        head: 'Bravaa Art',
        tech: 'Technologies & Tools Utilized:',
        live: 'Live',
        details: 'Project Details',
        path: '/nikedetails',
        cardShadow: 'card-purp-shadow',

        tools: [
            {
                languages: next,
                alt: 'react'
            },
            {
                languages: ts,
                alt: 'ts'
            },
            {
                languages: framer,
                alt: 'framer'
            },
            {
                languages: tailwind,
                alt: 'image'
            },
            {
                languages: three,
                alt: 'three.js'
            },
        ],

        projectDeatils: [
            {
                projectIMG: bravaaart,
                header: 'Bravaa Art',
                cardShadow: 'card-purp-shadow',
                preview: 'https://bravaaart.netlify.app',
                previewGit: 'https://github.com/freshposh-code/BravaaArt_WEBAPP',
                projectDetail: `Explore a diverse collection of NFTs showcasing captivating digital artwork
                 and unique templates. Our platform provides an immersive experience
                 for discovering and exploring a multitude of NFTs, offering a wide array of digital art`,

                tech: `Discover New Art:`,
                techdetails: `
                  Engage with an extensive range of digital artworks and NFT templates to discover new and intriguing pieces.`,

                func: `Inspirational Discoveries:`,
                funcdetails: ` Find inspiration and captivation in the diverse range of digital art available for exploration.`,

                userInter: `User Interface Highlights:`,
                userInterdetails: `Enjoy an intuitive and user-friendly interface designed with Tailwind CSS
                    for seamless navigation and exploration.`,

                languages: `#NEXT.JS #TYPESCRIPT #FRAMERMOTION #THREE.JS #TAILWINDCSS`
            },
        ]
    },

    {
        id: 4,
        projectIMG: social,
        github: <GitHub />,
        linkgit: 'https://github.com/freshposh-code/Socail_Media-WEBAPP',
        visibility: <VisibilityIcon />,
        linkvisible: 'https://poshmedia.netlify.app/',
        siteLink: 'https://poshmedia.netlify.app/',
        head: 'Posh Media',
        tech: 'Technologies & Tools Utilized:',
        live: 'Live',
        details: 'Project Details',
        cardShadow: 'card-scl-shadow',

        tools: [
            {
                languages: html,
                alt: 'html'
            },
            {
                languages: css,
                alt: 'css'
            },
            {
                languages: javascript,
                alt: 'javascript'
            },
        ],

        projectDeatils: [
            {
                projectIMG: social,
                header: 'Posh Media',
                cardShadow: 'card-scl-shadow',
                preview: 'https://poshmedia.netlify.app/',
                previewGit: 'https://github.com/freshposh-code/Socail_Media-WEBAPP',
                projectDetail: `The social media app is an engaging web platform designed for seamless user interaction and personalized customization. Developed
                using HTML, CSS, and JavaScript, it provides a dynamic space for users to engage while offering a range of customization options
                for an enhanced browsing experience.`,

                tech: `Dynamic CSS Effects:`,
                techdetails: `JavaScript integration enables dynamic CSS effects, such as press functions,
                   enhancing user interface interactivity and engagement.`,

                func: `Customizable Interface:`,
                funcdetails: `UEnjoy a customizable experience with font size adjustments, theme settings (light, dark, dim modes),
                    and customizable app colors, tailoring the platform's appearance to individual preferences.`,

                languages: `#HTML #CSS #JAVASCRIPT`
            },
        ]
    },
]

export const projectII = [
    {
        id: 1,
        projectIMG: 'https://cdn.dribbble.com/userupload/2678983/file/original-ffc635395c22a61680c6a8524c13248f.png?resize=1024x768&vertical=center',
        github: <GitHub />,
        linkgit: 'https://github.com/freshposh-code/Dipoleswap_UI-UX',
        visibility: <PinterestIcon />,
        linkvisible: 'https://www.pinterest.com/pin/1105211564788383048/',
        siteLink: 'https://dipoleswap.netlify.app/',
        head: 'Dipoleswap',
        tech: 'Technologies & Tools Utilized:',
        live: 'Live',
        details: 'Project Details',
        cardShadow: 'card-dipol-shadow',

        tools: [
            {
                languages: react,
                alt: 'react'
            },
            {
                languages: framer,
                alt: 'framer'
            },
            {
                languages: tailwind,
                alt: 'redux'
            },
        ],

        projectDeatils: [
            {
                projectIMG: 'https://cdn.dribbble.com/userupload/2678983/file/original-ffc635395c22a61680c6a8524c13248f.png?resize=1024x768&vertical=center',
                header: 'Dipoleswap',
                preview: 'https://dipoleswap.netlify.app/',
                previewGit: 'https://github.com/freshposh-code/Dipoleswap_UI-UX',
                cardShadow: 'card-dipol-shadow',
                projectDetail: `DIPOLESWAP is a modern UI/UX platform utilizing React, Tailwind CSS,
                and Framer Motion to enhance user experience. This platform focuses on storing crypto
                assets and assigning them a tangible value. Dipoleswap empowers users to leverage their
                crypto investments efficiently.`,

                tech: `Technologies Utilized:`,
                techdetails: `React: For dynamic and interactive user interfaces.
                  Tailwind CSS: Providing a modern and responsive design system.
                  Framer Motion: Enhancing animations and transitions for a seamless user experience.`,

                userInter: `User Interface Highlights:`,
                userInterdetails: `Simplicity & Modern Design: Modern UI/UX design with smooth animations.
                   Crypto Asset Management: Securely stores and assigns value to crypto assets.
                   Data Empowerment: Highlights the significance of user data in the crypto realm.`,

                languages: `#REACT #FRANERMOTION #TAILWINDCSS`
            },
        ]
    },

    {
        id: 2,
        projectIMG: 'https://i.pinimg.com/564x/a7/2e/e2/a72ee283575c98244ca7ce35af057514.jpg',
        github: <GitHub />,
        linkgit: 'https://github.com/freshposh-code/Netflix.app',
        visibility: <PinterestIcon />,
        linkvisible: 'https://www.pinterest.com/pin/606297168599210788/',
        siteLink: 'https://imdb-netflixclone.netlify.app/',
        head: 'Netflix Clone',
        tech: 'Technologies & Tools Utilized:',
        live: 'Live',
        details: 'Project Details',
        cardShadow: 'card-net-shadow',

        tools: [
            {
                languages: react,
                alt: 'react'
            },
            {
                languages: firebase,
                alt: 'firebase'
            },
            {
                languages: tailwind,
                alt: 'tailwind'
            },
        ],

        projectDeatils: [
            {
                projectIMG: 'https://i.pinimg.com/564x/a7/2e/e2/a72ee283575c98244ca7ce35af057514.jpg',
                header: 'Netflix Clone',
                cardShadow: 'card-net-shadow',
                preview: 'https://imdb-netflixclone.netlify.app/',
                previewGit: 'https://github.com/freshposh-code/Netflix.app',
                projectDetail: `The Netflix Clone is a comprehensive movie streaming platform offering a diverse
                 range of movies from around the globe. Users can explore various movies based on their preferences,
                 with an authentication system allowing them to save or like movies for easy access in their account section.
                 The platform utilizes Firebase for user authentication and integrates Tailwind CSS for UI/UX enhancements,
                 all built with React for app development.`,

                tech: `Key Features:`,
                techdetails: `Movie Collection: Offers a wide array of movies for users' viewing pleasure.
                  User Authentication: Enables users to create accounts and save/like preferred movies.
                  Account Section: Displays saved or liked movies for easy access within the user's account.`,

                func: `User Highlights:`,
                funcdetails: `Diverse Movie Selection: Presents a vast range of movies catering to diverse preferences.
                   Seamless Authentication: Allows users to save and personalize their movie preferences.`,

                languages: `#REACT #FIREBASE #TAILWINDCSS`
            },
        ]
    },


    {
        id: 3,
        projectIMG: grilli,
        github: <GitHub />,
        linkgit: 'https://github.com/freshposh-code/GRILLI-STORE',
        visibility: <VisibilityIcon />,
        linkvisible: 'https://grilli-stores.netlify.app/',
        siteLink: 'https://grilli-stores.netlify.app/',
        head: 'Grilli Store',
        tech: 'Technologies & Tools Utilized:',
        live: 'Live',
        details: 'Project Details',
        cardShadow: 'card-grl-shadow',

        tools: [
            {
                languages: html,
                alt: 'html'
            },
            {
                languages: css,
                alt: 'css'
            },
            {
                languages: javascript,
                alt: 'javascript'
            },
        ],

        projectDeatils: [
            {
                projectIMG: grilli,
                header: 'Grilli Stores',
                cardShadow: 'card-grl-shadow',
                preview: 'https://grilli-stores.netlify.app/',
                previewGit: 'https://github.com/freshposh-code/GRILLI-STORE',
                projectDetail: `Grilli Stores is an online food store that showcases a diverse
                range of food items. This platform primarily focuses on facilitating online reservations
                and exploring various restaurant techniques. The project was crafted using HTML, CSS, and 
                JavaScript, emphasizing UI/UX implementation, JavaScript functionality, and maintaining
                 consistent mobile responsiveness.`,

                tech: `Key Aspect:`,
                techdetails: `UI/UX Enhancement: Emphasizes improved user interface and experience.
                JavaScript Implementation: Incorporates interactive functionalities.
                Mobile Responsiveness: Ensures consistent performance across various devices.`,

                languages: `#HTML #CSS #JAVASCRIPT`
            },
        ]
    },

    {
        id: 4,
        projectIMG: unda,
        github: <GitHub />,
        linkgit: 'https://github.com/freshposh-code/UnderQuest-App',
        visibility: <PinterestIcon />,
        linkvisible: 'https://www.pinterest.com/pin/1105211564785581777/',
        siteLink: 'https://unda-quest.netlify.app/',
        head: 'UNDA Quest',
        tech: 'Technologies & Tools Utilized:',
        live: 'Live',
        details: 'Project Details',
        cardShadow: 'card-unda-shadow',

        tools: [
            {
                languages: react,
                alt: 'react'
            },
            {
                languages: tailwind,
                alt: 'redux'
            },
        ],

        projectDeatils: [
            {
                projectIMG: unda,
                header: 'UNDA Quest',
                cardShadow: 'card-unda-shadow',
                preview: 'https://unda-quest.netlify.app/',
                previewGit: 'https://github.com/freshposh-code/UnderQuest-App',
                projectDetail: `The Metaverse Showcase Platform serves as an immersive space displaying a
                vast array of the metaverse world. It offers a comprehensive presentation of diverse metaverse 
                realms alongside a dedicated FAQ section, providing in-depth insights into the metaverse concept.`,

                tech: `insights:`,
                techdetails: `Intuitive UI/UX: Tailored design for an engaging and user-friendly metaverse streaming experience.`,

                userInter: 'Key Focus Areas:',
                userInterdetails: `Understanding the core concepts and landscapes within the Metaverse.
                Emerging Web Interactions:
                Exploring the evolving dynamics of human interaction with the web.`,

                languages: `#REACT #TAILWINDCSS`
            },
        ]
    },

    {
        id: 5,
        projectIMG: crypto,
        github: <GitHub />,
        linkgit: 'https://github.com/freshposh-code/CryptoVerse-App',
        visibility: <VisibilityIcon />,
        linkvisible: 'https://crypto-verse-webapp.netlify.app/',
        siteLink: 'https://crypto-verse-webapp.netlify.app/',
        head: 'Crypto Verse',
        tech: 'Technologies & Tools Utilized:',
        live: 'Live',
        details: 'Project Details',
        cardShadow: 'card-crypto-shadow',

        tools: [
            {
                languages: react,
                alt: 'react'
            },
            {
                languages: redux,
                alt: 'redux'
            },
            {
                languages: tailwind,
                alt: 'tailwind'
            },
        ],

        projectDeatils: [
            {
                projectIMG: crypto,
                header: 'Crypto Verse',
                cardShadow: 'card-crypto-shadow',
                preview: 'https://crypto-verse-webapp.netlify.app/',
                previewGit: 'https://github.com/freshposh-code/CryptoVerse-App',
                projectDetail: `CryptoVerse is a modern web application designed
                 to provide users with a seamless experience
                 in tracking and exploring the world of cryptocurrencies.
                 It offers an intuitive and visually appealing user interface 
                 created with meticulous attention to design using CSS for styling.
                  The application harnesses the power of Redux to efficiently manage API
                   calls and state throughout the app. Also shows global stats.`,

                tech: `Key Features:`,
                techdetails: `Top Cryptocurrency Listings: Users can access real-time information about
                 the top cryptocurrencies, including market prices, trends, market cap, and volume.
                Latest Crypto News: Stay updated with the latest news and developments in the cryptocurrency space.
                 The app aggregates and displays current news articles, ensuring users are informed about market trends,
                  regulations, and technological advancements.`,

                languages: `#REACT #REDUX #ANT-DESIGN #CSS`
            },
        ]
    },
]

export const poshcode = [
    {
        poshHeader: 'Personal Skills',

        description: [
            { poshDesc: 'Creativity' },
            { poshDesc: 'Team work' },
            { poshDesc: 'Organisation' },
        ],

    },
    {
        poshHeader: 'Hobbies & Interest',

        description: [
            { poshDesc: 'Drawing' },
            { poshDesc: 'Music' },
            { poshDesc: 'Coding' },
        ]
    },
    {
        poshHeader: 'Designing Skills',

        description: [
            { poshDesc: 'Creativity- Planning & Strategy' },
            { poshDesc: 'Signs and Typography- Layout' },
            { poshDesc: 'Grid- Colour Sense - Inspiration' },
        ]


    },
    {
        poshHeader: 'Connect with me',

        description: [
            { poshDesc: '📧freshposh97@gmail.com' },
            { poshDesc: '📞+2349068620646' },
        ]


    },
]

export const footerlang = [
    {
        langauage: react
    },
    {
        langauage: framer
    },
    {
        langauage: tailwind
    },
]