import { Request, Response, Router } from 'express'
import http from 'http'

const router : Router = Router();

import usersDatabase from '../database/users.json'

interface usersInterface {
    id : number,
    name : string, 
    profession : string, 
    location : string
}

router.get('/', ( req : Request, res : Response ) : Response => {
    return res.status(200).send("Users Service Running Successfully.........")
})

router.get('/:id', ( req: Request, res : Response ) : Response  => {
    let database : usersInterface[] = usersDatabase ;

    if ( req.params.id == 'all' )
        return res.send(database);

    let user : usersInterface[] = database.filter((document) => document.id == parseInt(req.params.id))
    
    if ( user.length == 0 )
        return res.status(403).send("Sorry No Details for the User Found");
    
    return res.send(user);
})

router.get('/account-details/:nameOfUser', async ( req : Request , res : Response ) : Promise < void > => {
    let name : string = req.params.nameOfUser ; 

    try {
        let database : usersInterface[] = usersDatabase ;
    
        let user : usersInterface[] = database.filter((document) => document.name == name)
    
        let url : string = `http://localhost:3001/bank/${user[0].id}`;
        
        let data = '';

        http.get(url, (resp) => {

                // A chunk of data has been received.
                resp.on('data', (chunk) => {
                    data += chunk;
                });

                // The whole response has been received. Print out the result.
                resp.on('end', () => {
                    JSON.parse(data);
                    res.status(201).send(data);
                });

            }).on("error", (err) => {
              res.status(403).send(err.message);  
        });

    } catch ( e : any ) {
        res.send(e);
    }
})

export default router ;