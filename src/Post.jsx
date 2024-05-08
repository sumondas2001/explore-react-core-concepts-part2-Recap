import './Post.css'
export default function Post({ post }) {
     const { userId, id, title, body } = post;
     console.log(post)
     return (
          <div className='box'>
               <h3>user ID : {userId} </h3>
               <h3>Post ID : {id}</h3>
               <h5>tital: {title}</h5>
               <h5>Body: {body}</h5>

          </div>
     )
}