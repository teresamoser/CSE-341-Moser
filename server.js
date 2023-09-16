// const express = require('express');
// const app = express();
// const port = process.env.port || 3000;

// app.use('/', require('./lesson02/routes'))

// app.listen(3000, () =>{
//     console.log(`Server is running on ${port}`);
// })

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use('/', require('./routes'))

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})