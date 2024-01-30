import { Route, Routes } from 'react-router-dom';
import './App.css';
import BankAccount from './components/Accounts/BankAccount';
import InvestmentPreference from './components/Accounts/InvestmentPreference';
import InvestorAccount from './components/Accounts/InvestorAccount';
import RecurringDeposit from './components/Accounts/RecurringDeposit';
import Wallet from './components/Accounts/wallet/Wallet';

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
// import CheckoutModal from './components/modals/CheckoutModal';
import Orders from './pages/Admin/orders/Orders';
import Assets from './pages/Admin/assets/Assets';
import AlertMessages from './pages/Admin/messages/AlertMessages';
import Analytics from './pages/Admin/analytics/Analytics';
import Reports from './pages/Admin/reports/Reports';
import UserAssetDetails from './pages/users/AssetDetails';
import AssetView from './pages/Admin/assets/AssetView';
import AdminSignUp from './pages/authentication/AdminSignUp';
import AdminLogin from './pages/authentication/AdminLogin';
import Timer from './components/misc/Timer';
import Earnings from './components/Accounts/wallet/Earnings';
import Royalties from './components/Accounts/wallet/Royalties';
import WalletDetails from './components/Accounts/wallet/WalletDetails';
import Investments from './components/Accounts/wallet/Investments';
import Investment from './pages/visitor/Investment';
import History from './components/charts/History';
import PerformanceChart from './components/charts/Performance';
import AnnualReturn from './components/charts/AnnualReturn';
import RealEstate from './pages/component/offers/RealEstate';
import Crypto from './pages/component/offers/Crypto';
import PortfolioItems from './pages/Admin/clients/PortfolioItems';
import Portfolios from './pages/Admin/Portfolios';
import Settings from './pages/Admin/settings/Settings';
import PortfolioComponent from './components/Portfolio';
import Support from './pages/visitor/Support';
import NotFound from './pages/NotFound';
import SupportDeposit from './components/support/SupportDeposit';
import SupportAccount from './components/support/SupportAccount';
import SupportCapital from './components/support/SupportCapital';
import SupportInvest from './components/support/SupportInvest';
import SupportManage from './components/support/SupportManage';
import SupportSecurity from './components/support/SupportSecurity';
import Learn from './pages/users/Learn';
import ComposeMessage from './pages/Admin/messages/ComposeMessage';
import DepositPage from './pages/users/DepositPage';
import WithdrawPage from './pages/users/WithdrawPage';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='*' element={<NotFound/>}/>
        <Route path="/chart" element={<PercentageChat />} />
        <Route path="/home" element={<UserLayout><Home /></UserLayout>} />
        <Route path="invest_asset" element={<UserLayout><InvestAssetDetails /></UserLayout>} />
        <Route path="/offerings" element={<UserLayout><Offerings /></UserLayout>} />
        <Route path="/learn" element={<UserLayout><Learn /></UserLayout>} />
        <Route path="/details/:id" element={<UserLayout><UserAssetDetails /></UserLayout>} />
        <Route path="activities" element={<Activities />}>
          <Route path="" element={<Messages />} />
          <Route path="investment_updates" element={<InvestmentUpdates />} />
          <Route path="payments" element={<Payments />} />
          <Route path="important" element={<Important />} />
        </Route>
        <Route path="account" element={<Account />}>
          <Route path="bank_account" element={<><BankAccount /></>} />
          <Route path="investment_preference" element={<><InvestmentPreference /></>} />
          <Route path="investor_account" element={<><InvestorAccount /></>} />
          <Route path="recurring_deposit" element={<><RecurringDeposit /></>} />
          {/* <Route path="wallet" element={<><Wallet /></>} /> */}
          <Route path="wallet" element={<Wallet />}>
            <Route path="details" element={<WalletDetails />} />
            <Route path="earnings" element={<Earnings />} />
            <Route path="investment" element={<Investments />} />
            <Route path="royalties" element={<Royalties />} />
          </Route>
          {/* <Route path='wallet' element={<Account><Wallet/></Account>}/> */}
        </Route>
        <Route path='deposit' element={<DepositPage/>}/>
        <Route path='withdraw' element={<WithdrawPage/>}/>

        <Route path="/" element={<GuestLayOut><VHome /></GuestLayOut>} />
        <Route path="/investment" element={<GuestLayOut><Investment /></GuestLayOut>} />
        <Route path="/real_estates" element={<GuestLayOut><RealEstate /></GuestLayOut>} />
        <Route path="/crypto" element={<GuestLayOut><Crypto /></GuestLayOut>} />
        <Route path="/how-it-works" element={<GuestLayOut><HowItWorks /></GuestLayOut>} />
        <Route path="/performance" element={(<GuestLayOut><Performance /></GuestLayOut>)}>
          <Route path="history" element={<History />} />
          <Route path="performance" element={<PerformanceChart />} />
          <Route path="annual_return" element={<AnnualReturn />} />
        </Route>
        <Route path="/support" element={<GuestLayOut><Support /></GuestLayOut>} />
        <Route path="/support/get-started" element={<GuestLayOut><SupportDeposit /></GuestLayOut>} />
        <Route path="/support/set-up-account" element={<GuestLayOut><SupportAccount /></GuestLayOut>} />
        <Route path="/support/explore" element={<GuestLayOut><SupportAccount /></GuestLayOut>} />
        <Route path="/support/capital" element={<GuestLayOut><SupportCapital /></GuestLayOut>} />
        <Route path="/support/investment" element={<GuestLayOut><SupportInvest /></GuestLayOut>} />
        <Route path="/support/manage-portfolio" element={<GuestLayOut><SupportManage /></GuestLayOut>} />
        <Route path="/support/get-support-security" element={<GuestLayOut><SupportSecurity /></GuestLayOut>} />
        <Route path="/about" element={<GuestLayOut><About /></GuestLayOut>} />
        <Route path="/asset-details/:id" element={<GuestLayOut><AssetDetails /></GuestLayOut>} />
        <Route path="admin">
          <Route path="portfolios/:id" element={<AdminLayout><Portfolios /></AdminLayout>} />
          <Route path="dashboard" element={<AdminLayout><AHome /></AdminLayout>} />
          <Route path="add_asset" element={<AdminLayout><AddAsset /></AdminLayout>} />
          <Route path="client/:id" element={<AdminLayout><ClientsPage /></AdminLayout>} />
          <Route path="client/:id/portfolio/:portfolio_id" element={<AdminLayout><PortfolioItems /></AdminLayout>} />
          <Route path="clients" element={<AdminLayout><Clients /></AdminLayout>} />
          <Route path="orders" element={<AdminLayout><Orders /></AdminLayout>} />
          <Route path="orders/:id" element={<AdminLayout><PortfolioComponent /></AdminLayout>} />
          <Route path="assets" element={<AdminLayout><Assets /></AdminLayout>} />
          <Route path="assets/:id" element={<AdminLayout><AssetView /></AdminLayout>} />
          <Route path="messages" element={<AdminLayout><AlertMessages /></AdminLayout>} />
          <Route path="messages/compose_message" element={<AdminLayout><ComposeMessage /></AdminLayout>} />
          <Route path="analytics" element={<AdminLayout><Analytics /></AdminLayout>} />
          <Route path="reports" element={<AdminLayout><Reports /></AdminLayout>} />
          <Route path="settings" element={<AdminLayout><Settings /></AdminLayout>} />

        </Route>
        <Route path="/get_started" element={<GetStarted />} />
        <Route path="loader" element={<Loader />} />
        <Route path="auth">
          <Route path="sign_up" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="admin_login" element={<AdminLogin />} />
          <Route path="admin_sign_up" element={<AdminSignUp />} />
          <Route path="confirmation" element={<ConfirmAccount />} />

        </Route>
        <Route path="/timer" element={<Timer />} />

      </Routes>

    </div>
  );
}

export default App;
