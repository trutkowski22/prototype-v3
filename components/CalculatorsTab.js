import { Box, Typography, Paper } from '@mui/material';

export default function CalculatorsTab() {
  return (
    <Paper
      elevation={3}
      style={{
        padding: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Typography variant="h6">Calculators</Typography>
      <Typography>Useful calculators for landscaping tasks.</Typography>
    </Paper>
  );
}
