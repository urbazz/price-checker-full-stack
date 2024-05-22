import { Router } from "express";
import { productRouter } from "./productRouter";
import { typeRouter } from "./typeRouter";
import { userRouter } from "./userRouter";

const router = Router();

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/product', productRouter);

export {
    router
};