import { MESSAGES } from "./stores.js";
import Message from "./Message.js";

class StoreManager {
    static addMessage(text, isUser = true, time) {
        const newMessage = new Message(text, isUser, time);
        MESSAGES.update(messages => [...messages, newMessage]);
    }

    static removeMessage(removeMessage) {
        MESSAGES.update(messages => messages.filter(message => {
            return message.time.toISOString() !== removeMessage.time.toISOString()
        }));
    }

}

export default StoreManager;