
import { React, useContext }  from 'react';
import { Box, Typography, styled } from "@mui/material";
import { Search, MoreVert } from '@mui/icons-material';

import { defaultProfilePicture } from "../../../allconstants/data";
import { AccountContext } from '../../../context/AccountProvider';

const BoxHeader = styled(Box)`
    height: 44px;
    background: #ededed;
    padding: 8px 16px;
    display: flex;
    align-items: center;
`

const Image2 = styled('img')({
    height: 40,
    width: 40,
    objectFit: 'cover',
    borderRadius: '50%'
})

const PersonName = styled(Typography)`
    margin-left: 12px !important;
`

const ActiveStatus = styled(Typography)`
    margin-left: 12px !important;
    font-size: 12px;
    color: rgb(0, 0, 0, 0.6);
`

const ContainerRight = styled(Box)`
    margin-left: auto;

    % > svg {
        padding: 8px;
        font-size: 24px;
        color: #000;
    }
`

function ChatHeader({ person }) {

    const { activeUsers } = useContext(AccountContext);

    return (
        <BoxHeader>
            <Image2 src={person.picture} alt="dp" />
            <Box>
                <PersonName>{person.name}</PersonName>
                <ActiveStatus>{activeUsers?.find(user => user.sub === person.sub) ? "Online" : "Offline"}</ActiveStatus>
            </Box>

            <ContainerRight>
                <Search />
                <MoreVert />
            </ContainerRight>
        </BoxHeader>
    )
}

export default ChatHeader;