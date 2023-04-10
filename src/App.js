import { Route, Routes } from 'react-router-dom';
import './App.css';
import BankAccount from './components/Accounts/BankAccount';
import InvestmentPreference from './components/Accounts/InvestmentPreference';
import InvestorAccount from './components/Accounts/InvestorAccount';
import RecurringDeposit from './components/Accounts/RecurringDeposit';
import Wallet from './components/Accounts/Wallet';
// import OfferingHeader from './components/header/OfferingHeader';
// import Header from './components/header/Header';
import MainLayout from './layouts/mainLayout';
import Nobanner from './layouts/Nobanner';
import OfferLayout from './layouts/offeringLayout';
import VisitorLayout from './layouts/VisitoLayout';
import SignUp from './pages/SingUp';
import Account from './pages/users/Account';
import Home from './pages/users/Home';
import VHome from './pages/visitor/Home';
import Offerings from './pages/users/Offerings';
import HowItWorks from './pages/visitor/HowItWorks';
import WorkLayout from './layouts/WorkLayout';
import Performance from './pages/visitor/Performance';
import GuestLayOut from './layouts/GuestLayout';
// import Nav from './components/header/Nav';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainLayout><Home/></MainLayout> }></Route>
        <Route path='/offerings' element={<OfferLayout><Offerings/></OfferLayout>} />
        <Route path="signup" element={<SignUp/>}/>
        <Route path='account' >
          <Route path='bank_account' element={<Account><BankAccount/></Account> }/>
          <Route path='investment_preference' element={<Account><InvestmentPreference/></Account>}/>
          <Route path='investor_account' element={<Account><InvestorAccount/></Account>}/>
          <Route path='recurring_deposit' element={<Account><RecurringDeposit/></Account>}/>
          <Route path='' element={<Account><Wallet/></Account>}/>
          <Route path='wallet' element={<Account><Wallet/></Account>}/>
            {/* visitors layouts */}
        </Route>
        {/* <Route path='/investment' element={<Ho} */}
        <Route path='/investments' element={<VisitorLayout><VHome/></VisitorLayout>}/>
        <Route path="/how-it-works" element={<WorkLayout><HowItWorks/></WorkLayout>}/>
        <Route path="/performance" element={<GuestLayOut><Performance /> </GuestLayOut>}/>
      </Routes>

    </div>
  );
}

export default App;
