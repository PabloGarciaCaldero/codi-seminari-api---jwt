import { NextFunction, Request, Response } from "express";

const logMiddleware = (req: Request, res:Response, next: NextFunction) => {
    console.log("Hola soy el log");
    const header = req.headers;
    const userAgent = header["user-agent"];
    console.log("User-Agent: ", userAgent);
    next();
};

export { logMiddleware };