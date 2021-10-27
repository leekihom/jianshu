class BaseModel {
    constructor(data, Message) {
        if(typeof data === 'string') {
            this.Message = data
            data = null
            Message = null
        }
        if(data) {
            this.data = data
        }
        if(Message) {
            this.Message = Message
        }
    }
}

class SuccessModel extends BaseModel {
    constructor(data, Message) {
        super(data, Message)
        this.code = 0
    }
}

class ErrorModel extends BaseModel {
    constructor(data, Message) {
        super(data, Message)
        this.code = -1
    }
}
module.exports = {
    SuccessModel,
    ErrorModel
}