import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: '6ivd3yto', 
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01'
})