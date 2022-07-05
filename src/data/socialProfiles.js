import emailIcon from '../assets/email_icon.png';
import githubIcon from '../assets/github_icon.png';
import linkedinIcon from '../assets/linkedin_icon.png';
import twitterIcon from '../assets/twitter_icon.png';

const SOCIAL_PROFILES = [ //Since this a global value, you want to make it scream case. When you scream case values that comprise of more than one word, you join the word with an underscore. Each of the social profiles is going to be an object that consists of an id. 
    {
        id: 1,
        link: 'mailto:iniapaige@gmail.com',
        image: emailIcon
    },
    {
        id: 2,
        link: 'https://github.com/IniaPM',
        image: githubIcon
    },
    {
        id: 3,
        link: 'https://www.linkedin.com/in/paige-inia-6b4883240?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BSekJUEWYSMSHhrW05nMcZg%3D%3D',
        image: linkedinIcon
    },
    {
        id: 4,
        link: 'tweetme: ',
        image: twitterIcon
    }
];

export default SOCIAL_PROFILES;