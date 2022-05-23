import { FC } from "react";
import PinnedProject from "./PinnedProject";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
interface IPinnedProjectsProps {
  projects: any[][];
}

const PinnedProjects: FC<IPinnedProjectsProps> = (props) => {
  return (
    <div>
      {props.projects && props.projects.length !== 0 ? (
        <>
          {props.projects.map((projGroup: any[], index: number) => {
            return (
              <Row style={{display: "flex"}} className="gx-2" key={index}>
                {projGroup.map((project: any, index: number) => {
                  return (
                    <Col style={{display: "flex"}} lg={4} key={index}>
                      <PinnedProject project={project} />
                    </Col>
                  );
                })}
              </Row>
            );
          })}
        </>
      ) : (
        <>Loading...</>
      )}
    </div>
  );
};

export default PinnedProjects;
