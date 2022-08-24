const express = require('express');
const cors = require('cors');
const taskrouter = require('./routes/taskRoute');
require('./db/mongoose');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(taskrouter);

app.listen(PORT,()=>{
    console.log(`Server is live on http://localhost:${PORT}`);
})