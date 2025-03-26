// src/components/NewPostForm.jsx
import { useState } from 'react';
import { 
  Button, 
  TextField, 
  Box, 
  Stack,
  Typography
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';

export default function NewPostForm({ onSubmit }) {
  const [post, setPost] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    date: dayjs() // Initialize with dayjs object
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSubmit({
        ...post,
        date: post.date.toISOString() // Convert to ISO string when submitting
      });
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box component="form" onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Typography variant="h6">Create New Post</Typography>
          
          <TextField
            label="Title"
            value={post.title}
            onChange={(e) => setPost({...post, title: e.target.value})}
            fullWidth
            required
          />
          
          <TextField
            label="Slug (URL-friendly)"
            value={post.slug}
            onChange={(e) => setPost({...post, slug: e.target.value})}
            fullWidth
            required
            helperText="e.g., my-awesome-post"
          />
          
          <TextField
            label="Excerpt"
            value={post.excerpt}
            onChange={(e) => setPost({...post, excerpt: e.target.value})}
            fullWidth
            multiline
            rows={2}
          />
          
          <TextField
            label="Content"
            value={post.content}
            onChange={(e) => setPost({...post, content: e.target.value})}
            fullWidth
            multiline
            rows={6}
            required
          />
          
          <DateTimePicker
            label="Publish Date"
            value={post.date}
            onChange={(newValue) => setPost({...post, date: newValue})}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
          
          <Button 
            type="submit" 
            variant="contained" 
            size="large"
            fullWidth
          >
            Publish Post
          </Button>
        </Stack>
      </Box>
    </LocalizationProvider>
  );
}