import React from "react";
import ReactDom from 'react-dom/client';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import App from "./App";

/* State */
import { Provider } from "react-redux";
import store from "./store";

/* Auths */
import LoginRoutes from "./components/auth/LoginRoutes";

/* Screens */
import HomeScreen from "./screens/HomeScreen";
import DashboardScreen from "./screens/DashbordScreen";
import UsersScreen from "./screens/users/UsersScreen";
import DepartmentScreen from "./screens/users/DepartmentScreen";
import RolesScreen from "./screens/users/RolesScreen";
import AttendanceScreen from "./screens/attendance/AttendanceScreen";
import LeavesScreen from "./screens/attendance/LeavesScreen";
import HolidaysScreen from "./screens/attendance/HolidaysScreen";


const root = ReactDom.createRoot(document.getElementById('root'))

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route element={<App />}>
         <Route index={true} path="/" element={<HomeScreen />} />
         <Route element={<LoginRoutes />}>
            <Route path="/dashboard" element={<DashboardScreen />} />
            <Route path="/users" element={<UsersScreen />} />
            <Route path="/departments" element={<DepartmentScreen />} />
            <Route path="/roles" element={<RolesScreen />} />
            <Route path="/attendance" element={<AttendanceScreen />} />
            <Route path="/leaves" element={<LeavesScreen />} />
            <Route path="/holidays" element={<HolidaysScreen />} />

         </Route>

      </Route>
   )
)

root.render(
   <React.StrictMode>
      <Provider store={store}>
         <RouterProvider router={router} />
      </Provider>
   </React.StrictMode>
)