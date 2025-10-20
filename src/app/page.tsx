'use client';

import Link from 'next/link';
import { Box, Button, Container, Paper, Stack, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  const trendingOpportunities = [
    {
      id: 1,
      title: 'Hackathon Extravaganza',
      description: 'Join the ultimate coding challenge and win big!',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAUSQluDYM-BKw3UvvxRKI8cVSfOkmgixDYdbBYROsZ4us697t8wWHVKpNfyVspqS0nk0QW14BZOXbPzkbCE1okrx-M2YnD17S2WEeEHJfZC1gj9XcI8g579j1VFpW1jde5o0D1bLnGi96ziFZ_fjDo8ZTYdPyRuOciiRPxsk8yEFNfHVZh1UZnY8M-rSGuGJnzZbLHalWLDkgfYje5YxQ5dKppZck4_zySO6pGStVtk8F3vqfqcwUNgrfFSocJqa46HGWxv41-eg',
    },
    {
      id: 2,
      title: 'Grant Application Workshop',
      description: 'Learn how to write a winning grant proposal.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDZyPNTy41WN6OiRNvX_FudunaYl3bB_AT974HXteYa9PCuA9QjioHCfhqsWUAfOjoYbtNml3D4v6HqjBHjcCjFzsJB_56OhOjpjsrj6KE2zciBav7O-qw5vrkZsGpy88N2jNQYxeHYAmtrCGyYpokf3xjB-q9EnobQ2XAlNBNjNKKGBSlrCy0VYeg0y7hTcwm-SULDckELaTGEYIULAH3wkRjSMBFc_IPnMMMgIhvbTVnBSx1RVgeJYbddAOLkT91CRj3osyXjFg',
    },
    {
      id: 3,
      title: 'Startup Funding Pitch',
      description: 'Pitch your startup idea to top investors.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD7QNR0-gRKdVysapRKCkUhRHEwrrGy1eoz-rONHkvp2Ju2E-BpJw7HF0szP8JoVyW8_1H8H9-5O4E2v5C9ZxKFGRazI67edgTzwRdhSHkHTc8OSTcNdcd1MltVJVAIsyt07oOs6rVj6X-Lvfay04RQu-VpGM8MDB-1KzSGlNPPYVghzhBXiP2lJYIVVmP1cneNTPRNZrvUl667sYrkbTM1DaqvY1JT1RwXxGecuoQvw3qr1PBs4UdrjMNpSZ-O4FZSckiuID6ECA',
    },
  ];

  const curatedOpportunities = [
    {
      id: 1,
      title: 'AI-Powered Grant Finder',
      description:
        'Find grants tailored to your project with our intelligent search. We analyze your profile and project details to match you with the most relevant funding sources.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB5Omdu5dKm1E2PFYA0r6_EAVPm1lXiOcf8OW3qtziDaod1PG3dormX1XDaBAu5no1OAx-a9jMcH6A6etlttN9aBS1PDa2pvYayWaScR2VXal64_iKpdVKV4vzhuUsMTs9HApAMLm-kgDpxQagPr_hwD0JhIHiuZoQnGPsxNJzxCL8pypvCGSPBH-WkKX7jFmgfCAxDYgkvhNhgQemvTgwwCH687zKDyzBU0qm6MynNqP9VDnxBWqv8lIHjxmiI6rtigZ2k50ODfA',
    },
    {
      id: 2,
      title: 'Hackathon Matchmaker',
      description:
        'Discover hackathons that align with your skills, interests, and availability. Never miss an opportunity to innovate and connect with fellow developers.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuArtUsrhlr-NnpT4vBLcdbRJ8lur3vbbL_GTuIoV0Fnsa5l3ZC3d4w6YbG9hCznYrsWO8VYnnrJ-jriBt0UUyYFGrqqRaMJsEeCGUmslsWwDTAN1qYzyZ13MGg3u4mP4323iEyfPzhKdxc_M4kriEoFBUblpv2gBv9ri7VKR6H6jrobJA6viF0x665uM_jmK4oZhaHkQ-j-8RsomblfQSIbzoPBwa6p5906y1mw2MLt8-YLYNFMhMyemIWZAo140tsUi1m2YJXDdA',
    },
    {
      id: 3,
      title: 'Startup Funding Navigator',
      description:
        'Navigate the complex funding landscape with personalized recommendations. From pre-seed to Series A, we guide you to the right investors.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAajkbGU8vpWVO3GzrQ3SR34qiJD3bb4BvlubcKmgtjZUWBpEZCrj65AtevYEOTn1DPsOQ8S1AUMfwNY_6avNxtWaNN6m5T0ZK9NmSNPX37zCWIyHc4geMRlrZwjFJeErkuKTCzyayP5Z5aU14ApryZFHo7ycDCmy2ZEB4TlfXvnuZMzVk9lU3ApQ5rv60HtLRdyfV_gJeD-HP60g4nUgda5UH8MryzZEbKTZMyqDqXLBbI7kI3yXaXbSKoMR867M0JYIcgfZOZXg',
    },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flex: 1, px: { xs: 2, sm: 3, lg: 5 }, py: 4 }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 1 }}>
              Your Personalized Opportunity Feed
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '600px' }}>
              AI-curated opportunities in hackathons, grants, and startup funding, just for you.
            </Typography>
          </Box>

          <Box sx={{ mb: 5, display: { xs: 'block', sm: 'none' } }}>
            <TextField
              fullWidth
              placeholder="Search for opportunities"
              size="small"
              InputProps={{ startAdornment: <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} /> }}
            />
          </Box>

          <Box sx={{ mb: 6 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              Trending Opportunities
            </Typography>
            <Box sx={{ display: 'flex', gap: 3, overflowX: 'auto', pb: 2 }}>
              {trendingOpportunities.map((opp) => (
                <Box key={opp.id} sx={{ flex: '0 0 280px' }}>
                  <Box
                    sx={{
                      width: '100%',
                      aspectRatio: '16 / 9',
                      backgroundImage: `url("${opp.image}")`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      borderRadius: 2,
                      mb: 1,
                    }}
                  />
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.5 }}>
                    {opp.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {opp.description}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <Box sx={{ mb: 6 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              Quick Navigation
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                component={Link}
                href="/opportunities"
                variant="outlined"
                sx={{ flex: { xs: 1, sm: 'initial' } }}
              >
                Browse All Opportunities
              </Button>
              <Button
                component={Link}
                href="/categories"
                variant="outlined"
                sx={{ flex: { xs: 1, sm: 'initial' } }}
              >
                Explore Categories
              </Button>
            </Stack>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
              AI-Curated For You
            </Typography>
            <Stack spacing={3}>
              {curatedOpportunities.map((opp) => (
                <Paper
                  key={opp.id}
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { xs: 'center', md: 'flex-start' },
                    gap: 3,
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: '100%', md: '33%' },
                      aspectRatio: { xs: '16 / 9', md: '1' },
                      backgroundImage: `url("${opp.image}")`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      borderRadius: 2,
                      flexShrink: 0,
                    }}
                  />
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                      {opp.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {opp.description}
                    </Typography>
                  </Box>
                </Paper>
              ))}
            </Stack>
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
