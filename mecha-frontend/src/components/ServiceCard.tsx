import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { Info as InfoIcon } from "@mui/icons-material";

const ServiceCard: React.FC = () => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        mx: "auto", // Center the card
        p: 2,
        display: "flex",
        alignItems: "center",
        flexDirection: { xs: "column", sm: "row" }, // Column on small screens, row on larger screens
        gap: 2, // Space between icon and text
      }}
    >
      {/* Text Section */}
      <CardContent sx={{ textAlign: { xs: "center", sm: "left" } }}>
        {/* Icon Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <InfoIcon sx={{ fontSize: 40, color: "primary.main" }} />
        </Box>
        <Typography variant="h6" component="div" color="textPrimary">
          Responsive Card
        </Typography>
        <Typography variant="body2" color="textSecondary">
          This is a simple card with an icon and some text that adjusts based on
          screen size.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
