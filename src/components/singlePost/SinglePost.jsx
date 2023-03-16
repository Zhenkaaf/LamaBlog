import './singlePost.css';



export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://walldeco.ua/img/gallery/21/thumbs/thumb_l_0407.jpg" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">Lorem, ipsum dolor.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-regular fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Daniel</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sit nesciunt voluptas rem accusamus quam sapiente aperiam dolores, mollitia iusto minima tempore? Temporibus nobis animi quos hic quas provident solutaLorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sit nesciunt voluptas rem accusamus quam sapiente aperiam dolores, mollitia iusto minima tempore? Temporibus nobis animi quos hic quas provident solutaLorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sit nesciunt voluptas rem accusamus quam sapiente aperiam dolores, mollitia iusto minima tempore? Temporibus nobis animi quos hic quas provident solutaLorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sit nesciunt voluptas rem accusamus quam sapiente aperiam dolores, mollitia iusto minima tempore? Temporibus nobis animi quos hic quas provident soluta sit amet consectetur adipisicing elit. Dolorum sit nesciunt voluptas rem accusamus quam sapiente aperiam dolores, mollitia iusto minima tempore? Temporibus nobis animi quos hic quas provident soluta.</p>
            </div>
        </div>
    )
}