import {
  CREATE_POST,
  DELETE_POST,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_LOADING,
  FETCH_POSTS_SUCCESS,
  GET_POSTS,
  UPDATE_POST,
  IS_MODAL_OPEN,
  IS_MODAL_CLOSE,
  IS_UPDATING_OPEN,
  IS_UPDATING_CLOSE,
} from "../types/postTypes";

const initialState = {
  isLoading: false,
  posts: [
    {
      id: 1,
      title: "Post-One",
      userId: 1,
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro quas aliquam neque totam deleniti ducimus est eligendi obcaecati ratione perferendis reprehenderit suscipit quasi exercitationem corporis, minus, rem beatae velit quibusdam!",
    },
    {
      id: 2,
      title: "Post-Two",
      userId: 1,
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro quas aliquam neque totam deleniti ducimus est eligendi obcaecati ratione perferendis reprehenderit suscipit quasi exercitationem corporis, minus, rem beatae velit quibusdam!",
    },
    {
      id: 3,
      title: "Post-Three",
      userId: 1,
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro quas aliquam neque totam deleniti ducimus est eligendi obcaecati ratione perferendis reprehenderit suscipit quasi exercitationem corporis, minus, rem beatae velit quibusdam!",
    },
    {
      id: 4,
      title: "Post-Four",
      userId: 1,
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro quas aliquam neque totam deleniti ducimus est eligendi obcaecati ratione perferendis reprehenderit suscipit quasi exercitationem corporis, minus, rem beatae velit quibusdam!",
    },
  ],
  post: {},
  hasError: false,
  errorMsg: "",
  isUpdating: false,
  isModalOpen: false,
  updatingItem: {},
};

const postReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case FETCH_POSTS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        errorMsg: actions.payload,
      };

    case GET_POSTS:
      return {
        ...state,
        isLoading: false,
        posts: actions.payload,
      };
    case CREATE_POST:
      return {
        ...state,
        isLoading: false,
        post: actions.payload,
        isModalOpen: false,
      };
    case UPDATE_POST:
      return {
        ...state,
        isLoading: false,
        post: actions.payload,
      };
    case IS_UPDATING_OPEN:
      return {
        ...state,
        isModalOpen: true,
        isUpdating: true,
        updatingItem: actions.payload,
      };
    case IS_UPDATING_CLOSE:
      return {
        ...state,
        isUpdating: false,
        updatingItem: {},
      };
    case DELETE_POST:
      return {
        ...state,
        isLoading: false,
        post: actions.payload,
      };
    case IS_MODAL_OPEN:
      return {
        ...state,
        isModalOpen: true,
      };
    case IS_MODAL_CLOSE:
      return {
        ...state,
        isModalOpen: false,
      };
    default:
      return state;
  }
};

export default postReducer;
