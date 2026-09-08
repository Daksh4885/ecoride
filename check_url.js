const https = require('https');
https.get('https://www.ecoridedroptaxi.com', res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    const match = d.match(/_next\/static\/chunks\/pages\/index-[^"]+\.js/);
    if (match) {
      https.get('https://www.ecoridedroptaxi.com/' + match[0], r => {
        let js = '';
        r.on('data', c => js += c);
        r.on('end', () => {
          const apiMatch = js.match(/["'](https?:\/\/[^"']+)["']\s*\+\s*["']\/api\/bookings/);
          console.log('API URL in live JS:', apiMatch ? apiMatch[1] : 'NOT FOUND');
          
          const staticMatch = js.match(/["']http:\/\/localhost:5000["']/);
          if (staticMatch) console.log('Found localhost:5000 hardcoded in JS!');
        });
      });
    } else {
      console.log('Index JS chunk not found');
    }
  });
});
