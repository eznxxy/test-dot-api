const scenarios = [
    {
        case: {
            title: 'Success add list of books',
            status: 201
        },
        payload: {
            "collectionOfIsbns": [
                {
                    "isbn": "9781449325862"
                }
            ]
        },
        schema: {
            "$schema": "http://json-schema.org/draft-06/schema#",
            "$ref": "#/definitions/Welcome4",
            "definitions": {
                "Welcome4": {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                        "books": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/Book"
                            }
                        }
                    },
                    "required": [
                        "books"
                    ],
                    "title": "Welcome4"
                },
                "Book": {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                        "isbn": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "isbn"
                    ],
                    "title": "Book"
                }
            }
        }
    },
    {
        case: {
            title: 'Error duplicate ISBN',
            status: 400
        },
        payload: {
            "collectionOfIsbns": [
                {
                    "isbn": "9781449325862"
                }
            ]
        },
        schema: {
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
        }
    },
    {
        case: {
            title: 'Error wrong ISBN',
            status: 400
        },
        payload: {
            "collectionOfIsbns": [
                {
                    "isbn": "9781449325862"
                }
            ]
        },
        schema: {
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
        }
    },
]

module.exports = scenarios