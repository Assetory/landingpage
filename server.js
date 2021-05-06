const express = require('express');
const path = require('path');

const app = express();
app.use(express.urlencoded());
app.use('/static', express.static(path.join(__dirname, './build/client/'), { index: false }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './build/client', "index.html"));
})

app.listen(3000, () =>
  console.log('Express server is running on localhost:3000')
);
