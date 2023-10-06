import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadFetchImg } from "../actions";
import { toast } from "react-toastify";
import { Col, Container, Row } from "react-bootstrap";
import ImageCard from "../ImageCard";

function UploadImages() {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("user"));
    if (!auth) {
      navigate("/login");
    }
    // console.warn(auth);
    const fetchData = async () => {
      const result = await uploadFetchImg(auth.id);
      if (result.status === 201) {
        setImages(result.data);
      } else {
        toast.error(result.error);
      }
    };
    fetchData();
  }, []);
  console.warn(images);
  return (
    <div>
      <Container fluid>
        <Row>
          {images &&
            images.map((item) => (
              <Col xs={4} lg={4} key={item._id} className="mb-3">
                <div className="shadow p-3 bg-white rounded">
                  <ImageCard data={item} />
                </div>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
}

export default UploadImages;
