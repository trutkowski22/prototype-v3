import { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Menu,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  backdropFilter: 'blur(10px)',
}));

const customerData = [
  {
    id: 1,
    name: 'John Smith',
    customerId: 'GS1001',
    contact: '555-123-4567',
    email: 'john.smith@example.com',
    address: '123 Main St, Anytown, CA 91234',
    customerType: 'R',
    accountStatus: 'A',
    lastServiceDate: '2024-01-15',
    nextServiceDate: '2024-02-15',
    balance: '$250.00',
    notes: 'High-value client',
  },
  {
    id: 2,
    name: 'Acme Corp',
    customerId: 'GS2002',
    contact: '555-987-6543',
    email: 'info@acmecorp.com',
    address: '456 Oak Ave, Anytown, CA 91234',
    customerType: 'C',
    accountStatus: 'A',
    lastServiceDate: '2024-01-20',
    nextServiceDate: '2024-02-20',
    balance: '$500.00',
    notes: 'Problem account',
  },
  {
    id: 3,
    name: 'Jane Doe',
    customerId: 'GS1003',
    contact: '555-222-3333',
    email: 'jane.doe@example.com',
    address: '789 Pine Ln, Anytown, CA 91234',
    customerType: 'R',
    accountStatus: 'I',
    lastServiceDate: '2023-12-01',
    nextServiceDate: 'N/A',
    balance: '$0.00',
    notes: 'Past client',
  },
];

export default function CustomersTab() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showCustomerDetails, setShowCustomerDetails] = useState(false);
  const [showNewCustomerForm, setShowNewCustomerForm] = useState(false);

  const handleMenuClick = (event, customer) => {
    setAnchorEl(event.currentTarget);
    setSelectedCustomer(customer);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedCustomer(null);
  };

  const handleViewDetails = () => {
    setShowCustomerDetails(true);
    handleMenuClose();
  };

  const handleCloseDetails = () => {
    setShowCustomerDetails(false);
  };

  const handleOpenNewCustomerForm = () => {
    setShowNewCustomerForm(true);
  };

  const handleCloseNewCustomerForm = () => {
    setShowNewCustomerForm(false);
  };

  return (
    <Box>
      <StyledPaper elevation={3} style={{ marginBottom: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Customer Database
        </Typography>
        <Box display="flex" alignItems="center" marginBottom="16px">
          <TextField
            label="Search Customers"
            variant="outlined"
            size="small"
            style={{ marginRight: '16px' }}
          />
          <FormControl
            variant="outlined"
            size="small"
            style={{ marginRight: '16px', width: '150px' }}
          >
            <InputLabel id="customer-type-label">Customer Type</InputLabel>
            <Select
              labelId="customer-type-label"
              id="customer-type-select"
              label="Customer Type"
            >
              <MenuItem value="R">Residential</MenuItem>
              <MenuItem value="C">Commercial</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            variant="outlined"
            size="small"
            style={{ marginRight: '16px', width: '150px' }}
          >
            <InputLabel id="account-status-label">Account Status</InputLabel>
            <Select
              labelId="account-status-label"
              id="account-status-select"
              label="Account Status"
            >
              <MenuItem value="A">Active</MenuItem>
              <MenuItem value="I">Inactive</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" color="primary" onClick={handleOpenNewCustomerForm}>
            <AddIcon />
            New Customer
          </Button>
        </Box>
        <TableContainer component={Paper} style={{ width: '100%' }}>
          <Table sx={{ width: '100%' }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ width: '15%' }}>Customer Name</TableCell>
                <TableCell style={{ width: '8%' }}>Customer ID</TableCell>
                <TableCell style={{ width: '8%' }}>Contact</TableCell>
                <TableCell style={{ width: '20%' }}>Address</TableCell>
                <TableCell style={{ width: '5%' }}>Type</TableCell>
                <TableCell style={{ width: '5%' }}>Status</TableCell>
                <TableCell style={{ width: '10%' }}>Last Service</TableCell>
                <TableCell style={{ width: '10%' }}>Next Service</TableCell>
                <TableCell style={{ width: '10%' }}>Balance</TableCell>
                <TableCell style={{ width: '15%' }}>Notes</TableCell>
                <TableCell style={{ width: '5%' }}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customerData.map((customer) => (
                <TableRow
                  key={customer.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {customer.name}
                  </TableCell>
                  <TableCell>{customer.customerId}</TableCell>
                  <TableCell style={{ fontSize: '0.8rem' }}>
                    {customer.contact}
                    <br />
                    {customer.email}
                  </TableCell>
                  <TableCell>{customer.address}</TableCell>
                  <TableCell>{customer.customerType}</TableCell>
                  <TableCell>{customer.accountStatus}</TableCell>
                  <TableCell>{customer.lastServiceDate}</TableCell>
                  <TableCell>{customer.nextServiceDate}</TableCell>
                  <TableCell>{customer.balance}</TableCell>
                  <TableCell>{customer.notes}</TableCell>
                  <TableCell>
                    <IconButton
                      aria-label="more"
                      aria-controls="customer-menu"
                      aria-haspopup="true"
                      onClick={(event) => handleMenuClick(event, customer)}
                    >
                      <MoreVertIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Menu
          id="customer-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleViewDetails}>View Details</MenuItem>
          <MenuItem onClick={handleMenuClose}>Edit Customer</MenuItem>
          <MenuItem onClick={handleMenuClose}>Delete Customer</MenuItem>
          <MenuItem onClick={handleMenuClose}>Add New Service/Project</MenuItem>
          <MenuItem onClick={handleMenuClose}>Generate Reports</MenuItem>
          <MenuItem onClick={handleMenuClose}>Export Data</MenuItem>
        </Menu>
      </StyledPaper>

      <CustomerDetails
        open={showCustomerDetails}
        customer={selectedCustomer}
        onClose={handleCloseDetails}
      />

      <NewCustomerForm
        open={showNewCustomerForm}
        onClose={handleCloseNewCustomerForm}
      />
    </Box>
  );
}

function CustomerDetails({ open, customer, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Customer Details - {customer?.name}</DialogTitle>
      <DialogContent>
        <Typography variant="subtitle1">Contact Information</Typography>
        <Typography>Address: {customer?.address}</Typography>
        <Typography>Phone: {customer?.contact}</Typography>
        <Typography>Email: {customer?.email}</Typography>

        <Typography variant="subtitle1" marginTop="16px">
          Service History
        </Typography>
        <Typography>
          Date: 2023-12-25, Description: Winter cleanup, Cost: $300, Notes: Excellent service
        </Typography>
        <Typography>
          Date: 2023-09-10, Description: Lawn mowing, Cost: $100, Notes: Regular service
        </Typography>

        <Typography variant="subtitle1" marginTop="16px">
          Scheduled Services
        </Typography>
        <Typography>Date: 2024-03-15, Service: Spring cleanup, Crew: John, Notes: Confirm 1 week prior</Typography>

        <Typography variant="subtitle1" marginTop="16px">
          Billing Information
        </Typography>
        <Typography>Outstanding Balance: {customer?.balance}</Typography>
        <Typography>Payment Method: Credit Card</Typography>

        <Typography variant="subtitle1" marginTop="16px">
          Property Information
        </Typography>
        <Typography>Address: {customer?.address}, Size: 0.5 acres, Features: Large lawn, garden</Typography>

        <Typography variant="subtitle1" marginTop="16px">
          Communication Log
        </Typography>
        <Typography>2024-01-20: Called customer to confirm service, Notes: Customer confirmed</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

function NewCustomerForm({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>New Customer Form</DialogTitle>
      <DialogContent>
        <TextField label="Customer Name" variant="outlined" fullWidth margin="normal" />
        <TextField label="Address" variant="outlined" fullWidth margin="normal" />
        <TextField label="Phone Number" variant="outlined" fullWidth margin="normal" />
        <TextField label="Email Address" variant="outlined" fullWidth margin="normal" />
        <FormControl variant="outlined" fullWidth margin="normal">
          <InputLabel id="customer-type-label">Customer Type</InputLabel>
          <Select
            labelId="customer-type-label"
            id="customer-type-select"
            label="Customer Type"
          >
            <MenuItem value="R">Residential</MenuItem>
            <MenuItem value="C">Commercial</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Create Customer
        </Button>
      </DialogActions>
    </Dialog>
  );
}
