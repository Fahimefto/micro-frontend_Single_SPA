import ListGroup from "react-bootstrap/ListGroup";

function DefaultExample() {
  return (
    <ListGroup
      style={{ textAlign: "center", marginTop: "16px", margin: "50px" }}
      numbered
    >
      <ListGroup.Item variant="success">Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
  );
}

export default DefaultExample;
