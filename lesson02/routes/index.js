const express = require('express');
const router = express.Router();

router.use('/lesson02/contacts', require('/lesson02/contacts'))

module.exports = router;