//LIbrary
import express from 'express';
// import AWS from 'aws-sdk';
import multer from 'multer';


//Database Modal
 import { ImageModel } from  "../../database/allModels";

    const Router = express.Router();
    
    //multer config
    const storage = multer.memoryStorage();
    const upload = multer({storage});
    
    

    //utility function
    import { s3Upload } from '../../utils/s3';

    /* 
        Router               /image 
        Description          Uploads given image to s3 bucket and saves file link to mongodb
        Parameters           none
        Access               Public
        Method               POST
    */

        Router.post('/', upload.single("file"), async (req, res) => {
            try{
                const file = req.file;

                //s3 bucket options
                const bucketOptions = {
                    Bucket: "zomato-masterclone",
                    key: file.orignialname,
                    Body: file.buffer, //buffer is always in the numerical number.
                    ContentType: file.mimetype, // it content the type of image.
                    ACL: "public-read", // access controll list
                };

                const uploadImage = await s3Upload(bucketOptions);

                return res.status(200).json(uploadImage);

                // const saveImageToDatabase= await ImageModel.create({ images:[{Location: uploadImage.Location}],
                // });

                // return res.status(200).json(saveImageToDatabase);

            }catch(error){
                return res.status(500).json({error: error.message});

            }

        });


    export default Router;

