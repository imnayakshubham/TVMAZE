import './App.css';
import { Header } from './Components/Header/Header';
import { ShowsList } from './Components/Shows/ShowsList';
import { Route, Routes } from 'react-router-dom';
import { ShowDetail } from './Components/ShowDetail/ShowDetail';

function App() {
  return (
    <div className="app">
      <Header />
      <div className='app__container'>
        <Routes>
          <Route path="/" element={<ShowsList />} />
          <Route path="show/:id" element={<ShowDetail />} />
          <Route path="*" element={<div className="page__not__found"><h2>404 Page Not Found</h2></div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
