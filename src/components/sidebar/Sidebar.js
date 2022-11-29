import Contacts from '../contacts';
import TechSkills from '../techSkills';
import SoftSkills from '../softSkills';
import PropTypes from 'prop-types';
import s from './Sidebar.module.css';
import myPhoto from '../../images/photo.jpg';


function Sidebar({ contacts, techSkills, softSkills }) {
  return (
    <aside className={s.sidebar}>
      <img src={myPhoto} alt="Natalia Polovynko" className={s.photo} />
      <div className={s.section}>
        <h3 className={s.title}>Contacts</h3>
        <ul>
          {contacts.map(({ id, label, link, text }) => (
            <Contacts
              key={id}
              label={label}
              link={link}
              text={text}
              
            />
          ))}
        </ul>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Tech Skills</h3>
        <ul>
          {techSkills.map(({ id, label }) => (
            <TechSkills key={id} label={label} />
          ))}
        </ul>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Soft Skills</h3>
        <ul>
          {softSkills.map(({ id, label }) => (
            <SoftSkills key={id} label={label} />
          ))}
        </ul>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Language</h3>
        <p className={s.text}>English - intermediate</p>
        <p className={s.text}>Ukrainian - Native</p>
        <p className={s.text}>Russian - Native</p>
      </div>

    </aside>
  );
}

Sidebar.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  techSkills: PropTypes.arrayOf(PropTypes.object),
  softSkills: PropTypes.arrayOf(PropTypes.object),
};

export default Sidebar;
