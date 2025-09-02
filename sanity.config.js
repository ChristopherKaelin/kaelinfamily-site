import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: '6ivd3yto', 
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01'
})