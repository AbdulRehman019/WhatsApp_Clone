
import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { Box, Divider, Typography, styled } from '@mui/material';
import { setConversation, getConversation } from '../../../service/api';

import { AccountContext } from '../../../context/AccountProvider';

import { formatDate } from '../../../utils/common-utils';

const Component = styled(Box)`
    display: flex;
    height: 45px;
    padding: 13px 0;
    cursor: pointer;
`

const StyledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background-color: #e9edef;
    opacity: 0.6;
`

const Container = styled(Box)`
    display: flex;
`

const TimeStamp = styled(Typography)`
    font-size: 12px;
    margin-left: auto;
    color: #00000099;
    margin-right: 20px;
`

const Text = styled(Typography)`
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
`

const Image = styled('img')({
    width: 50,
    height: 50,
    borderRadius: '50%',
    padding: '0 14px'
})

function Conversation({ user }) {

    const { setPerson, account, newMessageFlag, setNewMessageFlag } = useContext(AccountContext);

    const [message, setMessage] = useState({});

    useEffect(() => {
        getConversation({ senderId: account.sub, recieverId: user.sub }).then((data) => {
            setMessage({ text: data?.message, timeStamp: data?.updatedAt })
        })
    })

    function getUser() {
        setPerson(user);
        // Creating API
        setConversation({ senderId: account.sub, recieverId: user.sub });
    }

    return (
        <>
            <Component onClick={getUser}>
                <Box>
                    <Image src={user.picture} alt="dp" />
                </Box>
                <Box style={{ width: '100%' }}>
                    <Container>
                        <Typography>{user.name}</Typography>
                        {
                            message?.text &&
                            <TimeStamp>{formatDate(message?.timeStamp)}</TimeStamp>
                        }
                    </Container>

                    <Box>
                        <Text>{message?.text?.includes('localhost') ? 'media' : message.text}</Text>
                    </Box>
                </Box>
            </Component>
            <StyledDivider />
        </>
    );
}

export default Conversation;