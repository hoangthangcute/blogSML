const express = require('express');
const router = express.Router();

const adminRoutes = require('./admin.route');
const clientRoutes = require('./client.route');

router.use('/admin', adminRoutes);
router.use('/', clientRoutes);

module.exports = router;