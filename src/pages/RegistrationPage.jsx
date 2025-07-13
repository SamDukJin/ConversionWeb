import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import style from './RegistrationPage.module.css'
import formStyle from './FormStyle.module.css';


function RegistrationPage() {

   const navigate = useNavigate();

   const handleCancel = async (e) => {
      e.preventDefault();
      navigate('/main_page');
   }

   return (
      <>
     <div className={style.mainRegisContainer}>
         <p className={style.RegisTitle}>Registration Page</p>

         <div className={formStyle.formContainer}>
         <form className={style.RegisForm}>
            <div className={formStyle.inputGroup}>
               <label htmlFor="username">Username:</label>
               <input
               type="text"
               id="username"
               required
               />
            </div>

            <div className={formStyle.inputGroup}>
               <label htmlFor="email">Email:</label>
               <input
               type="email"
               id="email"
               required
               />
            </div>

            <div className={formStyle.inputGroup}>
               <label htmlFor="password">Password:</label>
               <input
               type="password"
               id="password"
               required
               />
            </div>

            <div className={formStyle.inputGroup}>
               <label htmlFor="confirmPassword">Confirm Password:</label>
               <input
               type="password"
               id="confirmPassword"
               required
               />
            </div>

            <div className={formStyle.buttonGroup}>
               <button type="submit" className={style.registerButton}>Register</button>
               <button type="button" 
                  className={style.cancelButton}
                  onClick={handleCancel}
               >Cancel</button>
            </div>
         </form>
         </div>
      </div>
      </>
   )
}

export default RegistrationPage