import styles from "./style.js";
import Navbar from "./components/Navbar.jsx";
import F6 from "./components/F6.jsx";
import F4 from "./components/F4.jsx";
import F8 from "./components/F8.jsx";
import { F1 } from "./components/F1.jsx";
import F3 from "./components/F3.jsx";
import Footer from "./components/Footer.jsx";
import F5 from "./components/F5.jsx";
import Hero from "./components/Hero.jsx";
import F7 from "./components/F7.jsx"
import F2 from "./components/F2.jsx";
import  F9  from "./components/F9.jsx";
import F10 from "./components/F10.jsx";
import F12 from "./components/F12.jsx";
import Copyright from "./components/Copyright.jsx";
import F11 from "./components/F11.jsx";
import F13 from "./components/F13.jsx";

const App = () => {
    return (
        <div className=' bg-primary w-full overflow-hidden'>
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar/>
            </div>
          </div>
          <div className={`${styles.flexStart} bg-primary`}>
            <div className={`${styles.boxWidth}`}>
                <Hero/>
               
            </div>
          </div>
          <div className={`${styles.paddingX} ${styles.flexStart} bg-primary`}>
            <div className={`${styles.boxWidth}`}>
                <F1/>
            </div>
          </div>
           
          <div className={`${styles.paddingX} ${styles.flexStart} bg-primary`}>
            <div className={`${styles.boxWidth}`}>
                <F2/>
            </div>
          </div>

          <div className={`${styles.paddingX} ${styles.flexStart} bg-primary`}>
            <div className={`${styles.boxWidth}`}>
                <F3/>
            </div>

          </div>
         
          <div className={`${styles.paddingX} ${styles.flexStart} bg-primary`}>
            <div className={`${styles.boxWidth}`}>
                <F4/>
            </div>
            
          </div>
        
          <div className={`${styles.paddingX} ${styles.flexStart} bg-primary`}>
            <div className={`${styles.boxWidth}`}>
                <F5/>
            </div>
            
          </div>
          
          <div className={`${styles.paddingX} ${styles.flexStart} bg-primary`}>
            <div className={`${styles.boxWidth}`}>
                <F6/>
            </div>
          </div>
           
          <div className={`${styles.paddingX} ${styles.flexStart} bg-primary`}>
            <div className={`${styles.boxWidth}`}>
                <F7/>
            </div>
          </div> 
           
          <div className={`${styles.paddingX} ${styles.flexStart} bg-primary`}>
            <div className={`${styles.boxWidth}`}>
                <F8/>
            </div>
          </div>
        
          <div className={`${styles.paddingX} ${styles.flexStart} bg-primary`}>
            <div className={`${styles.boxWidth}`}>
                <F9/>
            </div>
          </div>

            
          <div className={`${styles.paddingX} ${styles.flexStart} bg-primary`}>
            <div className={`${styles.boxWidth}`}>
                <F10/>
            </div>
          </div>
          <div className={`${styles.paddingX} ${styles.flexStart} bg-primary`}>
            <div className={`${styles.boxWidth}`}>
                <F11/>
            </div>
          </div>
          <div className={`${styles.paddingX} ${styles.flexStart} bg-primary`}>
            <div className={`${styles.boxWidth}`}>
                <F12/>
            </div>
          </div>
          <div className={`${styles.paddingX} ${styles.flexStart} bg-primary`}>
            <div className={`${styles.boxWidth}`}>
                <F13/>
            </div>
          </div>
          
          <div className={`${styles.paddingX} ${styles.flexStart} bg-primary`}>
            <div className={`${styles.boxWidth}`}>
                <Footer/>
            </div>
          </div>
          
           
          <div className={`${styles.paddingX} ${styles.flexStart} bg-primary`}>
            <div className={`${styles.boxWidth}`}>
                <Copyright/>
            </div>
          </div>
          
          
          


        </div>
    );
}

export default App;
