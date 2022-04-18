import { Container, Image, Col, Row } from "react-bootstrap";
import gitlab from "../../../assets/gitlab-ci.png";
import docker from "../../../assets/docker-logo.jpg";
import python from "../../../assets/python.png";
import aws from "../../../assets/aws.png";
import git from "../../../assets/git.png";

const Technologies = () => {
  const technologies = [gitlab, docker, python, aws, git];

  return (
    <Container id="technologies" className="d-flex min-vh-100">
      <div className="m-auto align-self-center">
        <Row className="d-flex h-auto justify-content-center overflow-auto">
          {technologies.map((t) => {
            return (
              <Col className="m-auto d-flex justify-content-center">
                <Image
                  className="m-3 p-3 border border-dark"
                  src={t}
                  height="200"
                  width="200"
                  rounded
                />
              </Col>
            );
          })}
        </Row>
      </div>
    </Container>
  );
};

export default Technologies;
