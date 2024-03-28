import './singlePost.css'

function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://pics.craiyon.com/2023-07-31/ae228120a519478d8dbd92c6a546cd54.webp" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                        <i className="fa-solid fa-pen-to-square singlePostIcon"></i>
                        <i class="fa-solid fa-trash singlePostIcon"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuth"> Author : <b>Author 1</b></span>
                    <span className="singlePostDate"> 1 Hour Ago</span>
                </div>
                <p className='singlePostDesc'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum similique facilis eum molestiae, atque tenetur recusandae expedita dolor reprehenderit eius ea nobis facere voluptates optio autem quasi sit quisquam cum?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum similique facilis eum molestiae, atque tenetur recusandae expedita dolor reprehenderit eius ea nobis facere voluptates optio autem quasi sit quisquam cum?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum similique facilis eum molestiae, atque tenetur recusandae expedita dolor reprehenderit eius ea nobis facere voluptates optio autem quasi sit quisquam cum?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum similique facilis eum molestiae, atque tenetur recusandae expedita dolor reprehenderit eius ea nobis facere voluptates optio autem quasi sit quisquam cum?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum similique facilis eum molestiae, atque tenetur recusandae expedita dolor reprehenderit eius ea nobis facere voluptates optio autem quasi sit quisquam cum?
                </p>
            </div>
        </div >
    )
}

export default SinglePost