
import Conversation from "../model/Conversation.js";

function newConversation(request, response) {
    try {
        const senderId = request.body.senderId;
        const recieverId = request.body.recieverId;

        Conversation.findOne({ members: { $all: [recieverId, senderId] } }).then((result) => {
            if(result != null) {
                return response.status(200).json('Conversation already exist');
            }

            const newConnversation = new Conversation({
                members: [senderId, recieverId]
            })

            newConnversation.save();
            return response.status(200).json('Conversation saved successfully');
        })
    }
    catch(error) {
        return response.status(500).json(error.message);
    }
}

function getConversation(request, response) {
    try {
        const senderId = request.body.senderId;
        const recieverId = request.body.recieverId;

        Conversation.findOne({ members: { $all: [recieverId, senderId] } }).then((result) => {
            return response.status(200).json(result);
        })
    }
    catch(error) {
        return response.statusconsole.log(error);
    }
}

export default newConversation;
export { getConversation };