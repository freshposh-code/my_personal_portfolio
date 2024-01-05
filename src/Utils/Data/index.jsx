import GitHub from "@mui/icons-material/GitHub"
import { bravaaart, css, firebase, framer, html, i18n, javascript, next, omni, poshnike, react, redux, social, tailwind, ts } from "../../assets"
import { LinkedIn, Twitter, WhatsApp } from "@mui/icons-material"
import VisibilityIcon from '@mui/icons-material/Visibility';
import PinterestIcon from '@mui/icons-material/Pinterest';

export const navIcons = [ 
    {
        id: '#anchor',
        icon: 'nav'
    },
    {
        id: '#anchor',
        icon: 'nav'
    },
    {
        id: '#anchor',
        icon: 'nav'
    },
    {
        id: '#anchor',
        icon: 'nav'
    },
    {
        id: '#anchor',
        icon: 'nav'
    },
]

export const socialIcons = [
    {
     icon: <GitHub style={{backgroundColor: 'black', color: 'white', padding: '6px', borderRadius:'50%', fontSize: '29px',}} className="icon" />,
     link: 'https://github.com/freshposh-code'
    },
    {
     icon: <LinkedIn style={{color: 'white', backgroundColor:'#1f41ffee', padding: '6px', borderRadius:'50%', fontSize:'29px'}} className="icon" />,
     link: 'https://www.linkedin.com/in/farouk-ayomide-b81225290/'
    },
    {
     icon: <Twitter style={{backgroundColor: '#4a6fff', color: 'white', padding: '6px', borderRadius:'50%', fontSize:'29px'}} className="icon" />,
     link: 'https://twitter.com/farouk_ayo'
    },
    {
     icon: <WhatsApp style={{color: 'white', backgroundColor: 'green', padding: '6px', borderRadius:'50%', fontSize:'29px'}} className="icon" />,
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
        response2: '23+',
    },
    {
        personalInfo: 'Phone:',
        response: '+2349068620646',
        personalInfo2: 'Email:',
        response2: '@farouk001@gmail.com',
    },
   
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
        skillText: 'NEXT<>REACT',
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
        button: 'first react project',
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
        path: '/nikedetails',

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
                header: 'details1'
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
        path: '/nikedetails',

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
                header: 'details2'
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

        tools: [
            {
                languages: next,
                alt: 'react'
            },
            {
                languages: ts,
                alt: 'redux'
            },
            {
                languages: framer,
                alt: 'redux'
            },
            {
                languages: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/three-js-icon.png',
                alt: 'redux'
            },
            {
                languages: tailwind,
                alt: 'redux'
            },
        ],

        projectDeatils: [
            {
                header: 'details3'
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
        path: '/nikedetails',

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
                header: 'details4'
            },
        ]
    },
]