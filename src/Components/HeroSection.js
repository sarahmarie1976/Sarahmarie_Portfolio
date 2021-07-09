import React from 'react';
import styled from 'styled-components';

import HeroImg from '../assets/images/hero2.PNG';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import Buttons from './Buttons';
import PText from './PText';

const HeroStyles = styled.div`
  .hero {
    height: 125vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: 1rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .intro_1 {
      font-size: 4rem;
      color: var(--white);
    }
  }
  .hero__img {
    max-width: 650px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 6px ridge var(--black);
  }
  .hero__info {
    margin-top: 1.5rem;
  }

  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }
  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 75px;
    }
  }
  .hero__social__text {
    ul {
      li {
        margin-bottom: 3rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: 1rem;
      /* .hero__name {
        font-size: 2.5rem;
      } */
      .intro_1 {
        font-size: 2.5rem;
      }
    }
    .hero__img {
      height: 200px;
    }
    .hero__info {
      margin-top: 1rem;
    }
    .hero__social {
      left: 0px;
      bottom: -15%;
      width: 20px;

      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello, This is</span>
            <span className="intro_1">Sarahmarie Hollenstein</span>
          </h1>
          <div className="hero__img">
            <img src={HeroImg} alt="" />
          </div>
          <div className="hero__info">
            <PText>
              <span className="yams">
                I've spent the last year learning about being a Full-Stack
                Developer. I'm currently applying this knowlege to personal
                projects. I am looking forward to any and all opportunites to
                take these exciting skills and provide value to the right
                business.
              </span>
            </PText>
            <Buttons
              btnLink="/projects"
              btnText="See My Work"
              outline={false}
            />
          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="Social Media Arrow" />
            </div>
            <div className="hero__social__text">
              <ul>
                <li>
                  <a
                    href="http://linkedin.com/in/sarahmarie-hollenstein-258374115/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LI
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/sholle7"
                    target="_blank"
                    rel="noreferrer"
                  >
                    TT
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/sarahmarie1976"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Git
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
