import { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Post from '../../components/post/Post'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'
import AxiosService from '../../utils/AxiosService'
import ApiRoutes from '../../utils/ApiRoutes'
import { useLocation } from 'react-router-dom'

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await AxiosService.get(ApiRoutes.POSTS.path);
                /* console.log(response); */
                setPosts(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPost();
    }, []);

    return (
        <>
            <Header />
            <div className="home">
                <Post posts={posts} />
                <Sidebar />

            </div>
        </>
    )
}

export default Home