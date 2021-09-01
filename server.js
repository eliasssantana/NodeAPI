// Aqui eu importo o CORS para permitir o fetch do frontend acessar o backend. Portanto, é o CORS que permite essa comunicação.
const cors = require("cors")
// Aqui eu importo o expressa, mas pra quê? para permitir a criação do meu servidor
const express = require("express")
// Aqui eu importo o axios que será o responsável por consumir APIs no backend pois não utilizamos o fetch no backend.
const axios = require("axios")
const app = express()

app.use(cors())

app.get("/", async(req,res) =>{
    try {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
        res.json(data) 
    } catch (error) {
        res.ja=son({
            message: error
        })
    }

    
    console.log(data)
    
})
app.listen(4567)