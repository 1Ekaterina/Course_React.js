import CHANGE_NAME from "../store/types/profileTypes";

export const setName = (name) => ({
  type: CHANGE_NAME,
  payload: name,
});
