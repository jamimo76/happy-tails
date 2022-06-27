import React from "react";
import { Col, Row } from "reactstrap";
import LocationCard from "./LocationCard";
import { selectAllLocations } from "./locationSlice";

const LocationsList = ({ setLocationId }) => {
  const locations = selectAllLocations();

  return (
    <Row className="ms-auto">
      {locations.map((location) => {
        return (
          <Col
            md="5"
            className="m-4"
            key={location.id}
            onClick={() => setLocationId(location.id)}
          >
            <LocationCard location={location} />
          </Col>
        );
      })}
    </Row>
  );
};
export default LocationsList;
