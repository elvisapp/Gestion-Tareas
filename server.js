const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Configuración de la Base de Datos PostgreSQL
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'gestion_tareas',
    password: 'tu_contraseña',
    port: 5432,
});

// Ruta para Obtener Tareas
app.get('/api/tareas', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM tareas');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener las tareas' });
    }
});

// Iniciar el Servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
