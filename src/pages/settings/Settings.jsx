import Sidebar from '../../components/sidebar/Sidebar';
import './settings.css';




export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form action="" className="settingsForm">
                    <label htmlFor="">Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://img.glavnoe.in.ua/Image2018/2019/04/17/k1.jpg" alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                        </label>
                        <input type="file" id='fileInput' style={{ display: 'none' }} />
                    </div>
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder='Daniel' />
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder='daniel@gmail.com' />
                    <label htmlFor="">Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}