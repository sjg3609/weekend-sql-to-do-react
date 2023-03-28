const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "todo" ORDER BY "id" DESC;`;
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(`Error in GET ${error}`);
        res.sendStatus(500);
    });
});

// POST

router.post('/', (req, res) => {
    console.log('POST request made for /todo');
    let toAdd = req.body;
    const queryText = `INSERT INTO "todo" ("task")
                       VALUES ($1);`;
    pool.query(queryText, [toAdd.task]).then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log(`Error in POST ${error}`);
        res.sendStatus(500);
    })
});

// PUT

router.put('/:id', (req, res) => {
    let toDoID = Number(req.params.id);
    let toDoEdit = req.params.body;
    const queryText = `UPDATE "todo" SET "complete" = 'true' WHERE "id" = $1;`;
    pool.query(queryText, [toDoID]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(`Error trying to PUT ${error}`);
        res.sendStatus(500);
    });
});

// Commented this out for now because I believe since the database automatically assigns the tasks
// as false, we don't need to toggle it back. Only set it to complete

// router.put('/uncompleted/:id', (req, res) => {
//     let toDoID = Number(req.params.id);
//     let toDoEdit = req.params.body;
//     const queryText = `UPDATE "todo" SET "complete" = 'false';`;
//     pool.query(queryText, [toDoID]).then((result) => {
//         res.sendStatus(200);
//     }).catch((error) => {
//         console.log(`Error trying to PUT ${error}`);
//         res.sendStatus(500);
//     });
// });

// DELETE

router.delete('/:id', (req, res) => {
    const deleteId = Number(req.params.id);
    const queryText = `DELETE FROM "todo" WHERE "id" = $1;`;
    pool.query(queryText, [deleteId]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(`Error in DELETE ${error}`);
        res.sendStatus(500);
    });
});

module.exports = router;
