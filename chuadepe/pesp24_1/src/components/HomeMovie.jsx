import Header from "./Header"
import ListMovies from "./ListMovies"
import Producers from "./Producers"

function HomeMovie() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <Header/>
            </div>
            <div className="col-md-3">
                <Producers/>
            </div>
            <div className="col-md-9">
                <ListMovies/>
            </div>
        </div>
    </div>
  )
}

export default HomeMovie