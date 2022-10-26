import { Request, Response } from 'express';
import User, {IUser} from '../model/User';

export const signup = async (req: Request, res: Response) => {

    const user: IUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    user.password = await user.encryptPassword(user.password);
    const savedUser = await user.save();
    console.log('has sido REGISTRADO CON EXITO')
    console.log(savedUser)
};

export const signin = async (req: Request, res: Response) => {
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).json('Email is wrong!');

    const correctPassword: boolean = await user.validatePassword(req.body.password);
    if(!correctPassword) return res.status(400).json('Ivalid password');

    console.log('has sido LOGUEADO con EXITO')

};


