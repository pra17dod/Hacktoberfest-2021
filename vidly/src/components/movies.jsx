import React from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends React.Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (m) => {
    console.log(m);
    const movies = this.state.movies.filter((mov) => mov._id !== m._id);
    this.setState({ movies: movies });
  };

  render() {
    if (this.state.movies.length === 0)
      return <p>There Are No Movies In The Database</p>;

    return (
      <div className="container">
        <p> Showing {this.state.movies.length} Movies From Database</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((m) => (
              <tr key={m._id}>
                <td>{m.title}</td>
                <td>{m.genre.name}</td>
                <td>{m.numberInStock}</td>
                <td>{m.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(m)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
