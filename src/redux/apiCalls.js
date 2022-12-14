import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutStart,
  editUserStart,
  editUserSuccess,
  editUserFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  resetPasswordStart,
  resetPasswordSuccess,
  resetPasswordFailure,
  newPasswordStart,
  newPasswordSuccess,
  newPasswordFailure,
} from "./userRedux";
import {
  createReviewStart,
  createReviewSuccess,
  createReviewFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure
} from "./productRedux";
import {
  postSubscribeStart,
  postSubscribeSuccess,
  postSubscribeFailure,
} from "./emailRedux";
import {
  addCategoryStart,
  addCategorySuccess,
  addCategoryFailure
} from "./categoryRedux";
import {
  createUGCStart,
  createUGCSuccess,
  createUGCFailure
} from "./ugcRedux";
import {
  createBannerStart,
  createBannerSuccess,
  createBannerFailure
} from "./bannerRedux";
import { publicRequest, userRequest } from "../requestMethods";

// USER
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};

export const logout = async (dispatch) => {
  dispatch(logoutStart());
};

export const reset = async (dispatch, email) => {
  dispatch(resetPasswordStart());
  try {
    const res = await publicRequest.post("/auth/reset", email);
    dispatch(resetPasswordSuccess(res.data));
  } catch (err) {
    dispatch(resetPasswordFailure());
  }
};

export const subscribe = async (dispatch, email) => {
  dispatch(postSubscribeStart());
  try {
    const res = await publicRequest.post("/email/signup", email);
    dispatch(postSubscribeSuccess(res.data));
    
  } catch (err) {
    dispatch(postSubscribeFailure());
  }
};

export const newpassword = async (dispatch, user) => {
  dispatch(newPasswordStart());
  try {
    const res = await publicRequest.post("/auth/new-password", user);
    dispatch(newPasswordSuccess(res.data));
  } catch (err) {
    dispatch(newPasswordFailure());
  }
};

export const updateAddress = (userId, address) => async (dispatch) => {
  dispatch(editUserStart());
  try {
    const res = await publicRequest.post(
      `/users/${userId}/edit-address`,
      address
    );
    dispatch(editUserSuccess(res.data));
  } catch (err) {
    dispatch(editUserFailure());
  }
};

export const createReview = (id, review) => async (dispatch) => {
  dispatch(createReviewStart());
  try {
    const res = await publicRequest.post(`/products/${id}/reviews`, review);
    dispatch(createReviewSuccess(res.data));
  } catch (err) {
    dispatch(createReviewFailure());
  }
};

// ADMIN
// ADD PRODUCT
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
}

// ADD CATEGORY
export const addCategory = async (category, dispatch) => {
  dispatch(addCategoryStart());
  try {
    const res = await userRequest.post(`/category`, category);
    dispatch(addCategorySuccess(res.data));
  } catch (err) {
    dispatch(addCategoryFailure());
  }
}

// CREATE CONTENT
export const addUGCContent = async (content, dispatch) => {
  dispatch(createUGCStart());
  try {
    const res = await userRequest.post(`/social/new-ig`, content);
    dispatch(createUGCSuccess(res.data));
  } catch (err) {
    dispatch(createUGCFailure());
  }
}

// CREATE BANNER
export const addBanner = async (banner, dispatch) => {
  dispatch(createBannerStart());
  try {
    const res = await userRequest.post(`/banner/`, banner);
    dispatch(createBannerSuccess(res.data));
  } catch (err) {
    dispatch(createBannerFailure());
  }
}