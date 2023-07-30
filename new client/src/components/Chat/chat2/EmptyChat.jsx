
import React  from 'react';
import { Box, Typography, styled, Divider } from "@mui/material";
import { emptyChatImage } from "../../../allconstants/data";

const BoxComponent = styled(Box)`
    background: f8f9fa;
    text-align: center;
    padding: 30px 0;
    height: 100%;
`
const BoxContainer = styled(Box)`
    padding: 0 200px;
`

const ChatImage = styled('img')({
    width: 400,
    marginTop: 100
})

const WhatsAppTitle = styled(Typography)`
    font-size: 32px;
    margin: 25px 0 10px 0;
    font-family: inherit;
    font-weight: 300;
    color: #41525d;
`

const WhatsAppSubTitle = styled(Typography)`
    font-size: 14px;
    color: #667781;
    font-weight: 400;
    font-family: inherit;
`

const StyledDivider2 = styled(Divider)`
    margin: 40px 0;
    opacity: 0.4;
`

function EmptyChat() {
    return (
        <BoxComponent>
            <BoxContainer>
                <ChatImage src={emptyChatImage} alt="image" />
                <WhatsAppTitle>WhatsApp Web</WhatsAppTitle>
                <WhatsAppSubTitle>Send and receive messages without keeping your phone online.</WhatsAppSubTitle>
                <WhatsAppSubTitle>Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</WhatsAppSubTitle>
                <StyledDivider2 />
            </BoxContainer>
        </BoxComponent>
    )
}

export default EmptyChat;