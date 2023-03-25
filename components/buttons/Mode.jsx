import styles from '../buttons/Mode.module.css'
import {useState, useEffect} from "react";

function Mode ({toggleTheme, theme, lng}){
  const [text, setText] = useState("");

    const light_open = {
      en: [
        "Turn the light off before leaving please",
        "Turn off if you want to save baby seal"
      ],
      fr: [
        "Eteins avant de partir quand même",
        "Si tu laisses allumé tu vas tuer des bébés phoques, enculé"
      ]
    };
    const light_close = {
      en: [
        "You can turn the light on",
        "Come on, do it, you want it"
      ],
      fr: [
        "Vas y allume la lumière",
        "Tkt si t'es écolo, c'est de la basse consommation"
      ]
    };

    useEffect(() => {
      function randomText(lng) {
        const random = Math.floor(Math.random() * light_open.en.length);
        theme === "light" ? setText(lng === 'fr' ? light_open.fr[random] : light_open.en[random]) 
        : setText(lng === 'fr' ? light_close.fr [random] : light_close.en[random]);
      }
      randomText(lng);
    
      
      // setInterval(randomText, 1000, theme);
    },[theme, lng]);


  

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