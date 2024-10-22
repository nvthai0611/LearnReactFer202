import { useContext } from "react"
import AppContext from "../provider/Context"

function Producers() {
    const {producers} = useContext(AppContext);
  return (
    <div>
        <h1>Producers</h1>
        <ul>
            {
                producers.map((pro) => (
                    <li key={pro.id}>{pro.name}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default Producers