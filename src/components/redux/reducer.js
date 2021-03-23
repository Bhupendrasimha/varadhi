import {LOGIN_REQ,LOGIN_REQ_FAILURE,LOGIN_REQ_SUCCESS,
    USERS_REQ,USERS_REQ_FAILURE,USERS_REQ_SUCCESS,
    BLOGS_REQ,BLOGS_REQ_FAILURE,BLOGS_REQ_SUCCESS,RENDER, RENDER_SUCCESS, SINGLE_BLOG,LOG_OUT
    } from "./actionType"
const initState = {
  userData: [],
  isSuccess: false,
  isError: false,
  blogData:[],
  usersDetails: [],
  login:false,
  blog:[]

};
const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQ:
      return {
        ...state,
      };
    case LOGIN_REQ_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        userData: payload,
        isError: false,
      };
    case LOGIN_REQ_FAILURE:
      return {
        ...state,
        isSuccess: false,
        isError: true,
      };
    case USERS_REQ:
      return {
        ...state,
      };
    case USERS_REQ_SUCCESS:
      return {
        ...state,
        usersDetails: payload,
      };
    case USERS_REQ_FAILURE:
      return {
        ...state,
      };
      case BLOGS_REQ:
        return {
          ...state,
        };
      case BLOGS_REQ_SUCCESS:
        return {
          ...state,
          blogData:payload,
        };
      case BLOGS_REQ_FAILURE:
        return {
          ...state,
        };
        case RENDER:
            return {
                ...state,
                login:false
            }
            case RENDER_SUCCESS:
            return {
                ...state,
                login:true
            }
            case SINGLE_BLOG:
              return {
                  ...state,
                  blog:payload
              }
              case LOG_OUT:
                return{
                  ...state,
                  login:true
                }

    default:
      return state;
  }
};

export default reducer;
