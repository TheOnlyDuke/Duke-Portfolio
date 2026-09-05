import { Box, Container, Typography, Grid, IconButton, Link } from "@mui/material";
import { GitHub, LinkedIn, Twitter, Email } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: 'grey.900', 
        color: 'white', 
        py: 6,
        mt: 8
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
              Duke
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: 'grey.300' }}>
              AI Researcher & Data Scientist passionate about advancing artificial intelligence 
              through innovative research and practical applications.
            </Typography>
            <Box display="flex" gap={1}>
              <IconButton 
                href="https://github.com/duke" 
                target="_blank" 
                sx={{ color: 'grey.300', '&:hover': { color: 'primary.main' } }}
              >
                <GitHub />
              </IconButton>
              <IconButton 
                href="https://linkedin.com/in/duke-researcher" 
                target="_blank" 
                sx={{ color: 'grey.300', '&:hover': { color: 'primary.main' } }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton 
                href="https://twitter.com/duke_researcher" 
                target="_blank" 
                sx={{ color: 'grey.300', '&:hover': { color: 'primary.main' } }}
              >
                <Twitter />
              </IconButton>
              <IconButton 
                href="mailto:duke.researcher@email.com" 
                sx={{ color: 'grey.300', '&:hover': { color: 'primary.main' } }}
              >
                <Email />
              </IconButton>
            </Box>
          </Grid>
          
          <Grid size={{ xs: 12, md: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Research
            </Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              <Link href="#neural-networks" color="grey.300" underline="hover">
                Neural Networks
              </Link>
              <Link href="#ml-data-mining" color="grey.300" underline="hover">
                ML & Data Mining
              </Link>
              <Link href="#scientific-association" color="grey.300" underline="hover">
                Publications
              </Link>
              <Link href="#academics" color="grey.300" underline="hover">
                Academic Work
              </Link>
            </Box>
          </Grid>
          
          <Grid size={{ xs: 12, md: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Sections
            </Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              <Link href="#about" color="grey.300" underline="hover">
                About Me
              </Link>
              <Link href="#academics" color="grey.300" underline="hover">
                Academics
              </Link>
              <Link href="#neural-networks" color="grey.300" underline="hover">
                Neural Networks
              </Link>
              <Link href="#ml-data-mining" color="grey.300" underline="hover">
                ML & Data Mining
              </Link>
            </Box>
          </Grid>
          
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Contact Information
            </Typography>
            <Typography variant="body2" color="grey.300" paragraph>
              <strong>Email:</strong> duke.researcher@email.com
            </Typography>
            <Typography variant="body2" color="grey.300" paragraph>
              <strong>Phone:</strong> +1 (555) 123-4567
            </Typography>
            <Typography variant="body2" color="grey.300">
              <strong>Location:</strong> Research University Campus
            </Typography>
          </Grid>
        </Grid>
        
        <Box sx={{ borderTop: 1, borderColor: 'grey.700', mt: 4, pt: 4, textAlign: 'center' }}>
          <Typography variant="body2" color="grey.400">
            © 2024 Duke Portfolio. All rights reserved. Built with Next.js and Material-UI.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}