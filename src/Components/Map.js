import React from 'react';
import styled from 'styled-components';

import MapImg from '../assets/images/map1.png';
import PText from './PText';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat center/ cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 2rem;
    color: var(--teal-bl);
    margin-bottom: 1rem;
    text-decoration: underline;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here I Am!</h3>
          <PText>GEC, Saint Louis, Missouri</PText>
          <a
            className="map__card__link"
            href="https://www.google.com/maps/place/Beckemeier+Conservation+Area/@38.678663,-90.5309249,17z/data=!3m1!4b1!4m5!3m4!1s0x87df2b623765a72f:0x8203089b60b3a82d!8m2!3d38.6786588!4d-90.5287362"
            target="_blank"
            rel="noreferrer"
          >
            Open In Google Maps
          </a>
        </div>
      </div>
    </MapStyles>
  );
}
