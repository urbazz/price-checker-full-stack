import express, { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { ApiError } from "../error/apiError";

export function ErrorHandlingMiddleware(
    err: ErrorRequestHandler, 
    request: Request, 
    response: Response,
    next: NextFunction 
) {
    if(err instanceof ApiError ) {
        return response.status(err.status).json({message: err.message})
    }

    return response.status(500).json({message: "Возникла непредвиленная ошибка!"});
}