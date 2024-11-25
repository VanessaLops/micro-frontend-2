import React, { useState } from 'react';
import { AppBar, Box, Button, Toolbar, Typography, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../assets/img/logo-dashboard.png';
import { dashboardStyles } from '../util/designer-system';
import { HeaderProps } from '../models/headerDTO';
import { themes } from '../assets/styles/global-theme';
import Sidebar from './sidebar';
import { useNavigate } from 'react-router-dom';
import { SelectedTab } from '../models/sidebarDTO';

const Header: React.FC<HeaderProps> = ({ setSelectedTab, selectedTab }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const isMobile = useMediaQuery(themes.breakpoints.down('sm'));
    const navigate = useNavigate();

    const handleButtonClick = () => {
        window.location.href = 'https://micro-frontend-1-two.vercel.app';
    };

    const handleSidebarToggle = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <AppBar position="sticky" sx={dashboardStyles.headerStyles}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={dashboardStyles.toolbarbox}>
                    <Button onClick={handleSidebarToggle}>
                        <MenuIcon sx={dashboardStyles.menuIcon} />
                    </Button>
                    <Box component="img" src={Logo} alt="Logo" sx={dashboardStyles.logo} />
                </Box>


                {!isMobile && (
                    <Box component="nav" sx={dashboardStyles.navLinks}>
                        <Typography
                            component="a"
                            href="#clientes"
                            sx={{
                                ...dashboardStyles.navLinkText,
                                color: selectedTab === 'clientes' ? dashboardStyles.linkActive.color : dashboardStyles.linkDefault.color,
                                borderBottom: selectedTab === 'clientes' ? dashboardStyles.linkActive.borderBottom : dashboardStyles.linkDefault.color,
                            }}
                            onClick={() => setSelectedTab('clientes')}
                        >
                            Clientes
                        </Typography>
                        <Typography
                            component="a"
                            href="#clientesSelecionados"
                            sx={{
                                ...dashboardStyles.navLinkText,
                                color: selectedTab === 'clientesSelecionados' ? dashboardStyles.linkActive.color : dashboardStyles.linkDefault.color,
                                borderBottom: selectedTab === 'clientesSelecionados' ? dashboardStyles.linkActive.borderBottom : dashboardStyles.linkDefault.color,
                            }}
                            onClick={() => setSelectedTab('clientesSelecionados')}
                        >
                            Clientes selecionados
                        </Typography>
                        <Typography
                            onClick={() => handleButtonClick()}
                            component="a"
                            href="#sair"
                            sx={dashboardStyles.navLinkText}
                        >
                            Sair
                        </Typography>
                    </Box>
                )}


                {isMobile ? (
                    <Typography
                        onClick={() => handleButtonClick()}
                        component="a"
                        href="#sair"
                        sx={dashboardStyles.navLinkText}
                    >
                        Sair
                    </Typography>
                ) : (
                    <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: 14 }}>
                        Olá, Usuário!
                    </Typography>
                )}
            </Toolbar>
            <Box>

                <Sidebar
                    selectedTab={selectedTab as SelectedTab}
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                    setSelectedTab={setSelectedTab}
                />
            </Box>

        </AppBar>

    );
};

export default Header;
