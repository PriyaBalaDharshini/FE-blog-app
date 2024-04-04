import { Link } from 'react-router-dom'
import './postList.css'

function PostList({ post }) {
    const PF = "http://localhost:8000/images/"
    return (
        <div className="postlist">
            {post.photo && (<img src={PF + post.photo} alt="" className="postImg" />)}

            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map((category, index) =>
                    (<span key={index} className="postCat">
                        {category.charAt(0).toUpperCase()}{category.slice(1)}
                    </span>))}
                </div>
                <Link to={`/post/${post._id}`} className='link'>
                    <span className="postTitle">
                        {post.title}
                    </span>
                </Link>
                <hr />
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
                <p className="postDesc">
                    {post.title}
                </p>
            </div>
        </div>
    )
}

export default PostList