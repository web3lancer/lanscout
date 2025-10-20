'use client';

import { useParams } from 'next/navigation';
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StarIcon from '@mui/icons-material/Star';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BarChartIcon from '@mui/icons-material/BarChart';
import LinkIcon from '@mui/icons-material/Link';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShareIcon from '@mui/icons-material/Share';
import FlagIcon from '@mui/icons-material/Flag';

interface Opportunity {
  id: string;
  title: string;
  description: string;
  type: string;
  status: string;
  deadline: string;
  location: string;
  tags: string[];
  match: string;
  relatedOpportunities: number;
  trendData: string;
}

const opportunitiesData: Record<string, Opportunity> = {
  '1': {
    id: '1',
    title: 'AI Grant for Innovative Projects',
    description:
      'This grant supports innovative projects that utilize artificial intelligence to address significant challenges across various sectors. We encourage applications from individuals and teams with groundbreaking ideas and a commitment to making a positive impact. Projects should demonstrate a clear understanding of the problem, a novel approach using AI, and a potential for scalability and real-world application. Funding amounts vary based on project scope and impact.',
    type: 'Grant',
    status: 'Open',
    deadline: 'October 31, 2024',
    location: 'Remote',
    tags: ['AI', 'Machine Learning', 'Innovation', 'Technology', 'Funding'],
    match: 'Based on your profile, this aligns with your expertise in AI.',
    relatedOpportunities: 12,
    trendData: 'AI funding has increased 40% year-over-year',
  },
  '2': {
    id: '2',
    title: 'Web3 Developer Hackathon',
    description:
      'Join us for an exciting hackathon focused on Web3 technologies and blockchain development. This is a great opportunity to collaborate with fellow developers, learn new skills, and potentially win prizes. Teams of 3-5 people are preferred. All skill levels are welcome.',
    type: 'Hackathon',
    status: 'Open',
    deadline: 'November 15, 2024',
    location: 'San Francisco, CA',
    tags: ['Web3', 'Blockchain', 'Hackathon', 'Development', 'Community'],
    match: 'Perfect opportunity to showcase your Web3 development skills.',
    relatedOpportunities: 8,
    trendData: 'Web3 hackathons are trending with 50+ events this quarter',
  },
};

export default function OpportunityDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const opportunity = opportunitiesData[id] || opportunitiesData['1'];
  const [tabValue, setTabValue] = useState(0);
  const theme = useTheme();

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flex: 1, width: '100%' }}>
        <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
          <Stack spacing={6}>
            <Stack spacing={3}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                <Link href="/opportunities" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <span style={{ cursor: 'pointer' }}>Opportunities</span>
                </Link>
                <span sx={{ mx: 1 }}> / </span>
                <span>{opportunity.title}</span>
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  justifyContent: 'space-between',
                  alignItems: { xs: 'flex-start', md: 'flex-start' },
                  gap: 2,
                }}
              >
                <Stack spacing={1} sx={{ flex: 1 }}>
                  <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                    {opportunity.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '80%' }}>
                    {opportunity.description.substring(0, 100)}...
                  </Typography>
                </Stack>
                <Button variant="contained" sx={{ alignSelf: { xs: 'flex-start', md: 'auto' } }}>
                  Apply Now
                </Button>
              </Box>
            </Stack>

            <Divider />

            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={tabValue} onChange={handleTabChange}>
                <Tab label="Overview" />
                <Tab label="AI Insights" />
              </Tabs>
            </Box>

            <Grid container spacing={4}>
              <Grid item xs={12} md={8}>
                <Stack spacing={4}>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                      About this opportunity
                    </Typography>
                    <Stack spacing={2} divider={<Divider />}>
                      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 2 }}>
                        <Typography variant="body2" sx={{ fontWeight: 500, color: 'text.secondary' }}>
                          Type
                        </Typography>
                        <Typography variant="body2">{opportunity.type}</Typography>
                      </Box>
                      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 2 }}>
                        <Typography variant="body2" sx={{ fontWeight: 500, color: 'text.secondary' }}>
                          Status
                        </Typography>
                        <Box>
                          <Chip label={opportunity.status} color="success" size="small" />
                        </Box>
                      </Box>
                      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 2 }}>
                        <Typography variant="body2" sx={{ fontWeight: 500, color: 'text.secondary' }}>
                          Deadline
                        </Typography>
                        <Typography variant="body2">{opportunity.deadline}</Typography>
                      </Box>
                      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 2 }}>
                        <Typography variant="body2" sx={{ fontWeight: 500, color: 'text.secondary' }}>
                          Location
                        </Typography>
                        <Typography variant="body2">{opportunity.location}</Typography>
                      </Box>
                    </Stack>
                  </Box>

                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                    {opportunity.description}
                  </Typography>

                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                      Tags
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                      {opportunity.tags.map((tag) => (
                        <Chip key={tag} label={tag} variant="outlined" size="small" />
                      ))}
                    </Stack>
                  </Box>

                  <Stack direction="row" spacing={2}>
                    <Button variant="contained">Apply Now</Button>
                    <Button variant="outlined" startIcon={<BookmarkIcon />}>
                      Save
                    </Button>
                  </Stack>

                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                      Share
                    </Typography>
                    <Stack direction="row" spacing={2}>
                      <Button
                        startIcon={<ShareIcon />}
                        variant="text"
                        sx={{ textTransform: 'none' }}
                      >
                        Share
                      </Button>
                      <Button
                        startIcon={<LinkIcon />}
                        variant="text"
                        sx={{ textTransform: 'none' }}
                      >
                        Copy Link
                      </Button>
                    </Stack>
                  </Box>
                </Stack>
              </Grid>

              <Grid item xs={12} md={4}>
                <Stack spacing={3}>
                  <Paper sx={{ p: 3 }}>
                    <Stack spacing={2}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <StarIcon sx={{ color: 'primary.main' }} />
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                          AI Insights
                        </Typography>
                      </Box>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Powered by our AI to help you find the best fit.
                      </Typography>
                      <List sx={{ p: 0 }}>
                        <ListItem sx={{ flexDirection: 'column', alignItems: 'flex-start', px: 0 }}>
                          <Box sx={{ display: 'flex', gap: 2, width: '100%' }}>
                            <ListItemIcon sx={{ minWidth: 0 }}>
                              <Box
                                sx={{
                                  p: 1,
                                  borderRadius: 1,
                                  bgcolor: 'primary.light',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}
                              >
                                <StarIcon sx={{ fontSize: 20, color: 'primary.main' }} />
                              </Box>
                            </ListItemIcon>
                            <Stack spacing={0.5} sx={{ flex: 1 }}>
                              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                Why it&apos;s a good match
                              </Typography>
                              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                {opportunity.match}
                              </Typography>
                            </Stack>
                          </Box>
                        </ListItem>
                        <ListItem sx={{ flexDirection: 'column', alignItems: 'flex-start', px: 0, mt: 1 }}>
                          <Box sx={{ display: 'flex', gap: 2, width: '100%' }}>
                            <ListItemIcon sx={{ minWidth: 0 }}>
                              <Box
                                sx={{
                                  p: 1,
                                  borderRadius: 1,
                                  bgcolor: 'primary.light',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}
                              >
                                <ListAltIcon sx={{ fontSize: 20, color: 'primary.main' }} />
                              </Box>
                            </ListItemIcon>
                            <Stack spacing={0.5} sx={{ flex: 1 }}>
                              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                Related opportunities
                              </Typography>
                              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                Explore {opportunity.relatedOpportunities} similar opportunities.
                              </Typography>
                            </Stack>
                          </Box>
                        </ListItem>
                        <ListItem sx={{ flexDirection: 'column', alignItems: 'flex-start', px: 0, mt: 1 }}>
                          <Box sx={{ display: 'flex', gap: 2, width: '100%' }}>
                            <ListItemIcon sx={{ minWidth: 0 }}>
                              <Box
                                sx={{
                                  p: 1,
                                  borderRadius: 1,
                                  bgcolor: 'primary.light',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}
                              >
                                <BarChartIcon sx={{ fontSize: 20, color: 'primary.main' }} />
                              </Box>
                            </ListItemIcon>
                            <Stack spacing={0.5} sx={{ flex: 1 }}>
                              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                Trend data
                              </Typography>
                              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                {opportunity.trendData}
                              </Typography>
                            </Stack>
                          </Box>
                        </ListItem>
                      </List>
                    </Stack>
                  </Paper>

                  <Paper sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                      Source Information
                    </Typography>
                    <Stack spacing={2}>
                      <Button
                        fullWidth
                        startIcon={<LinkIcon />}
                        sx={{
                          justifyContent: 'flex-start',
                          textTransform: 'none',
                          color: 'text.primary',
                        }}
                      >
                        View original source
                      </Button>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        Attribution: Opportunity Source
                      </Typography>
                      <Button
                        fullWidth
                        variant="outlined"
                        color="error"
                        startIcon={<FlagIcon />}
                        sx={{ textTransform: 'none' }}
                      >
                        Report an error
                      </Button>
                    </Stack>
                  </Paper>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
