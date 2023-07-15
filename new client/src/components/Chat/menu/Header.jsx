
import { React, useContext, useState} from "react";
import { AppBar, Toolbar, Button, Box, styled } from "@mui/material";
import GroupsIcon from '@mui/icons-material/Group';
import ChatIcon from '@mui/icons-material/Chat';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "./drawer/InfoDrawer";

import { AccountContext } from "../../../context/AccountProvider";

const Component = styled(Box)`
    height: 44px;
    background: #ededed;
    padding: 8px 16px;
    display: flex;
    align-items: center;
`

const Image = styled('img') ({
    height: 40,
    width: 40,
    borderRadius: '50%',
})

const Icons = styled(Box)`
    margin-left: auto;
    & > * {
        margin-left: 2px;
        padding: 8px;
        color: #000;
    }

    & :first-child {
        font-size: 22px;
        margin-right: 5px;
        margin-top: 3px;
    }
`

function Header() {

    const { account } = useContext(AccountContext);
    const [drawer, setDrawer] = useState(false);

    function toggleDrawer() {
        setDrawer(true);
    }

    return (
            <>
                <Component>
                    <Image onClick={toggleDrawer} src={account.picture} alt="profile_img" />
                    <Icons>
                        <GroupsIcon />
                        <HistoryToggleOffIcon />
                        <ChatIcon />
                        <HeaderMenu setDrawer={setDrawer} />
                    </Icons>
                </Component>
                <InfoDrawer open={drawer} setOpen={setDrawer} />
            </>
    )
}

export default Header;