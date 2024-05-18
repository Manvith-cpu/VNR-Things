import  express from 'express';
import {verifyToken}from '../utils/verifyUser.js'

const router=express.router();

router.post('/create',verifyToken,create);

export default router;