import React from "react"

import { useState } from 'react';
import Cards from '../components/cards-contents/container-client';
import Header from '../components/header';
import { Box } from '@mui/material';
import { dashboardStyles } from '../util/designer-system';

const Dashboard = () => {
    const [selectedTab, setSelectedTab] = useState<any>('clientes');
    return (
        <Box >
            <Header setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
            <Box sx={dashboardStyles.content}>
                <Cards selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            </Box>

        </Box>
    );
};

export default Dashboard;
