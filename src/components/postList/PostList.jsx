import { Link } from 'react-router-dom'
import './postList.css'

function PostList() {
    return (
        <div className="postlist">
            <Link to={"/post/:postId"}>
                <img src="https://pics.craiyon.com/2023-07-31/ae228120a519478d8dbd92c6a546cd54.webp" alt="" className="postImg" />
            </Link>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Life</span>
                    <span className="postCat">Music</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet consectetu
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
                <p className="postDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia asperiores eum illo, quos explicabo placeat necessitatibus, iste amet dolorum fuga quidem. Saepe ipsam vel, deleniti voluptates iste doloribus fugit laudantium?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia asperiores eum illo, quos explicabo placeat necessitatibus, iste amet dolorum fuga quidem. Saepe ipsam vel, deleniti voluptates iste doloribus fugit laudantium?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia asperiores eum illo, quos explicabo placeat necessitatibus, iste amet dolorum fuga quidem. Saepe ipsam vel, deleniti voluptates iste doloribus fugit laudantium?
                </p>
            </div>
        </div>
    )
}

export default PostList