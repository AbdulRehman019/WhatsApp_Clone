
// Third hook(useEffect) of the project. Read more about it in notes. 
import React  from 'react';
import { useEffect, useState, useContext } from "react";
import { Box, styled } from "@mui/material";
import { getUsers } from "../../../service/api";
import Conversation from "./conversation";
import { AccountContext } from "../../../context/AccountProvider";

const Component = styled(Box)`
    height: 85vh;
    overflow: overlay;
`

function Conversations({ text }) {

    const [users, setUsers] = useState([]);

    const { account, socket, setActiveUsers } = useContext(AccountContext);

    useEffect(() => {
        getUsers()
            .then(response => {
                const filteredData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
                setUsers(filteredData);
            })
            .catch(error => {
                console.log("Error fetching users:", error);
            });
    }, [text]);

    useEffect(() => {
        socket.current.emit('addUsers', account);
        socket.current.on("getUsers", users => {
            setActiveUsers(users);
        })
    }, [account]);

    console.log(users);
    return (
        <Box>
            {users && users.map((user) => {
                {/* The account through which you have logged in will not be rendered. */}
                return user.sub !== account.sub &&
                <Conversation key={user.id} user={user} />
            })}
        </Box>
    )
}

export default Conversations;