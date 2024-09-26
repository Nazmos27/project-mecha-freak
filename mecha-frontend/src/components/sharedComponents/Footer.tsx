import { Container, Box, Typography, Link } from '@mui/material';

const Footer  = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#222', color: '#fff', py: 4 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 4,
          }}
        >
          {/* About Us Section */}
          <Box>
            <Typography variant="h6" gutterBottom color="primary">
              About Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link href="#" color="inherit" underline="none" sx={{ mb: 1 }}>
                Company
              </Link>
              <Link href="#" color="inherit" underline="none" sx={{ mb: 1 }}>
                Team
              </Link>
              <Link href="#" color="inherit" underline="none">
                Careers
              </Link>
            </Box>
          </Box>

          {/* Services Section */}
          <Box>
            <Typography variant="h6" gutterBottom color="primary">
              Services
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link href="#" color="inherit" underline="none" sx={{ mb: 1 }}>
                Web Development
              </Link>
              <Link href="#" color="inherit" underline="none" sx={{ mb: 1 }}>
                App Development
              </Link>
              <Link href="#" color="inherit" underline="none">
                Consulting
              </Link>
            </Box>
          </Box>

          {/* Contact Us Section */}
          <Box>
            <Typography variant="h6" gutterBottom color="primary">
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link href="#" color="inherit" underline="none" sx={{ mb: 1 }}>
                Email
              </Link>
              <Link href="#" color="inherit" underline="none" sx={{ mb: 1 }}>
                Support
              </Link>
              <Link href="#" color="inherit" underline="none">
                FAQ
              </Link>
            </Box>
          </Box>
        </Box>

        {/* Social Media Links */}
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Link href="#" color="inherit" sx={{ mx: 2 }}>
            <i className="fab fa-facebook" />
          </Link>
          <Link href="#" color="inherit" sx={{ mx: 2 }}>
            <i className="fab fa-twitter" />
          </Link>
          <Link href="#" color="inherit" sx={{ mx: 2 }}>
            <i className="fab fa-instagram" />
          </Link>
          <Link href="#" color="inherit" sx={{ mx: 2 }}>
            <i className="fab fa-linkedin" />
          </Link>
        </Box>

        {/* Footer Bottom */}
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="body2" color="textSecondary">
            &copy; 2024 Your Company Name. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
