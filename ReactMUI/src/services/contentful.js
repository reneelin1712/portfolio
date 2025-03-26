// src/services/contentful.js
import { createClient } from 'contentful';
import { createClient as createManagementClient } from 'contentful-management';

// Content Delivery API (for reading)
const deliveryClient = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
});

// Content Management API (for writing)
const managementClient = createManagementClient({
  accessToken: import.meta.env.VITE_CONTENTFUL_MANAGEMENT_TOKEN
});

export const getBlogPosts = async () => {
  const response = await deliveryClient.getEntries({
    content_type: 'blogPost',
    order: '-fields.publishDate'
  });
  return response.items.map(item => ({
    id: item.sys.id,
    title: item.fields.title,
    excerpt: item.fields.excerpt,
    slug: item.fields.slug,
    date: item.fields.publishDate,
    content: item.fields.content
  }));
};

export const createNewPost = async (postData) => {
  const space = await managementClient.getSpace(import.meta.env.VITE_CONTENTFUL_SPACE);
  const environment = await space.getEnvironment('master');
  
  const entry = await environment.createEntry('blogPost', {
    fields: {
      title: { 'en-US': postData.title },
      slug: { 'en-US': postData.slug },
      excerpt: { 'en-US': postData.excerpt || '' },
      content: { 'en-US': postData.content },
      publishDate: { 'en-US': postData.date || new Date().toISOString() }
    }
  });
  
  // Publish the entry immediately
  await entry.publish();
  return entry;
};