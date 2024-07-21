import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import Menu from '@mui/material/Menu';
// import TuneIcon from '@mui/icons-material/Tune';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import Brightness6OutlinedIcon from '@mui/icons-material/Brightness6Outlined';
// import { Divider,  List, ListItem, ListItemButton, ListItemIcon, ListItemText, PaletteMode, SwipeableDrawer } from '@mui/material';
import { MyContext } from './MyContextProvider';
const pages = ['Products', 'Pricing', 'Blog'];
// interface prop {
//     ToggleTheme: () => void,
//     Theme: PaletteMode
// }

export default function Navbar() {
    const { ToggleTheme, Theme } = React.useContext(MyContext)

    // const [open, setOpen] = React.useState(false);

    // const toggleDrawer = (newOpen: boolean) => () => {
    //     setOpen(newOpen);
    // };
    // const DrawerList = (
    //     <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
    //         <List>
    //             <Tooltip followCursor title="ChangeTheme">
    //                 <ListItem onClick={ToggleTheme} disablePadding>
    //                     <ListItemButton>
    //                         <ListItemIcon>
    //                             {Theme == 'dark' ? <Brightness6OutlinedIcon /> : <Brightness6Icon />}
    //                         </ListItemIcon>
    //                         <ListItemText primary={'Darkmode'} />
    //                     </ListItemButton>
    //                 </ListItem>
    //             </Tooltip>
    //         </List>
    //         <Divider />
    //         <List>
    //             <Typography 
    //             className='ms-3'
    //             >Filters</Typography>
    //             <ListItem disablePadding>
    //                 <ListItemButton>
    //                     <ListItemIcon>
    //                         <Brightness6OutlinedIcon />
    //                     </ListItemIcon>
    //                     <ListItemText primary={"text"} />
    //                 </ListItemButton>
    //             </ListItem>
    //         </List>
    //     </Box>
    // );
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <LogoDevIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        className="noLink"
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Ned Movies
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <LogoDevIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        className="noLink"
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Ned Movies
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                            <Button color='inherit' onClick={ToggleTheme} startIcon={Theme == 'dark' ? <Brightness6OutlinedIcon /> : <Brightness6Icon />} size='large' >Darkmode</Button>
                            {/* <SwipeableDrawer disableSwipeToOpen={false} onOpen={toggleDrawer(true)} open={open} anchor='right' onClose={toggleDrawer(false)}>
                                {DrawerList}
                            </SwipeableDrawer> */}
                            {/* {Theme == 'dark' ? <Brightness6OutlinedIcon /> : <Brightness6Icon />} */}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}