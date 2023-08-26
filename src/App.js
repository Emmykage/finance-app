import { Route, Routes } from 'react-router-dom';
import './App.css';
import BankAccount from './components/Accounts/BankAccount';
import InvestmentPreference from './components/Accounts/InvestmentPreference';
import InvestorAccount from './components/Accounts/InvestorAccount';
import RecurringDeposit from './components/Accounts/RecurringDeposit';
import Wallet from './components/Accounts/Wallet';

import Account from './pages/users/Account';
import Home from './pages/users/Home';
import VHome from './pages/visitor/Home';
import Offerings from './pages/users/Offerings';
import HowItWorks from './pages/visitor/HowItWorks';
import Performance from './pages/visitor/Performance';
import GuestLayOut from './layouts/GuestLayout';
import About from './pages/visitor/About';
import PercentageChat from './components/charts/Percentage';
import Messages from './components/activities/Messages';
import InvestmentUpdates from './components/activities/InvestmentUpdates';
import Payments from './components/activities/Payments';
import Important from './components/activities/Important';
import Activities from './pages/users/Activities';
import AdminLayout from './layouts/AdminLayout'; 
import AHome from './pages/Admin/AdminHome';
import Login from './pages/authentication/login';
import Signup from './pages/authentication/SingUp';
import AddAsset from './pages/Admin/assets/AddAsset';
import ClientsPage from './pages/Admin/clients/ClientsPage';
import Clients from './pages/Admin/clients/Clients';
import ConfirmAccount from './pages/authentication/confirm_account';
import GetStarted from './pages/GetStarted';
import AssetDetails from './pages/visitor/AssetDetails';
import UserLayout from './layouts/UserLayout';
import Loader from './components/loader/Loader';
import InvestAssetDetails from './pages/users/InvestAssetDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/chart'} element={<PercentageChat/>}></Route>
        <Route path='/home' element={<UserLayout><Home/></UserLayout> }></Route>
        <Route path='invest_asset' element={<UserLayout><InvestAssetDetails/></UserLayout> }/>
        <Route path='/offerings' element={<UserLayout><Offerings/></UserLayout>} />
        <Route path="activities" element={<Activities/>}>
          <Route path='' element={<Messages/>} />
          <Route path='investment_updates' element={<InvestmentUpdates/>} />
          <Route path='payments' element={<Payments/>} />
          <Route path='important' element={<Important/>} />
        </Route>
        <Route path='account'>
          <Route path='bank_account' element={<Account><BankAccount/></Account> }/>
          <Route path='investment_preference' element={<Account><InvestmentPreference/></Account>}/>
          <Route path='investor_account' element={<Account><InvestorAccount/></Account>}/>
          <Route path='recurring_deposit' element={<Account><RecurringDeposit/></Account>}/>
          <Route path='' element={<Account><Wallet/></Account>}/>
          <Route path='wallet' element={<Account><Wallet/></Account>}/>
        </Route>

        <Route path='/' element={<GuestLayOut><VHome/></GuestLayOut>}/>
        <Route path="/how-it-works" element={<GuestLayOut><HowItWorks/></GuestLayOut>}/>
        <Route path="/performance" element={<GuestLayOut><Performance /> </GuestLayOut>}/>
        <Route path="/about" element={<GuestLayOut><About /></GuestLayOut>} />
        <Route path='/asset-details' element={<GuestLayOut><AssetDetails/></GuestLayOut>}/>
        <Route path='admin'>
          <Route path='dashboard' element={<AdminLayout><AHome /></AdminLayout>} />
          <Route path='add_asset' element={<AdminLayout><AddAsset/></AdminLayout>} />
          <Route path='client/:id' element={<AdminLayout><ClientsPage/></AdminLayout>} />
          <Route path='clients' element={<AdminLayout><Clients/></AdminLayout>}/>

        </Route>
        <Route path='/get_started' element={<GetStarted />} />
        <Route path='loader' element={<Loader/>}/>
        <Route path='auth'>
          <Route path='sign_up' element={<Signup/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='confirmation' element={<ConfirmAccount/>}/>

        </Route>
      </Routes>

    </div>
  );
}

export default App;
