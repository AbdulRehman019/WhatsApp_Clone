
// React and Material UI Components
import { React, useState } from "react";
import { Box } from "@mui/material";

// Internal Components
import Header from "./Header";
import Search from "./Search";
import Conversations from "./Conversations";

function Menu() {

    const [text, setText] = useState('');

    return (
        <>
        <Box>
            <Header />
        </Box>
        <Box>
            <Search setText={setText} />
        </Box>
        <Box>
            <Conversations text={text} />
        </Box>
        </>
    )
}

export default Menu;