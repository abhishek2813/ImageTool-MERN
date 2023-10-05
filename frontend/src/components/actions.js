import axiox from "axios";

const uploadImg = (file) => {
    const formData = new FormData();
    formData.append("file",file)
  axiox
    .post(" http://localhost:8001/upload", formData)
    .then((res) => console.warn(res))
    .catch((err) => console.warn(err));
};

export {uploadImg}