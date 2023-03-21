import '@/styles/globals.css'
import Navbar from "../components/nav/Navbar"
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { createContext, useState } from "react";
import Mode from '../components/buttons/Mode';
import useSound from 'use-sound';
export const ThemeContext = createContext(null);

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("dark");

  const [playOn] = useSound(
    '../sounds/plac.wav',
    { volume: 0.55 }
  );
  function toggleTheme() {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    playOn();
    
  };
  return  (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <main className='inter.className' id={theme}>
        <Navbar />
        <div>
          <Mode theme={theme} toggleTheme={toggleTheme}/>
        </div>
        <Component {...pageProps} />
      </main>
    </ThemeContext.Provider>
  );
}
