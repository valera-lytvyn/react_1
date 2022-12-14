import style from "./Profile.module.scss";
import MyPostsContainer from "./myPosts/MyPostsContainer";
import ProfileInfo from "./myPosts/profoleInfo/ProfileInfo";

const Profile = (props) => {

  return (
    <div className={style.profile}>
      <ProfileInfo />
      <MyPostsContainer
      />
    </div>
  );
};

export default Profile;
