
import React, { useState } from "react";
import { Dialog, DialogTitle, styled, List, ListItem, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Profile from "./drawer/InfoDrawer";

const menuOption = styled(MenuItem)`
    font-size: 14px;
    padding: 15px 60px 5px 24px;
    color: #4A4A4A;
`

function HeaderMenu({ setDrawer }) {

    const [open, setOpen] = useState(null);

    function handleClick(event) {
        setOpen(event.currentTarget);
    }

    function handleClose() {
        setOpen(null);
    }

    return (
        <>
            <MoreVertIcon onClick={handleClick} />
                <Menu
                    getContentAnchorE1={null}
                    anchorEl={open}
                    open={open}
                    onClose={handleClose}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center'
                    }}
                >
                    <MenuItem onClick={() => {handleClose(); setDrawer(true);}}>Profile</MenuItem>
                </Menu>
        </>
    )
}

export default HeaderMenu;