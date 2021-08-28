import { userActionTypes } from "../../assets/data/user-types.data";

export const setCurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});
