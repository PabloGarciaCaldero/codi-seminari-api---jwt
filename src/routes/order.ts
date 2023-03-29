import { Router } from "express";
import { getItems } from "../controllers/order";
import { checkJwt, adminCheck } from "../middleware/session";

const router = Router();

router.get("/",adminCheck, checkJwt, getItems);

export { router };