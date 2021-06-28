const express = require("express");
const router = express.Router();
const db = require("../db");




// Companies GET Route
router.get('/', async (req, res) => {
    const results = await db.query(`SELECT * FROM companies`);
    return res.json(results.rows)
})

// ****Code Search Route don't use to prevent (SQL Injection attack)****
// router.get('/search', async (req, res, next) => {
//     try {
//         const { code } = req.query;
//         const results = await db.query(`SELECT * FROM companies WHERE code='${code}'`)
//         return res.json(results.rows)
//     } catch (e) {
//         return next(e)
//     }
// })

// Code Search(USE THIS)
router.get('/search', async (req, res, next) => {
    try {
        const { code } = req.query;
        const results = await db.query(`SELECT * FROM companies WHERE code=$1`, [code])
        return res.json(results.rows)
    } catch (e) {
        return next(e)
    }
})



// Add a company 
router.post('/', async (req, res, next) => {
    try {
        const { name, code } = req.body;
        const results = await db.query('INSERT INTO users (name, code) VALUES()')
    } catch (e) {

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