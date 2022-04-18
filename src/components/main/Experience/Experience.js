import Steps, { Step } from "awesome-steps";
import "awesome-steps/dist/style.css";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseLaptop } from "@fortawesome/free-solid-svg-icons";
import { useCookies } from "react-cookie";

const Experience = () => {
  const [cookies, setCookie] = useCookies("code");
  const [state, setState] = useState({ current: 0 });

  const handleStepClick = (stepNumber) => {
    setState({ current: stepNumber });
  };

  return (
    <Container id="experience" className="d-flex vh-100">
      <div className="m-auto align-self-center">
        <Steps
          current={state.current}
          labelPlacement={"horizontal"}
          direction={"vertical"}
        >
          <Step
            title="2022"
            onClick={() => handleStepClick(0)}
            status="done"
            icon={
              <FontAwesomeIcon
                icon={faHouseLaptop}
                data-toggle="tooltip"
                data-placement="bottom"
                title="Teletrabajo"
              />
            }
          />
          <h1>
            {cookies.code == "ES"
              ? "Plexus - Ingeniero DevOps"
              : "Plexus - DevOps Engineer"}
          </h1>
          <Step
            title="2021"
            onClick={() => handleStepClick(2)}
            status="done"
            icon={
              <FontAwesomeIcon
                icon={faHouseLaptop}
                data-toggle="tooltip"
                data-placement="bottom"
                title="Teletrabajo"
              />
            }
          />
          <h1>
            {cookies.code == "ES"
              ? "Plexus - Becario DevOps"
              : "Plexus - DevOps Intern"}
          </h1>
        </Steps>
      </div>
    </Container>
  );
};

export default Experience;
