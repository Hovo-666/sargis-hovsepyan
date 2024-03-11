import React from 'react'
import './Intro.css'

/* import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import wa from '../../img/whatsapp.png'; */

import vector1 from '../../img/Vector1.png'
import vector2 from '../../img/Vector2.png'

import boy from '../../img/boy.jpg'

import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../2_Intro-FloatingDiv/FloatingDiv';

import { ThemeContext } from '../../Context';
import { useContext } from 'react';

import { motion } from "framer-motion"

/* import ReactRoundedImage from "react-rounded-image"; */


function Intro() {

    // for the animation .. 2 sec
    const transition ={duration: 2, type: 'spring'}

    //for dark mode theme
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className='intro'>
            <div className="i-left">
                <div className="i-name">
                    <span style={{color: darkMode? 'white' : ''}}>Բարև, ես</span>
                    <span>Սարգիս Հովսեփյանն եմ։</span>
                </div>

              {/*   <button className="button i-button">
                    Hire me
                </button> 
              */}
            </div>
 

           <div className="i-right">
                <img className='saqulik' src={boy} alt="" />
                {/* blur div */}
                <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
                <div className="blur" style={{background: '#c1f5ff', top: '17rem', left: '-9rem'}}></div>


            </div>

            
        </div>
    )
}

export default Intro