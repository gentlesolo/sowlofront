import './App.css';
import HomePage from './pages/HomePage';
// import Dashboard from "./pages/Dashboard";
import Navbar from "./components/navbar/Navbar";
import React from "react";
import Modal from 'react-modal';
import BaseRouter from "./baseRouter";

import Footer from "./components/footer/Footer";
import Login from "./auth/login";
import Register from "./auth/Register";
import Loginn from "./auth/Loginn";
import PersistLogin from "./auth/PersistLogin"
import { Routes, Route } from 'react-router-dom';
import RequireAuth from "./auth/RequireAuth";
import Layout from "./Layout";
// import {Campaign} from "@mui/icons-material";
import Calendar from "./components/Dashboard/Calendar";
import Admin from "./components/admin/Admin";
import Socialmedia from "./components/socialmedia/Socialmedia";
import Campaign from "./components/campaign/Campaign";
import CreateCampaign from "./components/Dashboard/CreateCampaign";
import Dashboard from "./components/Dashboard/Dashboard";
import NewSocialMedia from "./components/socialmedia/NewSocialMedia";
import NewHomePage from "./pages/NewHomePage";
import NewCampaign from "./components/campaign/NewCampaign";
import CampaignSingleFeed from "./components/campaign/CampaignSingleFeed";
import CampaignSingle from "./components/campaign/CampaignSingle";
// import Campaign from "./components/socialmedia/Socialmedia";


const ROLES = {
    'User': 'ROLE_USER',
    'Editor': 'ROLE_VENDOR',
    'Admin': 'ROLE_ADMIN'
}

//Modal.setAppElement('#root');

function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout/>}>
            <Route path="/" element={<NewHomePage/>}/>
            <Route path="login" element={<Loginn/>}/>
            <Route path="register" element={<Register/>}/>

            <Route path="create-campaign" element={<CreateCampaign />}/>

            <Route path="dashboard/calendar" element={<Calendar/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>

            {/*<Route element={<PersistLogin/>}>*/}

            {/*    <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>*/}
            {/*        /!*<Route path="campaign" element={<Campaign />}/>*!/*/}
            {/*        /!*<Route path="dashboard" element={<Dashboard/>}/>*!/*/}
            {/*        /!*<Route path="dashboard/calendar" element={<Calendar/>}/>*!/*/}
            {/*    </Route>*/}


            {/*    <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>*/}
            {/*        /!*<Route path="/" element={<HomePage/>}/>*!/*/}
            {/*        <Route path="dashboard/admin" element={<Admin/>}/>*/}
            {/*        /!*<Route path="campaign" element={<NewCampaign />}/>*!/*/}

            {/*        /!*<Route path="dashboard/calendar" element={<Calendar/>}/>*!/*/}
            {/*    </Route>*/}
            {/*</Route>*/}
        </Route>

        <Route>
            {/*<Route path="campaign" element={<Campaign />}/>*/}
            <Route path="social-media" element={<NewSocialMedia/>}/>
            <Route path="create-campaign" element={<CreateCampaign />}/>
            <Route path="campaign-single" element={<CampaignSingle />}/>
            <Route path="campaign" element={<NewCampaign />}/>

            {/*<Route path="dashboard/admin" element={<Admin/>}/>*/}
        </Route>
    </Routes>
  );
}

export default App;
