import {Router} from 'express';
const router: Router = Router();
import { signin, signup} from '../controllers/auth.controller';

//definition of routes
 router.post('/signup', signup); 
 router.post('/signin', signin);

export default router;
