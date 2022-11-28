const express = require('express');
const router = express.Router();
const { tokenValidation } = require('../helper/middleware');
const {
    allDonasi,
    postDonasi,
    deleteDonasi
} = require('../controller/donasi.controller');

router.get('/', allDonasi);
router.post('/', postDonasi);
router.delete('/:id', tokenValidation, deleteDonasi);

module.exports = router;