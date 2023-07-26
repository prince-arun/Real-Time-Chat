import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import privacy from "./assets/privacy-img-1.png";
import group from "./assets/group-img-1.png";

const Ad = () => {
  return (
    <div className="ad">
      <div className="box-center mt-5 mb-5">
        <h1>Why use Signal?</h1>
        <p className="mt-2 ">
          Explore below to see why Signal is a simple, powerful, and secure
          messenger
        </p>
      </div>
      <Row className="ms-3 me-3">
        <Col>
          <Card>
            <Card.Body>
              <img
                src={privacy}
                alt="picture about privacy in signal"
                width={500}
              />
              <div className="box-center">
                <h2>Make Privacy Sticks</h2>
                <p>
                  Add a new layer of expression to your conversations with{" "}
                  <br /> encrypted stickers. You can also create and share your
                  own <br /> sticker packs.
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <img
                src={group}
                alt="picture about group in signal"
                width={500}
              />
              <div className="box-center">
                <h2>Get Together with Groups</h2>
                <p className="pb-4">
                  Group chats make it easy to stay connected to your family,{" "}
                  <br /> friends, and coworkers.
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Ad;
