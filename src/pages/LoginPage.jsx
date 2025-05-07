import React, { useState, useEffect }from 'react'
import style from './LoginPage.module.css'

function LoginPage() {

   return (
      <div className={style.mainLoginContainer}>
         <p className={style.loginTitle}>Login Page</p>

         <div className={style.formContainer}>
            <form className={style.loginForm}>
               <div className={style.inputGroup}>
                  <label htmlFor="username">Username:</label>
                  <input type="text" id="username" name="username" />
               </div>

               <div className={style.inputGroup}>
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" name="password" />
               </div>

               <div className={style.buttonGroup}>
                  <button type="submit" className={style.loginButton}>Login</button>
                  <button type="button"
                     className={style.forgotButton} 
                     onClick={() => 
                     alert("Please contact Admin Via universalconversion.admin@gmail.com")}>
                        Forgot Password
                  </button>
                  <p>Don't have an account? <br /> Register!</p>
                  <button type="button" className={style.registerButton}>Register</button>
                  <button type="button" className={style.cancelButton}>Cancel</button>
               </div>
            </form>
         </div>
      </div>
   )
}

export default LoginPage
