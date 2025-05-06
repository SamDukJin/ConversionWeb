import React from 'react'
import style from './LoginPage.module.css'


function LoginPage() {
   return (
      <>
         <div className={style.mainLoginContainer}>
            <p id={style.loginTitle}>Login Page</p>
            <div className={style.formContainer}>
               <form>
                  <label>
                     Username:
                     <input type="text" name="username" id={style.input_username} />
                  </label>
                  <br />
                  <label>
                     Password:
                     <input type="password" name="password" id={style.input_password} />
                  </label>
                  <br />
                  <button type="submit">Login</button>
                  <button type="button">Forgot Password</button>
                  <button type="button">Cancel</button>
               </form>
            </div>
         </div>
      </>
   )
}

export default LoginPage
