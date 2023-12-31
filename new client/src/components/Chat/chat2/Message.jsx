
import React  from 'react';
import { useContext } from "react";
import { Box, Typography, styled } from "@mui/material";

import { formatDate, downloadMedia } from "../../../utils/common-utils";

import { AccountContext } from "../../../context/AccountProvider";
import GetAppIcon from '@mui/icons-material/GetApp';
import { iconPDF } from '../../../allconstants/data';

const OwnBox = styled(Box)`
    background: #dcf8c6;
    max-width: 60%;
    margin-left: auto;
    padding: 5px;
    width: fit-content;
    display: flex;
    border-radius: 10px;
    word-break: break-word; 
`

const WrapperBox = styled(Box)`
    background: #FFFFFF;
    max-width: 60%;
    padding: 5px;
    width: fit-content;
    display: flex;
    border-radius: 10px;
    word-break: break-word; 
`

const StyledText = styled(Typography)`
    font-size: 14px;
    padding: 0 25px 0 5px;
`

const StyledTime = styled(Typography)`
    font-size: 10px;
    color: #919191;
    word-break: keep-all;
    margin-top: auto;
`

function Message({ message }) {

    const { account } = useContext(AccountContext);

    return (
        <>
            {
                account.sub === message.senderId ?
                    <OwnBox>
                        {
                            message.type === 'file' ? <ImageMessage message={message} /> : <TextMessage message={message} />
                        }
                    </OwnBox>
                    :
                    <WrapperBox>
                        {
                            message.type === 'file' ? <ImageMessage message={message} /> : <TextMessage message={message} />
                        }
                    </WrapperBox>
            }
        </>
    )
}

const ImageMessage = ({ message }) => {
    return (
        <Box style={{ position: 'relative' }}>
            {
                message?.text?.includes('.pdf') ?
                    <Box style={{ display: 'flex' }}>
                        <img src={iconPDF} alt="pdf" style={{ width: '80px' }} />
                        <Typography style={{ fontSize: 14 }}>{message.text.split('/').pop()}</Typography>
                    </Box>
                    :
                    <img style={{ width: 300, height: '100%', objectFit: 'cover' }} src={message.text} alt={message.text} />
            }

            <StyledTime style={{ position: 'absolute', bottom: 0, right: 0 }}>
                <GetAppIcon
                    onClick={(e) => downloadMedia(e, message.text)}
                    style={{ marginRight: 10, border: '1px solid grey', borderRadius: '50%' }}
                    fontSize="small"
                />
                {formatDate(message.createdAt)}</StyledTime>
        </Box>

    )
}

const TextMessage = ({ message }) => {
    return (
        <>
            <StyledText>{message.text}</StyledText>
            <StyledTime>{formatDate(message.createdAt)}</StyledTime>
        </>
    )
}

export default Message;