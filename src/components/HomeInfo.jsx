import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
const InfoBox = ({text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
        {btnText}
        <img src={arrow} className='w-4 h-4 object-contain'  alt=''/>
        </Link>
    </div>
    )

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5"> 
        Hi, I am <span className="font-semibold">Deep Raj</span> 👋
        <br />
        A Software Engineer from Jharkhand,India.
        </h1>
    ),
    2: (
        <InfoBox
        text="Currently working as Software Developer and picked up many assests along the way"
        link="/about"
        btnText="Learn more"/>
    ),
    3: (
        <InfoBox
        text="Led multiple projects to success over the years at IBM and Forage. Curious about the impact? "
        link="/projects"
        btnText="Visit my portfolio"/>
    ),
    4: (
        <InfoBox
        text="Need a complete project done or looking for a dev? I'm just a few
        keystrokes away"
        link="/contact"
        btnText="Let's Talk"/>
    ),
}
const HomeInfo = ({currentStage }) => {
return renderContent[currentStage] || null;
}

export default HomeInfo
