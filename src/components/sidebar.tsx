import React, { useState } from "react";
import { Box, IconButton, useTheme, useMediaQuery } from "@mui/material";
// import Logo from "../assets/img/logo-dashboard.png";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import PersonIcon from "@mui/icons-material/Person";

export interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  setSelectedTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  sidebarOpen,
  setSidebarOpen,
  setSelectedTab,
}) => {
  const [selectedTab, setSelectedTabState] = useState<string>("home");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleTabChange = (tab: string) => {
    setSelectedTabState(tab); 
    setSelectedTab(tab); 
    setSidebarOpen(false);
  };

  return (
    <>
      {sidebarOpen && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 998,
            transition: "background-color 0.3s ease-in-out",
          }}
        />
      )}

      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: isMobile ? "100%" : 400,
          height: "100%",
          backgroundColor: "#f4f4f4",
          boxSizing: "border-box",
          zIndex: 999,
          transform: sidebarOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#ccc",
            height: 100,
            justifyContent: "center",
          }}
        >
          {/* <Box
            component="img"
            src={Logo}
            alt="Logo"
            sx={{
              height: "auto",
              width: "auto",
              maxHeight: "80%",
            }}
          /> */}
        </Box>

        <Box sx={{ padding: "0px", marginTop: 5 }}>
          <Box
            onClick={() => handleTabChange("home")}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              padding: "10px 0",
              cursor: "pointer",
              borderRight: selectedTab === "home" ? "4px solid #EE7D46" : "none", 
              color: selectedTab === "home" ? "#EE7D46" : "black",
              transition: "all 0.3s ease",
              marginLeft: 5,
            }}
          >
            <HomeIcon sx={{ color: selectedTab === "home" ? "#EE7D46" : "black" }} />
            Home
          </Box>

          <Box
            onClick={() => handleTabChange("clients")}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              padding: "10px 0",
              cursor: "pointer",
              borderRight: selectedTab === "clients" ? "4px solid #EE7D46" : "none",
              color: selectedTab === "clients" ? "#EE7D46" : "black", 
              transition: "all 0.3s ease",
              marginLeft: 5,
            }}
          >
            <PersonIcon sx={{ color: selectedTab === "clients" ? "#EE7D46" : "black" }} />
            Clientes
          </Box>

          <Box
            onClick={() => handleTabChange("category")}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              padding: "10px 0",
              cursor: "pointer",
              borderRight: selectedTab === "category" ? "4px solid #EE7D46" : "none",
              color: selectedTab === "category" ? "#EE7D46" : "black", 
              transition: "all 0.3s ease",
              marginLeft: 5,
            }}
          >
            <CategoryIcon sx={{ color: selectedTab === "category" ? "#EE7D46" : "black" }} />
            Produtos
          </Box>
        </Box>

        {sidebarOpen && (
          <Box
            sx={{
              position: "absolute",
              top: 70,
              left: isMobile ? 351 : 370,
              backgroundColor: "#1F1F1F",
              borderRadius: "50%",
              zIndex: 9999,
              padding: "10px",
            }}
          >
            <IconButton onClick={() => setSidebarOpen(false)}>
              <ArrowCircleLeftIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Sidebar;
