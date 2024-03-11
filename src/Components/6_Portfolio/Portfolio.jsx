import React from "react";
import "./Portfolio.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; /* to use the (swiper js) */

import Ecommerce1 from "../../img/Ecommerce1.jpg";
import ecommerce2 from "../../img/ecommerce2.png";
import hdbms from "../../img/hdbms.png";
import vibes from "../../img/vibes.png";
import mystore from "../../img/mystore.png";

import IT0 from "../../img/IT0.jpg";
import IT1 from "../../img/IT1.jpg";
import IT2 from "../../img/IT2.jpg";
import IT3 from "../../img/IT3.jpg";
import IT4 from "../../img/IT4.jpg";
import IT5 from "../../img/IT5.jpg";
import IT6 from "../../img/IT6.jpg";
import IT7 from "../../img/IT7.jpg";
import IT8 from "../../img/IT8.jpg";
import IT9 from "../../img/IT9.jpg";

import NIDE_Mockup from "../../img/NIDE_Mockup.gif";
import MiracleCure_Mockup from "../../img/MiracleCure_Mockup.gif";








import { ThemeContext } from '../../Context';
import { useContext } from 'react';


/////////////////////////////////////////////////
// for Pagination and Navigation
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
//////////////////////////////////////////////////


function Portfolio() {

   //for dark mode theme
   const theme = useContext(ThemeContext);
   const darkMode = theme.state.darkMode;

   //handleSlidesChangeListener
   var mediaQuery = window.matchMedia("(max-width: 900px)")
   var mediaQuery2 = window.matchMedia("(max-width: 1300px)")

   var slidesPerView;
  // function handleSlidesChangeListener(e) {
      if (mediaQuery.matches) {
        slidesPerView=1;
      }
      else if (mediaQuery2.matches)
      {
        slidesPerView=2
      }
      else 
      {
        slidesPerView=3
      }
 



  return (
    <div className="portfolio" id="Portfolio"> {/* id for link(react-scroll) in Navbar.jsx */}
      {/* Heading section */}
      <span style={{color: darkMode? 'white' : ''}}>Այլ գրողներ</span>


      {/* timeline */}
      <section id="timeline">


      <div class="tl-item">
         <div class="tl-bg" style={{'background-image': 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Hakop_Karapents.JPG/250px-Hakop_Karapents.JPG)' }}></div>
    
         <div class="tl-year">
         <a href="https://hy.wikipedia.org/wiki/%D5%80%D5%A1%D5%AF%D5%B8%D5%A2_%D4%BF%D5%A1%D6%80%D5%A1%D5%BA%D5%A5%D5%B6%D6%81">
           <p class="f2 heading--sanSerif">Հակոբ Կարապենց</p>
           </a>
         </div>

        </div>

        <div class="tl-item">
         <div class="tl-bg" style={{'background-image': 'url(https://upload.wikimedia.org/wikipedia/hy/thumb/b/bc/%D5%84%D5%AF%D6%80%D5%BF%D5%AB%D5%B9_%D4%B1%D6%80%D5%B4%D5%A5%D5%B6.jpg/250px-%D5%84%D5%AF%D6%80%D5%BF%D5%AB%D5%B9_%D4%B1%D6%80%D5%B4%D5%A5%D5%B6.jpg)'}}></div>
    
         <div class="tl-year">
          <a href="https://hy.wikipedia.org/wiki/%D5%84%D5%AF%D6%80%D5%BF%D5%AB%D5%B9_%D4%B1%D6%80%D5%B4%D5%A5%D5%B6">
           <p style={{ 'color':'#6eff3e'}} class="f2 heading--sanSerif">Մկրտիչ Արմեն</p>
          </a>
         </div>

        </div>


        <div class="tl-item">
         <div class="tl-bg" style={{'background-image': 'url(https://gretert.com/wp-content/uploads/2017/05/AnahitBWIMG_722418.jpg)'}}></div>
    
         <div class="tl-year">
           <a href="https://hy.wikipedia.org/wiki/%D4%B7%D5%A4%D5%B8%D6%82%D5%A1%D6%80%D5%A4_%D5%80%D5%A1%D6%80%D5%A5%D5%B6%D6%81">
           <p class="f2 heading--sanSerif">Էդուարդ Հարենց</p>
           </a>
         </div>



        </div>

       <div class="tl-item">
       <div class="tl-bg" style={{'background-image': 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Hrant_Matevosyan_2.JPG/250px-Hrant_Matevosyan_2.JPG)'}}></div>
           <div class="tl-year">
             <a href="https://hy.wikipedia.org/wiki/%D5%80%D6%80%D5%A1%D5%B6%D5%BF_%D5%84%D5%A1%D5%A9%D6%87%D5%B8%D5%BD%D5%B5%D5%A1%D5%B6">
             <p class="f2 heading--sanSerif">Հրանտ Մաթևոսյան</p>
             </a>
          </div>

          

        </div>

       <div class="tl-item">
          <div class="tl-bg" style={{'background-image': 'url(https://upload.wikimedia.org/wikipedia/hy/thumb/5/5d/%D5%80%D5%A1%D5%AF%D5%B8%D5%A2_%D5%84%D5%B6%D5%B1%D5%B8%D6%82%D6%80%D5%AB.jpg/250px-%D5%80%D5%A1%D5%AF%D5%B8%D5%A2_%D5%84%D5%B6%D5%B1%D5%B8%D6%82%D6%80%D5%AB.jpg)'}}></div>
    
          <div class="tl-year">
             <a href="https://hy.wikipedia.org/wiki/%D5%80%D5%A1%D5%AF%D5%B8%D5%A2_%D5%84%D5%B6%D5%B1%D5%B8%D6%82%D6%80%D5%AB">
             <p style={{ 'color':'#6eff3e'}} class="f2 heading--sanSerif">Հակոբ Մնձուրի</p>
             </a>
          </div>
          <div class="tl-content">
          </div>

       </div>

       <div class="tl-item">
          <div class="tl-bg" style={{'background-image': 'url(data:image/jpeg;base64,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)'}}></div>
        
          <div class="tl-year">
            <a href="https://hy.wikipedia.org/wiki/%D5%80%D5%B8%D5%BE%D5%B0%D5%A1%D5%B6%D5%B6%D5%A5%D5%BD_%D4%B5%D6%80%D5%A1%D5%B6%D5%B5%D5%A1%D5%B6">
            <p class="f2 heading--sanSerif">Հովհաննես Երանյան</p>
            </a>
          </div>
          <div class="tl-content">
          </div>

       </div>

       <div class="tl-item">
          <div class="tl-bg" style={{'background-image': 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/%D4%B6%D5%A1%D5%BA%D5%A7%D5%AC_%D4%B5%D5%BD%D5%A1%D5%B5%D5%A5%D5%A1%D5%B6.jpg/250px-%D4%B6%D5%A1%D5%BA%D5%A7%D5%AC_%D4%B5%D5%BD%D5%A1%D5%B5%D5%A5%D5%A1%D5%B6.jpg)'}}></div>
        
          <div class="tl-year">
            <a href="https://hy.wikipedia.org/wiki/%D4%B6%D5%A1%D5%BA%D5%A5%D5%AC_%D4%B5%D5%BD%D5%A1%D5%B5%D5%A1%D5%B6">
              <p class="f2 heading--sanSerif">Զապել Եսայան</p>
            </a>
          </div>
          <div class="tl-content">
          </div>
       </div>

       <div class="tl-item">
          <div class="tl-bg" style={{'background-image': 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Vahan_Teryan_portrait.jpg/250px-Vahan_Teryan_portrait.jpg)'}}></div>
        
          <div class="tl-year">
            <a href="https://hy.wikipedia.org/wiki/%D5%8E%D5%A1%D5%B0%D5%A1%D5%B6_%D5%8F%D5%A5%D6%80%D5%B5%D5%A1%D5%B6">
            <p class="f2 heading--sanSerif">Վահան Տերյան</p>
              
            </a>
          </div>
    
          <div class="tl-content">
          </div>
       </div>
      </section>
    </div>

  );
}

export default Portfolio;
