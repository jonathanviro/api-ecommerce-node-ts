import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { getCars, insertCar, getCar, updateCar, deleteCar } from '../services/item.service';

const getItem = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await getCar(id);
        res.send(response);
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEM');
    }
};

const getItems = async (req: Request, res: Response) => {
    try {
        const response = await getCars();
        res.send(response)
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEMS');
    }
};

const createItem = async ({ body }: Request, res: Response) => {
    try {
        const response = await insertCar(body);
        res.send(response);
    } catch (e) {
        handleHttp(res, 'ERROR_CREATE_ITEM', e);
    }
};

const updateItem = async ({ params, body } : Request, res: Response) => {
    try {
        const { id } = params;
        const response = await updateCar(id, body);
        res.send(response);
    } catch (e) {
        handleHttp(res, 'ERROR_UDATE_ITEM');
    }
};

const deleteItem = async ({ params } : Request, res: Response) => {
    try {
        const { id } = params;
        const response = await deleteCar(id);
        const data = response ? response : "NOT_FOUND"
        res.send(data);
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_ITEM');
    }
};

export { getItem, getItems, createItem, updateItem, deleteItem };