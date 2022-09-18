import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';
import './Achievements.scss';

const Achievements = () => {
  const [ref, inView] = useInView()

  return (
    <div className={classNames("achievements", {"visible": inView})} ref={ref}>

      <div className="content">
        <div className="header">
          OUR ACHIEVEMENTS
        </div>

        <div className="logo">
          <span className="material-symbols-outlined">
            military_tech
          </span>
        </div>

        <div className="body">
          With limited resources, Swiss International began to operate on Loan License with one H.Q. Today, Swiss has spread its wings in the state of Rajasthan, Madhya Pradesh, Punjab, Haryana and U.P. Swiss International has merged in Swiss Medicare Pvt. Ltd. to broaden the area of operation. Swiss Medicare Pvt. Ltd. attained its own plant.
        </div>
      </div>

      <div className="logo">
        <img src="../../../assets/HomePageImages/trophy.png" />
      </div>


    </div>
  )
}

export default Achievements;