
import axios from 'axios';

const url = 'http://localhost:8000';

function addUser(data) {
    // It will make a call to route("/add")
    axios.post(`${url}/add`, data, {headers:{"Content-Type" : "application/json"}}).then((result) => {
        // console.log(result);
    }).catch((error) => {
        console.log("Error in api.js", error);
    })
}

async function getUsers() {
    try {
        const response = await axios.get(`${url}/users`);
        return response.data;
    } catch (error) {
        console.log("No way it's again in api.js(axios) getUsers", error.message);
        throw error;
    }
}

async function setConversation(data) {
    try {
        const result = await axios.post(`${url}/conversation/add`, data, { headers: { "Content-Type": "application/json" } });
    } catch (error) {
        console.log("Error", error);
    }
}

function getConversation(data) {
    return axios.post(`${url}/conversation/get`, data, {headers:{"Content-Type" : "application/json"}}).then((response => {
        return response.data;
    })).catch((error) => {
        console.log("Error", error);
    }) 
}

function newMessage(data) {
    return axios.post(`${url}/message/add`, data).then((response => {
        return response.data;
    })).catch((error) => {
        console.log("Error", error);
    }) 
}

async function getMessage(id) {
    try {
        const response = await axios.get(`${url}/message/get/${id}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log("No way it's again in api.js(axios) getMessage", error.message);
        throw error;
    }
}

function uploadFile(data) {
    return axios.post(`${url}/file/upload`, data).then((response => {
        return response.data;
    })).catch((error) => {
        console.log("rrr", error);
    }) 
}

export { getUsers, setConversation, getConversation, newMessage, getMessage, uploadFile };
export default addUser;
