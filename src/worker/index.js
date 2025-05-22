
export default {
  async fetch(request, env, ctx) {
    // Allow Google Analytics domains in security policies if needed
    const response = await env.ASSETS.fetch(request);
    
    // Clone the response so we can modify headers
    const newResponse = new Response(response.body, response);
    
    // Add headers to allow Google Analytics if needed
    newResponse.headers.set('Access-Control-Allow-Origin', '*');
    
    return newResponse;
  }
};
