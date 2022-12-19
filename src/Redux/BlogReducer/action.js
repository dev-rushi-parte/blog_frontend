import axios from "axios";
import * as types from './actionType';

export const addblogRequest = () => ({
    type: types.ADD_BLOG_REQUEST
});

export const addblogSuccess = (payload) => ({
    type: types.ADD_BLOG_SUCCESS,
    payload
});

export const addblogFailure = (payload) => ({
    type: types.ADD_BLOG_ERROR,
    payload
})

export const AddBlog = (payload) => async (dispatch) => {
    dispatch(addblogRequest());


    return await axios.post("https://blogbackend-563d.up.railway.app/blog/", payload, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${payload.token}`
        }
    })
        .then((res) => {
            // console.log(res)
            return dispatch(addblogSuccess(res))

        })
        .catch((err) => {

            return addblogFailure(err)

        })
}

export const get_all_post_request = () => ({
    type: types.GET_ALL_BLOG_REQUEST
})

export const get_all_post_success = (payload) => ({
    type: types.GET_ALL_BLOG_SUCCESS,
    payload
});

export const get_all_post_failure = (payload) => ({
    type: types.GET_ALL_BLOG_ERROR,
    payload
})


export const Get_All_Blog = (token) => async (dispatch) => {
    dispatch(get_all_post_request());


    return await axios.get("https://blogbackend-563d.up.railway.app/blog/all", {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .then((res) => {
            // console.log(res)
            return dispatch(get_all_post_success(res.data))

        })
        .catch((err) => {

            return get_all_post_failure(err)

        })
}


export const get_user_request = () => ({
    type: types.GET_USER_REQUEST
})

export const get_user_success = (payload) => ({
    type: types.GET_USER_SUCCESS,
    payload
});

export const get_user_failure = (payload) => ({
    type: types.GET_USER_ERROR,
    payload
})


export const GetUser = (token) => async (dispatch) => {

    dispatch(get_user_request());

    return await axios.get("https://blogbackend-563d.up.railway.app/blog/user", {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .then((res) => {
            // console.log(res.data)
            return dispatch(get_user_success(res.data))
        })
        .catch((err) => {
            return dispatch(get_user_failure(err));
        })
}


export const update_user_request = () => ({
    type: types.UPADATE_USER_INFO_REQUEST
})

export const update_user_success = (payload) => ({
    type: types.UPADATE_USER_INFO_SUCCESS,
    payload
});

export const update_user_failure = (payload) => ({
    type: types.UPADATE_USER_INFO_ERROR,
    payload
})

export const UpdateUser = (payload) => async (dispatch) => {

    dispatch(update_user_request());

    return await axios.put(`https://blogbackend-563d.up.railway.app/blog/user/${payload.id}`, payload, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${payload.token}`
        }
    })
        .then((res) => {
            // console.log(res.data)
            return dispatch(update_user_success(res.data))
        })
        .catch((err) => {
            return dispatch(update_user_failure(err));
        })
}



export const update_blog_request = () => ({
    type: types.UPDATE_BLOG_REQUEST
})

export const update_blog_success = (payload) => ({
    type: types.UPDATE_BLOG_SUCCESS,
    payload
});

export const update_blog_failure = (payload) => ({
    type: types.UPDATE_BLOG_ERROR,
    payload
})

export const UpdateBlog = (payload) => async (dispatch) => {

    dispatch(update_blog_request());

    return await axios.put(`https://blogbackend-563d.up.railway.app/blog/${payload.id}`, payload, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${payload.token}`
        }
    })
        .then((res) => {
            // console.log(res.data)
            return dispatch(update_blog_success(res.data))
        })
        .catch((err) => {
            return dispatch(update_blog_failure(err));
        })
}


export const delete_blog_request = () => ({
    type: types.DELETE_BLOG_REQUEST
})

export const delete_blog_success = (payload) => ({
    type: types.DELETE_BLOG_SUCCESS,
    payload
});

export const delete_blog_failure = (payload) => ({
    type: types.DELETE_BLOG_ERROR,
    payload
})

export const DeleteBlog = (payload) => async (dispatch) => {

    dispatch(delete_blog_request());

    return await axios.delete(`https://blogbackend-563d.up.railway.app/blog/${payload.id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${payload.token}`
        }
    })
        .then((res) => {
            // console.log(res.data)
            return dispatch(delete_blog_success(res.data))
        })
        .catch((err) => {
            return dispatch(delete_blog_failure(err));
        })
}



export const get_user_post_request = () => ({
    type: types.GET_USER_BLOG_REQUEST
})

export const get_user_post_success = (payload) => ({
    type: types.GET_USER_BLOG_SUCCESS,
    payload
});

export const get_user_post_failure = (payload) => ({
    type: types.GET_USER_BLOG_ERROR,
    payload
})


export const Get_User_Blog = (token) => async (dispatch) => {
    dispatch(get_user_post_request());


    return await axios.get("https://blogbackend-563d.up.railway.app/blog/", {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .then((res) => {
            // console.log(res.data.userBlog)
            return dispatch(get_user_post_success(res.data.userBlog))

        })
        .catch((err) => {

            return get_user_post_failure(err)

        })
}