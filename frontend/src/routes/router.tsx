import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import {
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";

const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));
const Member = lazy(() => import("../pages/MembersManagement/member.js"));
const Bonus = lazy(() => import("../pages/BonusManagement/Bonus"));
const Setting = lazy(() => import("../pages/Settings/setting"));
const Login = lazy(() => import("../pages/Login/loginForm"));
const Forget = lazy(() => import("../pages/ForgetPassword/forgetForm"));
const UpdatePassword = lazy(()=>import("../pages/ForgetPassword/updatePassword"))
const AddMember =lazy(()=>import("../pages/MembersManagement/addMember"))
const EditMember = lazy(()=>import("../pages/MembersManagement/editMember"))


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
    <Route path="/member/addMember" element={<AddMember/>}/>
    <Route path="/member/editMember" element={<EditMember/>}/>
</Route>
));
export default router;
