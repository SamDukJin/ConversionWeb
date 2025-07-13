import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './LoginPage.module.css';
import formStyle from './FormStyle.module.css';


function LoginPage() {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [errorMsg, setErrorMsg] = useState('');
   
   const navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         const response = await fetch('http://localhost:8000/login', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ username, password }),
         });

         if (!response.ok) {
         const data = await response.json();
         setErrorMsg(data.detail || 'Login failed');
         return;
         }

         const data = await response.json();
         console.log('Login successful:', data);

         localStorage.setItem('token', data.token);
         localStorage.setItem('username', data.username);

         alert('Login successful!');
         setErrorMsg('');
         navigate('/main_page');

      } catch (err) {
         console.error(err);
         setErrorMsg('Something went wrong. Please try again.');
      }
   };

   const handleRegister = async (e) => {
      e.preventDefault();
         navigate('/registration_page');
   }

   const handleCancel = async (e) => {
      e.preventDefault();
      navigate('/main_page');
   }

   return (
      <div className={style.mainLoginContainer}>
         <p className={style.loginTitle}>Login Page</p>

         <div className={formStyle.formContainer}>
         <form className={style.loginForm} onSubmit={handleSubmit}>
            <div className={formStyle.inputGroup}>
               <label htmlFor="username">Username:</label>
               <input
               type="text"
               id="username"
               value={username}
               onChange={(e) => setUsername(e.target.value)}
               required
               />
            </div>

            <div className={formStyle.inputGroup}>
               <label htmlFor="password">Password:</label>
               <input
               type="password"
               id="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               required
               />
            </div>

            {errorMsg && <p className={style.errorMsg}>{errorMsg}</p>}

            <div className={formStyle.buttonGroup}>
               <button type="submit" className={style.loginButton}>Login</button>
               <button type="button"
                  className={style.forgotButton}
                  onClick={() =>
                     alert("Please contact Admin Via universalconversion.admin@gmail.com")}
               >
                  Forgot Password
               </button>
               <p>Don't have an account? <br /> Register!</p>
               <button type="button"
                  className={style.registerButton}
                  onClick={handleRegister}
               > Register</button>
               <button type="button" 
                  className={style.cancelButton}
                  onClick={handleCancel}
               >Cancel</button>
            </div>
         </form>
         </div>
      </div>
   );
}

export default LoginPage;
