import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css'

function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label htmlFor="">Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://pics.craiyon.com/2023-07-31/ae228120a519478d8dbd92c6a546cd54.webp" alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsppIcon fa-solid fa-user"></i>
                        </label>
                        <input type="file" className='fileInput' style={{ display: "none" }} />
                    </div>

                    <label htmlFor="">User Name</label>
                    <input type="text" placeholder='Priya..' />

                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='priya@gmail.com' />

                    <label htmlFor="">Password</label>
                    <input type="password" />

                    <button className="settingsSumbit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Settings