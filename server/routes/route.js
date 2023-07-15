
import express from "express";
import addUsers from "../controller/user-controller.js";
import { getUsers } from "../controller/user-controller.js";
import newConversation from "../controller/conversation-controller.js";
import { getConversation } from "../controller/conversation-controller.js";
import addMessage from "../controller/message-controller.js";
import { getMessage } from "../controller/message-controller.js";
// import uploadImage from "../controller/image-controller.js";
import { uploadFile, getImage } from "../controller/image-controller.js";

import upload from "../utils/upload.js";

// All the route are handled using express.Router() instead og app.get() and app.post()
// Both the ways are okay.
const Route = express.Router();

// Handling the "/add" post request which came on the successfull google login.
Route.post("/add", addUsers);

// Fetching the details of users.
Route.get("/users", getUsers);

Route.post('/conversation/add', newConversation);

Route.post('/conversation/get', getConversation);

Route.post('/message/add', addMessage);

Route.get('/message/get/:id', getMessage);

Route.post('/file/upload', upload.single('file'), uploadFile);
Route.get('/file/:filename', getImage);

export default Route;