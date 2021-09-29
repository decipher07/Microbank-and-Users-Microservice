import chai from "chai"
import chaiHtpp from "chai-http"
import { expect } from "chai"
import { usersApp } from '../../app'
chai.use(chaiHtpp);

describe("Check : Users Service ", () : void => {
    
    it ("Users Service Base Url Checking", (done) : void => {       
        chai.request(usersApp)
            .get('/user/')
            .end((err : any , res : any ) => {
                expect(res.status).to.be.equal(200);
                done();
            })
    })
    
    it ("Users Service Database with ID", (done) : void => {       
        chai.request(usersApp)
            .get('/user/1')
            .end((err : any , res : any ) => {
                expect(res.status).to.be.equal(200);
                done();
            })
    })

    it ("Users Microservice Being linked to Banks Microservice", (done) : void => {       
        chai.request(usersApp)
            .get('/user/account-details/Deepankar')
            .end((err : any , res : any ) => {
                expect(res.status).to.be.equal(201);
                done();
            })
    })
})
