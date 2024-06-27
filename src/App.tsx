import './App.css';
import { Route, Routes } from 'react-router-dom';
import { IndexPage } from './pages/IndexPage/container';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/react-movie-database" element={<IndexPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
