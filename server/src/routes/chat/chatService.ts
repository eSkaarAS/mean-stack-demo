import chatRepository from "./chatRepository";

class ChatService {
  public async getMessages() {
    const messages = chatRepository.getMessages();
    return messages;
  }
}

const chatService = new ChatService();

export default chatService;
