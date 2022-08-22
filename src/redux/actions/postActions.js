import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_LOADING,
  FETCH_POSTS_SUCCESS,
  GET_POSTS,
  UPDATE_POST,
  CREATE_POST,
  DELETE_POST,
  IS_MODAL_OPEN,
  IS_MODAL_CLOSE,
  IS_UPDATING_OPEN,
  IS_UPDATING_CLOSE
} from "../types/postTypes";

export const isModalOpen = () => {
  return {
    type: IS_MODAL_OPEN,
  };
};
export const isUpdatingOpen = (item) => {
  return {
    type: IS_UPDATING_OPEN,
    payload : item
  };
};
export const isUpdatingClose = () => {
  return {
    type: IS_UPDATING_CLOSE,
  };
};
export const isModalClose = () => {
  return {
    type: IS_MODAL_CLOSE,
  };
};
const fetchPostsLoading = () => {
  return {
    type: FETCH_POSTS_LOADING,
  };
};

const fetchPostsSuccess = () => {
  return {
    type: FETCH_POSTS_SUCCESS,
  };
};

const fetchGetPostsSuccess = (posts) => {
  return {
    type: GET_POSTS,
    payload: posts,
  };
};

const fetchUpdatePostsSuccess = (post) => {
  return {
    type: UPDATE_POST,
    payload: post,
  };
};

const fetchCreatePostsSuccess = (post) => {
  return {
    type: CREATE_POST,
    payload: post,
  };
};
const fetchDeletePostsSuccess = (post) => {
  return {
    type: DELETE_POST,
    payload: post,
  };
};
const fetchPostsFailure = (errorMsg) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: errorMsg,
  };
};

export const getPosts = () => {
  return async function (dispatch) {
    try {
      dispatch(fetchPostsLoading());
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const response = await res.json();
      dispatch(fetchPostsSuccess());
      dispatch(fetchGetPostsSuccess(response));
    } catch (error) {
      dispatch(fetchPostsFailure(error.message));
    }
  };
};

export const createPost = (data) => {
  return async function (dispatch) {
    try {
      dispatch(fetchPostsLoading());
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const response = await res.json();
      dispatch(fetchPostsSuccess());
      dispatch(fetchCreatePostsSuccess(response));

    } catch (error) {
      dispatch(fetchPostsFailure(error.message));
    }
  };
};

export const updatePost = (data) => {
  return async function (dispatch) {
    try {
      dispatch(fetchPostsLoading());
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${data.id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const response = await res.json();
      dispatch(fetchPostsSuccess());
      dispatch(isModalClose())
      dispatch(isUpdatingClose())
      dispatch(fetchUpdatePostsSuccess(response));
    } catch (error) {
      dispatch(fetchPostsFailure(error.message));
    }
  };
};

export const deletePost = (index) => {
  return async function (dispatch) {
    try {
      dispatch(fetchPostsLoading());
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${index}`,
        {
          method: "DELETE",
        }
      );
      const response = await res.json();
      dispatch(fetchPostsSuccess());
      dispatch(fetchDeletePostsSuccess(response));
    } catch (error) {
      dispatch(fetchPostsFailure(error.message));
    }
  };
};
