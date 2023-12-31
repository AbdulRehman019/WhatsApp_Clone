
import React  from 'react';
import { useEffect } from 'react';
import { Box, InputBase, styled } from '@mui/material';
import { EmojiEmotionsOutlined, AttachFile, Mic } from '@mui/icons-material';

import { uploadFile } from '../../../service/api';

const BoxContainer = styled(Box)`
    height: 55px;
    background: #ededed;
    display: flex;
    width: 100%;
    align-items: center;
    padding: 0 15px;

    & > * {
        margin: 5px;
        color: #919191;
    }
`

const BoxSearch = styled(Box)`
    background-color: #FFFFFF;
    border-radius: 18px;
    width: calc(94% - 100px);
`

const InputBaseField = styled(InputBase)`
    width: 100%;
    padding: 20px;
    height: 20px;
    padding-left: 25px;
    font-size: 14px;
`

const ClipIcon = styled(AttachFile)`
    transform: rotate(40deg);
`

function Footer({ sendText, setValue, value, file, setFile, setImage }) {

    useEffect(() => {
        // API Call
        
            if(file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                uploadFile(data).then((result) => {
                    setImage(result);
                }).catch(error => {})
            }
    }, [file]);

    function onFileChange(e) {
        console.log(e);
        setFile(e.target.files[0]);
        setValue(e.target.files[0].name);
    }

    return (
        <BoxContainer>
            <EmojiEmotionsOutlined />
            <label htmlFor='fileInput'>
                <ClipIcon />
            </label>
            <input 
                type='file'
                id='fileInput'
                style={{display: 'none'}}
                onChange={(e) => onFileChange(e)}
            />
            <BoxSearch>
                <InputBaseField 
                placeholder='Type a message'
                onChange={(e) => setValue(e.target.value)}
                onKeyPress={ (e) => sendText(e) }
                value={value}
                 />
            </BoxSearch>
            <Mic />
        </BoxContainer>
    )
}

export default Footer;