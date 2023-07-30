
import { React, useState, useContext } from "react";
import { Box, Typography, Dialog, styled, Divider } from '@mui/material';

import { AccountContext } from "../../context/AccountProvider";

// Components
import Menu from "./menu/Menu";
import EmptyChat from "./chat2/EmptyChat";
import ChatBox from "./chat2/ChatBox";

const Component = styled(Box)`
    display: flex;
    margin-top: 0;
`

const LeftComponent = styled(Box)`
    min-width: 450px;
    margin-top: 0px;
`

const RightComponent = styled(Box)`
    flex: 1;
    margin-top: 0px;
    min-width: 300px;
    height: 100%,
    border-left: 1px solid rgba(0, 0, 0, 0.14);
`

const StyledDivider = styled(Divider)`
    height: 100vh;
    background: #999999;
`

const dialogStyle = {
    height: '95%',
    width: "100%",
    margin: "20px",
    borderRadius: "none",
    maxWidth: "100%",
    maxHeight: "100%",
    boxShadow: "none",
    overflow: "hidden",
    backgroundColor: "none"
}

function ChatDialogue() {

    const { person } = useContext(AccountContext);

    return (
        <Dialog
            open={true}
            PaperProps={{ sx: dialogStyle }}
            hideBackdrop={true}
            maxWidth={'md'}
        >

            <Component>
                <LeftComponent>
                    <Menu />
                </LeftComponent>
                <StyledDivider orientation="vertical" flexItem />
                <RightComponent>
                    {Object.keys(person).length ? <ChatBox /> : <EmptyChat />}
                </RightComponent>
            </Component>
        </Dialog>
    )
}

export default ChatDialogue;