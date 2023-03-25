import '@/styles/globals.css'
import Navbar from "../components/nav/Navbar"
import type { AppProps } from 'next/app'
import { createContext, useState } from "react";
import Mode from '../components/buttons/Mode';
import useSound from 'use-sound';
export const ThemeContext = createContext(null);
import Light from '../public/light.svg'
import Lang from "../components/buttons/Lang"

export default function App({ Component, pageProps }: AppProps) {

  const [lng, setLng] = useState("fr");
  const [theme, setTheme] = useState("dark");
  const [playPlac] = useSound('../sounds/plac.wav', { volume: 0.55 });

  function toggleTheme() {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    playPlac();
  };

  function toggleLang() {
    setLng((curr) => (curr === "fr" ? "en" : "fr"))
  }

  return  (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <main id={theme} className="body">
          <div className='maxWidth'>
            <Navbar lng={lng}/>
              <div className="orbe1"></div>
              <div className="orbe2"></div>
              <div className="orbe3"></div>
            <div>
            <Lang theme={theme} lng={lng} toggleLang={toggleLang}/>
            </div>
            <div>
              <Mode theme={theme} lng={lng} toggleTheme={toggleTheme}/>
            </div>
            <div className='center-element'>
                  <Light className="ampoule"/>
                </div>
            <Component lng={lng} {...pageProps} />
          </div>
        </main>
      </ThemeContext.Provider>
  );
}
