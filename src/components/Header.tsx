'use client';

import Link from 'next/link';
import {
  AppBar,
  Box,
  Button,
  Container,
  InputBase,
  Toolbar,
  IconButton,
  useTheme,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { styled } from '@mui/material/styles';

const SearchWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
  },
  marginLeft: theme.spacing(3),
  width: '100%',
  maxWidth: 320,
  display: 'none',
  [theme.breakpoints.up('sm')]: {
    display: 'block',
  },
}));

const SearchIconWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

const LanscoutLogo = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 48 48"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" />
  </svg>
);

export default function Header() {
  const theme = useTheme();

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: theme.palette.background.default,
        backgroundImage: 'none',
        boxShadow: `0 1px 0 ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Logo and Nav */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ color: 'primary.main', display: 'flex' }}>
                <LanscoutLogo />
              </Box>
              <Box component="h1" sx={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>
                Lanscout
              </Box>
            </Box>
            <Box
              sx={{
                display: 'none',
                gap: 3,
                [theme.breakpoints.up('md')]: {
                  display: 'flex',
                },
              }}
            >
              <Button
                component={Link}
                href="/opportunities"
                color="inherit"
                sx={{
                  textTransform: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  '&:hover': { color: 'primary.main' },
                }}
              >
                Opportunities
              </Button>
              <Button
                component={Link}
                href="/community"
                color="inherit"
                sx={{
                  textTransform: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  '&:hover': { color: 'primary.main' },
                }}
              >
                Community
              </Button>
              <Button
                component={Link}
                href="/resources"
                color="inherit"
                sx={{
                  textTransform: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  '&:hover': { color: 'primary.main' },
                }}
              >
                Resources
              </Button>
            </Box>
          </Box>

          {/* Search and Action Buttons */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <SearchWrapper>
              <SearchIconWrapper>
                <SearchIcon sx={{ fontSize: '1.25rem' }} />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search..." />
            </SearchWrapper>

            <Button
              component={Link}
              href="/login"
              color="inherit"
              sx={{
                display: { xs: 'none', sm: 'block' },
                textTransform: 'none',
                fontSize: '0.875rem',
                fontWeight: 600,
              }}
            >
              Log In
            </Button>
            <Button
              component={Link}
              href="/signup"
              variant="contained"
              color="primary"
              sx={{
                textTransform: 'none',
                fontSize: '0.875rem',
                fontWeight: 600,
              }}
            >
              Sign Up
            </Button>
            <IconButton color="inherit" size="small">
              <NotificationsIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
