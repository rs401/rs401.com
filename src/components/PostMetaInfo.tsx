import { FC } from "react";
import { Post } from "../models/IPost";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";

interface IPostMetaInfoProps {
  key: string | undefined;
  post: Post;
}

const PostMetaInfo: FC<IPostMetaInfoProps> = ({ post }) => {
  const tagList = post.tags.map((tag, index) => {
    return (
      <span key={index}>
        <Badge pill bg="dank" className="p-1">
          <a href="/">{tag}</a>
        </Badge>{" "}
      </span>
    );
  });

  return (
    <div className="meta-info shadow rounded border">
      <Link to={`/post/${post.id}`}>
        <h3>{post.title}</h3>
      </Link>
      <div className="post-tags">{tagList}</div>
      <div className="post-blurb">{post.body}</div>
    </div>
  );
};
export default PostMetaInfo;
