const portfolioContent = [
    {
        sectionName: 'Introduction',
        content: `I am an aspiring software developer, looking for an opportunity to continue my IT career. 
            I have 1 year of experience in IT roles, including development work which I thoroughly enjoyed and am interested in pursuing as my career. 
            I am seeking an opportunity with an organisation where I can commit to long-term professional development and progression, and hoping for a role that involves meaningful work with a positive impact.
            My IT experience includes a 6 month graduate program with Halo Service Solutions, this involved a mix of responsibilities including software support, product consultancy and SQL report writing.
            Due to strong technical skills shown in my role as a manager at Village Cinemas, in 2024 I was offered a fixed term developer secondment within the projection support department .
            During this secondment I was tasked with building a python script run on through a small user interface on an M5Stack device to send and receive MQTT messages via AWS to each cinema's sound system for external volume control.`,
        basicSection: true
    },
    {
        sectionName: 'About Me',
        content: `I am an avid sports fan, particularly of AFL and the NBA, however I enjoy watching almost all sports except soccer. I go snowboarding every winter and have been able to travel to Japan twice to snowboard, 
            with my next hopeful destination being Whistler Blackcomb in Canada. I have played the flute for 15 years and am currently teaching myself to play the saxophone for a new challenge, and 
            I enjoy software development due to the mix of problem solving and creativity required, which I find very engaging.`,
        basicSection: true
    },
    {
        sectionName: 'Education',
        content: `I graduated from high school at Gleneagles Secondary College with a 91.95 ATAR and received the Valedictorian award. 
            After high school I studied a Bachelor of ICT, completing my degree at Swinburne University of Technology in 2023.`,
        basicSection: true
    },
    {
        sectionName: 'Projects',
        content: `To reinforce my programming knowledge I have completed several projects recently. My current focus has been learning and building familiarity with React, 
            with which I have quickly become appreciative of and enjoyed increasing my confidence. The following projects are examples of my recent progression and programming skills.`,
        basicSection: false
    },
    {
        sectionName: 'Skills',
        content: '',
        basicSection: false
    }
];

const projectContent = [
    {
        projectId: 'res001',
        projectName: 'Resume',
        projectImage: '',
        projectOverview: `My first project after learning React was to create a web version of my resume. Completing this allowed me to practice breaking down content into reusable components and 
            passing data between components. I also added a panel to generate a random sport gif based on a user's selected sport. I did this in order to practice collecting user input and customising
            page content based on this, and to collect external data which I had not previously attempted.`,
        projectLink: ''
    },
    {
        projectId: 'nba001',
        projectName: 'NBA Team Guesser',
        projectImage: '',
        projectOverview: `My most in depth project completed to date was to build a guessing game where user's are shown an NBA player headshot and guess the team they play for. This project involved a lot 
            of problem solving and learning as I went, I regularly encountered times where I needed to refactor code to allow for the game to function or be able to pass prop data between several components. 
            I used AI assistance to increase functionality, including writing a script to fetch NBA player headshots and match them to the player data I was already fetching, and increasing user friendliness such as 
            an autocomplete in the team guessing field. Once I had completed the main game logic, I then added game mode and mode setting customisation to further increase user flexibility.`,
        projectLink: 'https://nbateamguesser.netlify.app'
    },
    {
        projectId: 'vol001',
        projectName: 'Volume Control',
        projectImage: '',
        projectOverview: `I wrote a python script that subscribed to and published MQTT messages via AWS. The script received a message from the end user device with a cinema number and volume command for up or down. 
            A parsed config file specified the audio appliance for each cinema, and then the script generates a TCP message to send to the appliance and change volume. 
            Once adjusted, the appliance responds with the new volume and the script publishes this as an MQTT message back to the end user device. As I had never used python before, 
            I had to rely on general programming skills for a new language, which was a good test for applying skills from university to a real project. 
            I found it extremely rewarding pushing through each of the various roadblocks that arose and having an opportunity to use the concepts I had studied in a professional context.`,
        projectLink: ''
    },
    {
        projectId: 'goo001',
        projectName: 'Google Sheets',
        projectImage: '',
        projectOverview: `Having completed other personal projects, my confidence has grown in applying programming skills and I was able to identify an opportunity to automate manual processes in my current role as a Manager.
            I wrote a JavaScript function in Google Sheets that takes in weekly roster data and processes this data to automate several tasks that were previously completed manually, allowing managers to spend time focusing on more productive work.
            I found it very rewarding identifying and implementing a solution to this opportunity myself in a professional environment, which felt like a step up from the volume control project which I was brought into.`,
        projectLink: ''
    }
];

const skillContent = [
    {
        skillName: 'HTML',
        skillImage: '/html-logo.svg'
    },
    {
        skillName: 'CSS',
        skillImage: '/css-logo.svg'
    },
    {
        skillName: 'JavaScript',
        skillImage: '/js-logo.png'
    },
    {
        skillName: 'React',
        skillImage: '/js-logo.png'
    },
    {
        skillName: 'SQL',
        skillImage: '/js-logo.png'
    },
    {
        skillName: 'C#',
        skillImage: '/js-logo.png'
    },
    {
        skillName: 'Python',
        skillImage: '/js-logo.png'
    }
]

export { portfolioContent, projectContent, skillContent }