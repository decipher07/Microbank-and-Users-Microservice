import { Request, Response, Router } from 'express'

const router : Router = Router();

import bankDatabase from '../database/bankdetails.json'

interface bankInterface {
    type : string, 
    balance : number,
    usersid : number
}

router.get('/', ( req : Request, res : Response ) : Response => {
    return res.status(200).send("Bank Service Running Successfully.........")
})

router.get('/:usersBankId' , ( req : Request, res : Response ) : Response => {
    let usersBankId : string = req.params.usersBankId ; 

    if ( usersBankId == 'all' )
        return res.status(200).send(bankDatabase);
    
    let database : bankInterface[] = bankDatabase ;

        
    let blogs : bankInterface[] = database.filter((document) => document.usersid == parseInt(usersBankId) );
    
    if ( blogs.length == 0 )
        return res.status(303).send("No Bank Details for The Given User!");

    return res.status(200).json({ "Message" : "The Below is the Bank Detail of the User ", "blogs" : blogs });
})

export default router ;