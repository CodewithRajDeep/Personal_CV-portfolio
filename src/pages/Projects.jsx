import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
import CTA from '../components/CTA';
import { projects, socialLinks } from '../constants';
const Projects = () => {
return (
    <section className="max-container">
    <h1 className="head-text">
        My Personal<span className="blue-gradient_text font-semibold drop-shadow">Projects </span></h1>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p className="mt-5flex flex-col gap-3 text-slate-500">
        I've embarked on numerous projects throughout the years, but these are
        the some of ones I hold closest to my heart. Most of them are open source
        projects, so if you come across something that piques your interest, feel free to
        explore the projects and contribute your ideas or fork it for further enhancements.
        Your collaboration is highly valued!</p>
        </div>
        <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
            <div className='lg:w-[400px] w-full' key={project.name}>
                <div className='block-container w-12 h-12'>
                    <div className={`btn-back rounded-xl ${project.theme}`}/>
                    <div className='btn-front rounded-xl flex justify-center items-center'>
                        <img src={project.iconUrl} alt='Project Icon' className='w-1/2 h-1/2 object-contain'/>
                    </div>
                </div>
                <div  className='mt-5 flex-col'>
                <h4 className='text-2xl font-poppins font-semibold'>
                    {project.name}
                </h4>
                <p className='mt-2 text-slate-500'>
                    {project.description}
                </p>
                <div className='mt-5 flex items-center gap-2 font-poppins'>
                    <Link to={project.link} target='_blank' rel='noopener noreferrer' className='font-semibold text-blue-600'>
                    View Live
                    </Link>
                    <img src={arrow} alt="arrow" className='w-4 h-4 object-contain' />
                </div>
                </div>
                </div>
        ))}
        </div>
        <hr  className='border-slate-200'/>
        <CTA/>
        <hr  className='border-slate-200'/>
        <div className="flex flex-col items-center justify-center">
  <h2 className="text-center mb-4">Connect with me</h2>
  <ul className="flex gap-4">
    {socialLinks.map((link) => (
      <li key={link.name} className="flex items-center">
        <a href={link.link} target="_blank" rel="noreferrer">
          <img src={link.iconUrl} alt={link.name} />
        </a>
      </li>
    ))}
  </ul>
</div>
        </section>
)
}

export default Projects
