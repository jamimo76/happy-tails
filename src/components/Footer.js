import { Container, Row, Col } from "reactstrap";
const Footer = () => {
  return (
    <footer className="site-footer">
      <Container>
        <Row>
          <Col xs={{ size: 4, offset: 1 }} sm="2">
            <h5>Site Navigation</h5>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
