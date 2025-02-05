import { Box, Typography, Paper } from '@mui/material';

export default function CrewTab() {
  return (
    <Paper
      elevation={3}
      style={{
        padding: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Typography variant="h6">Crew</Typography>
      <Typography>Manage crew members and schedules.</Typography>
    </Paper>
  );
}
