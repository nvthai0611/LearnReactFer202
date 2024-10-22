import { useContext } from "react"
import AppContext from "../provider/Context";

function ListMovies() {
    const {movies,getStarById} = useContext(AppContext);
    console.log(movies);
    
  return (
    <div>
        <h1>List Movie</h1>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>RELASE</th>
                    <th>DES</th>
                    <th>PRODUCER</th>
                    <th>DIRECTOR</th>
                    <th>GENES</th>
                    <th>STAR</th>
                </tr>
            </thead>
            <tbody>
                {
                    movies?.map((movie) => (
                        <tr key={movie.id}>
                            <td>{movie.id}</td>
                            <td>{movie.title}</td>
                            <td>{movie.release}</td>
                            <td>{movie.description}</td>
                            <td>{movie.producer}</td>
                            <td>{movie.director}</td>
                            <td>{movie.genres.map((genre) => (<div key={genre}>{genre}</div>))}</td>
                            <td>{movie.stars.map((star, index) => (
                                <div key={index}><div>{index + 1} - {getStarById(star)}</div>
                                </div>
                            ))}
                             <div style={{textAlign: 'right'}}><a href="">AddStar</a></div></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListMovies