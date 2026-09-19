import mysql from 'mysql2/promise';

async function migrate() {
  const connectionUrl = 'mysql://2pBnktwmWR4MrxL.root:722q7Rr2nFUcWzqW@gateway01.eu-central-1.prod.aws.tidbcloud.com:4000/test?ssl={"rejectUnauthorized":true}';
  
  try {
    const connection = await mysql.createConnection(connectionUrl);
    console.log("Connected to TiDB. Running migration...");
    
    try {
      await connection.query('ALTER TABLE prodotti ADD COLUMN in_home BOOLEAN DEFAULT FALSE');
      console.log("Migration successful: in_home column added.");
    } catch (e) {
      if (e.code === 'ER_DUP_FIELDNAME' || e.message.includes('Duplicate column name')) {
        console.log("Column in_home already exists. Skipping.");
      } else {
        throw e;
      }
    }
    
    await connection.end();
  } catch (error) {
    console.error("Migration failed:", error);
  }
}

migrate();
