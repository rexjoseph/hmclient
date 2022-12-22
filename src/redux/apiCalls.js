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
  addProductFailure,
  getProductStart,
  getProductSuccess,
  getProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateOrderStart,
  updateOrderSuccess,
  updateOrderFailure,
  deleteOrderStart,
  deleteOrderSuccess,
  deleteOrderFailure,
  createDiscountStart,
  createDiscountSuccess,
  createDiscountFailure
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
import {
  createAnnStart,
  createAnnSuccess,
  createAnnFailure
} from "./announcementReducer";
import { publicRequest, userRequest } from "../requestMethods";
import { discountFailure, discountStart, discountSuccess } from "./cartRedux";
// import { useNavigate } from "react-router-dom";

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
  // const navigate = useNavigate();
  dispatch(editUserStart());
  try {
    const res = await publicRequest.post(
      `/users/${userId}/edit-address`,
      address
    );
    dispatch(editUserSuccess(res.data));
    // navigate('/checkout');
  } catch (err) {
    dispatch(editUserFailure());
  }
};

export const createReview = (id, review) => async (dispatch) => {
  dispatch(createReviewStart());
  try {
    const res = await userRequest.post(`/products/${id}/reviews`, review);
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

// GET PRODUCT
export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await userRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

// UPDATE PRODUCT
export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    // update
    const res = await userRequest.put(`/products/${id}`, product);
    dispatch(updateProductSuccess(res.data));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};

// DELETE PRODUCT
export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const updateOrder = async (id, order, dispatch) => {
  dispatch(updateOrderStart());
  try {
    const res = await userRequest.put(`/orders/${id}`, order);
    dispatch(updateOrderSuccess(res.data));
  } catch (err) {
    dispatch(updateOrderFailure())
  }
}

// DELETE ORDER
export const deleteOrder = async (id, dispatch) => {
  dispatch(deleteOrderStart());
  try {
    const res = await userRequest.delete(`/orders/${id}`);
    dispatch(deleteOrderSuccess());
  } catch (err) {
    dispatch(deleteOrderFailure());
  }
};

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

// CREATE ANNOUNCEMENT
export const addAnnouncement = async (announcement, dispatch) => {
  dispatch(createAnnStart());
  try {
    const res = await userRequest.post(`/announcement`, announcement);
    dispatch(createAnnSuccess(res.data));
  } catch (err) {
    dispatch(createBannerFailure());
  }
}

// CREATE DISCOUNT CODE
export const addDiscount = async (code, dispatch) => {
  dispatch(createDiscountStart());
  try {
    const res = await userRequest.post(`/carts/new-discount`, code);
    dispatch(createDiscountSuccess(res.data));
  } catch (err) {
    dispatch(createDiscountFailure());
  }
}

// APPLY DISCOUNT
export const applyDiscount = async (code, dispatch) => {
  dispatch(discountStart());
  try {
    const res = await userRequest.get(`/carts/get-discount/${code}`);
    dispatch(discountSuccess(res.data))
  } catch (err) {
    dispatch(discountFailure());
  }
}