import {
      Box,
      Typography,
      Paper,
      TextField,
      Button,
      Grid,
      Divider,
    } from '@mui/material';
    import { styled } from '@mui/material/styles';

    const StyledPaper = styled(Paper)(({ theme }) => ({
      padding: theme.spacing(2),
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      backdropFilter: 'blur(10px)',
    }));

    function CalculatorSection({ title, children }) {
      return (
        <Box mb={4}>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <Divider style={{ marginBottom: '16px' }} />
          {children}
        </Box>
      );
    }

    export default function CalculatorsTab() {
      return (
        <StyledPaper elevation={3}>
          <Typography variant="h6" gutterBottom>
            Landscaping Calculators
          </Typography>

          {/* Mulch Calculator */}
          <CalculatorSection title="Mulch Calculator">
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Area Length (feet)"
                  variant="outlined"
                  size="small"
                  fullWidth
                  placeholder="e.g., 20"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Area Width (feet)"
                  variant="outlined"
                  size="small"
                  fullWidth
                  placeholder="e.g., 30"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Mulch Depth (inches)"
                  variant="outlined"
                  size="small"
                  fullWidth
                  placeholder="e.g., 3"
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary">
                  Calculate
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography>Total Area: 600 sq ft</Typography>
                <Typography>Mulch Volume: 5 cubic yards</Typography>
                <Typography>Bags Needed: 10 bags</Typography>
              </Grid>
            </Grid>
          </CalculatorSection>

          {/* Concrete Calculator */}
          <CalculatorSection title="Concrete Calculator">
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Slab Length (feet)"
                  variant="outlined"
                  size="small"
                  fullWidth
                  placeholder="e.g., 10"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Slab Width (feet)"
                  variant="outlined"
                  size="small"
                  fullWidth
                  placeholder="e.g., 8"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Slab Thickness (inches)"
                  variant="outlined"
                  size="small"
                  fullWidth
                  placeholder="e.g., 4"
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary">
                  Calculate
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography>Concrete Volume: 2.5 cubic yards</Typography>
              </Grid>
            </Grid>
          </CalculatorSection>

          {/* Sod Calculator */}
          <CalculatorSection title="Sod Calculator">
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Area Length (feet)"
                  variant="outlined"
                  size="small"
                  fullWidth
                  placeholder="e.g., 40"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Area Width (feet)"
                  variant="outlined"
                  size="small"
                  fullWidth
                  placeholder="e.g., 25"
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary">
                  Calculate
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography>Total Area: 1000 sq ft</Typography>
                <Typography>Sod Rolls/Pallets Needed: 5 pallets</Typography>
              </Grid>
            </Grid>
          </CalculatorSection>

          {/* Plant Spacing Calculator */}
          <CalculatorSection title="Plant Spacing Calculator">
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Area Length (feet)"
                  variant="outlined"
                  size="small"
                  fullWidth
                  placeholder="e.g., 30"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Area Width (feet)"
                  variant="outlined"
                  size="small"
                  fullWidth
                  placeholder="e.g., 20"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Spacing Between Plants (inches)"
                  variant="outlined"
                  size="small"
                  fullWidth
                  placeholder="e.g., 18"
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary">
                  Calculate
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography>Number of Plants Needed: 120 plants</Typography>
              </Grid>
            </Grid>
          </CalculatorSection>

          {/* Fertilizer Calculator */}
          <CalculatorSection title="Fertilizer Calculator">
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Lawn Area (sq ft)"
                  variant="outlined"
                  size="small"
                  fullWidth
                  placeholder="e.g., 5000"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Fertilizer Coverage (sq ft per bag)"
                  variant="outlined"
                  size="small"
                  fullWidth
                  placeholder="e.g., 2000"
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary">
                  Calculate
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography>Bags of Fertilizer Needed: 3 bags</Typography>
              </Grid>
            </Grid>
          </CalculatorSection>

          {/* Retaining Wall Calculator */}
          <CalculatorSection title="Retaining Wall Calculator">
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Wall Length (feet)"
                  variant="outlined"
                  size="small"
                  fullWidth
                  placeholder="e.g., 20"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Wall Height (feet)"
                  variant="outlined"
                  size="small"
                  fullWidth
                  placeholder="e.g., 4"
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary">
                  Calculate
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography>Number of Blocks Needed: 800 blocks</Typography>
              </Grid>
            </Grid>
          </CalculatorSection>
        </StyledPaper>
      );
    }
