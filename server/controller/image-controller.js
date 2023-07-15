
import grid from 'gridfs-stream';
import mongoose from 'mongoose';

const url = "http://localhost:8000";


let gfs, gridFSBucket, gps, gridPsBucket;
const conn = mongoose.connection;
conn.once('open', () => {
    gridFSBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'fs',
    });

    // gridPsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    //     bucketName: 'photos',
    // });

    gfs = grid(conn.db, mongoose.mongo);
    // gps = grid(conn.db, mongoose.mongo);

    gfs.collection('fs');
    // gps.collection('photos');
});


export const uploadFile = (request, response) => {
    if(!request.file) 
        return response.status(404).json("File not found");
    
    const imageUrl = `${url}/file/${request.file.filename}`;

    response.status(200).json(imageUrl);
}

export const getImage = async (request, response) => {
    try {   
        const file = await gfs.files.findOne({ filename: request.params.filename });
        const readStream = gridFSBucket.openDownloadStream(file._id);
        readStream.pipe(response);
    } catch (error) {
        response.status(500).json({ msg: error.message });
    }
}















// export const getImage = async (request, response) => {
//     try {
//         const bucketName = request.params.bucketName; // Assuming the bucket name is passed as a parameter

//         let gridFsBucket;
//         if (bucketName === 'fs') {
//             gridFsBucket = gridFSBucket; // Use the existing 'gridFsBucket' for 'fs' bucket
//         } else if (bucketName === 'photos') {
//             gridFsBucket = gridPsBucket; // Use 'gridPsBucket' for 'photos' bucket
//         } else {
//             throw new Error('Invalid bucket name'); // Handle the case when an invalid bucket name is provided
//         }

//         const file = await gridFsBucket.files.findOne({ filename: request.params.filename });
//         const readStream = gridFsBucket.openDownloadStream(file._id);
//         readStream.pipe(response);
//     } catch (error) {
//         response.status(500).json({ msg: error.message });
//     }
// };






