import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import {
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";

const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));
const Member = lazy(() => import("../pages/MembersManagement/member.js"));
const Bonus = lazy(() => import("../pages/Bonus&ReferralManagement/Bonus"));
const Setting = lazy(() => import("../pages/settingPage/setting"));
// const Sidebar = lazy(() => import("../components/sidebar"));
const Login = lazy(() => import("../pages/login/loginForm"));
const Forget = lazy(() => import("../pages/forgetPassword/forgetForm"));
const UpdatePassword = lazy(()=>import("../pages/forgetPassword/updatePassword"))


const router = createBrowserRouter(createRoutesFromChildren(
  <Route>
    <Route path="/" element={<Navigate to="/login" />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/member" element={<Member />} />
    <Route path="/bonus" element={<Bonus />} />
    <Route path="/setting" element={<Setting />} />
    <Route path="/login" element={<Login />} />
    <Route path="/forgetPassword" element={<Forget />}/>
    <Route path="/updatePassword" element={<UpdatePassword/>}/>
</Route>
));
export default router;
