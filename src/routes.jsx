import { ADMIN_DASHBOARD_ROUTE, APPEAL_SEND_ROUTE, CONTRACT_VIEW_ROUTE, HOME_ROUTE, PRIVACYPOLICY_ROUTE, REGISTRATION_ROUTE, SERVICEACCEPTABLEPOLICY_ROUTE, TERMOFUSE_ROUTE, USER_DASHBOARD_ACCOUNT_ROUTE, USER_DASHBOARD_CONTRACT_ADD_ROUTE, USER_DASHBOARD_CONTRACT_ROUTE, USER_DASHBOARD_OCR_ROUTE, USER_DASHBOARD_PAY_ROUTE, USER_DASHBOARD_ROUTE } from "./utils/consts";
import Auth from "./pages/site/Auth";
import Home from "./pages/Home";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserDashboard from "./pages/user/UserDashboard";
import UserContractView from "./pages/user/view/ContractView";
import AccountView from "./pages/user/view/AccountView";
import PayView from "./pages/user/view/PayView";
import Contract from "./pages/user/add/Contract";
import ContractView from "./pages/site/ContractView";
import OCR from "./pages/user/view/OCR";
import HomeAppeal from "./pages/site/Appeal";
import HomePrivacypolicy from "./pages/site/Privacypolicy";
import HomeTermofuse from "./pages/site/Termofuse";
import HomeServiceAcceptablePolicy from "./pages/site/ServiceAcceptablePolicy";

export const authRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: ADMIN_DASHBOARD_ROUTE,
        Component: AdminDashboard
    },
    {
        path: USER_DASHBOARD_ROUTE,
        Component: UserDashboard
    },
    {
        path: USER_DASHBOARD_PAY_ROUTE,
        Component: PayView
    },
    {
        path: USER_DASHBOARD_CONTRACT_ROUTE,
        Component: UserContractView
    },
    {
        path: USER_DASHBOARD_CONTRACT_ADD_ROUTE,
        Component: Contract
    },
    {
        path: USER_DASHBOARD_ACCOUNT_ROUTE,
        Component: AccountView
    },
    {
        path: USER_DASHBOARD_OCR_ROUTE,
        Component: OCR
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
];

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },,
    {
        path: PRIVACYPOLICY_ROUTE,
        Component: HomePrivacypolicy
    },,
    {
        path: TERMOFUSE_ROUTE,
        Component: HomeTermofuse
    },,
    {
        path: SERVICEACCEPTABLEPOLICY_ROUTE,
        Component: HomeServiceAcceptablePolicy
    },
    {
        path: CONTRACT_VIEW_ROUTE + '/:id',
        Component: ContractView
    },
    {
        path: APPEAL_SEND_ROUTE + '/:id',
        Component: HomeAppeal
    },
];