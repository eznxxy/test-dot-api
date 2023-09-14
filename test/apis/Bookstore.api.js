const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

class Bookstore {
    constructor() {

    }

    async addListOfBooks(token, payload) {
        const response = await chai.request(browser.options.baseUrl).post('/BookStore/v1/Books')
            .auth(token, { type: 'bearer' })
            .send(payload)

        return response
    }

    async clearListOfBooks(token) {
        const response = await chai.request(browser.options.baseUrl).delete('/BookStore/v1/Books')
            .auth(token, { type: 'bearer' })
            .query({ UserId: '4d43b9de-bb67-4fa0-9402-5fde3e61ac7d' })

        return response
    }
}

module.exports = new Bookstore()