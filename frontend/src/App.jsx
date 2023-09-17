import { useSelector } from "react-redux";
import AdminPanel from "./components/template/AdminPanel";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
// import Footer from "./components/template/Footer";
// import Header from "./components/template/Header";
import { Outlet } from "react-router-dom";

const App = () => {
   const {userInfo} = useSelector((state) => state.auth)

   return (  
      <>
         {userInfo ? (
            <AdminPanel>
               <Outlet />
            </AdminPanel>
         ) : (
            <>
               <Outlet />
            </>
         )}
         <ToastContainer />
      </>
   );
}
 
export default App;