const express = require('express');
const router = express.Router();


// Router
// router.get('/', (req, res) => {
//     res.render('client/index')
// });

// router.get('/123', (req, res) => {
//     res.json({ name: "A", age: 18 });
// });

router.get("/", (req, res) => {
    res.render('client/index');
});

router.get("/about", (req, res) => {
    res.render('client/about');
});

router.get("/contact", (req, res) => {
    res.render('client/contact');
});

router.get("/post", (req, res) => {
    res.render('client/post');
});


module.exports = router;