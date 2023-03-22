import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';




export default function Sidebar() {

    const [cats, setCat] = useState([]);

    useEffect(() => {
        const getcats = async () => {
            const res = await axios.get('/categories');
            setCat(res.data);
        };
        getcats();
    })

    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://www.billboard.com/wp-content/uploads/2021/12/Britney-Spears-3-screenshot-2021-billboard-1548.jpg?w=942&h=623&crop=1" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, harum, quam accusantium quo provident culpa mollitia placeat eveniet quia!</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((category, index) => (
                        <Link className='link' to={`/?cat=${category.name}`} ><li key={index} className="sidebarListItem">{category.name}</li></Link>
                    ))}

                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
                    <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                </div>
            </div>
        </div>
    )
}
