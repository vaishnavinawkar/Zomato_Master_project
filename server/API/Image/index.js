//LIbrary
import express from 'express';
// import AWS from 'aws-sdk';
import multer from 'multer';


//Database Modal
    import { ImageModel } from '../../database/allModels';

    const Router = express.Router();
    
    //multer config
    const storage = multer.memoryStorage();
    const upload = multer({storage});
    // TODO:multer is used for uploading a image . when you are uploading a image we make a request to the backend .uploading a iage to a server this may takes a time if the file or image is larger first the image is uploaded to the server and then server is uploading that image to the s3 bucket and therefore it takes time so we need to store that image or file for that time it stores in the server's RAM and how it is possible to store that image or file in the server's ram it is possible through the multer . multer makes you possible to access the server ram and stores that image or file in to tha ram upto that time when this image or file is not stored in to s3 bucket after uplaoding to the bucket it is deleted from the multer( server's RAM).

    

    //utility function
    import {s3Upload} from '../../utils/s3';

    /* 
        Router               /image 
        Description          Uploads given image to s3 bucket and saves file link to mongodb
        Parameters           none
        Access               Public
        Method               POST
    */

        Router.post('/', upload.single("file"), async (res, req) => {
            try{
                const file = req.file;

                //s3 bucket options
                const bucketOptions = {
                    Bucket: "zomato-masterclone",
                    Key: file.orginialname,
                    Body: file.buffer, //buffer is always in the numerical number.
                    ContentType: file.mimetype, // it content the type of image.
                    ACL: "public-read", // access controll list
                };

                const uploadImage = await s3Upload(bucketOptions);

                return res.status(200).json({ uploadImage});

            }catch(error){
                return res.status(500).json({error: error.message});

            }

        });


    export default Router;

