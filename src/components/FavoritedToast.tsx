import { Col, Row } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";

export default function FavoritedToasted() {
  return (
    <Row>
      <Col xs={6}>
        <Toast  delay={2000} autohide>
          <Toast.Body>Produto favoritado! </Toast.Body>
        </Toast>
      </Col>

    </Row>
  );
}

