
import React from 'react';
import { useContext, useEffect, useState } from 'react';

import { Box } from '@mui/material';
import ChatHeader from './ChatHeader';
import Messages from './Messages';

import { AccountContext } from '../../../context/AccountProvider';

import { getConversation } from '../../../service/api';

function ChatBox() {

    const { person, account } = useContext(AccountContext);

    const [conversation, setConversation] = useState({});

    useEffect(() => {
        // API Call
        getConversation({ senderId: account.sub, recieverId: person.sub }).then((data) => {
            setConversation(data);
        })
    }, [person.sub]);

    return (
        <>
            <Box style={{ height: '75%' }}>
                <ChatHeader person={person} />
                <Messages person={person} conversation={conversation} />
            </Box>
            <Box>

            </Box>
            <Box>

            </Box>
        </>
    )
}

export default ChatBox;