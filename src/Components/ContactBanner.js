import React from 'react';
import styled from 'styled-components';

import Buttons from './Buttons';
import PText from './PText';

const ContactBannerStyles = styled.div`
  padding: 5rem 0;

  .contactBanner__wrapper {
    width: 75%;
    margin-left: 12.5%;
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2rem;
    }
    .button {
      width: 75%;
      font-size: 1.8rem;
    }
  }
`;

export default function ContactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner__wrapper">
          <PText>Have A Project In Mind?</PText>
          <h3 className="contactBanner__heading">Let Me Help You</h3>
          <Buttons className="button" btnText="Contact Me" btnLink="/contact" />
        </div>
      </div>
    </ContactBannerStyles>
  );
}
