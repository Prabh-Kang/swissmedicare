// import IntersectionObserverHOC from '../HOC/withIntersectionObserver';
import './Mission.scss';
import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';

const Mission = () => {

  const [ref, inView] = useInView();

  return (
    <div className="mission" ref={ref}>

      <div className={classNames("image", {"visible": inView})}>
        <span class="material-symbols-outlined">
          rocket_launch
        </span>
      </div>

      <div className={classNames("description", {"visible": inView})}>
        <div>
          <h2>
            OUR MISSION
            <span class="material-symbols-outlined">
              rocket_launch
            </span>
          </h2>
          <p>
            To set new standards of customer care by providing quality drugs for requirements of mankind.
          </p>
          <p>
            To give prompt and swift services keeping abreast of the high standards of business and quality.
          </p>
          <p>
            To make the environment trouble free.
          </p>
          </div>
      </div>
    </div>
  )
};

export default Mission;