import { FC, useState, useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Post } from "../models/IPost";
import {Timestamp} from "firebase/firestore";
import { addPost } from "../services/BlogService";
import { AuthContext } from "../services/AuthContext";
import { useNavigate } from "react-router";

const NewPost: FC = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([""]);
  const user = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(user === null || user === undefined) {
        navigate("/");
        return;
    }
    if(user.email !== "rich.stadnick@gmail.com") {
        navigate("/");
        return;
    }
  }, [navigate, user])
  

  function handleSubmitNewPost(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      let post: Post = {
          title: title,
          body: body,
          tags: tags,
          createdAt: Timestamp.now(),
          updatedAt: Timestamp.now()
      };
      console.log("post", post);
      const results = addPost(post);
      results.then(() => {
          setTitle("");
          setBody("");
          setTags([]);
      }).catch((err) => {
          console.log("error: ", err);
      });
  }

  return (
    <Container className="mt-4 w-50">
      <Form onSubmit={(e) => handleSubmitNewPost(e)}>
        <Form.Group className="mb-3">
          <Form.Label>title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Tags (comma separated)</Form.Label>
          <Form.Control type="text" value={tags} onChange={(e) => setTags(e.target.value.split(","))} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Body</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default NewPost;
