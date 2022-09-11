import superagent from 'superagent';

const urlToBuffer = async (value: string) => {
    let fimg = await superagent.get(value).responseType('arraybuffer');
    return Buffer.from(fimg.body);
  };
  
export default urlToBuffer;
  