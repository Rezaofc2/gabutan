
import axios from 'axios';
import FormData from 'form-data';
import { fileTypeFromBuffer } from 'file-type';

/**
 * Upload image to pomf.lain.la
 * Supported mimetype:
 * - `image/jpeg`
 * - `image/jpg`
 * - `image/png`
 * @param {Buffer} buffer Image Buffer
 */
export default async (buffer) => {
  const { ext, mime } = (await fileTypeFromBuffer(buffer)) || {};
  const form = new FormData();
  form.append("files[]", buffer, { filename: `tmp.${ext}`, contentType: mime });
  try {
    const { data } = await axios.post("https://pomf.lain.la/upload.php", form, {
      headers: form.getHeaders(),
    });   
    console.log(data);  
    return data.files[0].url
  } catch (error) {
    throw error;
  }
};


/*import fetch from 'node-fetch';
import FormData from 'form-data';
import { fileTypeFromBuffer } from 'file-type';

export default async (buffer) => {
  let { ext } = await fileTypeFromBuffer(buffer);
  let bodyForm = new FormData();
  bodyForm.append("fileToUpload", buffer, "file." + ext);
  bodyForm.append("reqtype", "fileupload");

  let res = await fetch("https://catbox.moe/user/api.php", {
    method: "POST",
    body: bodyForm,
  });

  let data = await res.text();
  return data;
}*/