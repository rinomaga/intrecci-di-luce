import mysql from 'mysql2/promise';

async function migrate() {
  const connectionUrl = 'mysql://2pBnktwmWR4MrxL.root:722q7Rr2nFUcWzqW@gateway01.eu-central-1.prod.aws.tidbcloud.com:4000/test?ssl={"rejectUnauthorized":true}';
  
  try {
    const connection = await mysql.createConnection(connectionUrl);
    console.log("Connected to TiDB. Running migration for images...");
    
    const queries = [
      'ALTER TABLE prodotti ADD COLUMN immagine_url_2 VARCHAR(255) DEFAULT NULL',
      'ALTER TABLE prodotti ADD COLUMN immagine_url_3 VARCHAR(255) DEFAULT NULL',
      'ALTER TABLE prodotti ADD COLUMN immagine_url_4 VARCHAR(255) DEFAULT NULL'
    ];

    for (const q of queries) {
      try {
        await connection.query(q);
        console.log(`Successfully executed: ${q}`);
      } catch (e) {
        if (e.code === 'ER_DUP_FIELDNAME' || e.message.includes('Duplicate column name')) {
          console.log(`Column already exists, skipping: ${q}`);
        } else {
          console.error(`Failed to execute: ${q}`, e.message);
        }
      }
    }
    
    await connection.end();
  } catch (error) {
    console.error("Migration failed:", error);
  }
}

migrate();
