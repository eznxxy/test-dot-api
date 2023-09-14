const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

class Account {
    constructor() {

    }

    async register(payload) {
        const response = await chai.request(browser.options.baseUrl).post('/Account/v1/User').send(payload)
        return response
    }

    async login(payload) {
        const response = await chai.request(browser.options.baseUrl).post('/Account/v1/GenerateToken').send(payload)
        return response
    }
}

module.exports = new Account()