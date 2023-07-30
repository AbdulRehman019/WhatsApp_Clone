
import { React, useContext } from "react";
import { Dialog, styled, Box, Typography, List, ListItem, useStepContext } from '@mui/material';

import { qrCodeImage } from "../../allconstants/data";
import { AccountContext } from "../../context/AccountProvider";
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import addUser from "../../service/api.js";

const MyQRCode = styled("img")({
    height: 264,
    width: 264,
    margin: "50px 0 0 50px"
})

const MyTitle = styled(Typography)`
    font-size: 26px;
    color: #525252;
    font-weight: 300;
    font-family: inherit;
    margin-bottom: 25px;
`

const NewStyledList = styled(List)`
    & > li {
        padding: 0;
        margin-top: 15px;
        font-size: 20px;
        line-height: 25px;
        color: #3b4a54;
    }
`

const newDialogStyle = {
    height: "95%",
    width: "60%",
    marginTop: "12%",
    maxWidth: "100%",
    maxHeight: "100%",
    boxShadow: "none",
    overflow: "hidden"
}

const NewComponent = styled(Box)`
    display: flex;
`

const NewContainer = styled(Box)`
    padding: 56px 0 56px 56px;
`

function LoginDialogue() {

    const { setAccount } = useContext(AccountContext);

    async function onLoginSuccess(credentialResponse) {
        const decoded = jwt_decode(credentialResponse.credential);
        console.log(decoded);
        setAccount(decoded);
        // A call is made to api.js which will connect the frontend with the backend.
        addUser(decoded);
    }

    function onLoginError() {
        console.log();
    }

    return (
        <Dialog 
            open={true}
            PaperProps={{sx: newDialogStyle}}
            hideBackdrop={true}>
            <NewComponent>
                <NewContainer>
                    <MyTitle>Use WhatsApp on your computer</MyTitle>
                    <NewStyledList>
                        <ListItem>1. Open WhatsApp on your Computer</ListItem>
                        <ListItem>2. Tap Menu Settings and select Whatsapp Web.</ListItem>
                        <ListItem>3. Point your phone to this screen to capture the code.</ListItem>
                    </NewStyledList>
                </NewContainer>
                <Box sytle={{position: 'relative'}}>
                    <MyQRCode src={qrCodeImage} alt="barcode-img" />
                    <Box style={{position: 'absolute', top: '50%', transform: 'translateX(25%)'}}>
                        <GoogleLogin 
                            onSuccess={onLoginSuccess}
                            onError={onLoginError}
                        />
                    </Box>
                </Box>
            </NewComponent>
        </Dialog>
    )
}

export default LoginDialogue;