/* eslint-disable prettier/prettier */
import './App.css';
import { Link } from 'react-router-dom';
import MovieList from './Movies';

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/MyPodcasts">My Podcasts</Link>
        </li>
        <li>
          <Link to="/MovieCollection">Movie Collection</Link>
        </li>
      </ul>
    </nav>
  );
}

function Home() {
  return (
    <>
      <Nav />
      <h1>Welcome to the Joel Hilton Site</h1>
      <img src="./JoelHiltonHeadshot.jpg" alt="" />
      <h3>This site is used to be an awesome movie website</h3>
    </>
  );
}

export function Podcasts() {
  return (
    <>
      <Nav />
      <h1>My Podcasts</h1>
      <a href="https://baconsale.com/" target="_blank" rel="noreferrer">
        The Best podcast ever!
      </a>
    </>
  );
}

export function MovieCollection() {
  return (
    <>
      <Nav />
      <MovieList />
    </>
  );
}

export function App() {
  return (
    <div>
      <Home />
    </div>
  );
}
