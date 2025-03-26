// src/services/contentfulManagement.js
import { createClient } from 'contentful-management'

const client = createClient({
  accessToken: import.meta.env.VITE_CONTENTFUL_MANAGEMENT_TOKEN
})

export const createBlogPost = async (spaceId, environmentId, postData) => {
  const space = await client.getSpace(spaceId)
  const environment = await space.getEnvironment(environmentId)
  
  return environment.createEntry('blogPost', {
    fields: {
      title: { 'en-US': postData.title },
      slug: { 'en-US': postData.slug },
      content: { 'en-US': postData.content },
      publishDate: { 'en-US': postData.date }
    }
  })
}