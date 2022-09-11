import { validator } from "../../types/validator";

const base64validator = (value: string) => {
  if (value.substring(0, 100).includes("base64")) {
    return true;
  }
  const base64regex =
    /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
  return base64regex.test(value);
};

const urlvalidator = (value: string) => {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" +
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return pattern.test(value);
};

const validator = (value: validator) => {
  if (typeof value === "string") {
    if (urlvalidator(value)) {
      return "url";
    } else if (base64validator(value)) {
      return "base64";
    } else {
      return "unknown";
    }
  } else {
    return "unknown";
  }
};

export default validator;
