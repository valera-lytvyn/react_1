import style from './ProfileInfo.module.scss';
import subscribe from "./../../../../img/background_subscribe.jpg";
import Preloader from './../../../common/preloader/Preloader';

const ProfileInfo = (props) => {
  // if (!props.profile) {
  //   <Preloader />
  // }
  return (
        <div>
      <div>
        <img src={subscribe} alt="subscribe" className={style.profileImg} />
      </div>
      <div className='ava'>ava+description</div>
      {/* <img src={ props.photos.large} alt="photo" /> */}
    </div>
  );
};

export default ProfileInfo;
