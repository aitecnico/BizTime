const express = require("express");
const router = express.Router();
const db = require("../db");




// Companies GET Route
router.get('/', async (req, res) => {
    const results = await db.query(`SELECT * FROM companies`);
    return res.json(results.rows)
})

// Code Search Route
router.get('/search', async (req, res, next) => {
    try {
        const { code } = req.query;
        const results = await db.query(`SELECT * FROM companies WHERE code='${code}'`)
        return res.json(results.rows)
    } catch (e) {
        return next(e)
    }
})






// router.get("/", async function (req, res, next) {
//     try {
//         const result = await db.query(
//             `SELECT code, name 
//              FROM companies 
//              ORDER BY name`
//         );

//         return res.json({ "companies": result.rows });
//     }

//     catch (err) {
//         return next(err);
//     }
// });



module.exports = router;