import React from 'react'
import './Footer.css';

import Wave from '../../img/wave.png';



/* import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import wa from '../../img/whatsapp.png'; */

/* import ReactRoundedImage from "react-rounded-image"; */

function Footer() {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{width:'100%'}}/>
      <div className="f-content">
    
        <div className="f-icons">
        <div className="icon github">
                    <a href="https://www.facebook.com/sargis.hovsepyan?mibextid=AEUHqQ" target="_blank" rel="noreferrer">
                        <div className="tooltip">Facebook</div>
                        <div className="circle_tooltip"><span className="fab fa-brands fa-facebook fa-3x"></span> </div>
                    </a>
                 </div>
        </div>
        
        <span>®Հեղինակային իրավունքները պաշտպանված են (2024)</span>
        
      </div>
    </div>
  )
}

export default Footer