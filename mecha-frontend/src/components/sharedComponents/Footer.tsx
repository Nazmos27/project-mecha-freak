import React from "react";
import { Container, Box, Typography, Link } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ bgcolor: "#222", color: "#fff", py: 4 }}>
      <Container maxWidth="lg">
        {/* Main footer layout */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: { xs: "center", sm: "space-between" },
            alignItems: { xs: "center", sm: "flex-start" },
            textAlign: { xs: "center", sm: "left" }, // Center text on mobile
            gap: { xs: 4, sm: 2 }, // Space between sections
          }}
        >
          {/* About Us Section */}
          <Box>
            <Typography
              variant="h6"
              gutterBottom
              color="primary"
              sx={{ mb: 2 }}
            >
              About Us
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
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
            <Typography
              variant="h6"
              gutterBottom
              color="primary"
              sx={{ mb: 2 }}
            >
              Services
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
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
            <Typography
              variant="h6"
              gutterBottom
              color="primary"
              sx={{ mb: 2 }}
            >
              Contact Us
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
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
        <Box sx={{ mt: 4, textAlign: "center" }}>
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
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography variant="body2" color="textSecondary">
            &copy; 2024 Your Company Name. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
