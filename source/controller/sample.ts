import {Request,Response,NextFunction} from 'express';
import { v4 as uuidv4 } from 'uuid';

var users:any=[
    {
        firstName: "Stock",
        lastName: "Edge",
        age: 6,
        id: "9c338ea5-35c7-40f8-9869-45194484dda1"
        },
        {
        firstName: "Utkarsh",
        lastName: "Bhaskar",
        age: 20,
        id: "a9d5484e-1839-4bfc-bff7-001bea70bf0c"
        },
        {
        firstName: "Vk",
        lastName: "Vibes",
        age: 40,
        id: "9e386786-a68a-4cd4-bd91-338b8b0c5b48"
        }
]

var posts:any=[
    {
        title: "Adventures of rusty",
        body: "tjuigusirughisrfhjifhjrihjdirjuhdihjuidfuhjidr",
        pid: "9dc1e5dd-b374-4f5d-b91c-7b528414ca07",
        id: "9c338ea5-35c7-40f8-9869-45194484dda1"
        },
        {
        title: "Conjuring",
        body: "fyhsdbuhydguca tuyrtyrtuyrugtaeyru tyrtu",
        pid: "5eabe3a0-97e2-408c-bf2d-96d435f6eb2e",
        id: "9c338ea5-35c7-40f8-9869-45194484dda1"
        },
        {
        title: "Harry Potter",
        body: "giusfdguifdgufdsughfdguhofsuhgdf",
        pid: "a28b397e-298c-451f-b5c3-7900839d120c",
        id: "9c338ea5-35c7-40f8-9869-45194484dda1"
        },
        {
        title: "abc",
        body: "hdhwiuehiuheiufdhjeiuhjiwjfjwijf",
        pid: "f7ce5dfc-d405-4f27-85c4-774486de8eff",
        id: "a9d5484e-1839-4bfc-bff7-001bea70bf0c"
        },
        {
        title: "pqr",
        body: "hiufuhfuhrufhuiehfuierjfi3e",
        pid: "1ac0fe31-e96b-4571-bfa6-a49b4dea75a8",
        id: "a9d5484e-1839-4bfc-bff7-001bea70bf0c"
        },
        {
        title: "vampire diaries",
        body: "hiufuhfuhrufhe",
        pid: "20c39ad9-4b2d-49b1-b3f5-52f8c6ba46c1",
        id: "9e386786-a68a-4cd4-bd91-338b8b0c5b48"
        }
]




//User Api's

const viewAll = (req: Request, res: Response, next: NextFunction) => {
    
    return res.status(200).send(users);
};

const addUser=(req: Request, res: Response, next: NextFunction)=>{
    
    const input=req.body;
    const userId=uuidv4();
    const uid={...input,id:userId};

    users.push(uid);

    res.send(`User with the name: ${input.firstName} is added`);
};

const findUser=(req: Request, res: Response, next: NextFunction)=>{
    
    const {id}=req.params;

    const foundUser=users.find((input:any) => input.id == id);

    res.send(foundUser);

};


const deleteUser=(req: Request, res: Response, next: NextFunction)=>{
    
    const {id}=req.params;

    users=users.filter((input:any)=>input.id!=id);

    res.send(`User with the id ${id} deleted from database`);

};


const updateUser=(req: Request, res: Response, next: NextFunction)=>{
    
    const {id}=req.params;
    const {firstName,lastName,age}=req.body;
    const user=users.find((input:any)=>input.id==id);

    if(firstName)user.firstName=firstName;
    if(lastName)user.lastName=lastName;
    if(age)user.age=age;

    res.send(`user with the id ${id} has been updated`);

};






// Posts Api's


const viewPost = (req: Request, res: Response, next: NextFunction) => {

    return res.status(200).send(posts);
};

const addPost=(req: Request, res: Response, next: NextFunction)=>{
    
    const {id}=req.params;
    const input=req.body;
    const postId=uuidv4();

    const uid={...input,pid:postId,id};
    posts.push(uid);

    res.send(`Post with the title: ${input.title} is added`);

};

const findPost=(req: Request, res: Response, next: NextFunction)=>{
    
    const {pid}=req.params;

    const foundPost=posts.find((input:any) => input.pid == pid);

    res.send(foundPost);

};

const deletePost=(req: Request, res: Response, next: NextFunction)=>{
    
    const {pid}=req.params;

    posts=posts.filter((input:any)=>input.pid!=pid);

    res.send(`Post with the post id ${pid} deleted from database`);

};



export default { viewAll, addUser, findUser, deleteUser, addPost, viewPost, updateUser, findPost, deletePost};




