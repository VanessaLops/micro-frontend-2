
export const sizes = {
    fullWidth: '100%',
    fullHeight: '100vh',
    headerHeight: '64px',
    menuIconSize: '40px',
    logoHeight: '50px',
    typographyFontSize: '14px',
};

export const colors = {
    background: '#F5F5F5',
    primary: '#1976d2',
    secondary: '#dc004e',
    backgroundWhite: "#ffffff",
    backgroundBlack: "#000000",
    linkActiveColor: '#EC6724',
    textColor: '#000000',
};

export const spacing = {
    small: 2,
    medium: 4,
    large: 8,
};

export const typography = {
    h1: {
        fontSize: '2rem',
        fontWeight: 'bold',
    },
    h2: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },
    body1: {
        fontSize: '1rem',
        fontWeight: 'normal',
    },
    link: {
        fontSize: sizes.typographyFontSize,
        fontWeight: '400',
        fontFamily: 'Inter, sans-serif',
    },
};

export const dashboardStyles = {
    container: {
        width: sizes.fullWidth,
        height: sizes.fullHeight,
        backgroundColor: colors.background,
    },
    header: {
        padding: spacing.medium,
        backgroundColor: colors.primary,
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        padding: `${spacing.medium * 5}px ${spacing.medium * 12}px`,
        backgroundColor: colors.background,
        height:sizes.fullWidth
    },
    button: {
        padding: `${spacing.small}px ${spacing.medium * 2}px`,
        backgroundColor: colors.secondary,
        color: 'white',
        borderRadius: '4px',
        fontWeight: 'bold',
        '&:hover': {
            backgroundColor: colors.primary,
        },
    },


    headerStyles: {
        backgroundColor: colors.backgroundWhite,
        color: colors.backgroundBlack,
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        height: 80,
        display: 'flex',
    },
    toolbarbox: {
        display: 'flex',
        alignItems: 'center',
    },
    menuIcon: {
        fontSize: sizes.menuIconSize,
        marginRight: spacing.small,
        color:"black"
    },
    logo: {
        height: sizes.logoHeight,
    },

    navLinks: {
        display: 'flex',
        gap: spacing.medium,
    },
    linkActive: {
        color: colors.linkActiveColor,
        borderBottom: `2px solid ${colors.linkActiveColor}`,
    },
    linkDefault: {
        color: colors.textColor,
        borderBottom: `2px solid ${colors.linkActiveColor}`
    },
    navLinkText: {
        fontSize: sizes.typographyFontSize,
        fontWeight: '400',
        fontFamily: 'Inter, sans-serif',
        textDecoration: 'none',
      
    },
};
export const carddStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100vh', 
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '16px',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1rem', 
    alignSelf: 'center',
  },
  selectContainer: {
    flexDirection: 'row',
    fontWeight: 'bold',
    fontSize: '1rem', 
    alignSelf: 'center',
  },
  select: {
    height: 30,
    width: 70,
    marginLeft: '8px', 
  },
  cardWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowY: 'auto', 
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: '16px',
  },
  cardGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: '16px',
    width: '100%',
  },
  card: {
    width: 285,
    height: 138,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    boxSizing: 'border-box',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '16px', 
    marginBottom: '16px',
  },
  button: {
    width: '100%',
    height: '40px',
    borderRadius: '4px 0px 0px 0px',
    color: '#EC6724',
    border: '2px solid #EC6724',
    opacity: 1,
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#D65E2F',
      color: 'white',
    },
    gap: '0px',
    textTransform: 'none',
  },
  pagination: {
    marginTop: '16px',
  },
};



export const dashboardStylesBar = {

  logoContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ccc',
      height: 70,
  },
  closeButton: {
      position: 'absolute',
      right: 10,
      top: 10,
      backgroundColor: '#fff',
      borderRadius: '50%',
  },
  
  navLinks: {
      marginTop: 20,
  },
  navLinkText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
      '&:hover': {
          color: '#1976d2',
      },
  },
  linkActive: {
      backgroundColor: '#fff',
      color: '#1976d2',
  },
  linkDefault: {
      backgroundColor: 'transparent',
      color: '#333',
  },
  navLinkIcon: {
      marginRight: 2,
  },
 
  listItemSelected: {
      backgroundColor: '#fff',
      borderLeft: '5px solid #1976d2',
  },
};
