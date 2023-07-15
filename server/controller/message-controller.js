
import Message from "../model/Message.js";
import Conversation from "../model/Conversation.js";

function addMessage(request, response) {
    try {
       const newMessage = new Message(request.body);
       newMessage.save();
       Conversation.findByIdAndUpdate(request.body.conversationId, { message: request.body.text }).then((result) => {});
       return response.status(200).json('Message has been sent successfully');
    }
    catch(error) {
        return response.status(500).json('Error while sending message');
    }
}

function getMessage(request, response) {
    try {
        Message.find({conversationId: request.params.id}).then((result) => {
            return response.status(200).json(result);
        })
    }
    catch(error) {
        return response.status(500).json('Error while retrieving message');
    }
}

export default addMessage;
export { getMessage };