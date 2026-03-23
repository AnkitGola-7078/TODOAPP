const app = require('./src/app');
import express from 'express';

const port =8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


