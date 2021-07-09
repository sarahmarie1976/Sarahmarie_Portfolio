import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin-top: 2rem;

  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? 'transperant' : 'var(--teal-bl)'};
    padding: 0.7em 2em;
    border-radius: 7px;
    display: inline-block;
    border: 2px solid ${(props) => (props.outline ? 'var(--gray-1)' : 'black')};
    font-weight: bold;
    color: ${(props) => (props.outline ? 'var(--gray-1)' : 'black')};
  }
  @media only screen and (max-width: 768px) .button {
    font-size: 1.8rem;
  }
`;

export default function Buttons({
  btnLink = 'test',
  btnText = 'Test',
  outline = false,
}) {
  return (
    <ButtonStyle outline={outline}>
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </ButtonStyle>
  );
}
