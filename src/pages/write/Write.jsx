import './write.css'

function Write() {
    return (
        <div className="write">
            <img src="https://pics.craiyon.com/2023-07-31/ae228120a519478d8dbd92c6a546cd54.webp" alt="" className='writeImage' />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput"><i className="fa-solid fa-circle-plus"></i></label>
                    <input type="file" id='fileInput' style={{ display: "none" }} />
                    <input type="text" placeholder='Title..' className='writeInput' autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder='Share your story....' type="text" className='writeInput writeText'></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}

export default Write