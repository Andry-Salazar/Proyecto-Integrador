import cn from 'classnames';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import s from './EntityCount.module.css';

const EntityCount = ({ title, text, icon, link, color = 'darkBlue' }) => {
  return (
    <div className={s.root}>
      <a href="#">
        <div className={cn(s.heading, s[color])}>
          <FontAwesomeIcon icon={icon} size='2x' />
        </div>
      </a>
      <div className={cn(s.content, s[color])}>
        <div className={cn(s.description, s.textFaded)}>{title}</div>
        <div className={cn(s.number, s.textFaded)}>{text}</div>
        {link && (
          <Link to={link}>
            <a className={cn(s.footer, s.textFaded)}>
              More Info<i className="fa fa-chevron-circle-right"></i>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default EntityCount;
