import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUserById,
  login,
  singup,
  updateUser,
} from "../controllers/user-controller";

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/signup", singup);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
userRouter.post("/login", login);

export default userRouter;

