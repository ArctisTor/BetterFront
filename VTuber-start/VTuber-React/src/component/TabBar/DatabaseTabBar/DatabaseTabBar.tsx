import {
  Box,
  createTheme,
  Tab,
  Tabs,
  ThemeProvider,
  Typography,
} from '@mui/material';
import React from 'react';
import StorageIcon from '@mui/icons-material/Storage';
import NavBar from '../../NavBar';
import VTuberList from '../../../pages/Database/VTuber/VTuberList';
import OrganizationList from '../../../pages/Database/Organizations/OrganizationList';

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

const DatabaseTabBar: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const currentTab = value >= 0 && value ? value : 0;
  const tabLabels = ['VTuber', 'Organization'];

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <NavBar title={`${tabLabels[value]} Database`} />
      <ThemeProvider theme={theme}>
        <Box sx={{ width: '100%' }}>
          <Box>
            <Tabs
              value={currentTab === -1 ? 0 : currentTab} // fallback to first tab
              onChange={handleChange}
              variant="standard"
              textColor="inherit"
            >
              {tabLabels.map((label, index) => (
                <Tab
                  key={index}
                  label={label}
                  icon={<StorageIcon />}
                  className="custom-tab"
                />
              ))}
            </Tabs>
          </Box>

          <TabPanel value={value} index={0}>
            <VTuberList></VTuberList>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <OrganizationList></OrganizationList>
          </TabPanel>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default DatabaseTabBar;
