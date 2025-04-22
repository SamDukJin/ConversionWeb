import React from "react";
import ButtonCard from "../components/ButtonCard";
import { useNavigate } from "react-router-dom";
import "../components/Sub.css";
import { tools } from "../assets/DataStorage" 

function MainPage() {
     const navigate = useNavigate();

     return (
     <div className="main-section">
          <div className="info-section">
               <h1>Welcome to Universal Converter</h1>
               <p>
                    This platform allows you to easily convert a variety of units — from
                    currencies and lengths to temperatures and geometric measurements.
                    Select a tool below to get started!
               </p>
          </div>

          <div className="button-card-wrapper">
               <div className="button-card-container">
                    {tools
                         .filter(tool => tool.visible)     
                         .map((tool, index) => (
                         <ButtonCard
                         key={index}
                         title={tool.title}
                         description={tool.description}
                         onClick={() => navigate(tool.path)}
                         />
                    ))}
               </div>
          </div>
     </div>
     );
}

export default MainPage;
