import chai from "chai"
import chaiHtpp from "chai-http"
import { expect } from "chai"
import { bankApp } from '../../app'
chai.use(chaiHtpp);

describe("Check : Bank Service ", () : void => {
    
    it ("Banker Service Base Url Checking", (done) : void => {       
        chai.request(bankApp)
            .get('/bank/')
            .end((err : any , res : any ) => {
                expect(res.status).to.be.equal(200);
                done();
            })
    })
    
    it ("Banker Service Database with ID", (done) : void => {       
        chai.request(bankApp)
            .get('/bank/1')
            .end((err : any , res : any ) => {
                expect(res.status).to.be.equal(200);
                done();
            })
    })
})