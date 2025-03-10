import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import { createTheme, ThemeProvider } from '@mui/material'
import { useContext } from 'react'
import { MyContext } from './Components/MyContextProvider'

export default function Layout() {
    const { Theme } = useContext(MyContext)
    const MuiTheme = createTheme({
        palette: {
            mode: Theme,
        },
    })
    return (
        <>
                <ThemeProvider theme={MuiTheme}>
                    <Navbar />
                    <Outlet />
                </ThemeProvider>
        </>
    )
}
