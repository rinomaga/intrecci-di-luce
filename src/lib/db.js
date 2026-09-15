import mysql from 'mysql2/promise';

// Quando utilizzi un database cloud (es. Aiven, PlanetScale, ecc.), 
// è preferibile usare una singola stringa di connessione URI.
const dbUrl = process.env.DATABASE_URL;

let pool;

if (dbUrl) {
  pool = mysql.createPool(dbUrl);
} else {
  // Fallback ai parametri singoli se la stringa non è presente
  pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'intrecci_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });
}

export async function query(sql, values) {
  const [results] = await pool.execute(sql, values);
  return results;
}
