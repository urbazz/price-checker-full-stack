import express from "express";
import { ApiError } from "../error/apiError";

class UserController {

    async registration(req: express.Request, res: express.Response) {

    }

    async login(req: express.Request, res: express.Response) {
        
    }

    async checkLogin(req: express.Request, res: express.Response, next: (arg0: ApiError) => any) {
        const {id} = req.query;
         if(!id) {
            return next(ApiError.badRequest('Не задан ID!!!'))
         }
    }

    async delete(req: express.Request, res: express.Response) {

    }

}

export default new UserController()