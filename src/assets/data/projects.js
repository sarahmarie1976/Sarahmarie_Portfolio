import { v4 as uuidv4 } from 'uuid';

import DarkModeImg from '../images/Dark_Mode.png';
import ProjectImg from '../images/resumeImg.jpg';
import TicTacToeImg from '../images/ticTacToe.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Advanced React - React Plants',
    desc:
      'In this project I explored some advance React topics such as class components,  custom hooks (dark mode hook), & React testing library. ',
    github:
      'Github Link:  https://github.com/sarahmarie1976/web-sprint-challenge-advanced-react',
    img: DarkModeImg,
  },
  {
    id: uuidv4(),
    name: 'State Management Surfs',
    desc:
      'I built a Smurf village utilizing Redux as my State management by using the reducer pattern and redux',
    img: 'https://i.postimg.cc/D0mwzjf8/the-smurfs.jpg',
    github:
      'Github Link: https://github.com/sarahmarie1976/web-sprint-challenge-advanced-state-management',
  },
  {
    id: uuidv4(),
    name: 'Tic Tac Toe',
    desc: 'Want to play a game of Tic Tac Toe?',
    img: TicTacToeImg,
    github: 'Github Link: https://github.com/sarahmarie1976/tic-tac-toe-2',
  },
  {
    id: uuidv4(),
    name: 'NASA Photo of the Day',
    desc: 'Worked with NASA API to fetch the "Astronomy Photo Of The Day" .',
    img:
      'https://apod.nasa.gov/apod/image/2107/IMG_2021_07_08_29558_APOD1024.jpg',
    github:
      'Github Link: https://github.com/sarahmarie1976/nasa-photo-of-the-day',
  },
  {
    id: uuidv4(),
    name: 'Digital Resume',
    desc:
      'This project I built a digital resume from scratch. I took an old resume to practice with less and creating a table for my qualifications. ',
    img: ProjectImg,
    github:
      'Github Link: https://github.com/sarahmarie1976/Preprocessing-I/tree/master',
  },
];

export default projects;
