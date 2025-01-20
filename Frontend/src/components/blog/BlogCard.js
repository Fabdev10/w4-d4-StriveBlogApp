import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const BlogCard = ({
  _id,
  title,
  category,
  cover,
  readTime,
  author,
  content,
}) => {
 

  return (
    <Col xs={4}>
      <Link
              to={`${_id}`}
              className="text-decoration-none"
            >
      <Card style={{ height: "550px" }}>
        <Card.Body>
          <Card.Title style={{ height: "50px" }}>
            {title}
          </Card.Title>
          <Card.Img
            variant="top"
            src={cover}
            style={{
              height: "240px",
              objectFit: "contain",
            }}
          />
          <Card.Text>{content}</Card.Text>
          <Card.Text>{author}</Card.Text>
          <Card.Text>{category}</Card.Text>
        </Card.Body>
      </Card>
      </Link>
    </Col>
  );
};

export default BlogCard;