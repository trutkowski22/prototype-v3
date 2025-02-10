import { useState } from 'react';
    import {
      Box,
      Typography,
      Paper,
      Button,
      List,
      ListItem,
      ListItemText,
      ListItemIcon,
      Divider,
      IconButton,
    } from '@mui/material';
    import LocationOnIcon from '@mui/icons-material/LocationOn';
    import ShareIcon from '@mui/icons-material/Share';
    import { styled } from '@mui/material/styles';

    const StyledPaper = styled(Paper)(({ theme }) => ({
      padding: theme.spacing(2),
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      backdropFilter: 'blur(10px)',
    }));

    // Dummy Data - Represents a single day's schedule
    const dailySchedule = [
      {
        crew: 'Crew A',
        customers: [
          {
            name: 'John Smith',
            address: '123 Main St, Anytown, CA 91234',
            job: 'Lawn Mowing',
          },
          {
            name: 'Acme Corp',
            address: '456 Oak Ave, Anytown, CA 91234',
            job: 'Seeding',
          },
        ],
      },
      {
        crew: 'Crew B',
        customers: [
          {
            name: 'Jane Doe',
            address: '789 Pine Ln, Anytown, CA 91234',
            job: 'Tree Trimming',
          },
        ],
      },
    ];

    // Dummy Route Data - Represents optimized routes (mockup)
    const dummyRoutes = {
      'Crew A': [
        'Start at Shop: 100 Shop Rd, Anytown, CA',
        '123 Main St, Anytown, CA 91234',
        '456 Oak Ave, Anytown, CA 91234',
        'End at Shop',
      ],
      'Crew B': ['Start at Shop: 100 Shop Rd, Anytown, CA', '789 Pine Ln, Anytown, CA 91234', 'End at Shop'],
    };

    function RouteDisplay({ route }) {
      return (
        <List>
          {route.map((stop, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText primary={stop} />
            </ListItem>
          ))}
        </List>
      );
    }

    export default function RoutingTab() {
      const [selectedDate, setSelectedDate] = useState(new Date().toLocaleDateString()); // Mock current date

      return (
        <StyledPaper elevation={3}>
          <Typography variant="h6" gutterBottom>
            Daily Routing
          </Typography>
          <Typography variant="subtitle1">Date: {selectedDate}</Typography>

          {dailySchedule.map((crewSchedule) => (
            <Box key={crewSchedule.crew} mb={4}>
              <Typography variant="h6">{crewSchedule.crew}</Typography>
              <Divider style={{ marginBottom: '8px' }} />
              <Typography variant="subtitle2">Customers:</Typography>
              <List>
                {crewSchedule.customers.map((customer) => (
                  <ListItem key={customer.address}>
                    <ListItemText
                      primary={customer.name}
                      secondary={`${customer.address} - ${customer.job}`}
                    />
                  </ListItem>
                ))}
              </List>

              <Typography variant="subtitle2" mt={2}>
                Optimal Route:
              </Typography>
              <RouteDisplay route={dummyRoutes[crewSchedule.crew]} />
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <Typography variant='caption'>Share Route</Typography>
            </Box>
          ))}
        </StyledPaper>
      );
    }
