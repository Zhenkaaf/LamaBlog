import './header.css';





export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img src="https://etnosoft.com.ua/wp-content/uploads/2018/12/novogodnie-oboi-2018-2-1.jpg" alt="" className="headerImg" />
        </div>
    )
}