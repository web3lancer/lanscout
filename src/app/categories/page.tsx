'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Box,
  Container,
  FormControl,
  GridLegacy as Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Pagination,
} from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import ListIcon from '@mui/icons-material/List';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Opportunity {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
}

export default function Category() {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [category] = useState('Hackathons');

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
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flex: 1, py: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} lg={3}>
              <Paper sx={{ p: 3, position: 'sticky', top: 100 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                  Filter
                </Typography>
                <Stack spacing={3}>
                  <FormControl fullWidth size="small">
                    <InputLabel>Category</InputLabel>
                    <Select defaultValue="All Categories" label="Category">
                      <MenuItem value="All Categories">All Categories</MenuItem>
                      <MenuItem value="Hackathons">Hackathons</MenuItem>
                      <MenuItem value="Grants">Grants</MenuItem>
                      <MenuItem value="Startup Funding">Startup Funding</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth size="small">
                    <InputLabel>Location</InputLabel>
                    <Select defaultValue="Worldwide" label="Location">
                      <MenuItem value="Worldwide">Worldwide</MenuItem>
                      <MenuItem value="North America">North America</MenuItem>
                      <MenuItem value="Europe">Europe</MenuItem>
                      <MenuItem value="Asia">Asia</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth size="small">
                    <InputLabel>Focus</InputLabel>
                    <Select defaultValue="Any" label="Focus">
                      <MenuItem value="Any">Any</MenuItem>
                      <MenuItem value="AI">AI</MenuItem>
                      <MenuItem value="Web3">Web3</MenuItem>
                      <MenuItem value="SaaS">SaaS</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth size="small">
                    <InputLabel>Prize</InputLabel>
                    <Select defaultValue="Any Amount" label="Prize">
                      <MenuItem value="Any Amount">Any Amount</MenuItem>
                      <MenuItem value="1000">$1,000+</MenuItem>
                      <MenuItem value="10000">$10,000+</MenuItem>
                      <MenuItem value="50000">$50,000+</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth size="small">
                    <InputLabel>Eligibility</InputLabel>
                    <Select defaultValue="Everyone" label="Eligibility">
                      <MenuItem value="Everyone">Everyone</MenuItem>
                      <MenuItem value="Students Only">Students Only</MenuItem>
                      <MenuItem value="Startups">Startups</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth size="small">
                    <InputLabel>Deadline</InputLabel>
                    <Select defaultValue="Anytime" label="Deadline">
                      <MenuItem value="Anytime">Anytime</MenuItem>
                      <MenuItem value="Next 7 days">Next 7 days</MenuItem>
                      <MenuItem value="Next 30 days">Next 30 days</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </Paper>
            </Grid>

            <Grid item xs={12} lg={9}>
              <Stack spacing={3}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' } }}>
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                      {category}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
                      Explore {category.toLowerCase()} that match your interests and skills.
                    </Typography>
                  </Box>
                   <ToggleButtonGroup
                     value={viewMode}
                     exclusive
                     onChange={(_, newView) => newView && setViewMode(newView)}
                     sx={{ mt: { xs: 2, sm: 0 } }}
                   >
                    <ToggleButton value="list">
                      <ListIcon />
                    </ToggleButton>
                    <ToggleButton value="grid">
                      <GridViewIcon />
                    </ToggleButton>
                     <ToggleButton value="grid">
                       <GridViewIcon />
                     </ToggleButton>
                   </ToggleButtonGroup>
                </Box>

                <Stack spacing={2}>
                  {opportunities.map((opp) => (
                    <Card
                      key={opp.id}
                      component={Link}
                      href={`/opportunities/${opp.id}`}
                      sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        '&:hover': { boxShadow: 4 },
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                    >
                      <CardMedia
                        component="div"
                        sx={{
                          width: { xs: '100%', md: '40%' },
                          height: { xs: 200, md: 'auto' },
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                        image={opp.image}
                      />
                      <CardContent sx={{ flex: 1 }}>
                        <Chip label={opp.category} size="small" color="primary" variant="outlined" sx={{ mb: 1 }} />
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                          {opp.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                          {opp.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  ))}
                </Stack>

                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                  <Pagination count={10} page={1} />
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
