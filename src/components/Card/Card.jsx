import './Card.scss';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';

const Card = ({header, icon, listItems}) => {
  const [ref, inView] = useInView();
  
  return (
    <div className={classNames("card", {"visible": inView})} ref={ref}>
      <div className="header">
        {header}
        <span className="icon material-symbols-outlined">
          {icon}
        </span>
      </div>
      <div className="body">
        <span className="icon material-symbols-outlined">
          {icon}
        </span>
        <div className="text">
          <ul>
            {listItems.map((item, index) => (<li key={`${index}${item}`}>{item}</li>))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Card;