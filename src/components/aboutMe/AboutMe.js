import Projects from '../projects';
import Experience from '../experience';
import Education from '../education';
import PropTypes from 'prop-types';
import s from './AboutMe.module.css';

function AboutMe({ commandProjects, ownProjects, experience, education }) {
  return (
    <div className={s.container}>
      <div className={s.section}>
        <h2 className={s.profession}>Fullstack (React) Developer</h2>
        <h1 className={s.name}>Natalia Polovynko</h1>
        <p className={s.description}>
        I am a Front-End developer looking for a full-time position in
a company that's aimed at making both everyday
life and business easier, more productive and user-friendly. I
have sound knowledge of HTML, CSS, JavaScript, Typescript and React.
Also, I have hands-on experience in following Agile /Scrum
methodology when working in a team. I am a fast learner,
responsible, and ready for challenging tasks.
        </p>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Projects</h3>
        <h4 className={s.subTitle}>
          <span className={s.typeProject}>Teamwork</span> projects
        </h4>
        <ol className={s.list}>
          {commandProjects.map(({ id, label, link, tech }) => (
            <Projects key={id} label={label} link={link} tech={tech} />
          ))}
        </ol>
        <h4 className={s.subTitle}>
          <span className={s.typeProject}>My personal</span> projects
        </h4>
        <ol>
          {ownProjects.map(({ id, label, link, tech }) => (
            <Projects key={id} label={label} link={link} tech={tech} />
          ))}
        </ol>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Work Experience</h3>
        <ul>
          {experience.map(
            ({ id, profession, company, time, country, duties }) => (
              <Experience
                key={id}
                profession={profession}
                company={company}
                time={time}
                country={country}
                duties={duties}
              />
            ),
          )}
        </ul>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Education</h3>
        <ul>
          {education.map(({ id, university, label, time, experience }) => (
            <Education
              key={id}
              university={university}
              label={label}
              time={time}
              experience={experience}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

AboutMe.propTypes = {
  commandProjects: PropTypes.arrayOf(PropTypes.object),
  ownProjects: PropTypes.arrayOf(PropTypes.object),
  experience: PropTypes.arrayOf(PropTypes.object),
  education: PropTypes.arrayOf(PropTypes.object),
};

export default AboutMe;
