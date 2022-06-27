import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import LocationDetail from "../features/locations/LocationDetail";
import LocationsList from "../features/locations/LocationsList";
import { selectLocationById } from "../features/locations/locationSlice";

const LocationsDirectoryPage = () => {
  const [locationId, setLocationId] = useState(0);
  const selectedLocation = selectLocationById(locationId);
  return (
    <Container>
      <Row>
        <Col sm="5" md="7">
          <LocationsList setLocationId={setLocationId} />
        </Col>
        <Col sm="7" md="5">
          <LocationDetail location={selectedLocation} />
        </Col>
      </Row>
    </Container>
  );
};
export default LocationsDirectoryPage;
