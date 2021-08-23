import React from 'react';
import styled from 'styled-components';

import AboutImg from '../assets/images/about-sec-img1.png';
import Buttons from './Buttons';
import PText from './PText';
import SectionTitle from './SectionTitle';

const AboutSectionSytles = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__button {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 2rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__button {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionSytles>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            subheading="Let Me Introduce Myself"
            heading="About Me"
          />
          <PText>
            I live in Saint Louis, Missouri; however, I am originally from Long
            Island, New York. I am very creative. I love to draw, cook, and
            complete DIY craft projects. Learning to build websites has been an
            innovative way to show my creativity in a professional direction. I
            have learned so much throughout this journey. And I can't wait to
            see where it takes me!
          </PText>

          <div className="aboutSection__button">
            <Buttons btnLink="/projects" btnText="My Work" />
            <Buttons btnText="Learn More" btnLink="/about" outline />
          </div>
        </div>
        <div className="aboutSection__right">
          <img className="aboutImg" src={AboutImg} alt="Img" />
        </div>
      </div>
    </AboutSectionSytles>
  );
}
