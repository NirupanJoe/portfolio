import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock5 from "../img/mock5.png"
import mock6 from "../img/mock6.png"


export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Nirupan",
    lastName: "Joe",
    initials: "js",
    position: "a React Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the IN'
        },
        {
            emoji: "💼",
            text: "Software Developer"
        },
        {
            emoji: "📧",
            text: "nirupanjoej@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/NirupanJoe",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/nirupan-joe-7393b3146/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {

            link: "mailto:nirupanjoej@gmail.com",
            icon: "fa fa-envelope",
            label: "Email"
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Nirupan. I'm a Software Developer. I studied MCA at st.xavier's college, I enjoy long walks on the beach, and I enjoy playing sports in person, but the world is dominated by online games.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'material-ui', 'react-spring'],
            exposedTo: ['nodejs', 'python', 'expo', 'three.js', 'react-three-fiber', 'd3.js', 'vega-lite']
        }
    ,
    hobbies: [
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
		{
			label: 'playing',
			emoji: '⚽️'
		}
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Tech Store",
            live: "https://tech-store-nirupanjoes-projects.vercel.app/",
            source: "https://github.com/NirupanJoe/tech-store",
            image: mock6
        },
        {
            title: "Portfolio",
            live: "https://portfolio-pink-sigma-74.vercel.app/",
            source: "https://github.com/NirupanJoe/portfolio",
            image: mock1
        },
        {
            title: "Analog and Digital clock",
            live: "https://clock-nirupanjoe.vercel.app/",
            source: "https://github.com/NirupanJoe/Clock",
            image: mock2
        },
        {
            title: "Asthika Dharama Recreation",
            live: "https://nirupanjoe.github.io/Asthika-Dharma/",
            source: "https://github.com/NirupanJoe/Asthika-Dharma",
            image: mock5
        },
    ]
}