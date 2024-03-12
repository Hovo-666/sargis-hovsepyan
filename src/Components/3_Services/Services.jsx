import React from 'react'
import Card from '../3_Services-Card/Card'
import './Services.css'

import HeartEmoji from '../../img/heartemoji.gif'
import glasses from '../../img/glasses.gif'
import Humble from '../../img/humble.png'
import Angular from '../../img/Angular.gif'


import ParticleImage, { ParticleOptions, forces, ParticleForce } from "react-particle-image";


import { ThemeContext } from '../../Context';
import { useContext } from 'react';

import { motion } from "framer-motion"

function Services() {

    // for the animation .. 2 sec
    const transition ={duration: 2, type: 'spring'}

     //for dark mode theme
     const theme = useContext(ThemeContext);
     const darkMode = theme.state.darkMode;
 

    const particleOptions: ParticleOptions = {
        filter: ({ x, y, image }) => {
          // Get pixel
          const pixel = image.get(x, y);
          // Make a particle for this pixel if blue > 50 (range 0-255)
          return pixel.b > 50;
        },
        color: ({ x, y, image }) => "#61dafb"
      };

      const motionForce = (x: number, y: number): ParticleForce => {
        return forces.disturbance(x, y, 7);
      };


    return (
        <>
            <div className='services' id="Services"> {/* id for link(react-scroll) in Navbar.jsx */}
            
            <div className="awesome">
                <span style={{color: darkMode? 'white' : ''}}>Երկեր</span>
                <span></span>
                <spane className="saquliki_garlaxnery">
                    Հանդարտություն։ Վեպ / Երևան։ «Մետրո» հրատ․, 2022թ - 240 էջ։ <br />
Գրեգիրք։ Անթոլոգիա։ Երևան. «Սատիրիկոն» 2017թ։ Էջ 100-107։<br />
Դոմինո/պատմվածքներ, պիես։ Երևան. «Անտարես» 2012թ։<br />
19 պատմվածք։ Ժողովածու։ Երևան. «Անտարես» 2011թ։ Էջ 57-62։<br />
Մուգ կապույտ, վառ կարմիր։ Գրական տարեգիրք։ Երևան. «Մունետիկ» հրատ.: 2011թ։ Էջ 100-119։<br />
18-33 արդի հայ արձակ։ Անթոլոգիա/Երևան։ Համազգային հայ կրթական և մշակութային միություն, 2009թ։ Էջ 191-204։<br />
                    <div class="container">
                   </div>
                </spane>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>

            <div className="cards">


                <motion.div
                  initial={{left:'-1rem'}}
                  whileInView= {{left: '1rem'}}
                  transition= {{transition}}
                 
                 
                 style={{ left: '2rem'}}>
                    <a href="https://granish.org/vazir-bibi/">
                    <Card
                        heading={'Վազիր Բիբի… Ինձ մի սպասիր…'}
                        detail={"-Սարի գլխին մի բան կա, չեմ ասի` ինչ կա… Սարի գլխին մի բան կա, չեմ ասի` ինչ կա"}
                    />
                    </a>
                </motion.div>

                <motion.div
                 initial={{left:'27rem', top: "3rem"}}
                 whileInView= {{left: '17rem', top: "3rem"}}
                 transition= {{transition}}
                
                
                style={{ left: '16rem'}}>
                    <a href="https://gretert.com/2016/10/09/սարգիս-հովսեփյան-21/">
                    <Card
                         custom_emoji={ <ParticleImage
                            scale={1.5}
                            entropy={20}
                            maxParticles={4200}
                            particleOptions={particleOptions}
                            mouseMoveForce={motionForce}
                            touchMoveForce={motionForce}
                            style={{
                                width: "90%",
                                height: "80%",
                                position: "absolute",
                                top: -50,
                                left: 12,
                                background: 'transparent'
                            }}
                            />}
                        heading={'21'}
                        detail={"Դմիտրի Արտաշեսովիչ Մնացականյանը տուն մտավ վառվող աչքերով, մաշված պորտֆելը մի կողմ նետեց..."}
                    />
                    </a>
                </motion.div>



                <motion.div 
                  initial={{left:'-22rem',top:"17rem"}}
                  whileInView= {{left: '-3rem'}}
                  transition= {{transition}}
                
                style={{  left: '-2rem' }}>
                    <a href="https://m.mamul.am/am/post/29358">
                    <Card
                        heading={'Դոմինո'}
                        detail={
                            <p style={{"font-size": '12px'}}>Երբեմնի փառքի ու հզորության մասին պատմող պարիսպների մնացորդներ...
                              .</p>}
                        //detail={"develop cross-platform applications for ( Android, iOS, Linux, macOS, Windows, and the web ) from a single codebase."}
                    />
                    </a>
                </motion.div>

                <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
             
            </div>
        </div>
        <div className="awesome">
                <span style={{color: darkMode? 'white' : ''}}>Այլ</span>
                <span></span>
                <spane className="saquliki_garlaxnery">
                Պաղպաղակ ― <a href="https://granish.org/sargis-hovsepyan-paghpaghak/">https://granish.org/sargis-hovsepyan-paghpaghak/</a> <br /><br />
Երրորդ․․․մաս ― <a href="https://granish.org/sargis-hovsepyan-story/">https://granish.org/sargis-hovsepyan-story/</a><br /><br />
ARMageddon ― <a href="https://granish.org/armageddon/">https://granish.org/armageddon/</a><br /><br />
Ֆերգանա ― <a href="https://granish.org/fergana/">https://granish.org/fergana/</a><br /><br />
Ես ու իմ ընկեր Շուռը․․․ ― <a href="https://granish.org/shur/">https://granish.org/shur/</a><br /><br />
Տափակ քար ― <a href="https://inknagir.org/?p=10074">https://inknagir.org/?p=10074</a><br /><br />
 
Դեժավյու ― <a href="https://granish.org/dejavu/">https://granish.org/dejavu/</a> (դրամատուրգիա)<br /><br />
Համբարձման գիշեր ― <a href="https://tatron-drama.am/archives/1228">https://tatron-drama.am/archives/1228</a> (պիես)<br /><br />
                    <div class="container">
                   </div>
                </spane>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
        </>
    )
}

export default Services