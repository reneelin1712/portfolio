import { Container, Button, Typography, Grid, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: "AI Model Interpretability Dashboard",
      description: "Interactive visualization tool for explaining machine learning model decisions",
      imageUrl: "/ai-dashboard.jpg",
      tags: ["D3.js", "Python API"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Healthcare Analytics Platform",
      description: "Real-time data visualization for hospital performance metrics",
      imageUrl: "/healthcare-analytics.jpg",
      tags: ["TypeScript", "Node.js", "MongoDB"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Water Quality Prediction System",
      description: "ML-powered forecasting of water contamination levels",
      imageUrl: "/water-quality.jpg",
      tags: ["Python", "TensorFlow"],
      demoUrl: "#",
      codeUrl: "#"
    }
  ];

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Button
        component={Link}
        to="/"
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 4 }}
      >
        Back to Home
      </Button>

      <Typography variant="h3" component="h1" gutterBottom sx={{ 
        mb: 6,
        textAlign: 'center',
        fontWeight: 700
      }}>
        My Projects
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}