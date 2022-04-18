import { Container, Image } from "react-bootstrap";
import RRSS from "./RRSS/RRSS";
import foto from "../../../assets/foto.jpg";
import { useCookies } from "react-cookie";

const Home = () => {
  const [cookies, setCookie] = useCookies("code")

  return (
      <Container id="home" className="d-flex vh-100">
        <div className="m-auto align-self-center">
          <center>
            <Image
              className="mb-5 border border-dark"
              src={foto}
              height="300"
              roundedCircle
            />
            <h2>Javier Argüeso Soto</h2>
            <p>{cookies.code == "ES" ? "Ingeniero Informatico" : "IT Engineer"}</p>
            <RRSS />
          </center>
        </div>
      </Container>
  );
};

export default Home;
