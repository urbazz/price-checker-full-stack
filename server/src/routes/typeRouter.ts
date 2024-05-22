import { Router } from "express";
import TypeController from "../controllers/TypeController";

const typeRouter = Router();

typeRouter.post('/', TypeController.create);
typeRouter.get('/', TypeController.getAll);
typeRouter.delete('/', TypeController.delete);

export {
    typeRouter
}