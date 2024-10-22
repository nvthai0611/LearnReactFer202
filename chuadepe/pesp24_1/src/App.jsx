import './App.css'
import {Routes, Route} from 'react-router-dom'
import HomeMovie from './components/HomeMovie'
function App() {

  return (
    <>
        <Routes>
            <Route path='/movie' element={<HomeMovie/>}/>
        </Routes>
    </>
  )
}

export default App
