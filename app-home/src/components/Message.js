import Alert from "react-bootstrap/Alert";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function AdditionalContentExample() {
  return (
    <Container style={{ padding: "10px" }}>
      <Alert variant="success">
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>
          Hail and well met, fair visitor! Pray, do take a leisurely stroll
          about these pages, and peruse the offerings of our humble abode.
          Should a query or curiosity arise, do not hesitate to impart with us.
          We are at thy service. Fare thee well!
        </p>
        <hr />
        <p className="mb-0">Welcome!</p>
      </Alert>
    </Container>
  );
}

export default AdditionalContentExample;
