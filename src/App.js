import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Header from './components/header/Header';
import MainLayout from './layouts/mainLayout';
import Home from './pages/users/Home';
// import Nav from './components/header/Nav';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainLayout><Home/></MainLayout> }></Route>
      </Routes>

    </div>
  );
}

export default App;
