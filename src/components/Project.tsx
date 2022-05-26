import { FC } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
interface IProjectProps {
  repo: any;
}

const Project: FC<IProjectProps> = ({ repo }) => {
  return (
    <Col md={4} style={{ height: "200px" }}>
      <Card className="shadow" style={{ height: "100%" }}>
        <Card.Body>
          <Card.Title>
            <a
              href={`${repo.html_url}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {repo.name}
            </a>
          </Card.Title>
          <Card.Text>{repo.description}</Card.Text>
        </Card.Body>
        <Card.Footer>{repo.language}</Card.Footer>
      </Card>
    </Col>
  );
};
export default Project;
