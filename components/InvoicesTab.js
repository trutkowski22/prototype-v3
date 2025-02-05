// InvoicesTab.js
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
  Tabs,
  Tab,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Grid,
  Divider,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  backdropFilter: 'blur(10px)',
}));

const invoiceQuoteData = [
  {
    id: 1,
    number: 'INV-2024-001',
    customerName: 'John Smith',
    dateIssued: '2024-01-25',
    dueDate: '2024-02-25',
    amount: '$300.00',
    status: 'Paid',
    type: 'Invoice',
  },
  {
    id: 2,
    number: 'QT-2024-002',
    customerName: 'Acme Corp',
    dateIssued: '2024-01-20',
    dueDate: 'N/A',
    amount: '$500.00',
    status: 'Accepted',
    type: 'Quote',
  },
  {
    id: 3,
    number: 'INV-2024-003',
    customerName: 'Jane Doe',
    dateIssued: '2024-01-15',
    dueDate: '2024-02-15',
    amount: '$200.00',
    status: 'Overdue',
    type: 'Invoice',
  },
  {
    id: 4,
    number: 'INV-2024-004',
    customerName: 'David Lee',
    dateIssued: '2024-01-28',
    dueDate: '2024-02-01',
    amount: '$150.00',
    status: 'Sent',
    type: 'Invoice',
  },
  {
    id: 5,
    number: 'INV-2024-005',
    customerName: 'Emily White',
    dateIssued: '2024-01-30',
    dueDate: '2024-02-05',
    amount: '$400.00',
    status: 'Draft',
    type: 'Invoice',
  },
  {
    id: 6,
    number: 'INV-2024-006',
    customerName: 'Bob Johnson',
    dateIssued: '2024-02-01',
    dueDate: '2024-02-10',
    amount: '$250.00',
    status: 'Sent',
    type: 'Invoice',
  },
  {
    id: 7,
    number: 'INV-2024-007',
    customerName: 'Alice Brown',
    dateIssued: '2024-02-03',
    dueDate: '2024-02-15',
    amount: '$320.00',
    status: 'Paid',
    type: 'Invoice',
  },
  {
    id: 8,
    number: 'INV-2024-008',
    customerName: 'Charlie Green',
    dateIssued: '2024-02-05',
    dueDate: '2024-02-20',
    amount: '$180.00',
    status: 'Sent',
    type: 'Invoice',
  },
  {
    id: 9,
    number: 'INV-2024-009',
    customerName: 'Diana Blue',
    dateIssued: '2024-02-07',
    dueDate: '2024-02-22',
    amount: '$290.00',
    status: 'Draft',
    type: 'Invoice',
  },
  {
    id: 10,
    number: 'INV-2024-010',
    customerName: 'Ethan Black',
    dateIssued: '2024-02-09',
    dueDate: '2024-02-25',
    amount: '$310.00',
    status: 'Sent',
    type: 'Invoice',
  },
  {
    id: 11,
    number: 'INV-2024-011',
    customerName: 'Fiona Gray',
    dateIssued: '2024-02-11',
    dueDate: '2024-02-28',
    amount: '$220.00',
    status: 'Paid',
    type: 'Invoice',
  },
  {
    id: 12,
    number: 'INV-2024-012',
    customerName: 'George Purple',
    dateIssued: '2024-02-13',
    dueDate: '2024-03-01',
    amount: '$380.00',
    status: 'Sent',
    type: 'Invoice',
  },
  {
    id: 13,
    number: 'INV-2024-013',
    customerName: 'Hannah Teal',
    dateIssued: '2024-02-15',
    dueDate: '2024-03-03',
    amount: '$270.00',
    status: 'Draft',
    type: 'Invoice',
  },
  {
    id: 14,
    number: 'INV-2024-014',
    customerName: 'Isaac Silver',
    dateIssued: '2024-02-17',
    dueDate: '2024-03-05',
    amount: '$330.00',
    status: 'Sent',
    type: 'Invoice',
  },
  {
    id: 15,
    number: 'INV-2024-015',
    customerName: 'Julia Gold',
    dateIssued: '2024-02-19',
    dueDate: '2024-03-07',
    amount: '$260.00',
    status: 'Paid',
    type: 'Invoice',
  },
];

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

const commonLandscapingTasks = [
  { label: 'Scheduled Lawncare', price: 50 },
  { label: 'Tree Trimming', price: 75 },
  { label: 'Sprinkler System Tune-up', price: 60 },
  { label: 'Seeding', price: 80 },
  { label: 'Fertilizing', price: 70 },
];

function calculateSoonestDueDate(invoices) {
  const now = new Date();
  const upcomingInvoices = invoices.filter(
    (invoice) => new Date(invoice.dueDate) >= now && invoice.status !== 'Paid'
  );

  if (upcomingInvoices.length === 0) {
    return [];
  }

  upcomingInvoices.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

  const soonestDueDate = new Date(upcomingInvoices[0].dueDate);

  const soonestDueInvoices = upcomingInvoices.filter(
    (invoice) => new Date(invoice.dueDate).getTime() === soonestDueDate.getTime()
  );

  return soonestDueInvoices;
}

function calculatePastDueInvoices(invoices) {
  const now = new Date();
  const pastDueInvoices = invoices.filter(
    (invoice) => new Date(invoice.dueDate) < now && invoice.status !== 'Paid'
  );

  return pastDueInvoices;
}

export default function InvoicesTab() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedInvoiceQuote, setSelectedInvoiceQuote] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showNewForm, setShowNewForm] = useState(false);
  const [formType, setFormType] = useState('Invoice');

  const handleMenuClick = (event, invoiceQuote) => {
    setAnchorEl(event.currentTarget);
    setSelectedInvoiceQuote(invoiceQuote);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedInvoiceQuote(null);
  };

  const handleViewDetails = () => {
    setShowDetails(true);
    handleMenuClose();
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  const handleOpenNewForm = (type) => {
    setFormType(type);
    setShowNewForm(true);
  };

  const handleCloseNewForm = () => {
    setShowNewForm(false);
  };

  const soonestDueInvoices = calculateSoonestDueDate(invoiceQuoteData);
  const pastDueInvoices = calculatePastDueInvoices(invoiceQuoteData);

  const soonestDueTotal = soonestDueInvoices.reduce((acc, invoice) => {
    return acc + parseFloat(invoice.amount.replace('$', ''));
  }, 0);

  const pastDueTotal = pastDueInvoices.reduce((acc, invoice) => {
    return acc + parseFloat(invoice.amount.replace('$', ''));
  }, 0);

  return (
    <Box>
      <StyledPaper elevation={3} style={{ marginBottom: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Recent Invoices/Quotes
        </Typography>

        {/* Soonest Due Invoices Section */}
        {soonestDueInvoices.length > 0 && (
          <Box mb={2}>
            <Typography variant="subtitle1" style={{ color: 'green' }}>
              Soonest Due Invoices:
            </Typography>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="soonest due invoices">
                <TableHead>
                  <TableRow>
                    <TableCell>Number</TableCell>
                    <TableCell>Customer Name</TableCell>
                    <TableCell>Due Date</TableCell>
                    <TableCell>Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {soonestDueInvoices.map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell>{invoice.number}</TableCell>
                      <TableCell>{invoice.customerName}</TableCell>
                      <TableCell>{invoice.dueDate}</TableCell>
                      <TableCell>{invoice.amount}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell colSpan={3} align="right">
                      <Typography style={{ fontWeight: 'bold', color: 'green' }}>
                        Total:
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography style={{ fontWeight: 'bold', color: 'green' }}>
                        ${soonestDueTotal.toFixed(2)}
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}

        {/* Past Due Invoices Section */}
        {pastDueInvoices.length > 0 && (
          <Box mb={2}>
            <Typography variant="subtitle1" style={{ color: 'red' }}>
              Past Due Invoices:
            </Typography>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="past due invoices">
                <TableHead>
                  <TableRow>
                    <TableCell>Number</TableCell>
                    <TableCell>Customer Name</TableCell>
                    <TableCell>Due Date</TableCell>
                    <TableCell>Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {pastDueInvoices.map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell>{invoice.number}</TableCell>
                      <TableCell>{invoice.customerName}</TableCell>
                      <TableCell>{invoice.dueDate}</TableCell>
                      <TableCell>{invoice.amount}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell colSpan={3} align="right">
                      <Typography style={{ fontWeight: 'bold', color: 'red' }}>
                        Total:
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography style={{ fontWeight: 'bold', color: 'red' }}>
                        ${pastDueTotal.toFixed(2)}
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}

        <Box display="flex" alignItems="center" marginBottom="16px">
          <TextField
            label="Search Invoices/Quotes"
            variant="outlined"
            size="small"
            style={{ marginRight: '16px' }}
          />
          <FormControl
            variant="outlined"
            size="small"
            style={{ marginRight: '16px', width: '150px' }}
          >
            <InputLabel id="type-label">Type</InputLabel>
            <Select
              labelId="type-label"
              id="type-select"
              label="Type"
            >
              <MenuItem value="Invoice">Invoice</MenuItem>
              <MenuItem value="Quote">Quote</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            variant="outlined"
            size="small"
            style={{ marginRight: '16px', width: '150px' }}
          >
            <InputLabel id="status-label">Status</InputLabel>
            <Select
              labelId="status-label"
              id="status-select"
              label="Status"
            >
              <MenuItem value="Draft">Draft</MenuItem>
              <MenuItem value="Sent">Sent</MenuItem>
              <MenuItem value="Paid">Paid</MenuItem>
              <MenuItem value="Overdue">Overdue</MenuItem>
              <MenuItem value="Accepted">Accepted</MenuItem>
              <MenuItem value="Rejected">Rejected</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" color="primary" onClick={() => handleOpenNewForm('Invoice')}>
            <AddIcon />
            New Invoice
          </Button>
          <Button variant="contained" color="primary" onClick={() => handleOpenNewForm('Quote')}>
            <AddIcon />
            New Quote
          </Button>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Number</TableCell>
                <TableCell>Customer Name</TableCell>
                <TableCell>Date Issued</TableCell>
                <TableCell>Due Date</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Status</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {invoiceQuoteData.map((item) => (
                <TableRow
                  key={item.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.number}
                  </TableCell>
                  <TableCell>{item.customerName}</TableCell>
                  <TableCell>{item.dateIssued}</TableCell>
                  <TableCell>{item.dueDate}</TableCell>
                  <TableCell>{item.amount}</TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell>
                    <IconButton
                      aria-label="more"
                      aria-controls="invoice-quote-menu"
                      aria-haspopup="true"
                      onClick={(event) => handleMenuClick(event, item)}
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
          id="invoice-quote-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleViewDetails}>View Details</MenuItem>
          <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
          <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
          <MenuItem onClick={handleMenuClose}>Generate Reports</MenuItem>
          <MenuItem onClick={handleMenuClose}>Export Data</MenuItem>
        </Menu>
      </StyledPaper>

      <InvoiceQuoteDetails
        open={showDetails}
        invoiceQuote={selectedInvoiceQuote}
        onClose={handleCloseDetails}
      />

      <NewInvoiceQuoteForm
        open={showNewForm}
        onClose={handleCloseNewForm}
        type={formType}
      />
    </Box>
  );
}

function InvoiceQuoteDetails({ open, invoiceQuote, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>{invoiceQuote?.type} Details - {invoiceQuote?.number}</DialogTitle>
      <DialogContent>
        <Typography variant="subtitle1">Customer: {invoiceQuote?.customerName}</Typography>
        <Typography>Date Issued: {invoiceQuote?.dateIssued}</Typography>
        <Typography>Due Date: {invoiceQuote?.dueDate}</Typography>
        <Typography>Amount: {invoiceQuote?.amount}</Typography>
        <Typography>Status: {invoiceQuote?.status}</Typography>
        {/* Add more details here */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

function NewInvoiceQuoteForm({ open, onClose, type }) {
  const [tabValue, setTabValue] = useState(0);
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [routineTasks, setRoutineTasks] = useState(
    commonLandscapingTasks.map((task) => ({ ...task, checked: false }))
  );
  const [otherServices, setOtherServices] = useState([{ item: '', price: '' }]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleCustomerChange = (event) => {
    setSelectedCustomer(event.target.value);
  };

  const handleRoutineTaskChange = (index) => (event) => {
    const newRoutineTasks = [...routineTasks];
    newRoutineTasks[index].checked = event.target.checked;
    setRoutineTasks(newRoutineTasks);
  };

  const handleRoutineTaskPriceChange = (index) => (event) => {
    const newRoutineTasks = [...routineTasks];
    newRoutineTasks[index].price = event.target.value;
    setRoutineTasks(newRoutineTasks);
  };

  const handleOtherServiceChange = (index, field) => (event) => {
    const newOtherServices = [...otherServices];
    newOtherServices[index][field] = event.target.value;
    setOtherServices(newOtherServices);
  };

  const handleAddOtherService = () => {
    setOtherServices([...otherServices, { item: '', price: '' }]);
  };

  const handleDeleteOtherService = (index) => {
    const newOtherServices = [...otherServices];
    newOtherServices.splice(index, 1);
    setOtherServices(newOtherServices);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>New {type} Form</DialogTitle>
      <DialogContent>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="form-tabs">
          <Tab label="Basic Information" />
          <Tab label="Line Items" />
          <Tab label="Notes & Terms" />
        </Tabs>
        {tabValue === 0 && (
          <Box mt={2}>
            <FormControl variant="outlined" fullWidth margin="normal">
              <InputLabel id="customer-label">Customer</InputLabel>
              <Select
                labelId="customer-label"
                id="customer-select"
                label="Customer"
                value={selectedCustomer}
                onChange={handleCustomerChange}
              >
                {customerData.map((customer) => (
                  <MenuItem key={customer.id} value={customer.name}>
                    {customer.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField label="Date Issued" variant="outlined" fullWidth margin="normal" />
            {type === 'Invoice' && (
              <TextField label="Due Date" variant="outlined" fullWidth margin="normal" />
            )}
            {type === 'Quote' && (
              <TextField label="Expiry Date" variant="outlined" fullWidth margin="normal" />
            )}
          </Box>
        )}
        {tabValue === 1 && (
          <Box mt={2}>
            <Typography variant="subtitle1">Line Items</Typography>

            {/* Common Landscaping Tasks */}
            <Typography variant="subtitle2">Common Landscaping Tasks</Typography>
            <FormGroup>
              {routineTasks.map((task, index) => (
                <Box key={task.label} display="flex" alignItems="center">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={task.checked}
                        onChange={handleRoutineTaskChange(index)}
                      />
                    }
                    label={task.label}
                  />
                  <TextField
                    label="Price"
                    variant="outlined"
                    size="small"
                    style={{ width: '80px', marginRight: '16px' }}
                    value={task.price}
                    onChange={handleRoutineTaskPriceChange(index)}
                  />
                </Box>
              ))}
            </FormGroup>

            <Divider style={{ margin: '16px 0' }} />

            {/* Other Services */}
            <Typography variant="subtitle2">Other Services</Typography>
            {otherServices.map((service, index) => (
              <Box key={index} display="flex" alignItems="center" mb={2}>
                <Grid container spacing={2}>
                  <Grid item xs={1}>
                    <IconButton onClick={() => handleDeleteOtherService(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                  <Grid item xs={7}>
                    <TextField
                      label="Item"
                      variant="outlined"
                      fullWidth
                      size="small"
                      value={service.item}
                      onChange={handleOtherServiceChange(index, 'item')}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      label="Price"
                      variant="outlined"
                      fullWidth
                      size="small"
                      value={service.price}
                      onChange={handleOtherServiceChange(index, 'price')}
                    />
                  </Grid>
                </Grid>
              </Box>
            ))}
            <Button startIcon={<AddIcon />} onClick={handleAddOtherService}>
              Add Line Item
            </Button>
          </Box>
        )}
        {tabValue === 2 && (
          <Box mt={2}>
            <TextField
              label="Notes & Terms"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              rows={4}
            />
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Create {type}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
