import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Tabs,
  Tab,
  Box,
  Paper,
  styled,
} from '@mui/material';
import CustomersTab from '../components/CustomersTab';
import InvoicesTab from '../components/InvoicesTab';
import CrewTab from '../components/CrewTab';
import CalculatorsTab from '../components/CalculatorsTab';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const StyledTab = styled(Tab)(({ theme }) => ({
  fontSize: '1.2rem',
  fontWeight: '600',
  padding: theme.spacing(2, 4),
  '&.Mui-selected': {
    backgroundColor: '#90caf9', // Light blue background for selected tab
    color: theme.palette.primary.contrastText,
  },
}));

const StyledTypography = styled(Typography)({
  fontFamily: 'Brush Script MT, cursive !important',
  fontWeight: 'bold !important',
  textAlign: 'center !important',
  flexGrow: '1 !important',
  fontSize: '2.5rem !important',
});

export default function Dashboard() {
  const { data: session } = useSession();
  const router = useRouter();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!session) {
      router.push('/login');
    }
  }, [session, router]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (!session) {
    return null;
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static" style={{ backgroundColor: '#3f51b5' }}>
        <Toolbar>
          <img
            src="https://i.pinimg.com/736x/14/61/d8/1461d8d1722e05ec5744b334313f664e.jpg"
            alt="Greenscapes Landscaping Logo"
            width={100}
            height={100}
            style={{ marginRight: '16px' }}
          />
          <StyledTypography variant="h4" component="div">
            Greenscapes Landscaping
          </StyledTypography>
          <Button color="inherit" onClick={() => signOut()}>
            Logout
          </Button>
        </Toolbar>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="navigation tabs"
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <StyledTab label="Customers" {...a11yProps(0)} />
          <StyledTab label="Invoices/Quotes" {...a11yProps(1)} />
          <StyledTab label="Crew" {...a11yProps(2)} />
          <StyledTab label="Calculators" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <Paper
        elevation={3}
        style={{
          margin: '20px',
          padding: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(10px)',
          flexGrow: 1,
        }}
      >
        <TabPanel value={value} index={0}>
          <CustomersTab />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <InvoicesTab />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <CrewTab />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <CalculatorsTab />
        </TabPanel>
      </Paper>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: '#3f51b5',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <div>
          {"Clever Cash Tech/BrandXpand. All Rights Reserved 2025"}
        </div>
      </Box>
    </Box>
  );
}
