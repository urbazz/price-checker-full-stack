import express, {NextFunction, Request, Response} from "express";
import { Product } from "../models/models";
import { ApiError } from "../error/apiError";

class ProductController {

    async create(
        req: Request, 
        res: Response,
        next: NextFunction
    ) {
        try {
            const {name, price, typeId, info} = req.body;
            const product = await Product.create({name, price, typeId})
            return res.json(product);
        } catch (e: any) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(
        req: Request, 
        res: Response
    ) {
        let {typeId, limit, currentPage} = req.query;
        currentPage = currentPage || '1';
        limit = limit || '9';

        let offset = Number(currentPage) * Number(limit) - Number(limit);
        let products;

        if(!typeId) {
            products = Product.findAndCountAll({limit: Number(limit), offset})
        } 

        if (typeId) {
            products = Product.findAndCountAll({where: {typeId}, limit: Number(limit), offset})
        }

        return res.json(products);
    }

    
    async getOne(
        req: Request, 
        res: Response
    ) {
        
    }

    async delete(
    ) {

    }

}

export default new ProductController()