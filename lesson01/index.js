const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send(<h2>'Marlayna Eliza Moser'</h2>)
})

app.listen(3000, () => {
    console.log('Server started on port 3000')  
})