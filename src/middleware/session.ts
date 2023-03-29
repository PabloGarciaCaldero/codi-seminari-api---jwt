import { NextFunction, Request, Response } from "express"
import { verified } from "../utils/bcrypt.handle";
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request {
    user?: string | JwtPayload;
}

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {

    try{

        const jwtByUser = req.headers.authorization || "";
        const jwt = jwtByUser.split(" ").pop();
        const isUser = verifyToken(`${jwt}`)
        console.log(isUser);
        if(!isUser){
            res.status(401);
            res.send("NO_TIENES_UN_JWT_VALIDO");
        }else{
            req.user = isUser;
            console.log({jwtByUser});
            next()
        }
    } catch(e){
        console.log({e});
        res.status(400);
        res.send("SESSION_NO_VALIDA");
    }

}


const adminCheck = (req: RequestExt, res: Response, next: NextFunction) => {
    try {
      const jwtByUser = req.headers.authorization || "";
      const jwt = jwtByUser.split(" ").pop(); // 11111
      const isUser = verifyToken(`${jwt}`) as unknown as { email: string, role: string };
      if (!isUser) {
        res.status(401);
        res.send("NO_TIENES_UN_JWT_VALIDO");
      } 
      if (isUser.role != 'admin'){
        res.status(401);
        res.send("UNAUTHORIZED");
      } 
      else {
        req.user = isUser;
        next();
      }
    } catch (e) {
      console.log({ e });
      res.status(400);
      res.send("SESSION_NO_VALIDA");
    }
  };

export {checkJwt, adminCheck}