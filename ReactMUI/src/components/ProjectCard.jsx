import { Card, CardContent, CardMedia, Typography, Button, Chip, Box, Stack } from '@mui/material';

export default function ProjectCard({ 
  title, 
  description, 
  imageUrl, 
  tags, 
  demoUrl, 
  codeUrl 
}) {
  return (
    <Card sx={{ 
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: 3
      }
    }}>
      <CardMedia
        component="img"
        height="180"
        image={imageUrl || "/project-placeholder.jpg"}
        alt={title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>
        
        <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
          {tags.map((tag, index) => (
            <Chip 
              key={index} 
              label={tag} 
              size="small" 
              variant="outlined"
              sx={{ 
                borderColor: 'primary.main',
                color: 'primary.main'
              }}
            />
          ))}
        </Stack>
      </CardContent>
      
      <Box sx={{ p: 2, pt: 0 }}>
        <Stack direction="row" spacing={2}>
          {demoUrl && (
            <Button 
              variant="contained" 
              fullWidth
              href={demoUrl}
              target="_blank"
              sx={{
                borderRadius: '8px',
                textTransform: 'none',
                fontWeight: 600
              }}
            >
              Demo
            </Button>
          )}
          {codeUrl && (
            <Button 
              variant="outlined" 
              fullWidth
              href={codeUrl}
              target="_blank"
              sx={{
                borderRadius: '8px',
                textTransform: 'none',
                fontWeight: 600
              }}
            >
              Code
            </Button>
          )}
        </Stack>
      </Box>
    </Card>
  );
}