import { Response } from "express";

const handleHttp = (res: Response, error: string, errorRaw?: any) => {
    console.log(errorRaw);
    res.status(500);
    res.send({ error });
    //Aqui podemos crear una funcion para que cree un txt o cualquier servicio de log
};

export { handleHttp };

