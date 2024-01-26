const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3001; // ou a porta desejada

// Middleware para analisar o corpo da solicitação como JSON
app.use(bodyParser.json());

// Rota para manipular o envio do formulário
app.post('/api/db.json', (req, res) => {
    try {
        // Obtenha os dados do corpo da solicitação
        const formData = req.body;

        // Carregue os dados existentes do arquivo db.json
        const dbPath = path.join(__dirname, 'db.json');
        const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));

        // Adicione os novos dados ao array existente
        dbData.push(formData);

        // Escreva os dados atualizados de volta no arquivo db.json
        fs.writeFileSync(dbPath, JSON.stringify(dbData, null, 2));

        // Responda com sucesso
        res.status(200).json({ success: true, message: 'Form data saved successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error saving form data.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});