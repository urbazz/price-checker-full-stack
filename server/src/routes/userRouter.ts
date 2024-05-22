import { Router } from "express";
import UserController from "../controllers/UserController";

const userRouter = Router();

userRouter.post('/registration', UserController.registration);
userRouter.post('/login', UserController.login);
userRouter.get('/auth', UserController.checkLogin);

export {
    userRouter
}
