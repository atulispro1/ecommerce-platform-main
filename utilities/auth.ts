import jwt from "jsonwebtoken";
import { IUser } from "../lib/types/user";
import { getServerEnv } from "../lib/serverEnv";

export const signToken = (user: IUser) => {
  return jwt.sign(user, getServerEnv("JWT_SECRET"), {
    expiresIn: "30d",
  });
};
