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
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure
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
} from "./productRedux";
import {
  getOrdersStart,
  getOrdersSuccess,
  getOrdersFailure,
  updateOrderStart,
  updateOrderSuccess,
  updateOrderFailure,
  deleteOrderStart,
  deleteOrderSuccess,
  deleteOrderFailure,
} from "./orderRedux";
import {
  createDiscountStart,
  createDiscountSuccess,
  createDiscountFailure,
  getDiscountsStart,
  getDiscountsSuccess,
  getDiscountsFailure,
  updateDiscountStart,
  updateDiscountSuccess,
  updateDiscountFailure,
  deleteDiscountStart,
  deleteDiscountSuccess,
  deleteDiscountFailure
} from "./discountRedux";
import {
  postSubscribeStart,
  postSubscribeSuccess,
  postSubscribeFailure,
} from "./emailRedux";
import {
  addCategoryStart,
  addCategorySuccess,
  addCategoryFailure,
  editCategoryStart,
  editCategorySuccess,
  editCategoryFailure,
  getCategoriesStart,
  getCategoriesSuccess,
  getCategoriesFailure,
  deleteCategoryStart,
  deleteCategorySuccess,
  deleteCategoryFailure
} from "./categoryRedux";
import {
  createUGCStart,
  createUGCSuccess,
  createUGCFailure,
  getUGCStart,
  getUGCSuccess,
  getUGCFailure,
  updateUGCStart,
  updateUGCSuccess,
  updateUGCFailure,
  deleteUGCStart,
  deleteUGCSuccess,
  deleteUGCFailure
} from "./ugcRedux";
import {
  createBannerStart,
  createBannerSuccess,
  createBannerFailure,
  updateBannerStart,
  updateBannerSuccess,
  updateBannerFailure,
  getAllBannerStart,
  getAllBannerSuccess,
  getAllBannerFailure,
  deleteBannerStart,
  deleteBannerSuccess,
  deleteBannerFailure
} from "./bannerRedux";
import {
  createAnnStart,
  createAnnSuccess,
  createAnnFailure,
  getAnnouncementsStart,
  getAnnouncementsSuccess,
  getAnnouncementsFailure,
  editAnnouncementStart,
  editAnnouncementSuccess,
  editAnnouncementFailure,
  deleteAnnouncementStart,
  deleteAnnouncementSuccess,
  deleteAnnouncementFailure
} from "./announcementRedux";
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

// DELETE USER
export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    const res = await userRequest.delete(`/users/${id}`);
    dispatch(deleteUserSuccess());
  } catch (err) {
    dispatch(deleteUserFailure());
  }
}

// GET ALL ORDERS
export const getOrders = async (dispatch) => {
  dispatch(getOrdersStart());
  try {
    const res = await userRequest.get("/orders");
    dispatch(getOrdersSuccess(res.data));
  } catch (err) {
    dispatch(getOrdersFailure());
  }
};

// UPDATE ORDER
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

// GET CATEGORIES
export const getCategories = async (dispatch) => {
  dispatch(getCategoriesStart());
  try {
    const res = await userRequest.get('/category/all');
    dispatch(getCategoriesSuccess(res.data));
  } catch (err) {
    dispatch(getCategoriesFailure());
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

// EDIT CATEGORY
export const updateCategory = async (id, category, dispatch) => {
  dispatch(editCategoryStart());
  try {
    // update
    const res = await userRequest.put(`/category/${id}`, category);
    dispatch(editCategorySuccess(res.data));
  } catch (err) {
    dispatch(editCategoryFailure());
  }
};

// DELETE CATEGORY
export const deleteCategory = async (id, dispatch) => {
  dispatch(deleteCategoryStart());
  try {
    const res = await userRequest.delete(`/category/${id}`);
    dispatch(deleteCategorySuccess(id));
  } catch (err) {
    dispatch(deleteCategoryFailure());
  }
};

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

// GET CONTENTS
export const getUGCContents = async (dispatch) => {
  dispatch(getUGCStart());
  try {
    const res = await userRequest.get("/social/all");
    dispatch(getUGCSuccess(res.data));
  } catch (err) {
    dispatch(getUGCFailure());
  }
};

// UPDATE CONTENT
export const updateUGCContent = async (id, content, dispatch) => {
  dispatch(updateUGCStart());
  try {
    // update
    const res = await userRequest.put(`/social/${id}`, content);
    dispatch(updateUGCSuccess(res.data));
  } catch (err) {
    dispatch(updateUGCFailure());
  }
};

// DELETE CONTENT
export const deleteUGCContent = async (id, dispatch) => {
  dispatch(deleteUGCStart());
  try {
    const res = await userRequest.delete(`/social/${id}`);
    dispatch(deleteUGCSuccess(id));
  } catch (err) {
    dispatch(deleteUGCFailure());
  }
};

// GET BANNERS
export const getBanners = async (dispatch) => {
  dispatch(getAllBannerStart());
  try {
    const res = await userRequest.get("/banner");
    dispatch(getAllBannerSuccess(res.data));
  } catch (err) {
    dispatch(getAllBannerFailure());
  }
};

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

// UPDATE BANNER
export const updateBanner = async (id, banner, dispatch) => {
  dispatch(updateBannerStart());
  try {
    const res = await userRequest.post(`/banner/edit/${id}`, banner);
    dispatch(updateBannerSuccess(res.data));
  } catch (err) {
    dispatch(updateBannerFailure());
  }
}

// DELETE ORDER
export const deleteBanner = async (id, dispatch) => {
  dispatch(deleteBannerStart());
  try {
    const res = await userRequest.delete(`/banner/${id}`);
    dispatch(deleteBannerSuccess());
  } catch (err) {
    dispatch(deleteBannerFailure());
  }
};

// CREATE ANNOUNCEMENT
export const addAnnouncement = async (announcement, dispatch) => {
  dispatch(createAnnStart());
  try {
    const res = await userRequest.post(`/announcement`, announcement);
    dispatch(createAnnSuccess(res.data));
  } catch (err) {
    dispatch(createAnnFailure());
  }
}

// GET ALL ANNOUNCEMENTS
export const getAnnouncements = async (dispatch) => {
  dispatch(getAnnouncementsStart());
  try {
    const res = await userRequest.get("/announcement/admin-all");
    dispatch(getAnnouncementsSuccess(res.data));
  } catch (err) {
    dispatch(getAnnouncementsFailure());
  }
};

// UPDATE ANNOUNCEMENT
export const updateAnnouncement = async (id, announcement, dispatch) => {
  dispatch(editAnnouncementStart());
  try {
    // update
    const res = await userRequest.put(`/announcement/${id}`, announcement);
    dispatch(editAnnouncementSuccess(res.data));
  } catch (err) {
    dispatch(editAnnouncementFailure());
  }
};

// DELETE ANNOUNCEMENT
export const deleteAnnouncement = async (id, dispatch) => {
  dispatch(deleteAnnouncementStart());
  try {
    const res = await userRequest.delete(`/announcement/${id}`);
    dispatch(deleteAnnouncementSuccess(id));
  } catch (err) {
    dispatch(deleteAnnouncementFailure());
  }
};

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

// GET DISCOUNTS
export const getDiscounts = async (dispatch) => {
  dispatch(getDiscountsStart());
  try {
    const res = await userRequest.get("/carts/all-discounts");
    dispatch(getDiscountsSuccess(res.data));
  } catch (err) {
    dispatch(getDiscountsFailure());
  }
};

// UPDATE DISCOUNT
export const updateDiscount = async (id, discount, dispatch) => {
  dispatch(updateDiscountStart());
  try {
    // update
    const res = await userRequest.put(`/carts/discount/${id}`, discount);
    dispatch(updateDiscountSuccess(res.data));
  } catch (err) {
    dispatch(updateDiscountFailure());
  }
};

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

// DELETE DISCOUNT
export const deleteDiscount = async (id, dispatch) => {
  dispatch(deleteDiscountStart());
  try {
    const res = await userRequest.delete(`/carts/discount/${id}`);
    dispatch(deleteDiscountSuccess(id));
  } catch (err) {
    dispatch(deleteDiscountFailure());
  }
};