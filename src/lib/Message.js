class Message {

    constructor(text, isUser = true, time = Date.now()) {
        this.text = text;
        this.isUser = isUser;
        this.time = time;
    }
}

export default Message;