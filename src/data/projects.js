import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const PROJECTS = [ //The convention for global values in a JavaScript project is to use SCREAM CASE syntax. //The projects array itself is going to be a collection of objects that each represent an individual project. 
    {
        id: 1,
        title: 'Example React Application',
        description: 'A React App that I built, involving JS and core web dev concepts!',
        link: 'https://github.com/15Dkatz/example',
        image: project1
    },
    {
        id: 2,
        title: 'My API',
        description: 'A REST API that I built from scratch with GET and POST requests!',
        link: 'https://github.com/15Dkatz/example',
        image: project2 
    },
    {
        id: 3,
        title: 'Operating Systems Final Project',
        description: 'my unique final project for my university Operating Systems course',
        link: 'https://github.com/15Dkatz/example',
        image: project3
    }
];

export default PROJECTS