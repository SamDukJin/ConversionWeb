import React from "react";

function ButtonCard({ title, description, onClick }) {
     return (
     <>
          <div 
               className="main-button-card" 
               onClick={onClick}
          >
               <h3>{title}</h3>
               <p>{description}</p>
          </div>
     </>
     );
}

export default ButtonCard;
