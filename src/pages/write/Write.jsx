import './write.css';


export default function Write() {
    return (
        <div className="write">
            <img src="https://www.trip-ukraine.com.ua/wp-content/uploads/2021/11/imgonline-com-ua-Resize-Grr4jhbEGpKan-1-e1637943776271.jpg" alt="" className="writeImg" />
            <form action="" className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id='fileInput' style={{ display: 'none' }} />
                    <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder='Tell your story...' type='text' className='writeInput writeText' ></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}