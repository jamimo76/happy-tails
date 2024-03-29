import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const LocationCard = ({ location }) => {
  const { image, name } = location;
  return (
    <Card>
      <CardImg width="50%" src={image} alt={name} />
      <CardImgOverlay>
        <CardTitle>{name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
};

export default LocationCard;
