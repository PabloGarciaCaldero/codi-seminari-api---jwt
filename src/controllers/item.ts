import {Request, Response} from "express";
import { handleHttp } from "../utils/error.handle";
import { insertCar, getCars, getCar, updateCar, deleteCar } from "../services/item";

const getItem = async (req:Request, res:Response) => {
    try{
        const {id} = req.params;
        const response = await getCar(id);
        res.send(response);
    } catch(e){
        handleHttp(res, `ERROR_GET_ITEM`);
    } 
}

const getItems = async (req:Request, res:Response) => {
    try{
        const response = await getCars();
        res.send(response);
    } catch(e){
        handleHttp(res, `ERROR_GET_ITEMS`);
    }
}

const updateItem = async ({params, body}: Request, res:Response) => {
    try{
        const {id} = params
        const response = await updateCar(id, body)
    } catch(e){
        handleHttp(res, `ERROR_UPDATE_ITEM`);
    }
}

const postItem = async ({body}:Request, res:Response) => {
    try{
        const responseItem = await insertCar(body)
        res.send(body);
    } catch(e){
        handleHttp(res, `ERROR_POST_ITEM`, e);
    }
}

const deleteItem =(req:Request, res:Response) => {
    try{
    } catch(e){
        handleHttp(res, `ERROR_DELETE_ITEM`);
    }
}



export { getItem, getItems, postItem, updateItem, deleteItem};