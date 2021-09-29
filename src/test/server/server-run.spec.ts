import chai from "chai"
import chaiHtpp from "chai-http"
import { expect } from "chai"
import { usersApp } from '../../app'
chai.use(chaiHtpp)

describe("Server Checks for Users Application", () : void => {
    it("Server Instantiation without Errors", (done) : void => {
        chai.request(usersApp)
            .get('/')
            .end((err : any , res : any ) => {
                expect(res.status).to.be.equal(200);
                done();
            })
    })
})