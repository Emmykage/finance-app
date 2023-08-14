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
import About from './pages/visitor/About';
// import Percentage from './components/charts/Percentage.tsx';
// import PieChart from './components/charts/Percentage.jsx';
// import ParentSize from '@visx/responsive/lib/components/ParentSize';
import PercentageChat from './components/charts/Percentage';
import Messages from './components/activities/Messages';
import InvestmentUpdates from './components/activities/InvestmentUpdates';
import Payments from './components/activities/Payments';
import Important from './components/activities/Important';
import Activities from './pages/users/Activities';
import AdminLayout from './layouts/AdminLayout'; 
import AHome from './pages/Admin/AdminHome';

// import Nav from './components/header/Nav';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/chart'} element={<PercentageChat/>}></Route>
        <Route path='/home' element={<MainLayout><Home/></MainLayout> }></Route>
        <Route path='/offerings' element={<OfferLayout><Offerings/></OfferLayout>} />
        <Route path="signup" element={<SignUp/>}/>
        <Route path="activities" element={<Activities/>}>
          <Route path='' element={<Messages/>} />
          <Route path='investment_updates' element={<InvestmentUpdates/>} />
          <Route path='payments' element={<Payments/>} />
          <Route path='important' element={<Important/>} />
        </Route>
        <Route path='account' >
          <Route path='bank_account' element={<Account><BankAccount/></Account> }/>
          <Route path='investment_preference' element={<Account><InvestmentPreference/></Account>}/>
          <Route path='investor_account' element={<Account><InvestorAccount/></Account>}/>
          <Route path='recurring_deposit' element={<Account><RecurringDeposit/></Account>}/>
          <Route path='' element={<Account><Wallet/></Account>}/>
          <Route path='wallet' element={<Account><Wallet/></Account>}/>
        </Route>

        <Route path='/' element={<VisitorLayout><VHome/></VisitorLayout>}/>
        <Route path="/how-it-works" element={<WorkLayout><HowItWorks/></WorkLayout>}/>
        <Route path="/performance" element={<GuestLayOut><Performance /> </GuestLayOut>}/>
        <Route path="/about" element={<GuestLayOut><About /></GuestLayOut>} />

        <Route path='admin'>
          <Route path='dashboard' element={<AdminLayout><AHome /></AdminLayout>} />
          
        </Route>
      </Routes>

    </div>
  );
}

export default App;
