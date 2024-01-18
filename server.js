const express = require('express');
const app = express();
const port = process.env.PORT || 3050;
const path = require('path');

app.get('/*', async (req, res) => {
    try {
        res.status(200).sendFile(path.join(__dirname, 'index.html'));
    } catch (error) {
        console.error({ error });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
