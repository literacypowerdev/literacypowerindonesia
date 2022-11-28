const express = require('express');
const router = express.Router();
const { tokenValidation } = require('../helper/middleware');
const {
    allGalery,
    deleteFromGalery,
    detailGalery,
    uploadToGalery
} = require('../controller/galery.controller');

router.get('/', allGalery);
router.post('/', tokenValidation, uploadToGalery);
router.get('/:id', tokenValidation, detailGalery);
router.delete('/:id', tokenValidation, deleteFromGalery);

module.exports = router;