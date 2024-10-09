const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const bcrypt = require('bcrypt');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/register', async (req, res) => {
    const data = req.body;

    // Verifica se as senhas correspondem
    if (data.password !== data.confirmPassword) {
        return res.status(400).send('As senhas não correspondem.');
    }

    // Hash a senha antes de armazená-la
    try {
        const saltRounds = 10; // Nível de complexidade do hash
        data.password = await bcrypt.hash(data.password, saltRounds); // Faz o hash da senha
        delete data.confirmPassword; // Remove o campo confirmPassword antes de armazenar
    } catch (error) {
        console.error('Erro ao fazer hash da senha:', error);
        return res.status(500).send('Erro ao processar a senha');
    }

    fs.writeFile('user.json', JSON.stringify(data, null, 2), (err) => {
        if (err) {
            res.status(500).send('Internal Server Error');
        } else {
            res.send('Data registered successfully');
        }
    });
});

app.get('/users', async (req, res) => {
    fs.readFile('user.json', 'utf8', (err, fileData) => {
        if(err){
            return res.send(500).send('Internal Server Error');
        }
        res.send(JSON.parse(fileData || '[]'))
    })
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
