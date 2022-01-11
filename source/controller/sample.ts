import {Request,Response,NextFunction} from 'express';

const serverCheck = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
        message: 'utkarsh'
    });
};

export default { serverCheck };