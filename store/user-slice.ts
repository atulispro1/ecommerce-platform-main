import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { IUser, IUserInfo } from "../lib/types/user";

function readUserInfoCookie() {
  const rawUserInfo = Cookies.get("userInfo");

  if (!rawUserInfo) {
    return null;
  }

  try {
    return JSON.parse(rawUserInfo);
  } catch {
    Cookies.remove("userInfo");
    return null;
  }
}

const initialState: IUserInfo = {
  userInformation: readUserInfoCookie(),
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    userLogin(state, action: PayloadAction<IUser>) {
      state.userInformation = action.payload;
    },
    userLogout(state) {
      state.userInformation = null;
    },
  },
});
export const userInfoActions = userInfoSlice.actions;

export default userInfoSlice.reducer;
