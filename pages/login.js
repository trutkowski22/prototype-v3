import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Box, TextField, Button, Paper, Typography } from '@mui/material';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      redirect: false,
      username,
      password,
    });

    if (result.error) {
      console.error('Login failed:', result.error);
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#E3F2FD"
    >
      <Paper
        elevation={3}
        style={{
          padding: '32px',
          borderRadius: '16px',
          maxWidth: '400px',
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            margin="normal"
            fullWidth
            required
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            fullWidth
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '16px' }}
          >
            Login    id: 1,
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

          </Button>
        </form>
      </Paper>
    </Box>
  );
}
