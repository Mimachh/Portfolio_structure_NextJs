import '@/styles/globals.css'
import Navbar from "../components/nav/Navbar"
import type { AppProps } from 'next/app'
import { createContext, useState } from "react";
import Mode from '../components/buttons/Mode';
import useSound from 'use-sound';
export const ThemeContext = createContext(null);


export default function App({ Component, pageProps }: AppProps) {

  const [lng, setLng] = useState("fr");
  const [theme, setTheme] = useState("dark");
  const [playOn] = useSound(
    '../sounds/plac.wav',
    { volume: 0.55 }
  );

  function toggleTheme() {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    playOn();
  };

  function toggleLang() {
    setLng((curr) => (curr === "fr" ? "en" : "fr"))
  }

  return  (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <main className='inter.className' id={theme}>
        <Navbar lng={lng}/>
        <div>
          <button onClick={() => toggleLang()}>
            {lng === 'fr' ? 'Langue en' : 'Langue fr'}
          </button>
        </div>
        <div>
          <Mode theme={theme} toggleTheme={toggleTheme}/>
        </div>
        <Component lng={lng} {...pageProps} />
      </main>
    </ThemeContext.Provider>
  );
}
