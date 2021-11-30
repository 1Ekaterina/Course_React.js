import { USER_LOGIN, USER_LOGOUT, USER_ERROR } from "../store/types/userTypes";

export const userLogin = (user) => ({
  type: USER_LOGIN,
  payload: { ...user },
});

export const userLogout = () => ({
  type: USER_LOGOUT,
});

export const userError = (err) => ({
  type: USER_ERROR,
  payload: err,
});

export const fetchUser = (user) => async (dispatch) => {
  const responce = await fetch("http://localhost:3001/auth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  if (responce.status == 400) {
    dispatch(userError("user not found"));
  } else {
    const data = await responce.json();
    dispatch(userLogin(data));
  }
};
