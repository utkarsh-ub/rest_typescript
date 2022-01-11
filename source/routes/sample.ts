import express from "express";    
import controller from "../controller/sample"   

const router=express.Router();


router.get('/ping',controller.serverCheck);

router.post('/ping',controller.adding);

export=router;

