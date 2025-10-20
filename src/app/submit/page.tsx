'use client';

import { useState } from 'react';
import { Box, Button, Container, LinearProgress, Paper, TextField, Typography, Divider } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Submit() {
  const [step, setStep] = useState(1);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flex: 1, py: 6 }}>
        <Container maxWidth="sm">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
              Submit an Opportunity
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Found something cool? Share it with the community!
            </Typography>
          </Box>

          <Paper sx={{ p: { xs: 3, sm: 4 } }}>
            <Box sx={{ mb: 4 }}>
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                  Opportunity URL
                </Typography>
                <TextField
                  fullWidth
                  placeholder="https://example.com/hackathon"
                  helperText="Paste a URL and we'll try to autofill the details."
                  size="small"
                />
              </Box>
            </Box>

            <Divider sx={{ my: 3 }}>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>OR</Typography>
            </Divider>

            <Typography variant="body2" sx={{ textAlign: 'center', color: 'text.secondary', mb: 4 }}>
              Enter details manually if you don&apos;t have a URL.
            </Typography>

            <Box>
              <Box sx={{ mb: 6 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                  Progress
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  Step {step} of 3: Opportunity Details
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={(step / 3) * 100}
                  sx={{ mt: 2 }}
                />
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => setStep(Math.min(step + 1, 3))}
                  sx={{ minWidth: 120 }}
                >
                  Next
                </Button>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
