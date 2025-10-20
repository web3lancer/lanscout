'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import {
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Select,
  MenuItem,
  Button,
  Typography,
  Pagination,
  PaginationItem,
  Checkbox,
  FormControl,
  InputLabel,
} from '@mui/material';
import { useState as ReactUseState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ViewListIcon from '@mui/icons-material/ViewComfy';
import ViewAgendaIcon from '@mui/icons-material/GridView';
import ArrowBackIcon from '@mui/icons-material/NavigateBefore';
import ArrowForwardIcon from '@mui/icons-material/NavigateNext';

interface Opportunity {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
}

export default function CategoryDetailPage() {
  const params = useParams();
  const category = (params.category as string)?.replace(/-/g, ' ').toUpperCase() || 'HACKATHONS';
  const [viewMode, setViewMode] = ReactUseState<'list' | 'grid'>('list');
  const [selectedCategory, setSelectedCategory] = ReactUseState('All Categories');
  const [selectedLocation, setSelectedLocation] = ReactUseState('Worldwide');
  const [selectedFocus, setSelectedFocus] = ReactUseState('Any');
  const [selectedPrize, setSelectedPrize] = ReactUseState('Any Amount');
  const [selectedEligibility, setSelectedEligibility] = ReactUseState('Everyone');
  const [selectedDeadline, setSelectedDeadline] = ReactUseState('Anytime');

  const opportunities: Opportunity[] = [
    {
      id: 1,
      category: 'AI',
      title: 'AI Innovation Challenge',
      description: 'Develop AI solutions for real-world problems. Prizes include funding and mentorship.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB-ACw-H9t2czDNOv-c_yzFJAKSVKazZgDur55140qqJ2MBoZZ6vQUP7gKxZvf9bon83H5k2q0vhrOYDnWaZmE9N5kaxPxTLxKnmkHQBAjPRPtQxm2NWXZepuU6aKegvaeBSM7WF8O-pAqhRHvbG461PN9QyeFxGi65xqvX1B219UtvnmTuWpqNc7beoVRHqwY2cqAg_osms5jtQYsZh2T-86u3DXes_lhEyrYbwYSZ3wrKHJzh1FfXe9gz1E35BjjVaOeXdCwv0A',
    },
    {
      id: 2,
      category: 'Web Development',
      title: 'Web Dev Hackfest',
      description: 'Build innovative web applications. Compete for cash prizes and recognition.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCZrqiTeRnWG3gSNAuHjEDn3zs2FdXb_sdY9LTioDbWINl-Z6fxixzaL-YQpFJc1UjDgWjtTZU5Sp1fAtsAJlYE4Ay52LxgHj2aYx8w65Q5_4Ipv1i7uXFKYPHH8DKzxgsXXuuRibm6dbyNVXRRUj3B6VfrGXEBt-bf_08vxpTrs8bnfX3KVHwZMVgCK6U-aRTaJpO5LCZJjU505EHi1Iy5fk2MxKS2esFYvjAp5FwTWAxrMrftjtj9BnQLyCFBfT_ARs0A_Hufjw',
    },
    {
      id: 3,
      category: 'Mobile Apps',
      title: 'Mobile App Mania',
      description: 'Create cutting-edge mobile apps. Win prizes and gain exposure.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBdV-GnD6yzIKsjTGGPGWCENeHIkihNp4KPfWkhux7NCwkrcRySm29S4AsUbuZSgbuB8yb-IauCMIkrp7JYQrTewotA0qU-ATMvcWRC-4B1AxyETvwazMZMfb4WV2VjyhaD2loPi1EcB10tA0NHA8Hd3abLSyLEV7FYmWn7muM38YoHUrpDmtnyILwvdApCEp-Qx_kUsyAXXPKO8w_nzAGaSFlyq0acoz1pxJk4QoJNUrka7OWu4vHT67rFDN6oP_gMcNQJ8i_4w',
    },
    {
      id: 4,
      category: 'Data Science',
      title: 'Data Dive Challenge',
      description: 'Analyze complex datasets and derive insights. Prizes include data science tools and resources.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAZbm2RxUn3sWUoH4B5k0DHuQ8fUE2rPmU5zuX-IrST86pg4WkO7qv10z3oBMF1XALGxX4y3FPrC3xZ6gt20kbEpxHmakVmeqAU-pPl4qwIVuaWZkOEMk38bZfkG-3Y5jvzfS5ARW2UPdPc6rX0MQ07kS541Z8S3kShgOWMKOupRsJEmwtufte5MEp1HakWUZqb6_IHZdC8N-BIbtmGjWcDVaGYjrqTfdvtLOwNX09-sLdN1uJipHAxP5jYVEndvFUf9zsQKJrIdw',
    },
    {
      id: 5,
      category: 'Blockchain',
      title: 'Web3 Innovation Summit',
      description: 'Explore blockchain and Web3 technologies. Network with industry leaders.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBdV-GnD6yzIKsjTGGPGWCENeHIkihNp4KPfWkhux7NCwkrcRySm29S4AsUbuZSgbuB8yb-IauCMIkrp7JYQrTewotA0qU-ATMvcWRC-4B1AxyETvwazMZMfb4WV2VjyhaD2loPi1EcB10tA0NHA8Hd3abLSyLEV7FYmWn7muM38YoHUrpDmtnyILwvdApCEp-Qx_kUsyAXXPKO8w_nzAGaSFlyq0acoz1pxJk4QoJNUrka7OWu4vHT67rFDN6oP_gMcNQJ8i_4w',
    },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flex: 1, width: '100%' }}>
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
              <Paper sx={{ p: 3, position: { md: 'sticky' }, top: { md: 100 } }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                  Filter
                </Typography>
                <Stack spacing={3}>
                  <FormControl fullWidth size="small">
                    <InputLabel>Category</InputLabel>
                    <Select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      label="Category"
                    >
                      <MenuItem value="All Categories">All Categories</MenuItem>
                      <MenuItem value="Hackathons">Hackathons</MenuItem>
                      <MenuItem value="Grants">Grants</MenuItem>
                      <MenuItem value="Startup Funding">Startup Funding</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl fullWidth size="small">
                    <InputLabel>Location</InputLabel>
                    <Select
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      label="Location"
                    >
                      <MenuItem value="Worldwide">Worldwide</MenuItem>
                      <MenuItem value="North America">North America</MenuItem>
                      <MenuItem value="Europe">Europe</MenuItem>
                      <MenuItem value="Asia">Asia</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl fullWidth size="small">
                    <InputLabel>Focus</InputLabel>
                    <Select
                      value={selectedFocus}
                      onChange={(e) => setSelectedFocus(e.target.value)}
                      label="Focus"
                    >
                      <MenuItem value="Any">Any</MenuItem>
                      <MenuItem value="AI">AI</MenuItem>
                      <MenuItem value="Web3">Web3</MenuItem>
                      <MenuItem value="SaaS">SaaS</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl fullWidth size="small">
                    <InputLabel>Prize</InputLabel>
                    <Select
                      value={selectedPrize}
                      onChange={(e) => setSelectedPrize(e.target.value)}
                      label="Prize"
                    >
                      <MenuItem value="Any Amount">Any Amount</MenuItem>
                      <MenuItem value="$1,000+">$1,000+</MenuItem>
                      <MenuItem value="$10,000+">$10,000+</MenuItem>
                      <MenuItem value="$50,000+">$50,000+</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl fullWidth size="small">
                    <InputLabel>Eligibility</InputLabel>
                    <Select
                      value={selectedEligibility}
                      onChange={(e) => setSelectedEligibility(e.target.value)}
                      label="Eligibility"
                    >
                      <MenuItem value="Everyone">Everyone</MenuItem>
                      <MenuItem value="Students Only">Students Only</MenuItem>
                      <MenuItem value="Startups">Startups</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl fullWidth size="small">
                    <InputLabel>Deadline</InputLabel>
                    <Select
                      value={selectedDeadline}
                      onChange={(e) => setSelectedDeadline(e.target.value)}
                      label="Deadline"
                    >
                      <MenuItem value="Anytime">Anytime</MenuItem>
                      <MenuItem value="Next 7 days">Next 7 days</MenuItem>
                      <MenuItem value="Next 30 days">Next 30 days</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </Paper>
            </Grid>

            <Grid item xs={12} md={9}>
              <Stack spacing={3}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: { xs: 'flex-start', sm: 'center' },
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 2,
                  }}
                >
                  <Stack spacing={1}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                      {category}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Explore {category.toLowerCase()} that match your interests and skills.
                    </Typography>
                  </Stack>

                  <Box sx={{ display: 'flex', gap: 1, border: 1, borderColor: 'divider', borderRadius: 1, p: 0.5 }}>
                    <Button
                      onClick={() => setViewMode('list')}
                      variant={viewMode === 'list' ? 'contained' : 'text'}
                      size="small"
                      startIcon={<ViewListIcon />}
                    >
                      List
                    </Button>
                    <Button
                      onClick={() => setViewMode('grid')}
                      variant={viewMode === 'grid' ? 'contained' : 'text'}
                      size="small"
                      startIcon={<ViewAgendaIcon />}
                    >
                      Grid
                    </Button>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns:
                      viewMode === 'grid' ? { xs: '1fr', md: 'repeat(2, 1fr)' } : '1fr',
                    gap: 2,
                  }}
                >
                  {opportunities.map((opp) => (
                    <Link
                      key={opp.id}
                      href={`/opportunities/${opp.id}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <Paper
                        sx={{
                          p: 2,
                          display: 'flex',
                          flexDirection: viewMode === 'list' ? 'row' : 'column',
                          gap: 2,
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          '&:hover': {
                            boxShadow: 3,
                            borderColor: 'primary.main',
                          },
                        }}
                      >
                        <Box
                          sx={{
                            backgroundImage: `url("${opp.image}")`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderRadius: 1,
                            width: viewMode === 'list' ? { xs: '100%', md: '33%' } : '100%',
                            height: viewMode === 'list' ? { md: 'auto' } : 160,
                            minHeight: viewMode === 'list' ? 160 : 'auto',
                          }}
                        />
                        <Stack sx={{ flex: 1, justifyContent: 'space-between' }} spacing={1}>
                          <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                            {opp.category}
                          </Typography>
                          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                            {opp.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {opp.description}
                          </Typography>
                          <Button
                            variant="outlined"
                            size="small"
                            endIcon={<ArrowForwardIcon />}
                            sx={{ textTransform: 'none', mt: 1 }}
                          >
                            View Details
                          </Button>
                        </Stack>
                      </Paper>
                    </Link>
                  ))}
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                  <Pagination
                    count={10}
                    page={1}
                    renderItem={(item) => (
                      <PaginationItem
                        {...item}
                        component={Button}
                      />
                    )}
                  />
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
