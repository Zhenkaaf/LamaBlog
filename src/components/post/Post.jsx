import './post.css';





export default function Post() {
    return (
        <div className="post">
            <img src="https://mobimg.b-cdn.net/v3/fetch/90/905911947c2947e6dda5a8d9aa2af088.jpeg" alt="" className="postImg" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor.</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates praesentium quis, ullam tenetur autem cupiditate at necessitatibus eos repellat amet. Error, atque. Deleniti fugit molestias eligendi adipisci quasi perferendis distinctio Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates praesentium quis, ullam tenetur autem cupiditate at necessitatibus eos repellat amet. Error, atque. Deleniti fugit molestias eligendi adipisci quasi perferendis distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates praesentium quis, ullam tenetur autem cupiditate at necessitatibus eos repellat amet. Error, atque. Deleniti fugit molestias eligendi adipisci quasi perferendis distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates praesentium quis, ullam tenetur autem cupiditate at necessitatibus eos repellat amet. Error, atque. Deleniti fugit molestias eligendi adipisci quasi perferendis distinctio..</p>
        </div>
    )
}