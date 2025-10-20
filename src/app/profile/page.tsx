'use client';

import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Select,
  MenuItem,
  Chip,
} from '@mui/material';
import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SaveIcon from '@mui/icons-material/Save';

export default function ProfilePage() {
  const [interests, setInterests] = useState('');
  const [industry, setIndustry] = useState('');
  const [email, setEmail] = useState('your.email@example.com');
  const [password, setPassword] = useState('');

  const savedOpportunities = [
    {
      id: 1,
      title: 'AI Hackathon',
      type: 'Hackathon',
      deadline: '2024-03-15',
    },
    {
      id: 2,
      title: 'Startup Grant for AI Research',
      type: 'Grant',
      deadline: '2024-04-01',
    },
    {
      id: 3,
      title: 'Seed Funding for AI Startup',
      type: 'Funding',
      deadline: '2024-05-01',
    },
  ];

  const applications = [
    {
      id: 1,
      title: 'AI Hackathon',
      status: 'Applied',
      statusColor: 'success',
      lastUpdated: '2024-02-20',
    },
    {
      id: 2,
      title: 'Startup Grant for AI Research',
      status: 'In Review',
      statusColor: 'warning',
      lastUpdated: '2024-03-05',
    },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flex: 1, width: '100%' }}>
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Stack spacing={6} sx={{ maxWidth: '60rem', mx: 'auto' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              My Dashboard
            </Typography>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3, pb: 2, borderBottom: 1, borderColor: 'divider' }}>
                My Interests & Skills
              </Typography>
              <Grid container spacing={3} sx={{ mb: 3 }}>
                <Grid item xs={12} sm={6}>
                  <Stack spacing={1}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
                      Interests & Skills
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="e.g., AI, Web3, SaaS"
                      value={interests}
                      onChange={(e) => setInterests(e.target.value)}
                      size="small"
                    />
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      Add tags separated by commas.
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Stack spacing={1}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
                      Industry Preferences
                    </Typography>
                    <Select
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      displayEmpty
                      size="small"
                    >
                      <MenuItem value="">Select an industry</MenuItem>
                      <MenuItem value="technology">Technology</MenuItem>
                      <MenuItem value="healthcare">Healthcare</MenuItem>
                      <MenuItem value="finance">Finance</MenuItem>
                      <MenuItem value="education">Education</MenuItem>
                    </Select>
                  </Stack>
                </Grid>
              </Grid>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="contained" startIcon={<SaveIcon />}>
                  Save Changes
                </Button>
              </Box>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3, pb: 2, borderBottom: 1, borderColor: 'divider' }}>
                Saved Opportunities
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow sx={{ bgcolor: 'action.hover' }}>
                      <TableCell sx={{ fontWeight: 'bold' }}>Opportunity</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>Type</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>Deadline</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }} align="right">
                        Actions
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {savedOpportunities.map((opportunity) => (
                      <TableRow key={opportunity.id}>
                        <TableCell sx={{ fontWeight: 500 }}>{opportunity.title}</TableCell>
                        <TableCell>{opportunity.type}</TableCell>
                        <TableCell>{opportunity.deadline}</TableCell>
                        <TableCell align="right">
                          <Link
                            href={`/opportunities/${opportunity.id}`}
                            style={{ textDecoration: 'none' }}
                          >
                            <Button variant="text" size="small" sx={{ textTransform: 'none' }}>
                              View
                            </Button>
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3, pb: 2, borderBottom: 1, borderColor: 'divider' }}>
                Application Tracker
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow sx={{ bgcolor: 'action.hover' }}>
                      <TableCell sx={{ fontWeight: 'bold' }}>Opportunity</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>Last Updated</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {applications.map((app) => (
                      <TableRow key={app.id}>
                        <TableCell sx={{ fontWeight: 500 }}>{app.title}</TableCell>
                        <TableCell>
                          <Chip label={app.status} color={app.statusColor as any} size="small" />
                        </TableCell>
                        <TableCell>{app.lastUpdated}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3, pb: 2, borderBottom: 1, borderColor: 'divider' }}>
                Account Settings
              </Typography>
              <Grid container spacing={3} sx={{ mb: 3 }}>
                <Grid item xs={12} sm={6}>
                  <Stack spacing={1}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
                      Email Preferences
                    </Typography>
                    <TextField
                      fullWidth
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      size="small"
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Stack spacing={1}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
                      Change Password
                    </Typography>
                    <TextField
                      fullWidth
                      type="password"
                      placeholder="New Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      size="small"
                    />
                  </Stack>
                </Grid>
              </Grid>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="contained" startIcon={<SaveIcon />}>
                  Update Account
                </Button>
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
