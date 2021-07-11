import React from 'react';
import { MdCode, MdDesktopMac, MdStorage } from 'react-icons/md';
import styled from 'styled-components';

import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesSectionStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 8rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
}
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
`;

export default function ServiceSection() {
  return (
    <ServicesSectionStyles>
      <div className="container">
        <SectionTitle subheading="What I Can Do For You" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Web Design"
            desc="Working with UI/UX Design Software to help  brainstorm and create flowcharts and frameworks. "
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Web Development"
            desc="Building responsive websites to help optimize performance and making an easy user experiences."
          />
          <ServicesSectionItem
            icon={<MdStorage />}
            title="Database"
            desc="Having a well-designed database guarantees your information is consistent, eleiminating redundant data, easy to query data, and improves the performance overall. "
          />
        </div>
      </div>
    </ServicesSectionStyles>
  );
}
