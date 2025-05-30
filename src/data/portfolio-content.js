const portfolioContent = [
    {
        sectionId: 'int001',
        sectionName: 'Introduction',
        content: `I am a software developer, looking for an opportunity to continue my IT career. I have 1 year of experience in IT roles, including development work which I thoroughly enjoyed and am interested in pursuing as my career. I am seeking an opportunity with an organisation where I can commit to long-term professional development and progression, and hoping for a role that involves meaningful work with a positive impact.\nMy IT experience includes a 6 month graduate program with Halo Service Solutions, this involved a mix of responsibilities including software support, product consultancy and SQL report writing.\nDue to strong technical skills shown in my role as a manager at Village Cinemas, in 2024 I was offered a fixed term developer secondment within the projection support department. During this secondment I was tasked with building a python script run on through a small user interface on an M5Stack device to send and receive MQTT messages via AWS to each cinema's sound system for external volume control.`,
        basicSection: true
    },
    {
        sectionId: 'abo001',
        sectionName: 'About Me',
        content: `I am an avid sports fan, particularly of AFL and the NBA, however I enjoy watching almost all sports except soccer. I go snowboarding every winter and have been able to travel to Japan twice to snowboard, with my next hopeful destination being Whistler Blackcomb in Canada.\nI have played the flute for 15 years and am currently teaching myself to play the saxophone for a new challenge, and I enjoy software development due to the mix of problem solving and creativity required, which I find very engaging.`,
        basicSection: true
    },
    {
        sectionId: 'pro001',
        sectionName: 'Projects',
        content: `To reinforce my programming knowledge I have completed several projects recently. My current focus has been learning and building familiarity with React, with which I have quickly become appreciative of and enjoyed increasing my confidence. The following projects are examples of my recent progression and programming skills.`,
        basicSection: false
    },
    {
        sectionId: 'upc001',
        sectionName: 'Upcoming Projects',
        content: `I am currently working on 2 more projects, one within my management role and another personal project. For both projects I am endeavouring to use new techniques and more efficient coding practices. Please note that as I am actively working on these projects, not all functionality is complete but I hope they are an interesting insight into what I am working on next.`,
        basicSection: false
    },
    {
        sectionId: 'ski001',
        sectionName: 'Skills',
        content: '',
        basicSection: false
    },
    {
        sectionId: 'edu001',
        sectionName: 'Education',
        content: `I graduated from high school at Gleneagles Secondary College with a 91.95 ATAR and received the Valedictorian award. After high school I studied a Bachelor of ICT, completing my degree at Swinburne University of Technology in 2023.`,
        basicSection: true
    }
];

const projectContent = [
    {
        projectId: 'res001',
        projectName: 'Resume',
        projectImage: '/resume-photo.png',
        projectOverview: `My first project after learning React was to create a web version of my resume. Completing this allowed me to practice breaking down content into reusable components and passing data between components. I also added a panel to generate a random sport gif based on a user's selected sport. I did this in order to practice collecting user input and customising page content based on this, and to collect external data which I had not previously attempted.`,
        projectLink: ''
    },
    {
        projectId: 'nba001',
        projectName: 'NBA Team Guesser',
        projectImage: '/team-guesser-photo.png',
        projectOverview: `My most in depth project completed to date was to build a guessing game where user's are shown an NBA player headshot and guess the team they play for. This project involved a lot of problem solving and learning as I went, I regularly encountered times where I needed to refactor code to allow for the game to function or be able to pass prop data between several components. I used AI assistance to increase functionality, including writing a script to fetch NBA player headshots and match them to the player data I was already fetching, and increasing user friendliness such as an autocomplete in the team guessing field. Once I had completed the main game logic, I then added game mode and mode setting customisation to further increase user flexibility.`,
        projectLink: 'https://nbateamguesser.netlify.app'
    },
    {
        projectId: 'vol001',
        projectName: 'Volume Control',
        projectImage: '/m5stack.jpg',
        projectOverview: `I wrote a python script that subscribed to and published MQTT messages via AWS. The script received a message from the end user device with a cinema number and volume command for up or down. A parsed config file specified the audio appliance for each cinema, and then the script generates a TCP message to send to the appliance and change volume. Once adjusted, the appliance responds with the new volume and the script publishes this as an MQTT message back to the end user device. As I had never used python before, I had to rely on general programming skills for a new language, which was a good test for applying skills from university to a real project. I found it extremely rewarding pushing through each of the various roadblocks that arose and having an opportunity to use the concepts I had studied in a professional context.`,
        projectLink: ''
    }
    // 
];

const upcomingProjects = [
    {
        projectId: 'ros001',
        projectName: 'Roster Scripting',
        projectImage: '/google-sheets-photo.png',
        projectOverview: `Having completed other personal projects, I was able to identify an opportunity to apply programming skills in the workplace, so I am currently working to automate manual processes in my current role as a Manager. I am writing JavaScript functions in Google Sheets that take in weekly roster data and processes this data to automate several tasks that were previously completed manually, allowing managers to spend time focusing on more productive work. It has been very rewarding identifying and implementing a programming solution in a professional environment, which felt like a step up from the volume control project which I was brought into.`,
        projectLink: 'https://docs.google.com/spreadsheets/d/1j8VK6vnDJ4QuzgJRPoZEBUOsTEJEXYZu81jCM2laSco/edit?gid=128938579#gid=128938579'
    },
    {
        projectId: 'gym001',
        projectName: 'Gym Tracker',
        projectImage: '/gym-tracker.jpeg',
        projectOverview: 'Now that I have become more confident coding in React, I have begun learning Next.js to take advantage of the additional functionality included. My first project using Next.js will be creating a gym progress tracking site, that I can customise for my personal preference on keeping tracking of sets and ongoing progress each time I go to the gym. My goal for this project, as my existing react projects have been single page sites, is that the gym tracker will be a multi-page website in React with Next.js, as well as connecting to and continually updating a database.',
        projectLink: ''
    }
]

const skillContent = [
    {
        skillId: 'sk001',
        skillName: 'HTML',
        skillImage: '/html-logo.svg'
    },
    {
        skillId: 'sk002',
        skillName: 'CSS',
        skillImage: '/css-logo.svg'
    },
    {
        skillId: 'sk003',
        skillName: 'JavaScript',
        skillImage: '/js-logo.png'
    },
    {
        skillId: 'sk004',
        skillName: 'React',
        skillImage: '/react-logo.png'
    },
    {
        skillId: 'sk005',
        skillName: 'SQL',
        skillImage: '/sql-logo.png'
    },
    {
        skillId: 'sk006',
        skillName: 'C#',
        skillImage: '/csharp-logo.png'
    },
    {
        skillId: 'sk007',
        skillName: 'Python',
        skillImage: '/python-logo.png'
    }
]

export { portfolioContent, projectContent, upcomingProjects, skillContent }