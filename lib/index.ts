import IndexType from "../types/index";
import RequestType from "../types/request";
import validate from "./validator/index";
import base64ToBuffer from "./base64";
import urlToBuffer from "./url";
import multipart from "./multipart";
const entry = async (
  field: IndexType,
  req: RequestType,
  options: { [key: string]: string } = {}
) => {
  let value = "";
  if ("type" in options) {
    value = options.type;
  } else {
    value = validate(req.body[field]);
  }

  let result = await new Promise(async (resolve, reject) => {
    let data;
    switch (value) {
      case "url":
        data = await urlToBuffer(req.body[field]);
        break;
      case "base64":
        data = base64ToBuffer(req.body[field]);
        break;
      case "form-data":
        data = await multipart(req);
        break;
      case "unknown": // if we couldn't find anything then it must be multipart || not exist
        data = await multipart(req);
        break;
    }
    return resolve(data);
  });

  req.body[field] = result;
};

export default entry;
