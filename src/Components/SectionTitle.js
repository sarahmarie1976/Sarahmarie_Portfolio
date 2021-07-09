import React from 'react';
import styled from 'styled-components';

const SectionTitleSytle = styled.div`
  text-align: center;
  p {
    font-family: 'RobtoMono Regular';
    font-size: 3rem;
  }
  h2 {
    font-family: 'Montserrat Bold';
    font-size: 6rem;
    text-transform: uppercase;
    color: var(--white);
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    p {
      font-size: 1.2rem;
    }
    h2 {
      font-size: 3.6rem;
    }
  }
`;

export default function SectionTitle({
  subheading = 'Need Subheading',
  heading = 'Need Heading',
}) {
  return (
    <SectionTitleSytle className="section-title">
      <p>{subheading}</p>
      <h2>{heading}</h2>
    </SectionTitleSytle>
  );
}
