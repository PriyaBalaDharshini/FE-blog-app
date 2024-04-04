import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css'
import { useContext, useState } from 'react'
import { Context } from '../../context/Context'
import AxiosService from '../../utils/AxiosService'
import ApiRoutes from '../../utils/ApiRoutes'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'

function Settings() {
    const { user } = useContext(Context)
    const { id } = useParams()
    console.log(id);
    //console.log(user);
    const [file, setFile] = useState(null)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedUser = {
            userId: user.others._id,
            username,
            password,
            email
        };
        const data = new FormData();
        if (file) {
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilePic = filename;
        }
        try {
            // Upload Photo
            const photoResponse = await AxiosService.post(ApiRoutes.UPLOAD_PHOTO.path, data);
            console.log(photoResponse);
            toast.success(photoResponse.data.message);

            // Update User
            await AxiosService.put(ApiRoutes.UPDATE_USER.path.replace(":id", id), { userId: user.others._id }, updatedUser);
            toast.success(updateUserResponse.data.message);
        } catch (error) {
            toast.error(error);
        }
    };

    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm" onSubmit={handleSubmit}>
                    <label htmlFor="">Profile Picture</label>
                    <div className="settingsPP">
                        {user && <img src={user.others.profilePic} alt="" />}

                        <label htmlFor="fileInput">
                            <i className="settingsppIcon fa-solid fa-user"></i>
                        </label>
                        <input type="file"
                            className='fileInput'
                            style={{ display: "none" }}
                            onChange={(e) => setFile(e.target.files[0])} />
                    </div>

                    <label htmlFor="">User Name</label>
                    <input type="text" placeholder={user.others.username} onChange={e => setUsername(e.target.value)} />

                    <label htmlFor="">Email</label>
                    <input type="email" placeholder={user.others.email} onChange={e => setEmail(e.target.value)} />

                    <label htmlFor="">Password</label>
                    <input type="password" onChange={e => setPassword(e.target.value)} />

                    <button className="settingsSumbit" type='submit'>Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Settings