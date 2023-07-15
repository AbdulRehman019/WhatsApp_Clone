
import User from "../model/User.js"
import mongoose from "mongoose";

function addUsers(req, res) {
    try {
        User.findOne({ sub: req.body.sub }).then((result) => {
            if (result != null) {
                return res.status(200).json({ message: "User Already Exists" });
            }

            const newUser = new User(req.body);
            newUser.save();
            return res.status(200).json(newUser);
        })
    }
    catch (error) {
        // Status Code: 500 Internal Server Error
        return res.status(500).json(error);
    }
}

function getUsers(req, res) {
    try {
        User.find().then((result) => {
            // console.log(result);
            return res.status(200).json(result);
        })
    }
    catch(error) {
        return res.staus(500).json(error.message);
    }
}

export default addUsers;
export { getUsers };