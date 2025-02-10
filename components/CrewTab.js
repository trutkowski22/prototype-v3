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
      Chip,
      Grid,
    } from '@mui/material';
    import MoreVertIcon from '@mui/icons-material/MoreVert';
    import AddIcon from '@mui/icons-material/Add';
    import EditIcon from '@mui/icons-material/Edit';
    import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
    import { styled } from '@mui/material/styles';

    const StyledPaper = styled(Paper)(({ theme }) => ({
      padding: theme.spacing(2),
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      backdropFilter: 'blur(10px)',
    }));

    // Dummy Crew Data
    const crewData = [
      {
        id: 'CM1001',
        name: 'John Doe',
        contact: { phone: '555-111-2222', email: 'john.doe@example.com' },
        skills: ['Mowing', 'Tree Trimming'],
        availability: 'Available',
        team: 'Team A',
        assignedJob: 'Smith Residence - Lawn Mowing',
      },
      {
        id: 'CM1002',
        name: 'Jane Smith',
        contact: { phone: '555-333-4444', email: 'jane.smith@example.com' },
        skills: ['Landscaping Design', 'Irrigation'],
        availability: 'On Leave',
        team: 'Team B',
        assignedJob: null,
      },
      {
        id: 'CM1003',
        name: 'Robert Jones',
        contact: { phone: '555-555-6666', email: 'robert.jones@example.com' },
        skills: ['Mowing', 'Seeding', 'Fertilizing'],
        availability: 'Available',
        team: 'Team A',
        assignedJob: 'Acme Corp - Seeding',
      },
    ];

    // --- Crew Member Details Dialog ---
    function CrewMemberDetails({ open, crewMember, onClose }) {
      if (!crewMember) return null;

      return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
          <DialogTitle>Crew Member Details - {crewMember.name}</DialogTitle>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1">Contact Information</Typography>
                <Typography>
                  Address: 123 Main St, Anytown, CA 91234
                </Typography> {/* Dummy Address */}
                <Typography>Phone: {crewMember.contact.phone}</Typography>
                <Typography>Alt Phone: 555-777-8888</Typography>
                <Typography>Email: {crewMember.contact.email}</Typography>

                <Typography variant="subtitle1" marginTop="16px">
                  Skills/Specializations
                </Typography>
                {crewMember.skills.map((skill) => (
                  <Chip key={skill} label={skill} style={{ marginRight: '4px' }} />
                ))}

                <Typography variant="subtitle1" marginTop="16px">
                  Training/Certifications
                </Typography>
                <Typography>Certified Arborist</Typography>
                <Typography>Pesticide Applicator License</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1">Availability Calendar</Typography>
                <Paper
                  style={{
                    height: 200,
                    width: '100%',
                    backgroundColor: '#f0f0f0',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <CalendarTodayIcon fontSize="large" color="disabled" />
                </Paper>

                <Typography variant="subtitle1" marginTop="16px">
                  Job History
                </Typography>
                <Typography>2024-01-15: Smith Residence - Lawn Mowing</Typography>
                <Typography>2023-12-20: Jones Residence - Tree Trimming</Typography>

                <Typography variant="subtitle1" marginTop="16px">
                  Performance Reviews/Notes
                </Typography>
                <Typography>
                  - Excellent attendance record.
                </Typography>
                <Typography>
                  - Received positive feedback from multiple clients.
                </Typography>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose} color="primary">
              Close
            </Button>
            <Button
              startIcon={<EditIcon />}
              onClick={() => {}}
              color="primary"
            >
              Edit
            </Button>
          </DialogActions>
        </Dialog>
      );
    }

    // --- Crew Scheduling Dialog ---
    function CrewScheduling({ open, onClose }) {
      const [selectedJob, setSelectedJob] = useState('');
      const [selectedCrew, setSelectedCrew] = useState([]);
      const [date, setDate] = useState('');
      const [notes, setNotes] = useState('');

      const handleCrewSelection = (crewId) => {
        if (selectedCrew.includes(crewId)) {
          setSelectedCrew(selectedCrew.filter((id) => id !== crewId));
        } else {
          setSelectedCrew([...selectedCrew, crewId]);
        }
      };

      return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
          <DialogTitle>Crew Scheduling/Assignment</DialogTitle>
          <DialogContent>
            <FormControl fullWidth margin="normal">
              <InputLabel id="job-select-label">Select Job</InputLabel>
              <Select
                labelId="job-select-label"
                id="job-select"
                value={selectedJob}
                label="Select Job"
                onChange={(e) => setSelectedJob(e.target.value)}
              >
                <MenuItem value="job1">Job 1 - Smith Residence</MenuItem>
                <MenuItem value="job2">Job 2 - Acme Corp</MenuItem>
                <MenuItem value="job3">Job 3 - Jones Residence</MenuItem>
              </Select>
            </FormControl>

            <Typography variant="subtitle1" marginTop="16px">
              Select Crew Members
            </Typography>
            {crewData.map((crewMember) => (
              <div key={crewMember.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedCrew.includes(crewMember.id)}
                    onChange={() => handleCrewSelection(crewMember.id)}
                  />
                  {crewMember.name}
                </label>
              </div>
            ))}

            <TextField
              label="Date"
              type="date"
              fullWidth
              margin="normal"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              label="Notes/Instructions"
              multiline
              rows={4}
              fullWidth
              margin="normal"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose} color="primary">
              Cancel
            </Button>
            <Button onClick={() => {}} color="primary">
              Confirm Assignment
            </Button>
          </DialogActions>
        </Dialog>
      );
    }

    // --- Main CrewTab Component ---
    export default function CrewTab() {
      const [anchorEl, setAnchorEl] = useState(null);
      const [selectedCrewMember, setSelectedCrewMember] = useState(null);
      const [showCrewDetails, setShowCrewDetails] = useState(false);
      const [showScheduling, setShowScheduling] = useState(false);
      const [searchText, setSearchText] = useState('');
      const [filterAvailability, setFilterAvailability] = useState('');
      const [filterSkills, setFilterSkills] = useState('');
      const [filterTeam, setFilterTeam] = useState('');

      const handleMenuClick = (event, crewMember) => {
        setAnchorEl(event.currentTarget);
        setSelectedCrewMember(crewMember);
      };

      const handleMenuClose = () => {
        setAnchorEl(null);
        setSelectedCrewMember(null);
      };

      const handleViewDetails = () => {
        setShowCrewDetails(true);
        handleMenuClose();
      };

      const handleCloseDetails = () => {
        setShowCrewDetails(false);
      };

      const handleOpenScheduling = () => {
        setShowScheduling(true);
      };

      const handleCloseScheduling = () => {
        setShowScheduling(false);
      };

      // --- Filtering (UI Mockup Only) ---
      const filteredCrew = crewData.filter((crewMember) => {
        const searchMatch =
          crewMember.name.toLowerCase().includes(searchText.toLowerCase()) ||
          crewMember.id.toLowerCase().includes(searchText.toLowerCase()) ||
          crewMember.skills.some((skill) =>
            skill.toLowerCase().includes(searchText.toLowerCase())
          );

        const availabilityMatch =
          filterAvailability === '' ||
          crewMember.availability === filterAvailability;

        const skillsMatch =
          filterSkills === '' ||
          crewMember.skills.some((skill) => skill === filterSkills);

        const teamMatch = filterTeam === '' || crewMember.team === filterTeam;

        return searchMatch && availabilityMatch && skillsMatch && teamMatch;
      });

      return (
        <Box>
          <StyledPaper elevation={3} style={{ marginBottom: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Crew Management
            </Typography>

            {/* Search and Filters */}
            <Box display="flex" alignItems="center" marginBottom="16px">
              <TextField
                label="Search Crew"
                variant="outlined"
                size="small"
                style={{ marginRight: '16px' }}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <FormControl
                variant="outlined"
                size="small"
                style={{ marginRight: '16px', width: '150px' }}
              >
                <InputLabel id="availability-label">Availability</InputLabel>
                <Select
                  labelId="availability-label"
                  id="availability-select"
                  label="Availability"
                  value={filterAvailability}
                  onChange={(e) => setFilterAvailability(e.target.value)}
                >
                  <MenuItem value="">All</MenuItem>
                  <MenuItem value="Available">Available</MenuItem>
                  <MenuItem value="On Leave">On Leave</MenuItem>
                  <MenuItem value="Assigned">Assigned</MenuItem>
                </Select>
              </FormControl>
              <FormControl
                variant="outlined"
                size="small"
                style={{ marginRight: '16px', width: '150px' }}
              >
                <InputLabel id="skills-label">Skills</InputLabel>
                <Select
                  labelId="skills-label"
                  id="skills-select"
                  label="Skills"
                  value={filterSkills}
                  onChange={(e) => setFilterSkills(e.target.value)}
                >
                  <MenuItem value="">All</MenuItem>
                  <MenuItem value="Mowing">Mowing</MenuItem>
                  <MenuItem value="Tree Trimming">Tree Trimming</MenuItem>
                  <MenuItem value="Landscaping Design">Landscaping Design</MenuItem>
                  <MenuItem value="Irrigation">Irrigation</MenuItem>
                  <MenuItem value="Seeding">Seeding</MenuItem>
                  <MenuItem value="Fertilizing">Fertilizing</MenuItem>
                </Select>
              </FormControl>
              <FormControl
                variant="outlined"
                size="small"
                style={{ marginRight: '16px', width: '150px' }}
              >
                <InputLabel id="team-label">Team</InputLabel>
                <Select
                  labelId="team-label"
                  id="team-select"
                  label="Team"
                  value={filterTeam}
                  onChange={(e) => setFilterTeam(e.target.value)}
                >
                  <MenuItem value="">All</MenuItem>
                  <MenuItem value="Team A">Team A</MenuItem>
                  <MenuItem value="Team B">Team B</MenuItem>
                </Select>
              </FormControl>

              <Button
                variant="contained"
                color="primary"
                onClick={handleOpenScheduling}
              >
                <AddIcon />
                Schedule Crew
              </Button>
            </Box>

            {/* Crew List Table */}
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="crew table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>ID</TableCell>
                    <TableCell>Contact</TableCell>
                    <TableCell>Skills</TableCell>
                    <TableCell>Availability</TableCell>
                    <TableCell>Team</TableCell>
                    <TableCell>Assigned Job</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredCrew.map((crewMember) => (
                    <TableRow key={crewMember.id}>
                      <TableCell>{crewMember.name}</TableCell>
                      <TableCell>{crewMember.id}</TableCell>
                      <TableCell>
                        {crewMember.contact.phone}
                        <br />
                        {crewMember.contact.email}
                      </TableCell>
                      <TableCell>
                        {crewMember.skills.map((skill) => (
                          <Chip
                            key={skill}
                            label={skill}
                            size="small"
                            style={{ marginRight: '4px' }}
                          />
                        ))}
                      </TableCell>
                      <TableCell>{crewMember.availability}</TableCell>
                      <TableCell>{crewMember.team}</TableCell>
                      <TableCell>
                        {crewMember.assignedJob || 'Not Assigned'}
                      </TableCell>
                      <TableCell>
                        <IconButton
                          aria-label="more"
                          aria-controls="crew-menu"
                          aria-haspopup="true"
                          onClick={(event) => handleMenuClick(event, crewMember)}
                        >
                          <MoreVertIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* Options Menu */}
            <Menu
              id="crew-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleViewDetails}>View Details</MenuItem>
              <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
            </Menu>
          </StyledPaper>

          {/* Dialogs */}
          <CrewMemberDetails
            open={showCrewDetails}
            crewMember={selectedCrewMember}
            onClose={handleCloseDetails}
          />
          <CrewScheduling open={showScheduling} onClose={handleCloseScheduling} />
        </Box>
      );
    }
