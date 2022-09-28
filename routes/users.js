const getDatabase = require('../database.js')
const db = getDatabase() // ger tillgång till databasen

const express = require('express')
//const { collection } = require('firebase/firestore')
const router = express.Router()


//GET USERS
router.get('/', async (req, res) => {

    const usersRef = db.collection('Users')
    const snapshot = await usersRef.get()

    if( snapshot.empty ) {
        res.send([])
        return
    }

    let items = []
    snapshot.forEach(doc => {
        const data = doc.data()
        items.push(data)
        data.id = doc.id //lägger till item +ID objektet ID behövs för POST / PUT DELETE
        console.log(items)
        console.log(data)

    })
    res.send(items)


})

module.exports = router