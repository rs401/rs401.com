import { FC } from "react";
import Card from "react-bootstrap/Card";
interface IPinnedProjectProps {
  project: any;
}

const PinnedProject: FC<IPinnedProjectProps> = (props) => {
  return (
    <Card bg="dark" text="white" className="my-2">
      <Card.Body >
        <Card.Title className="text-center">{props.project.name}</Card.Title>
        <Card.Img style={{width: "100%"}}  src={props.project.imageUrl} />
        <Card.Text>{props.project.description}</Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-around pinned-footer">
          <Card.Link target="_blank" rel="noreferrer" href={props.project.githubUrl}>Code</Card.Link>
          <Card.Link target="_blank" rel="noreferrer" href={props.project.demoUrl}>Demo</Card.Link>
      </Card.Footer>
    </Card>
  );
};
export default PinnedProject;
