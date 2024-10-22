import { useContext } from "react";
import AppContext from "../provider/Context";

function Header() {
    const {movies} = useContext(AppContext);
    const genres = movies.flatMap((item) => item.genres);
    console.log(genres);
    const uniqueGenres = [...new Set(genres)];
    console.log(uniqueGenres);
    
// cÁCH 2: 
    const uniqueGenres2 = movies.reduce((gen, cur) => {
        cur.genres.forEach(element => {
            if(!gen.includes(element)){
                gen.push(element);
            }
        })
        return gen;
    }, []);
    console.log(uniqueGenres2);
    
  return (
    <div>
        <h1>Header</h1>
        <hr style={{color: 'green'}}></hr>
        <ul style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around', padding: '10px'}}>
            {
                uniqueGenres.map((genre) => (
                    <li key={genre}>{genre}</li>
                ))
            }
        </ul>
        <hr style={{color: 'green'}}></hr>

    </div>
  )
}

export default Header