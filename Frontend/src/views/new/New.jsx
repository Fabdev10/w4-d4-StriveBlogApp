
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NewBlogPost = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const NewBlogPost = {
        category: event.target.formCategory.value,
        title: event.target.formTitle.value,
        cover: "https://randomuser.me/api/portraits/med/men/1.jpg",
        readTime: event.target.formreadTime.value,
        author: event.target.formAuthor.value,
        content: event.target.formContent.value,
      };

      const response = await fetch(
        "http://localhost:3001/api/blogposts/new",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(NewBlogPost),
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container style={{marginTop: "200px"}}>
      <Row>
        <h2>Aggiungi un nuovo Blogpost</h2>
      </Row>
      <Row className="mt-4">
        <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3" controlId="formCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Scrivi una categoria "
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Scrivi un titolo"
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formCover">
              <Form.Label>Cover</Form.Label>
            <Form.Control
              type="text"
              placeholder="Scrivi un titolo"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formreadTime">
            <Form.Label>Readtime</Form.Label>
            <Form.Control
              type="text"
              placeholder="Scrivi quanto dura"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAuthor">
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              placeholder="Scrivi un Autore"
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formContent"  >
            <Form.Label>Content</Form.Label>
            <Form.Control
              type="text"
              placeholder="Inserisci il contenuto"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  );
};
export default NewBlogPost;
