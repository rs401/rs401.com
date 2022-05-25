import { FC, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import AuthPovider from "../services/AuthContext";
import { getPosts } from "../services/BlogService";
import { Post } from "../models/IPost";
import PostMetaInfo from "../components/PostMetaInfo";

const Blog: FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    getPosts().then((res) => {
      setPosts(res);
    });
  }, []);

  return (
    <AuthPovider>
        <Container className="d-flex flex-column align-items-center ">
          {posts.map((post) => {
            return (
              <PostMetaInfo key={post.id} post={post} />
            );
          })}
        </Container>
    </AuthPovider>
  );
};
export default Blog;
