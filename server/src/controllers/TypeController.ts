import express from "express";
import {Type} from '../models/models';
import { ApiError } from "../error/apiError";
import { Request, Response } from "express";

class TypeController {

    async create(req: Request, res: Response) {
        const {name} = req.body;
        const type = await Type.create({name})
        return res.json(type);

    }

    async getAll(req: Request, res: Response) {
        const types = await Type.findAll();
        return res.json(types);
    }

    async delete(req: Request, res: Response) {

    }

}

export default new TypeController()