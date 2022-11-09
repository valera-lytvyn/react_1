import style from './Post.module.scss'

const Post = (props) => {
   return (
      <div className={style.post}>
      <div className={style.message}> {props.message} </div>
      <div className={style.likes}>{props.likesCount} </div>
      </div>
   )
}
export default Post;