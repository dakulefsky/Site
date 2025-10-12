const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body style="font-family:sans-serif;text-align:center;margin-top:40px;">
        <h1>Welcome to My Simple Site!</h1>
        <p>This is a screen with some information.</p>
        <a href="https://thechesedfund.com/dakulefsky/reprint-the-famed-afikei-yehuda" target="_blank">
          <button style="padding:10px 20px;font-size:16px;">Go to Chesed Fund</button>
        </a>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
