
import { React, useContext } from "react";

// Components
import LoginDialogue from "./loginaccount/LoginDialogue";
import { AppBar, Toolbar, Box, styled } from '@mui/material';
import ChatDialogue from "./Chat/ChatDialogue";

import { AccountContext } from "../context/AccountProvider";

const Component = styled(Box)`
    height: 100vh;
    background: #DCDCDC;
`

const Header = styled(AppBar)`
    height: 125px;
    background-color: #00A884;
    box-shadow: none;
`

const LoginHeader = styled(AppBar)`
    height: 220px;
    background-color: #00bfa5;
    box-shadow: none;
`


function Messenger() {

    const { account } = useContext(AccountContext);
    return (
        <Component>
        {
            account ? 
            <>
            <Header>
                <Toolbar>
                    
                </Toolbar>
            </Header>
            <ChatDialogue />
            </>
             : 
            <>
            <LoginHeader>
                <Toolbar>
                    
                </Toolbar>
            </LoginHeader>
            <LoginDialogue />
            </>
        }
        </Component>
    )
}

export default Messenger;