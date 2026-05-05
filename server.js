const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Serie II - Azure</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        text-align: center;
                        margin-top: 100px;
                        background-color: #f4f4f4;
                    }
                    .card {
                        background: white;
                        padding: 30px;
                        border-radius: 10px;
                        width: 400px;
                        margin: auto;
                        box-shadow: 0 0 10px rgba(0,0,0,0.2);
                    }
                    h1 {
                        color: #0078D4;
                    }
                </style>
            </head>
            <body>
                <div class="card">
                    <h1>Ingeniería de Software</h1>
                    <h2>Serie II</h2>
                    <p><strong>Nombre del estudiante:</strong></p>
                    <h3>Jorge Medina</h3>
                </div>
            </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});