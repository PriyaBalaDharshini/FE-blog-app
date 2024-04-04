import Post from "../components/post/Post";
import SinglePost from "../components/singlePost/SinglePost";
import Home from "../pages/home/Home";
import Settings from "../pages/settings/Settings";

const AppRoutes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/",
        element: <Post />
    },
    {
        path: "/post/:id",
        element: <SinglePost />
    },
    {
        path: "/settings/:id",
        element: <Settings />
    }

]

export default AppRoutes;