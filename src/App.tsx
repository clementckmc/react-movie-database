import './App.css';
import { Route, Routes } from 'react-router-dom';
import { IndexPage } from './pages/IndexPage/container';

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
