import React from 'react';
import { MdSchool } from 'react-icons/md';
import styled from 'styled-components';

import AboutImg from '../assets/images/about-page-img1.png';
import AboutInfoItem from '../Components/AboutInfoItem';
import Buttons from '../Components/Buttons';
import ContactBanner from '../Components/ContactBanner';
import PText from '../Components/PText';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    span {
      background-color: var(--teal-bl);
      color: black;
      font-weight: bold;
      padding: 0.5rem;
      border-radius: 8px;
    }
    
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .about__info {
    margin-bottom: 10rem;
  }
  .para {
    max-width: 100%;
  }

  .right {
    img {
      border: 6px ridge var(--black);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span> Sarahmarie Hollenstein</span>
              </p>
              <h2 className="about__heading">A Full-Stack Developer</h2>
              <div className="about__info">
                <PText>
                  I have lived in Saint Louis, Missouri for over 20 years now.
                  Since childhood, I have always loved thinking outside of the
                  box to create things from cooking, baking, home design, making
                  jewelry, and art. I love the experience of just jumping into a
                  project and seeing what I have created at the end.
                  <br /> <br />
                  I have worked in Customer Service and Management for over 20
                  years, in addition to having 8 years of accounting under my
                  belt. In early 2020 I decided to make a career change and
                  enrolled in Lambda School for Full-Stack Development.
                  <br /> <br />
                  Lambda School challenged me every day by providing tools and
                  projects to sharpen my skills. Tools such as HTML/CSS,
                  JavaScript, React, Redux, and Express. And due to the sprints
                  and steady cadence by Lambda, I definitely improved my ability
                  to plan and execute code and meet deadlines.
                  <br /> <br />I will continue to push myself to learn as I grow
                  as a Developer and expect new challenges ahead. I am looking
                  forward to any and all opportunities to take these exciting
                  skills and provide value to the right business.
                </PText>
              </div>
              <Buttons btnText="Download Resume" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="College"
                items={[
                  'St Louis Community College - Meramec ',
                  'Saint Louis, MO',
                ]}
              />
              <AboutInfoItem
                title="Bootcamp"
                items={['Lambda School ', 'March 2020 - May 2021']}
              />

              <AboutInfoItem
                title="Certifications"
                items={[
                  'PHP Essentials Training',
                  'Learning SQL Programming',
                  'SQL Tips, Tricks, and Techniques',
                ]}
              />
              <AboutInfoItem
                title="Courses"
                items={[
                  'React JS - Learn React JS from Scratch',
                  'SQL Data Reporting and Analysis',
                ]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'React']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Node', 'Express', 'Knex.js', 'SQLite']}
              />
              <AboutInfoItem
                title="Design"
                items={['ReactStrap', 'Ant Design', 'Whimsical', 'DB Designer']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experience</h1>
              <AboutInfoItem title="2020" items={['Lambda Projects']} />
              <AboutInfoItem
                title="2021"
                items={['The Real LA Fantasy Football Draft Wizard']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
