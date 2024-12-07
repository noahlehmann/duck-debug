import StoreManager from "./StoreManager.js";

class ChatManager {

    static processMessage(text, isUser, time) {
        StoreManager.addMessage(text, isUser, time);
        if (isUser === true) {
            ChatManager.generateAnswer();
        }
    }

    static generateAnswer() {
        StoreManager.addMessage("Quack.", false, new Date());
    }
}

export default ChatManager;