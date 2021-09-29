import express, { Request, Response, NextFunction, Express} from "express"
import usersRoutes from './routers/users.routes'
import bankRoutes from './routers/bank.routes'

const usersPort : number = 3000 
const bankPort : number = 3001 

const usersApp : Express = express();
const bankApp : Express = express();

usersApp.use('/user', usersRoutes );
bankApp.use('/bank', bankRoutes);

usersApp.get('/', ( req : Request , res : Response ) :  Response => {
    return res.status(200).json({"message" : " User Base Working Fine "})
})

// bankApp.get('/', ( req : Request , res : Response ) :  Response => {
//     return res.status(200).json({"message" : " Bank Base Working Fine "})
// })

usersApp.listen(usersPort, () : void => {
    console.log(`Server For Users Port Running at : ${usersPort}`);
})

// bankApp.listen(bankPort, () : void => {
//     console.log(`Server For Banks Port Running at : ${bankPort}`);
// })

export { usersApp }