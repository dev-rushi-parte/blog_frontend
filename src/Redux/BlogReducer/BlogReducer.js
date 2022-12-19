
import { getLocalData, SaveTheToken } from '../../Utils/localStorage';
import * as types from './actionType'

const inState = {
    isLoading: false,
    isError: false,
    userData: getLocalData("userInfo") || []
}

export const BlogReducer = (state = inState, action) => {

    const { type, payload } = action;

    switch (type) {

        case types.ADD_BLOG_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case types.ADD_BLOG_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                payload
            }
        }
        case types.ADD_BLOG_ERROR: {
            return {
                ...state,
                isError: true
            }
        }
        case types.GET_ALL_BLOG_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case types.GET_ALL_BLOG_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                payload
            }
        }
        case types.GET_ALL_BLOG_ERROR: {
            return {
                ...state,
                isError: true
            }
        }
        case types.GET_USER_BLOG_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case types.GET_USER_BLOG_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                payload
            }
        }
        case types.GET_USER_BLOG_ERROR: {
            return {
                ...state,
                isError: true
            }
        }
        case types.GET_USER_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case types.GET_USER_SUCCESS: {
            SaveTheToken("userInfo", payload)

            return {
                ...state,
                isLoading: false,
                userData: payload
            }
        }
        case types.GET_USER_ERROR: {
            return {
                ...state,
                isError: true
            }
        }
        case types.UPADATE_USER_INFO_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case types.UPADATE_USER_INFO_SUCCESS: {
            SaveTheToken("userInfo", payload)
            return {
                ...state,
                isLoading: false,
                userData: payload
            }
        }
        case types.UPADATE_USER_INFO_ERROR: {
            return {
                ...state,
                isError: true
            }
        }

        case types.UPDATE_BLOG_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case types.UPDATE_BLOG_SUCCESS: {
            return {
                ...state,
                isLoading: false
            }
        }
        case types.UPDATE_BLOG_ERROR: {
            return {
                ...state,
                isError: true
            }
        }
        default:
            return state


    }
}