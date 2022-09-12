import multer from "fastify-multer";
const upload = multer();
import RequestType from "../../types/request";

const multipart = async (req:RequestType,value:string) => {
  return new Promise((resolve, reject) => {
    let data;
    //@ts-ignore
    return upload.single(value)(req, {}, function (err) {
      if (err) {
        console.log(err);
        return resolve("error")};
      //@ts-ignore
      data = req.file;
      return resolve(data);
    });
  });
};

export default multipart;
