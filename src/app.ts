import express, { Request, Response, NextFunction, Express} from "express"
import bankRoutes from './routers/bank.routes'

const bankPort : number = 3001 

const bankApp : Express = express();

bankApp.use('/bank', bankRoutes);

bankApp.get('/', ( req : Request , res : Response ) :  Response => {
    return res.status(200).json({"message" : " Bank Base Working Fine "})
})

bankApp.listen(bankPort, () : void => {
    console.log(`Server For Banks Port Running at : ${bankPort}`);
})

export { bankApp }