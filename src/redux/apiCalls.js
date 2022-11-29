import { loginFailure, loginStart, loginSuccess, editUserStart, editUserSuccess, editUserFailure } from "./userRedux"
import { publicRequest } from "../requestMethods"

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user)
    dispatch(loginSuccess(res.data))
  } catch(err) {
    dispatch(loginFailure())
  }
}

export const updateAddress = (userId, address) => async (dispatch) => {
  dispatch(editUserStart());
  try {
    const res = await publicRequest.post(`/users/${userId}/edit-address`, address)
    dispatch(editUserSuccess(res.data))
  } catch (err) {
    dispatch(editUserFailure())
  }
}