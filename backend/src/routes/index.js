const { Router } = require('express');
const router = Router();

router.get('/index', (req, res) => {
    console.log("Estas en index");
});

router.get('/vistamedico', (req, res) => {
    console.log("Estas en la vista del medico");
});

module.exports = router;