import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';
import { experiences, skills } from "../constants";
const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Deep Raj </span></h1>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p className="mt-5flex flex-col gap-3 text-slate-500">
          Versatile Full Stack Developer based in India  with a proven track record in crafting seamless user experiences across web and mobile platforms in IBM.
          Proficient in building robust and scalable applications using JavaScript, React, Node.js, and Android development frameworks. Experienced in
          designing and developing both front-end and back-end components, with a strong focus on delivering high-quality,user-centric solutions. Demonstrated
          ability to lead teams and optimize development processes in successful academic Minor projects and during Intern as  Software Developer in Accenture as well as Blackbird,Forage.
          </p>
        </div>
        <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Technical Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
        {skills.map((skill) => (
          <div className="block-container w-20 h-20">
            <div className="btn-back rounded-xl"/>
              <div className="btn-front rounded-xl fkex justify-center items-center">
                <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain"/>
          </div>
        </div>
        ))}
        </div>
        </div>

        <div className="py-16">
          <h3 className="subhead-text">Work Experience</h3>
          <div>
          <p className="mt-5flex flex-col gap-3 text-slate-500">
          I've worked with all sorts of companies and start-ups, levelling
          up my skills and teaming up with smart people.Here's the rundown:
          </p>
        </div>
        <div className="mt-12 flex">
        <VerticalTimeline>
          {experiences.map((experience) => (
          <VerticalTimelineElement key={experience.company_name} date={experience.date} icon={<div className='flex justify-center items-center w-full h-full '>
            <img src={experience.icon} alt={experience.company_name} className='w-[60%] h-[60%] object-contain'/>
          </div>} contentStyle={{borderBottom: '8px' , borderStyle: 'solid', borderBottomColor: experience.iconBg, boxshadow: 'none'}}
          iconStyle={{background: experience.iconBg}}>
            <div>
              <h3 className='text-black text-xl font-poppins font-semibold'>
                {experience.title}
              </h3>
              <p className='text-black-500 font-medium font-base' style={{margin:0}}>
                {experience.company_name}
              </p>
            </div>
            <ul className='my-5 list-disc ml-5 space-y-2'>
            {experience.points.map((point, index) => (
            <li key={`experience-point-${index}`}className='text-black-500/50 font-normal pl-1 text-sm'>
              {point}
            </li>
            ))}
            </ul>
          </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
        </div>
        </div>
        <hr className='border-slate-200'/>
       <CTA/>
    </section>
  )
}

export default About
