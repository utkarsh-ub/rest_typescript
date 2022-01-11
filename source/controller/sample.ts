import {Request,Response,NextFunction} from 'express';
import { v4 as uuidv4 } from 'uuid';

var users=[{}
    // {
    //     firstName:"Utkarsh",
    //     lastName:"Bhaskar",
    //     age:20
    // },
    // {
    //     firstName:"Vishal",
    //     lastName:"Choudhary",
    //     age:23
    // },
    // {
    //     firstName:"John",
    //     lastName:"Doe",
    //     age:24
    // },
    // {
    //     firstName:"Varsha",
    //     lastName:"Kaushal",
    //     age:19
    // }
]

const serverCheck = (req: Request, res: Response, next: NextFunction) => {
    // return res.status(200).json({
    //     users
    // });
    return res.status(200).send(users);
};

const adding=(req: Request, res: Response, next: NextFunction)=>{
    
    const input=req.body;
    const userId=uuidv4();
    const uid={...input,id:userId};

    users.push(uid);

    res.send(`User with the name: ${input.firstName} is added`);
};


export default { serverCheck, adding };




