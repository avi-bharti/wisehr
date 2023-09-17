import { useEffect, useState } from 'react';
import '../assets/root.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../slices/userApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';

const HomeScreen = () => {

   const [email,setEmail] = useState('');
   const [password,SetPassword] = useState('');

   const dispatch = useDispatch();
   const navigate = useNavigate();

   const [login] = useLoginMutation();
   const {userInfo} = useSelector((state) => state.auth)

   useEffect(() => {
      if(userInfo){
         navigate('/dashboard')
      }
   }, [userInfo,navigate])

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const res = await login({email,password}).unwrap();
         dispatch(setCredentials({...res}))
         navigate('/dashboard')
      } catch (error) {
         toast.error(error?.data?.message || error.message)         
      }
   }
   return (  
      <div className='home'>
    <section class="container">

      <div class="image-section">
        <div class="image-wrapper">
          <img src="/wDmDIhi.png" alt="" />
        </div>

        <div class="content-container">
          <h1 class="section-heading"><span>Easy HR,</span> Endless Possibilities</h1>
          <p class="section-paragraph">Discover effortless HR management with 'Easy HR.' Our platform combines simplicity with a robust feature set, offering endless possibilities for optimizing your HR processes and workplace..</p>
        </div>
      </div>

      <div class="form-section">
        <div class="form-wrapper">
        

          <h2>Welcome Back! 👋🏻</h2>
          <p>Enter your credentials to access your account.</p>

          <div class="input-container">
            <div class="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off" />
            </div>
            <div class="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" value={password} onChange={(e) => SetPassword(e.target.value)} />
            </div>
          </div>

          <div class="remember-forgot">
            <div class="remember-me">
              <input type="checkbox" value="remember-me" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>

            <a href="#">Forgot password?</a>
          </div>

          <button class="login-btn" onClick={handleSubmit}>Log In</button>
         {/* 
          <div class="or-divider">or</div>

          <button class="google-signin">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="96px" height="96px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
            <span>Sign in with Google</span>
          </button> */}
        </div>
      </div>
    </section>
      </div>
   );
}
 
export default HomeScreen;