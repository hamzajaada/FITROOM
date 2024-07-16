import styles from "./style.js";
import Navbar from "./components/Navbar.jsx";
import Billing from "./components/Billing.jsx";
import Button from "./components/Button.jsx";
import CardDeal from "./components/CardDeal.jsx";
import Clients from "./components/Clients.jsx";
import CTA from "./components/CTA.jsx";
import FeedbackCard from "./components/FeedbackCard.jsx";
import Footer from "./components/Footer.jsx";
import GetStarted from "./components/GetStarted.jsx";
import Hero from "./components/Hero.jsx";
import Business from "./components/Business.jsx"

import Stats from "./components/Stats.jsx";
import Testimonials from "./components/Testimonials.jsx";
import { NosProjet } from "./components/NosProjet.jsx";
import NosClient from "./components/NosClient.jsx";
import Prochaine from "./components/Prochaine.jsx";
import Copyright from "./components/Copyright.jsx";
import Marche from "./components/Marche.jsx";
import Actualite from "./components/Actualite.jsx";

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
                <CTA/>
            </div>
          </div>
           
          <div className={`${styles.paddingX} ${styles.flexStart} bg-primary`}>
            <div className={`${styles.boxWidth}`}>
                <Stats/>
            </div>
          </div>

          <div className={`${styles.paddingX} ${styles.flexStart} bg-primary`}>
            <div className={`${styles.boxWidth}`}>
                <FeedbackCard/>
            </div>

          </div>
         
          <div className={`${styles.paddingX} ${styles.flexStart} bg-primary`}>
            <div className={`${styles.boxWidth}`}>
                <CardDeal/>
            </div>
            
          </div>
        
          <div className={`${styles.paddingX} ${styles.flexStart} bg-primary`}>
            <div className={`${styles.boxWidth}`}>
                <GetStarted/>
            </div>
            
          </div>
          
          <div className={`${styles.paddingX} ${styles.flexStart} bg-primary`}>
            <div className={`${styles.boxWidth}`}>
                <Billing/>
            </div>
          </div>
           
          <div className={`${styles.paddingX} ${styles.flexStart} bg-primary`}>
            <div className={`${styles.boxWidth}`}>
                <Business/>
            </div>
          </div> 
           
          <div className={`${styles.paddingX} ${styles.flexStart} bg-primary`}>
            <div className={`${styles.boxWidth}`}>
                <Clients/>
            </div>
          </div>
        
          <div className={`${styles.paddingX} ${styles.flexStart} bg-primary`}>
            <div className={`${styles.boxWidth}`}>
                <NosProjet/>
            </div>
          </div>

            
          <div className={`${styles.paddingX} ${styles.flexStart} bg-primary`}>
            <div className={`${styles.boxWidth}`}>
                <NosClient/>
            </div>
          </div>
          <div className={`${styles.paddingX} ${styles.flexStart} bg-primary`}>
            <div className={`${styles.boxWidth}`}>
                <Marche/>
            </div>
          </div>
          <div className={`${styles.paddingX} ${styles.flexStart} bg-primary`}>
            <div className={`${styles.boxWidth}`}>
                <Prochaine/>
            </div>
          </div>
          <div className={`${styles.paddingX} ${styles.flexStart} bg-primary`}>
            <div className={`${styles.boxWidth}`}>
                <Actualite/>
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
