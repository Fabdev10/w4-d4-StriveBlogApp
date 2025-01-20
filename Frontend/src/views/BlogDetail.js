import React, { useEffect, useState, } from "react";
  import {
    Container,
    Row,
    Col,
    Card,
    Button,
    Form,
  } from "react-bootstrap";
  import { Link, useParams } from "react-router";
  import BlogCard from "../components/blog/BlogCard.js";
  
  const BlogDetail = () => { 
    const { id } = useParams();
  
      const [title, setTitle] = useState("");
      const [author, setAuthor] = useState("");
      const [content, setContent] = useState("");
      const [category, setCategory] = useState("");
      const [readTime, setReadtime] = useState("");
      const [cover, setCover] = useState("");
    
 
      
    const blogPost = {
      _id: id,
      title,  
      author, 
      content,
      cover,
      readTime,
     category,
    } ;
  
    const fetchBlogPost = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/blogposts/${id}`
        );
        const blogPost = await response.json();
        setTitle(blogPost.title);
        setAuthor(blogPost.author);
        setContent(blogPost.content);
        setCover(blogPost.cover);
        setReadtime(blogPost.readtime);
        setCategory(blogPost.category);
      } catch (error) {
        console.log(error);
      }
    };
    const putBlog = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/blogposts/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(blogPost),
          }
        );
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    const deleteBlog = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/blogposts/${id}`,
          {
            method: "DELETE",
          }
        );
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      fetchBlogPost();
    }, []);
  
    return (
      <Container>
        <Row>
          <Col xs={6}>
          <BlogCard {...blogPost} />
           </Col>
          <Col xs={6}>
                       <h3>Modifica Blog</h3>
                       <Form>
                         <Form.Group
                           className="mb-3"
                           controlId="formTitle"
                         >
                           <Form.Label>Title</Form.Label>
                           <Form.Control
                             type="text"
                             placeholder="Scrivi un titolo"
                             value={title}
                             onChange={(e) => setTitle(e.target.value)}
                           />
                         </Form.Group>
                         <Form.Group
                           className="mb-3"
                           controlId="formAuthor"
                         >
                           <Form.Label>Author</Form.Label>
                           <Form.Control
                             type="text"
                             placeholder="Scrivi un autore"
                             value={author}
                             onChange={(e) =>
                               setAuthor(e.target.value)
                             }
                           />
                         </Form.Group>
                         <Form.Group
                           className="mb-3"
                           controlId="formContent"
                         >
                           <Form.Label>Content</Form.Label>
                           <Form.Control
                             type="email"
                             placeholder="Scrivi una email"
                             value={content}
                             onChange={(e) => setContent(e.target.value)}
                           />
                         </Form.Group>
                         <Form.Group
                           className="mb-3"
                           controlId="readtime"
                         >
                           <Form.Label>Readtime</Form.Label>
                           <Form.Control
                             type="text"
                             placeholder="Scrivi la durata"
                             value={readTime}
                             onChange={(e) =>
                              setReadtime(e.target.value)
                            }
                           />
                         </Form.Group>
                         <Form.Group
                           className="mb-3"
                           controlId="formCover"
                         >
                           <Form.Label>Cover</Form.Label>
                           <Form.Control
                             type="text"
                             placeholder="Inserisci un immagine"
                             value={cover}
                             onChange={(e) =>
                               setCover(e.target.value)
                             }
                           />
                         </Form.Group>
                         <Form.Group
                           className="mb-3"
                           controlId="formCategory"
                         >
                           <Form.Label>Category</Form.Label>
                           <Form.Control
                             type="text"
                             placeholder="Inserisci una categoria"
                             value={category}
                             onChange={(e) =>
                               setCategory(e.target.value)
                             }
                           />
                         </Form.Group>
           
                         <Button variant="primary" onClick={putBlog}>
                           Submit
                         </Button>
                       </Form>
                       <Button
                         variant="danger"
                         className="mt-2"
                         onClick={deleteBlog}
                       >
                         Cancella author dal database
                       </Button>
                     </Col>
        </Row>
      </Container>
    );
  };
  
  
  export default BlogDetail;