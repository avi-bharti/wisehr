import { useEffect } from "react";
// import '../../assets/bootstrap.min.css';
import '../../assets/main.css';
// import '../../assets/icons.min.css';
import { Link, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../slices/userApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { logout as revokeCredentials } from "../../slices/authSlice";
import { toast } from 'react-toastify';

const AdminPanel = ({children}) => {

  /* Manage logout */
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();
  
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const res = await logout().unwrap();
      dispatch(revokeCredentials())
      navigate('/')
    } catch (error) {
      toast.error(error?.data?.message || error.message)
    }
  }

    useEffect(() => {
        // Initialize your code here when the component mounts
        initializeSidebar();
        initializeMenuToggle();
        initializeSearchButton();
        initializeResizeListener();
        initializeThemeToggler();
        initializeSubMenuToggle();
      }, []);
    
      function initializeSidebar() {
        const sideLinks = document.querySelectorAll('.sidebar .side-menu li:not(.active) a:not(.logout,.sub)');
        const subMenus = document.querySelectorAll('.sidebar .side-menu .sub-menu');
        const subMenuLinks = document.querySelectorAll('.sidebar .side-menu .sub-menu .submenu-active');
        sideLinks.forEach(item => {
          const li = item.parentElement;
          item.addEventListener('click', () => {
            sideLinks.forEach(i => {
              i.parentElement.classList.remove('active');
            });
            li.classList.add('active');
            subMenus.forEach(i => {
              i.classList.remove('open');
            });
            subMenuLinks.forEach(i => {
              i.classList.remove('submenu-active');
            });
            if(li.nextSibling.classList.contains('sub-menu')){
              li.nextSibling.classList.add('open');
            }
          });
        });
      }
    
      function initializeMenuToggle() {
        const menuBar = document.querySelector('.content nav .bx.bx-menu');
        const sideBar = document.querySelector('.sidebar');
    
        menuBar.addEventListener('click', (e) => {
          e.stopImmediatePropagation();
          sideBar.classList.toggle('close');
        });
      }
    
      function initializeSearchButton() {
        const searchBtn = document.querySelector('.content nav form .form-input button');
        const searchBtnIcon = document.querySelector('.content nav form .form-input button .bx');
        const searchForm = document.querySelector('.content nav form');
    
        searchBtn.addEventListener('click', (e) => {
          if (window.innerWidth < 576) {
            e.preventDefault();
            searchForm.classList.toggle('show');
            if (searchForm.classList.contains('show')) {
              searchBtnIcon.classList.replace('bx-search', 'bx-x');
            } else {
              searchBtnIcon.classList.replace('bx-x', 'bx-search');
            }
          }
        });
      }
    
      function initializeResizeListener() {
        window.addEventListener('resize', () => {
          const sideBar = document.querySelector('.sidebar');
    
          if (window.innerWidth < 768) {
            sideBar.classList.add('close');
          } else {
            sideBar.classList.remove('close');
          }
    
          const searchBtnIcon = document.querySelector('.content nav form .form-input button .bx');
          const searchForm = document.querySelector('.content nav form');
    
          if (window.innerWidth > 576) {
            searchBtnIcon.classList.replace('bx-x', 'bx-search');
            searchForm.classList.remove('show');
          }
        });
      }
    
      function initializeThemeToggler() {
        const toggler = document.getElementById('theme-toggle');
    
        toggler.addEventListener('change', function () {
          if (this.checked) {
            document.body.classList.add('dark');
          } else {
            document.body.classList.remove('dark');
          }
        });
      }

      function initializeSubMenuToggle() {
        const subMenus = document.querySelectorAll('.sidebar .side-menu .sub-menu .sub');
        subMenus.forEach(item => {
          item.addEventListener('click', () => {
            subMenus.forEach(i => {
              i.classList.remove('submenu-active');
            });
            item.classList.add('submenu-active');
            
          });
        });
      }


   return (  
    <>
      <div className="sidebar">
        <a href="#" className="logo">
        {/* <i className='bx bx-doughnut-chart'></i> */}
        <i className='bx bxs-label' ></i>
        <div className="logo-name"><span>Wise</span>HR</div>
        </a>
        <ul className="side-menu">
            <li><Link to="/dashboard"><i className='bx bxs-dashboard'></i>Dashboard</Link></li>
            <li><Link to='#'><i className='bx bx-group'></i>Users</Link></li>
              <ul className="sub-menu">
                <li><Link to='/users' className="sub">Users</Link></li>
                <li><Link to='/departments' className="sub">Departments</Link></li>
                <li><Link to='/roles' className="sub">Roles</Link></li>
              </ul>
            <li><Link to="#"><i className='bx bxs-user-check' ></i>Attendance</Link></li>
              <ul className="sub-menu">
                <li><Link to='/attendance' className="sub">Attendance</Link></li>
                <li><Link to='/leaves' className="sub">Leave</Link></li>
                <li><Link to='/holidays' className="sub">Holiday</Link></li>
              </ul>
            {/* <li><Link to="dashboard"><i className='bx bx-task'></i>Task Management</Link></li> */}
            {/* <li><Link to="dashboard"><i className='bx bx-wallet' ></i>Payroll</Link></li> */}
            {/* <li><Link to="dashboard"><i className='bx bx-user-plus' ></i>Recruitement</Link></li> */}
            {/* <li><Link to="dashboard"><i className='bx bx-book-reader' ></i>Training</Link></li> */}
        </ul>
        <ul className="side-menu">
            <li>
                <a href="#" className="logout" onClick={(e) => handleLogout(e)}>
                    <i className='bx bx-log-out-circle'></i>
                    Logout
                </a>
            </li>
        </ul>
    </div>

    {/* <!-- Main Content --> */}
    <div className="content">
        {/* <!-- Navbar --> */}
        <nav>
            <i className='bx bx-menu'></i>
            <form action="#" style={{visibility:"hidden"}}>
                <div className="form-input">
                    <input type="search" placeholder="Search..." />
                    <button className="search-btn" type="submit"><i className='bx bx-search'></i></button>
                </div>
            </form>
            <input type="checkbox" id="theme-toggle" hidden />
            <label htmlFor="theme-toggle" className="theme-toggle"></label>
            <a href="#" className="notif">
                <i className='bx bx-bell'></i>
                <span className="count">12</span>
            </a>
            <a href="#" className="profile">
                <img src="/logo.png" alt='' />
            </a>
        </nav>

        {/* <!-- End of Navbar --> */}
        {children}
        </div>
      </>
   );
}
 
export default AdminPanel;