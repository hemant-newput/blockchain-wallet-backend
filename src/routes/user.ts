import { Router } from 'express';
import { UserController } from '../controllers/userController';
import { response } from '../utils/responseUtil';


const router = Router();

router.post('/register', response(UserController.registerUser));

router.post('/login', response(UserController.login));

router.post('/get', response(UserController.getUsers));

router.post('/feed', response(UserController.prepareFeed));


export default router;






