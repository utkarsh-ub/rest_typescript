import express from "express";    
import controller from "../controller/sample"   

const router=express.Router();

router.post('/ping',controller.addUser);

router.get('/ping',controller.viewAll);

router.get('/ping/:id',controller.findUser);

router.delete('/ping/:id',controller.deleteUser);

router.patch('/ping/:id',controller.updateUser);

router.post('/ping/:id/posting',controller.addPost);

router.get('/ping/:id/posting',controller.viewPost);

router.get('/ping/:id/posting/:pid',controller.findPost);

router.delete('/ping/:id/posting/:pid',controller.deletePost);


export=router;

