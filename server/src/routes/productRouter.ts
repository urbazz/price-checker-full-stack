import { Router } from "express";
import ProductController from "../controllers/ProductController";

const productRouter = Router();

productRouter.post('/', ProductController.create);
productRouter.get('/', ProductController.getAll);
productRouter.get('/:id', ProductController.getOne);
// productRouter.delete('/:id', productRouter.delete);

export {
    productRouter
}