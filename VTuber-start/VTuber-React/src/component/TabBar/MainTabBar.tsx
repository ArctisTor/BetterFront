import React from 'react';
import {
  Box,
  Tab,
  Tabs,
  Typography,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import './TabsStyle.css';
import { Route, useLocation, useNavigate } from 'react-router-dom';
import DatabaseTabBar from './DatabaseTabBar/DatabaseTabBar';

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

const MainTabBar: React.FC = () => {
  const [value, setValue] = React.useState(0);
  // const location = useLocation();
  // const navigate = useNavigate();

  // Map tab indices to routes
  // const routes = ['/', '/organizations'];

  // Determine current tab based on location
  //const currentTab = routes.indexOf(location.pathname);
  const currentTab = value >= 0 && value ? value : 0;

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
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
            <Tab label="Database" className="custom-tab" />
            <Tab label="????" className="custom-tab" />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <DatabaseTabBar></DatabaseTabBar>
        </TabPanel>
        <TabPanel value={value} index={1}></TabPanel>
      </Box>
    </ThemeProvider>
  );
};

export default MainTabBar;
