import { createTheme, PaletteMode, Theme } from '@mui/material';
import { createContext, useMemo, useState} from 'react';


interface MyContextProps {
    Theme: PaletteMode,
    ToggleTheme: ()=>void
}
interface props {
    children: React.ReactNode
  }
export const MyContext = createContext<Partial<MyContextProps>>({});


export default function MyContextProvider(props: props) {
    const [Theme, setTheme] = useState<PaletteMode>('dark')
    
    const ToggleTheme = () => {
        Theme == 'dark' ? setTheme('light') : setTheme('dark')
    }
  
    const contextValue = {
        Theme,
        ToggleTheme
      };
    return (
        <MyContext.Provider value={contextValue}>
          {props.children}
        </MyContext.Provider>
      )
}