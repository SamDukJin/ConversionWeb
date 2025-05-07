import React, { useState, useEffect } from 'react'
import style from './RegistrationPage.module.css'

function RegistrationPage() {
   return (
      <>
     <div className={style.mainRegisContainer}>
         <p className={style.RegisTitle}>Registration Page</p>

         <div className={style.formContainer}>
         <form className={style.RegisForm}>
            <div className={style.inputGroup}>
               <label htmlFor="username">Username:</label>
               <input
               type="text"
               id="username"
               required
               />
            </div>

            <div className={style.inputGroup}>
               <label htmlFor="email">Email:</label>
               <input
               type="email"
               id="email"
               required
               />
            </div>

            <div className={style.inputGroup}>
               <label htmlFor="password">Password:</label>
               <input
               type="password"
               id="password"
               required
               />
            </div>

            <div className={style.inputGroup}>
               <label htmlFor="confirmPassword">Confirm Password:</label>
               <input
               type="password"
               id="confirmPassword"
               required
               />
            </div>

            <div className={style.buttonGroup}>
               <button type="submit" className={style.registerButton}>Register</button>
               <button type="button" className={style.cancelButton}>Cancel</button>
            </div>
         </form>
         </div>
      </div>
      </>
   )
}

export default RegistrationPage