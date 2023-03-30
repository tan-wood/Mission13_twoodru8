/* eslint-disable prettier/prettier */
import { useState } from 'react';
import data from './MovieData.json';

const MovieData = data.MovieData;

const MovieObjects = MovieData.map((m, i) => ({
  id: i,
  title: m,
}));

function MovieList() {
  const [listOMovies, setListOMovies] = useState(MovieObjects);

  return (
    <>
      <div className="text-center">
        <h3>Joel Hilton's Movie Collection</h3>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {/* doing a foreach loop */}
            {listOMovies.map((m) => (
              <tr key={m.id}>
                <td>{m.title.Title}</td>
                <td>{m.title.Year}</td>
                <td>{m.title.Director}</td>
                <td>{m.title.Rating}</td>
                <td>{m.title.Category}</td>
                <td>{m.title.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList;
