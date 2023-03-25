import axios from 'axios';
import { useContext, useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import { Context } from '../../context/Context';
import './settings.css';




export default function Settings() {

    const { user } = useContext(Context);
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password,
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append('name', filename);
            data.append('file', file);
            updatedUser.profilePic = filename;
            try {
                await axios.post('/upload', data);
            } catch (err) {
                console.error(err);
            }
        }
        try {
            await axios.put('/users/' + user._id, updatedUser);
            setSuccess(true);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form action="" className="settingsForm" onSubmit={handleSubmit}>
                    <label htmlFor="">Profile Picture</label>
                    <div className="settingsPP">
                        <img src={user.profilePic} alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                        </label>
                        <input type="file" id='fileInput' style={{ display: 'none' }} onChange={(e) => setFile(e.target.files[0])} />
                    </div>
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder={user.username} onChange={e => setUsername(e.target.value)}/>
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder={user.email} onChange={e => setEmail(e.target.value)}/>
                    <label htmlFor="">Password</label>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                    <button className="settingsSubmit" type='submit'>Update</button>
                    {success && <span style={{color: 'green', textAlign: 'center', marginTop: '10px'}}>User has been updated!</span>}
                </form>
            </div>
            <Sidebar />
        </div>
    )
}