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
  newPasswordFailure
} from "./userRedux";
import {
  createReviewStart,
  createReviewSuccess,
  createReviewFailure,
} from "./productRedux";
import { publicRequest } from "../requestMethods";

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

export const newpassword = async (dispatch, user) => {
  dispatch(newPasswordStart());
  try {
    const res = await publicRequest.post("/auth/new-password", user);
    dispatch(resetPasswordSuccess(res.data));
  } catch (err) {
    dispatch(resetPasswordFailure());
  }
}

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
