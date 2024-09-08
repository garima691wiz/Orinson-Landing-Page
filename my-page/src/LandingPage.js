import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Card, 
  Container, 
  Box, 
  Avatar, 
  Stack, 
  Rating, 
  IconButton 
} from '@mui/material'; // Import Material-UI components
import styled from '@emotion/styled'; // Import Emotion styled for styling components
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Import ThemeProvider for custom themes
import { PlayCircleOutline, Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material'; // Import icons
import img1 from './assets/img1.jpg'; // Import images and videos
import img9 from './assets/img9.png';
import img8 from './assets/img8.jpg';
import img10 from './assets/img10.jpg';
import tiny from './assets/tiny.mp4';

// Custom Styled Components using Emotion
// Hero Section Styling
const HeroSection = styled('section')(({ theme }) => ({
  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img1})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh', // Full viewport height
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
  textAlign: 'center',
  position: 'relative',
  '& h2': {
    fontSize: '4rem',
    fontWeight: 700,
    [theme.breakpoints.down('md')]: { fontSize: '3rem' }, // Responsive font size
  },
  '& h5': {
    fontSize: '1.80rem',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('md')]: { fontSize: '1.5rem' }, // Responsive font size
  },
  '& button': {
    padding: theme.spacing(1.5, 6),
    fontSize: '1.2rem',
    fontWeight: 'bold',
    borderRadius: '30px',
    backgroundColor: '#ff4081', // Custom button color
    color: '#fff',
    '&:hover': { backgroundColor: '#f50057' }, // Hover effect
  },
}));

// Features Section Styling
const FeatureSection = styled('section')(({ theme }) => ({
  backgroundColor: '#f5f5f5', // Light gray background
  padding: theme.spacing(8, 0), // Vertical padding
  textAlign: 'center',
  '& .feature-box': {
    maxWidth: '300px',
    margin: '0 auto', // Center the feature box
    padding: theme.spacing(2),
    '& svg': {
      fontSize: '3rem', // Icon size
      marginBottom: theme.spacing(2),
      color: theme.palette.primary.main, // Use primary color for icons
    },
  },
}));

// Video Section Styling
const VideoSection = styled('section')(({ theme }) => ({
  backgroundColor: '#212121', // Dark background
  color: '#fff', // White text color
  textAlign: 'center',
  padding: theme.spacing(8, 0), // Padding
  '& button': {
    padding: theme.spacing(2, 4), // Button padding
    color: '#fff',
    backgroundColor: '#ff4081',
    '&:hover': { backgroundColor: '#f50057' }, // Hover effect for video play button
  },
}));

// Testimonial Card Styling
const TestimonialCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  borderRadius: theme.shape.borderRadius * 2, // Double the default border radius
  boxShadow: theme.shadows[6], // Apply shadow to the card
  backgroundColor: '#fafafa', // Light background
  transition: 'transform 0.3s, box-shadow 0.3s', // Transition for hover effect
  '&:hover': {
    transform: 'scale(1.05)', // Slightly enlarge the card on hover
    boxShadow: theme.shadows[12], // Increase shadow on hover
  },
}));

// Stats Section Styling
const StatsSection = styled('section')(({ theme }) => ({
  backgroundColor: '#fff', // White background
  padding: theme.spacing(8, 0), // Padding
  textAlign: 'center',
  '& .stat-box': {
    display: 'inline-block',
    margin: theme.spacing(4),
    '& h4': {
      fontSize: '3rem', // Stat number font size
      fontWeight: 'bold',
      color: theme.palette.primary.main, // Primary color for numbers
    },
    '& p': {
      fontSize: '1.2rem', // Smaller font size for stat description
    }
  },
}));

// Footer Styling
const Footer = styled(Box)(({ theme }) => ({
  backgroundColor: '#212121', // Dark background
  color: '#fff', // White text
  textAlign: 'center',
  padding: theme.spacing(4, 0), // Padding
  '& a': {
    color: '#fff', // White color for social media icons
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  }
}));

// Custom theme with colors and typography
const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' }, // Primary color
    secondary: { main: '#ff4081' }, // Secondary color
  },
  typography: {
    fontFamily: 'Lora, serif', // Font for headings
    h4: {
      fontWeight: 700,
      letterSpacing: '0.5px',
    },
    h6: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 500,
    }
  },
});

// Main Component
const LandingPage = () => {
  const testimonials = [
    { 
      name: 'Emily Clark', 
      avatar: img9, 
      rating: 5, 
      text: 'Beautiful and high-quality furniture. Will definitely shop again!' 
    },
    { 
      name: 'Mark Davis', 
      avatar: img8, 
      rating: 4, 
      text: 'Quick delivery and excellent customer service.' 
    },
    { 
      name: 'Sarah Johnson', 
      avatar: img10, 
      rating: 5, 
      text: 'The furniture transformed my living room! Great experience.' 
    },
  ];

  // State for controlling the video play feature
  const [showVideo, setShowVideo] = useState(false);

  // Function to handle video play button click
  const handlePlayVideo = () => {
    setShowVideo(true); // Set the state to true, showing the video
  };

  return (
    <ThemeProvider theme={theme}>
      {/* Header with AppBar */}
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', color: '#333' }}>
            Furniture Store
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <HeroSection>
        <Typography variant="h2" gutterBottom>
          Discover Elegant Furniture
        </Typography>
        <Typography variant="h5" gutterBottom>
          Transform your home with our stunning collections
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Shop Now
        </Button>
      </HeroSection>

      {/* Features Section */}
      <FeatureSection>
        <Container>
          <Stack direction="row" spacing={4} justifyContent="center">
            {/* Feature 1 */}
            <Box className="feature-box">
              <PlayCircleOutline />
              <Typography variant="h6">Quality Craftsmanship</Typography>
              <Typography variant="body2" color="textSecondary">
                Our furniture is built to last, with premium materials.
              </Typography>
            </Box>
            {/* Feature 2 */}
            <Box className="feature-box">
              <PlayCircleOutline />
              <Typography variant="h6">Fast Delivery</Typography>
              <Typography variant="body2" color="textSecondary">
                Get your furniture delivered quickly and safely.
              </Typography>
            </Box>
            {/* Feature 3 */}
            <Box className="feature-box">
              <PlayCircleOutline />
              <Typography variant="h6">Custom Designs</Typography>
              <Typography variant="body2" color="textSecondary">
                Personalize your furniture to fit your style.
              </Typography>
            </Box>
          </Stack>
        </Container>
      </FeatureSection>

      {/* Video Section */}
      <VideoSection>
        <Typography variant="h4" gutterBottom>
          Watch Our Showroom Video
        </Typography>
        {!showVideo ? (
          <Button variant="contained" color="secondary" size="large" onClick={handlePlayVideo}>
            <PlayCircleOutline /> Play Video
          </Button>
        ) : (
          <video width="80%" controls autoPlay>
            <source src={tiny} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </VideoSection>

      {/* Testimonials */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Trusted by Our Customers
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} justifyContent="center">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} sx={{ maxWidth: 345 }}>
              <Avatar alt={testimonial.name} src={testimonial.avatar} sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }} />
              <Typography variant="h6" fontWeight="bold">
                {testimonial.name}
              </Typography>
              <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
              <Typography variant="body2" color="text.secondary">
                "{testimonial.text}"
              </Typography>
            </TestimonialCard>
          ))}
        </Stack>
      </Container>

      {/* Stats Section */}
      <StatsSection>
        <Container>
          <Stack direction="row" justifyContent="center">
            <Box className="stat-box">
              <Typography variant="h4">500+</Typography>
              <Typography>Happy Customers</Typography>
            </Box>
            <Box className="stat-box">
              <Typography variant="h4">1000+</Typography>
              <Typography>Products Sold</Typography>
            </Box>
            <Box className="stat-box">
              <Typography variant="h4">99%</Typography>
              <Typography>Satisfaction Rate</Typography>
            </Box>
          </Stack>
        </Container>
      </StatsSection>

      {/* Footer */}
      <Footer>
        <Container>
          <Typography variant="body2" gutterBottom>
            &copy; 2024 Furniture Store. All rights reserved.
          </Typography>
          <div>
            <IconButton aria-label="facebook" color="inherit">
              <Facebook />
            </IconButton>
            <IconButton aria-label="twitter" color="inherit">
              <Twitter />
            </IconButton>
            <IconButton aria-label="instagram" color="inherit">
              <Instagram />
            </IconButton>
            <IconButton aria-label="linkedin" color="inherit">
              <LinkedIn />
            </IconButton>
          </div>
        </Container>
      </Footer>
    </ThemeProvider>
  );
};

export default LandingPage;
