import React from 'react';
import { MdCloud, MdCode, MdDesktopMac } from 'react-icons/md';
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
            desc="Building websites to be responsive to help optimized performance. Making the website easy to use for user experience. "
          />
          <ServicesSectionItem
            icon={<MdCloud />}
            title="Database"
            desc="Building your own database will help reduce the amount of time you spend managing data. Reducing data redundancy, reducing updating errors, and increase consistency. "
          />
        </div>
      </div>
    </ServicesSectionStyles>
  );
}
