import React from "react";
import './Sub.css'

function ButtonCard({ title, description, onClick }) {
     return (
     <div className="button-card-container">
          <div 
               className="button-card" 
               onClick={onClick}
          >
               <h3>{title}</h3>
               <p>{description}</p>
          </div>
     </div>
     );
}

export default ButtonCard;
