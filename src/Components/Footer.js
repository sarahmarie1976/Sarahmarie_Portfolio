import React from 'react';
import styled from 'styled-components';

import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;

  .container {
    display: flex;
    gap: 10rem;
  }
  .footer__1 {
    flex: 2;
  }
  .footer__2,
  .footer__3,
  .footer__4 {
    flex: 1;
  }
  
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: center;
    padding: 1rem 0 ;
    margin-top: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .para {
      margin-left: 0;
    }
  }
 
   
  
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col">
          <h1 className="footer__col1__title">Sarahmarie Hollenstein</h1>
          <PText>
            I am a Full-Stack Developer from Saint Louis, Missouri. I am finding
            creative ways to learn and build both Front-End and Back-End
            designs.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                type: 'Link',
                path: '/',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '',
                path: '',
              },
              {
                title: 'techKitty1003@gmail.com',
                path: 'mailto:techKitty1003@gmail.com',
              },
              {
                title: 'Saint Louis, Missouri',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'LinkedIn',
                path:
                  'http://linkedin.com/in/sarahmarie-hollenstein-258374115/',
              },
              {
                title: 'Twitter',
                path: 'https://twitter.com/sholle7',
              },
              {
                title: 'GitHub',
                path: 'https://github.com/sarahmarie1976',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <span id="copyright__container">
          <div className="container">
            <PText>
              © 2021 - Sarahmarie Hollenstein | Designed By Saramatic
            </PText>
          </div>
        </span>
      </div>
    </FooterStyle>
  );
}
