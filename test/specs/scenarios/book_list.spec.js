const chai = require('chai');
const Account = require('../../apis/Account.api');
const Bookstore = require('../../apis/Bookstore.api');
const fs = require('fs');
const scenarios = require('../../../data/bookstore.data');
const TextGenerator = require('../../../helpers/TextGenerator');
chai.use(require('chai-json-schema'));

describe('BookStore', () => {
    const user = {
        "userName": TextGenerator.username(),
        "password": TextGenerator.password(16)
    }
    let bearer = ''
    let userId = ''

    before(async () => {
        const register = await Account.register(user)
        userId = register.body.userID

        const login = await Account.login(user)
        bearer = login.body.token
    })

    scenarios.forEach(scenario => {
        it(scenario.case.title, async () => {
            const response = await Bookstore.addListOfBooks(bearer, { 'userId': userId, ...scenario.payload });

            expect(response.statusCode).to.be.equal(scenario.case.status)
            expect(response.body).to.be.jsonSchema(scenario.schema)
        })
    })

    it('Cant add list of books when not login yet', async () => {
        const response = await Bookstore.addListOfBooks('', {
            "userId": userId,
            "collectionOfIsbns": [
                {
                    "isbn": "9781449325862"
                }
            ]
        })

        expect(response.statusCode).to.be.equal(401)
        expect(response.body).to.be.jsonSchema({
            "$schema": "http://json-schema.org/draft-06/schema#",
            "$ref": "#/definitions/Welcome2",
            "definitions": {
                "Welcome2": {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                        "code": {
                            "type": "string",
                            "format": "integer"
                        },
                        "message": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "code",
                        "message"
                    ],
                    "title": "Welcome2"
                }
            }
        })
    })

    it('Success delete list of books', async () => {
        const response = await Bookstore.clearListOfBooks(bearer)
        expect(response.statusCode).to.be.equal(204)
        expect(response.body).to.be.jsonSchema({
            "$schema": "http://json-schema.org/draft-06/schema#",
            "$ref": "#/definitions/Welcome8",
            "definitions": {
                "Welcome8": {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                        "userId": {
                            "type": "string"
                        },
                        "message": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "message",
                        "userId"
                    ],
                    "title": "Welcome8"
                }
            }
        })
    })

    it('Cant Delete list of books when not login yet', async () => {
        const response = await Bookstore.clearListOfBooks()
        expect(response.statusCode).to.be.equal(401)
        expect(response.body).to.be.jsonSchema({
            "$schema": "http://json-schema.org/draft-06/schema#",
            "$ref": "#/definitions/Welcome2",
            "definitions": {
                "Welcome2": {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                        "code": {
                            "type": "string",
                            "format": "integer"
                        },
                        "message": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "code",
                        "message"
                    ],
                    "title": "Welcome2"
                }
            }
        })
    })

    after(() => {
        fs.appendFile(process.cwd() + "/log/registeredUser.txt", `a user has been created username:${user.userName} password:${user.password} \n`, function (err) {
            if (err) {
                return console.log(err);
            }
        })
    })
})