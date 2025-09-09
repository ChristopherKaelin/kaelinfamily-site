export default function handler(req, res) {
  // Enable CORS for your domain
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
    // For now, return empty data - we'll improve this next
    res.status(200).json({ clicks: {} });
  } else if (req.method === 'POST') {
    // For now, just acknowledge the data - we'll add storage next
    const clickData = req.body;
    console.log('Received click data:', clickData);
    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}