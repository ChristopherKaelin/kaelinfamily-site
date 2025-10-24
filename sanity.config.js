import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: '6ivd3yto', 
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01'
})

// Client with write permissions for API routes
export const sanityWriteClient = createClient({
  projectId: '6ivd3yto',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: import.meta.env.SANITY_WRITE_TOKEN
})
