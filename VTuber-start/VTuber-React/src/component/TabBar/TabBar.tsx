import React from 'react';
import {
  Box,
  Tab,
  Tabs,
  Typography,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import NavBar from '../NavBar';
import './TabsStyle.css';
import { useLocation, useNavigate } from 'react-router-dom';

interface TabPanelProps {
  children?: React.ReactNode;
  value: number;
  index: number;
}

function TabPanel({ children, value, index }: TabPanelProps) {
  return (
    <div hidden={value !== index}>
      {value === index && (
        <Box>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// Optional: still use theme for other global overrides
const theme = createTheme({});

const TabBar: React.FC = () => {
  const [value] = React.useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  // Map tab indices to routes
  const routes = ['/', '/organizations'];

  // Determine current tab based on location
  const currentTab = routes.indexOf(location.pathname);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    // Navigate to the route corresponding to the tab
    navigate(routes[newValue]);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%' }}>
        <Box>
          <Tabs
            value={currentTab === -1 ? 0 : currentTab} // fallback to first tab
            onChange={handleChange}
            variant="standard"
            textColor="inherit"
          >
            <Tab label="VTubers" className="custom-tab" />
            <Tab label="Organizations" className="custom-tab" />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <NavBar title="VTuber Database" />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <NavBar title="Organization Database" />
        </TabPanel>
      </Box>
    </ThemeProvider>
  );
};

export default TabBar;
