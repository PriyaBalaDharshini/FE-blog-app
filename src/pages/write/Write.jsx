import { useContext, useState } from 'react'
import './write.css'
import AxiosService from '../../utils/AxiosService'
import ApiRoutes from '../../utils/ApiRoutes'
import { Context } from "../../context/Context.jsx"
import { toast } from 'react-toastify'


function Write() {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [file, setFile] = useState(null)
    const { user } = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc
        };
        const data = new FormData();
        if (file) {
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
        }
        try {
            // Upload Photo
            const photoResponse = await AxiosService.post(ApiRoutes.UPLOAD_PHOTO.path, data);
            console.log(photoResponse);
            toast.success(photoResponse.data.message);

            // Create Post
            const postResponse = await AxiosService.post(ApiRoutes.CREATE_POST.path, newPost);
            console.log(postResponse.data.newPost._id);
            const postId = postResponse.data.newPost._id;
            if (postId) {
                window.location.replace(`/post/${postId}`);
            } else {
                toast.error("Failed to get post ID");
            }
            toast.success(postResponse.data.message);
        } catch (error) {
            toast.error(error);
        }
    };

    return (
        <div className="write">
            {/* {file &&
                (<img src={`http://localhost:8000/images/${file.name}`} alt="" className='writeImage' />
                )
            } */}
            {file &&
                (<img src={URL.createObjectURL(file)} alt="" className='writeImage' />
                )
            }
            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput"><i className="fa-solid fa-circle-plus"></i></label>
                    <input type="file" id='fileInput' onChange={e => setFile(e.target.files[0])} style={{ display: "none" }} />
                    <input type="text" placeholder='Title..' className='writeInput' onChange={e => setTitle(e.target.value)} autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder='Share your story....' type="text" onChange={e => setDesc(e.target.value)} className='writeInput writeText'></textarea>
                </div>
                <button className="writeSubmit" type='submit'>Publish</button>
            </form>
        </div>
    )
}

export default Write