import style from './ProfileInfo.module.scss';
import subscribe from "./../../../../img/background_subscribe.jpg";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src={subscribe} alt="subscribe" className={style.profileImg} />
      </div>
      <div className='ava'>ava+description</div>
    </div>
  );
};

export default ProfileInfo;
