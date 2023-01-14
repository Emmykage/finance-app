import { Route, Routes } from 'react-router-dom';
import './App.css';
// import OfferingHeader from './components/header/OfferingHeader';
// import Header from './components/header/Header';
import MainLayout from './layouts/mainLayout';
import OfferLayout from './layouts/offeringLayout';
import Home from './pages/users/Home';
import Offerings from './pages/users/Offerings';
// import Nav from './components/header/Nav';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainLayout><Home/></MainLayout> }></Route>
        <Route path='/offerings' element={<OfferLayout><Offerings/></OfferLayout>} />
      </Routes>

    </div>
  );
}

export default App;
