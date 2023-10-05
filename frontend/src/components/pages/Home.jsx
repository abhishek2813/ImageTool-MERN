import React, { useEffect, useState } from "react";
import Canvas from "../Canvas";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import TextBox from "../TextBox";
import ImageUpload from "../ImageUpload";
import { uploadImg } from "../actions";
import { toast } from "react-toastify";


function Home() {
    const [canvasObj, setCanvasObj] = useState([]);
  const [stageDataURL, setStageDataURL] = useState(null);

  const addText = ({ text, fontSize, textColor }) => {
    if (!text.trim()) {
      toast.error("Please enter some text.");
      return;
    }
    const newText = {
      x: 150,
      y: 150,
      text: text,
      fontSize: fontSize,
      fill: textColor,
      type: "text",
    };
    setCanvasObj([...canvasObj, newText]);
  };

  const addImage = async(uploadedImage) => {
    const imageUrl = URL.createObjectURL(uploadedImage);
    const newImage = new window.Image();
    newImage.src = imageUrl;
    const uploadFile = await uploadImg(uploadedImage)
    newImage.onload = () => {
      const imageToAdd = {
        x: 250,
        y: 250,
        image: newImage,
        width: newImage.naturalWidth,
        height: newImage.naturalHeight,
        type: "image",
      };
      setCanvasObj([...canvasObj, imageToAdd]);
    };
  };

  const handleDownload = () => {
    if (stageDataURL) {
      const a = document.createElement('a');
      a.href = stageDataURL;
      a.download = 'canvas_image.png';
      a.click();
      toast.success("Download.");
    }
  };

  useEffect(() => {
    setStageDataURL(null); // Reset the previous dataURL
  }, [canvasObj]);
  return (
    <div>
        <Container>
        <Row>
          <Col lg={6} md={12} sm={12} xs={12}>
            <div className="my-3 shadow p-3 mb-5 bg-white rounded">
              <Card>
                <Card.Body>
                  <Card.Title>Editor Tools</Card.Title>
                  <Card.Text>
                    <div>
                      <ImageUpload onAddImage={addImage} />
                    </div>
                    <div>
                      <TextBox onAddText={addText} />
                    </div>
                  </Card.Text>
                  <Button className="mx-3" variant="primary">Save</Button>
                  <Button variant="success" onClick={handleDownload}>Download</Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} xs={12}>
            <div className="my-3 shadow p-3 mb-5 bg-white rounded">
              <Card>
                <Card.Body>
                  <Card.Title>Preview</Card.Title>
                  <Card.Text>
                    <Canvas canvasObj={canvasObj} onCanvasRender={(dataURL) => setStageDataURL(dataURL)} />
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home