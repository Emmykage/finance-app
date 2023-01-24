import { Route, Routes } from 'react-router-dom';
import './App.css';
import BankAccount from './components/Accounts/BankAccount';
import InvestmentPreference from './components/Accounts/InvestmentPreference';
import InvestorAccount from './components/Accounts/InvestorAccount';
import RecurringDeposit from './components/Accounts/RecurringDeposit';
// import OfferingHeader from './components/header/OfferingHeader';
// import Header from './components/header/Header';
import MainLayout from './layouts/mainLayout';
import Nobanner from './layouts/Nobanner';
import OfferLayout from './layouts/offeringLayout';
import SignUp from './pages/SingUp';
import Account from './pages/users/Account';
import Home from './pages/users/Home';
import Offerings from './pages/users/Offerings';
// import Nav from './components/header/Nav';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainLayout><Home/></MainLayout> }></Route>
        <Route path='/offerings' element={<OfferLayout><Offerings/></OfferLayout>} />
        <Route path="signup" element={<SignUp/>}/>
        <Route path='account' element={<Nobanner><Account/></Nobanner>}>
        <Route path='bank_account' element={<BankAccount/>}/>
          <Route path='investment_preference' element={<InvestmentPreference/>}/>
          <Route path='investor_account' element={<InvestorAccount/>}/>
          <Route path='recurring_deposit' element={<RecurringDeposit/>}/>
          <Route path='wallet' element={<Account/>}/>
        </Route>

      </Routes>

    </div>
  );
}

export default App;
