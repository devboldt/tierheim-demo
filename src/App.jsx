import {Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import Navigation from './components/Navigation';
import {RouteConfig} from "./routes/RouteConfig.jsx";

const App = () => {
  return (
      <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f5f5f5' }}>
        <Navigation />
        <Box
            component="main"
            sx={{
              flexGrow: 1,
              pt: 9,
              marginLeft: '240px',
            }}
        >
          <Routes>
            {RouteConfig.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </Box>
      </Box>
  );
};

export default App;
