
import React  from 'react';
import { Box, AppBar, Toolbar, Drawer, styled, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Profile from "./Profile";

const drawerStyle = {
    left: 20,
    top: 17,
    height: '95%',
    width: '30%',
    boxShadow: 'none'
}

const Text = styled(Typography)`
    font-size: 18px;
`

const Upper = styled(Box)`
    display: flex;
    background: #008069;
    height: 107px;
    color: #fff;

    & > svg, & > p {
        margin-top: auto;
        padding: 15px;
        font-weight: 600;
    }
`

const Lower = styled(Box)`
    background: #ededed;
    height: 85%;
`

function InfoDrawer({ open, setOpen }) {

    function toggleDrawer() {
        setOpen(false);
    }

    return (
        <Drawer
            open={open}
            onClose={toggleDrawer}
            PaperProps={{ sx: drawerStyle }}
            style={{ zIndex: 1500 }}
        >
            <Upper>
                <ArrowBackIcon onClick={() => setOpen(false)} />
                <Text>Profile</Text>
            </Upper>
            <Lower>
                <Profile />
            </Lower>
        </Drawer>
    )
}

export default InfoDrawer;