import style from "./Profile.module.scss";
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./myPosts/profoleInfo/ProfileInfo";

const Profile = (props) => {

  return (
    <div className={style.profile}>
      <ProfileInfo />
      <MyPosts state={props.state} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />
    </div>
  );
};

export default Profile;
