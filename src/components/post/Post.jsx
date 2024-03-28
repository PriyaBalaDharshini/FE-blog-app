import PostList from '../postList/PostList'
import './post.css'

function Post() {
    return (
        <div className="post">
            <PostList />
            <PostList />
            <PostList />
            <PostList />
            <PostList />
        </div>
    )
}

export default Post