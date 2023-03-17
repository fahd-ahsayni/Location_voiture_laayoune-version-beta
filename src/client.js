import { createClient } from '@sanity/client';

export default createClient({
  projectId: 'elgcoxli',
  dataset: 'production',
  apiVersion: '2021-03-25',
  useCdn: true,
});