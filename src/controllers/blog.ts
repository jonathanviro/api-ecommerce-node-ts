import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getBlog = (req: Request, res: Response) => {
    try {

    } catch (e) { 
        handleHttp(res, 'ERROR_GET_BLOG');
    };
};

const getBlogs = (req: Request, res: Response) => {
    try {
    } catch (e) {
        handleHttp(res, 'ERROR_GET_BLOGS');
    }
};

const createBlog = (req: Request, res: Response) => {
    try {
        const { body } = req;
        res.send(body);
    } catch (e) {
        handleHttp(res, 'ERROR_CREATE_BLOG');
    }
};

const updateBlog = (req: Request, res: Response) => {
    try {
    } catch (e) {
        handleHttp(res, 'ERROR_UDATE_BLOG');
    }
};

const deleteBlog = (req: Request, res: Response) => {
    try {
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_BLOG');
    }
};

export { getBlog, getBlogs, createBlog, updateBlog, deleteBlog };