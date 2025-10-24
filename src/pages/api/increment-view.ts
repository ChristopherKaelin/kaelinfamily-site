export const prerender = false;

import type { APIRoute } from 'astro';
import { sanityWriteClient  } from '../../../sanity.config.js';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { postId } = await request.json();
    
    if (!postId) {
      return new Response(JSON.stringify({ error: 'Post ID is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Increment the view count
    await sanityWriteClient 
      .patch(postId)
      .setIfMissing({ viewCount: 0 })
      .inc({ viewCount: 1 })
      .commit();

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error incrementing view count:', error);
    return new Response(JSON.stringify({ error: 'Failed to increment view count' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
