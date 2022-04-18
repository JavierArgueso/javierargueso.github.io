import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RRSS = () => {
  return (
    <div className="d-flex justify-content-around">
      <a
        className="text-dark"
        target="_blank"
        href="https://www.linkedin.com/in/javier-argüeso-soto"
      >
        <FontAwesomeIcon
          icon={faLinkedinIn}
          data-toggle="tooltip"
          data-placement="bottom"
          title="Linkedin"
        />
      </a>
      <a
        className="text-dark"
        target="_blank"
        href="https://www.linkedin.com/in/javier-argüeso-soto"
      >
        <FontAwesomeIcon
          icon={faEnvelope}
          data-toggle="tooltip"
          data-placement="bottom"
          title="Email"
        />
      </a>
      <a
        className="text-dark"
        target="_blank"
        href="https://github.com/JavierArgueso"
      >
        <FontAwesomeIcon
          icon={faGithub}
          data-toggle="tooltip"
          data-placement="bottom"
          title="Github"
        />
      </a>
    </div>
  );
};

export default RRSS;
