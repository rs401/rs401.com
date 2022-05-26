import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../services/BlogService";
import { Post } from "../models/IPost";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ReactMarkdown from "react-markdown";

const PostContent: FC = () => {
  const params = useParams();
  const id = params.id;
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    async function fetchPost(id: string) {
      await getPost(id).then((post: Post) => {
        setPost(post);
      });
    }
    if (id === undefined) return;
    fetchPost(id);
  }, [id]);

  return (
    <Container>
      {post ? (
        <Card className="p-lg-2">
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {post.createdAt.toDate().toISOString().split("T")[0]}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              {post.tags.map((tag) => {
                return <span key={tag}>{tag}</span>;
              })}
            </Card.Subtitle>
            <Card.Text>
              <ReactMarkdown>{post.body}</ReactMarkdown>
            </Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <Spinner animation="border" variant="secondary" />
      )}
    </Container>
  );
};
export default PostContent;
