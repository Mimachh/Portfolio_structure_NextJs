import styles from '../buttons/Mode.module.css'
import {useState, useEffect} from "react";

import LightOpenFr from "../../pages/locales/fr/light_open";
import LightOpenEn from "../../pages/locales/en/light_open";
import LightCloseFr from "../../pages/locales/fr/light_close";
import LightCloseEn from "../../pages/locales/en/light_close";

function Mode ({toggleTheme, theme}){
  const [text, setText] = useState("");
  const light_open_fr = LightOpenFr.products; 
  const light_open_en = LightOpenEn.products; 
  const light_close_fr = LightCloseFr.products; 
  const light_close_en = LightCloseEn.products; 

  useEffect(() => {
     function randomText() {
      const random = Math.floor(Math.random() * light_open_fr.length);
      theme === "light" ? setText(light_open_fr[random]) : setText(light_close_fr[random]);
    }
    randomText();
   
  
  // setInterval(randomText, 1000, theme);
},[theme])


  return (
    <div >
      <small className='ampoule_text'>
        {text}
      </small> 
        <div className={styles.mid}>
          <label className={styles.rocker}>
            <input type="checkbox" onChange={() => toggleTheme()}/>
            <span className={styles.switchleft}>On</span>
            <span className={styles.switchright}>Off</span>
          </label>
        </div>
    </div>
  );
};

export default Mode;