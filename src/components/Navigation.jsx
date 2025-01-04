import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box
} from '@mui/material';
import { Home, Info, Pets } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo-tierheim-sinsheim.png';

const drawerWidth = 240;

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { text: 'Willkommen', icon: <Home />, path: '/' },
    { text: 'Tiere suchen ein Zuhause', icon: <Pets />, path: '/zu-den-tieren' },
    { text: 'Über uns', icon: <Info />, path: '/about' },
  ];

  return (
      <>
        <Box
            sx={{
              width: '100%',
              height: '100px',
              bgcolor: '#2c3e50',
              position: 'fixed',
              top: 0,
              left: 0,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
        >
          <Box
              component="img"
              src={logo}
              alt="Tierheim Logo"
              sx={{
                height: '100px',
                width: 'auto',
                objectFit: 'contain',
              }}
          />
          <Typography
              variant="subtitle2"
              sx={{
                color: 'white',
                fontSize: '0.8rem',
                lineHeight: 1.2,
              }}
          ></Typography>
        </Box>

        <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              position: 'absolute',
              top: '100px',
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
                bgcolor: '#2c3e50',
                color: 'white',
                top: '100px',
              },
            }}
        >
          <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1, borderBottom: '1px solid white' }}>
            <Typography variant="h6" component="div">
              Hauptmenü
            </Typography>
          </Box>
          <List>
            {menuItems.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton
                      onClick={() => navigate(item.path)}
                      selected={location.pathname === item.path}
                      sx={{
                        '&.Mui-selected': {
                          bgcolor: 'rgba(231, 76, 60, 0.2)',
                          '&:hover': {
                            bgcolor: 'rgba(231, 76, 60, 0.3)',
                          },
                        },
                        '&:hover': {
                          bgcolor: 'rgba(255, 255, 255, 0.1)',
                        },
                      }}
                  >
                    <ListItemIcon sx={{ color: 'white' }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
            ))}
          </List>
        </Drawer>
      </>
  );
};

export default Navigation;
