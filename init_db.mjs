import mysql from 'mysql2/promise';
import fs from 'fs';
import path from 'path';

async function initDB() {
  const connectionUrl = 'mysql://2pBnktwmWR4MrxL.root:722q7Rr2nFUcWzqW@gateway01.eu-central-1.prod.aws.tidbcloud.com:4000/test?ssl={"rejectUnauthorized":true}';
  
  console.log("Connecting to TiDB...");
  
  try {
    const connection = await mysql.createConnection(connectionUrl);
    
    // Read the SQL file
    const sqlFile = fs.readFileSync(path.join(process.cwd(), 'database.sql'), 'utf8');
    
    const statements = sqlFile.split(';').map(s => s.trim()).filter(s => s.length > 0);
    
    for (const stmt of statements) {
      console.log(`Executing: ${stmt.substring(0, 50).replace(/\n/g, ' ')}...`);
      await connection.query(stmt);
    }
    
    console.log("Database initialized successfully!");
    await connection.end();
  } catch (error) {
    console.error("Error initializing database:", error);
  }
}

initDB();
