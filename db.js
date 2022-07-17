const MongoClient = require('mongodb').MongoClient
const dotenv = require('dotenv')
dotenv.config()

const url = "mongodb+srv://Shreya1998:1234.qwer@cluster0.gzlyp.mongodb.net/FullStack?retryWrites=true&w=majority"

MongoClient.connect(url, (err, client)=>{
    if(err) throw err

    console.log("db connected...")
    module.exports = client

    const app = require('./app')
    app.listen(process.env.PORT, ()=>{
        console.log("server listening on 7000...")
    })
})
