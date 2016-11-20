import {Message} from "./message.model";
/**
 * Created by Mike on 20-11-2016.
 */
export class MessageService {
    private messages: Message[] = [];

    addMessage(message: Message) {
        this.messages.push(message);
        console.log(this.messages);
    }

    getMessages() {
        return this.messages;
    }

    deleteMessage(message: Message){
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}