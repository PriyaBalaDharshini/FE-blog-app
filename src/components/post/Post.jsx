import PostList from '../postList/PostList'
import './post.css'

function Post({ posts }) {
    return (
        <div className="post">
            {posts.map((p, i) => (<PostList key={i} post={p} />))}
        </div>
    )
}

export default Post