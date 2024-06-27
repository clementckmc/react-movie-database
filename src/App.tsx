import './App.css';
import { Route, Routes } from 'react-router-dom';
import { IndexPage } from './pages/IndexPage/container';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { NotFoundPage } from './pages/NotFoundPage/container';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/react-movie-database" element={<IndexPage />}></Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
