import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import BlogCard from "../components/blog/BlogCard.js";

const BlogList = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  const [search, setSearch] = useState({
    authorSearch: "",
    titleSearch: "",
  });

  const searchBlogPosts = async () => {
    const response = await fetch(
      "http://localhost:3001/api/blogposts/search",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(search),
      }
    );
    const data = await response.json();
    setBlogPosts(data);
  };


  const handleSearch = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
    console.log(search);
  };



  useEffect(() => {
    searchBlogPosts();
  }, [search]);

  return (
    <Container style={{marginTop: "200px"}}>
      <Row>
        <Col>
          <h3>Cerca nei nostri articoli</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Control
            name="titleSearch"
            type="text"
            placeholder="Cerca per titolo"
            className=" mr-sm-2"
            onChange={handleSearch}
            value={search.titleSearch}
          />
        </Col>
        <Col>
          <Form.Control
            name="authorSearch"
            type="text"
            placeholder="Cerca per autore"
            className=" mr-sm-2"
            onChange={handleSearch}
            value={search.authorSearch}
          />
        </Col>
        <Col>
          <Button type="submit" onClick={searchBlogPosts}>
            Submit
          </Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h1>Tutti i blog posts dai nostri autori</h1>
        </Col>
      </Row>
      <Row className="g-4">
        {blogPosts.map((post) => (
          <BlogCard key={post._id} {...post} />
        ))}
      </Row>
      <Row>
      
      </Row>
    </Container>
  );
};

export default BlogList;