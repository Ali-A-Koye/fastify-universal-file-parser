const base64ToBuffer = (value: string) => {
  return Buffer.from(value, "base64");
};

export default base64ToBuffer;
