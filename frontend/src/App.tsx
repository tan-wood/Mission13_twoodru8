/* eslint-disable prettier/prettier */
import './App.css';
import { Link } from 'react-router-dom';
import MovieList from './Movies';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/MyPodcasts" className="nav-link">
              My Podcasts
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/MovieCollection" className="nav-link">
              Movie Collection
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <>
      <Nav />
      <div className="text-center ">
        <h1>Welcome to the Joel Hilton Site</h1>
        <img src="./JoelHiltonHeadshot.jpg" alt="" />
        <h3>This site is used to be an awesome movie website</h3>
      </div>
    </>
  );
}

export function Podcasts() {
  return (
    <>
      <Nav />
      <div className="text-center">
        <h1>My Podcasts</h1>
        <a href="https://baconsale.com/" target="_blank" rel="noreferrer" className="h1 align-middle">
          The Best podcast ever!
        </a>
      </div>
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
