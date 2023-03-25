import styles from '../buttons/Lang.module.css'
import {useState, useEffect} from "react";



function Lang ({theme, lng, toggleLang}){
  return (
    <div className="center">
      <button className={styles.button_53} role="button" onClick={()=>toggleLang()}>
        {lng === 'fr' ? "Français" : "English"}
      </button>
    </div>

  );
};

export default Lang;