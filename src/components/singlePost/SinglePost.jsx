import { useLocation, useParams } from 'react-router-dom'
import './singlePost.css'
import { useContext, useEffect, useState } from 'react';
import AxiosService from '../../utils/AxiosService';
import ApiRoutes from '../../utils/ApiRoutes';
import { toast } from 'react-toastify';
import { Context } from "../../context/Context.jsx"

function SinglePost() {
    const location = useLocation();
    const { id } = useParams()
    console.log(id);

    const [post, setPost] = useState(null)
    const PF = "http://localhost:8000/images/"
    const { user } = useContext(Context)

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [updatemode, setUpdatemode] = useState(false)

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await AxiosService.get(`${ApiRoutes.SINGLE_POST.path.replace(":id", id)}`);
                setPost(response.data);
                setTitle(response.data.title)
                setDesc(response.data.desc)
            } catch (error) {
                console.error("Error fetching post:", error);
                toast.error("Failed to fetch post");
            }
        };
        fetchPost();
    }, [id]);

    const handleDelete = async () => {
        try {
            await AxiosService.delete(ApiRoutes.DELETE_POST.path.replace(":id", id), { data: { username: user.username } });
            window.location.replace("/");
        } catch (error) {
            console.log(error);
            toast.error("Failed to delete post");
        }
    }

    const handleUpdate = async () => {
        try {
            await AxiosService.put(ApiRoutes.EDIT_POST.path.replace(":id", id), {
                title,
                desc,
                username: user.username
            });
            toast.success("Post updated successfully");
            window.location.replace(`/post/${id}`);
        } catch (error) {
            console.error("Failed to update post:", error);
            toast.error("Failed to update post: " + error.message);
        }
    }

    const handleUpdateSubmit = () => {
        setUpdatemode(false); // Disables update mode
        handleUpdate(); // Calls handleUpdate to send updated data to the server
    }

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post && (<img src={PF + post.photo} alt="" className="singlePostImg" />)}

                {updatemode ? (<input type='text ' className="singlePostTitleInput" value={title} onChange={(e) => setTitle(e.target.value)} />) :
                    (<h1 className="singlePostTitle">
                        {post && (post.title)}
                        {post && (post.username === user?.username) && (<div className="singlePostEdit">
                            <i className="fa-solid fa-pen-to-square singlePostIcon" onClick={() => setUpdatemode(true)}></i>
                            <i className="fa-solid fa-trash singlePostIcon" onClick={handleDelete}></i>
                        </div>)}
                    </h1>)}

                <div className="singlePostInfo">
                    <span className="singlePostAuth"> Author : <b>{post && (user.others.username)}</b></span>
                    <span className="singlePostDate"> {post && new Date(post.createdAt).toDateString()}</span>
                </div>

                {updatemode ? (
                    <textarea className='singlePostDescInput' value={desc} onChange={(e) => setDesc(e.target.value)} />) :
                    <p className='singlePostDesc'>{post && (post.desc)}</p>}
                {updatemode && (
                    <button className="singlePostButton" onClick={handleUpdateSubmit}>Update</button>
                )}

            </div>
        </div>
    )
}
export default SinglePost