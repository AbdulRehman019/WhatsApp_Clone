
import React  from 'react';
import { useContext, useState, useEffect, useRef } from 'react';
import { Box, styled } from '@mui/material';

import { AccountContext } from '../../../context/AccountProvider';
import { getMessage, newMessage } from '../../../service/api';
import Message from './Message';

import Footer from './Footer';
// import { IncomingMessage } from 'http';

const Wrapper = styled(Box)`
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;
`

const Component = styled(Box)`
    height: 80vh;
    overflow-y: scroll;
`

const Container = styled(Box)`
    padding: 1px 80px;
`

function Messages({ person, conversation }) {

    const { account, socket, newMessageFlag, setNewMessageFlag } = useContext(AccountContext);
    const [value, setValue] = useState('');

    const [messages, setMessages] = useState([]);

    const [file, setFile] = useState();
    const [image, setImage] = useState('');
    const [incomingMessage, setIncomingMessage] = useState(null);

    const scrollRef = useRef();

    useEffect(() => {
        socket.current.on('getMessage', data => {
            console.log("Setting incomingMessage");
            setIncomingMessage({
                ...data,
                createdAt: Date.now()
            })
        })
    }, [])

    useEffect(() => {
        getMessage(conversation._id).then((data) => {
            setMessages(data);
        })
    }, [person._id, conversation._id, newMessageFlag]);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ transition: 'smooth' })
    }, [messages]);

    useEffect(() => {
        console.log("Recieving Message");
        incomingMessage && conversation?.members?.includes(incomingMessage.senderId) && 
            setMessages(prev => [...prev, incomingMessage])
    }, [incomingMessage, conversation])

    function sendText(e) {
        const code = e.keyCode || e.which;
        if(code === 13) {
            let message = {};
            if(!file) {
                message = {
                    senderId: account.sub,
                    recieverId: person.sub,
                    conversationId: conversation._id,
                    type: 'text',
                    text: value
                }
            }
            else {
                message = {
                    senderId: account.sub,
                    recieverId: person.sub,
                    conversationId: conversation._id,
                    type: 'file',
                    text: image
                }
            }

            socket.current.emit('sendMessage', message);

            newMessage(message);
            setValue('');
            setFile('');
            setImage('');
            setNewMessageFlag(prev => !prev);
        }
    }

    return (
        <>
        <Wrapper>
            <Component>
                {
                    messages && messages.map((message) => {
                        return (
                            <Container ref={scrollRef}>
                                <Message message={message} />
                            </Container>
                        )
                    })
                }
            </Component>
            <Footer 
                sendText={sendText}
                setValue={setValue}
                value={value}
                file={file}
                setFile={setFile}
                setImage={setImage}
            />
        </Wrapper>
        </>
    ) 
}

export default Messages;
















// "scripts": {
//     "start": "react-scripts --openssl-legacy-provider start",
//     "build": "react-scripts build",
//     "test": "react-scripts test",
//     "eject": "react-scripts eject"
//   }