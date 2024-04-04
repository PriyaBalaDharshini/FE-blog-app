const ApiRoutes = {
    POSTS: {
        path: "/post/all-posts"
    },
    SINGLE_POST: {
        path: "/post/:id"
    },
    GET_ALL_CATEGORY: {
        path: "/category/all-category"
    },
    REGISTER: {
        path: "/auth/register"
    },
    LOGIN: {
        path: "/auth/login"
    },
    CREATE_POST: {
        path: "/post/create-post"
    },
    UPLOAD_PHOTO: {
        path: "/upload"
    },
    DELETE_POST: {
        path: "/post/:id"
    },
    EDIT_POST: {
        path: "/post/:id"
    },
    UPDATE_USER: {
        path: "/user/:id"
    },
    DELETE_USER: {
        path: "/user/:id"
    }
}

export default ApiRoutes