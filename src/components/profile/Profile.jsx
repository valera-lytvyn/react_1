import style from "./Profile.module.scss";
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./myPosts/profoleInfo/ProfileInfo";

const Profile = (props) => {

  return (
    <div className={style.profile}>
      <ProfileInfo />
      <MyPosts state={props.state}   dispatch={props.dispatch}/>
    </div>
  );
};

export default Profile;
