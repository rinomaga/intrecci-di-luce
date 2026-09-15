CREATE DATABASE IF NOT EXISTS intrecci_db;
USE intrecci_db;

CREATE TABLE IF NOT EXISTS prodotti (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  descrizione TEXT NOT NULL,
  prezzo DECIMAL(10, 2) NOT NULL,
  immagine_url VARCHAR(255) NOT NULL,
  disponibile BOOLEAN DEFAULT TRUE,
  creato_il TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS ordini (
  id INT AUTO_INCREMENT PRIMARY KEY,
  stripe_session_id VARCHAR(255) UNIQUE NOT NULL,
  nome_cliente VARCHAR(255) NOT NULL,
  email_cliente VARCHAR(255) NOT NULL,
  totale DECIMAL(10, 2) NOT NULL,
  stato VARCHAR(50) DEFAULT 'in_attesa', -- in_attesa, pagato, spedito
  indirizzo_spedizione TEXT,
  creato_il TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS ordine_prodotti (
  id INT AUTO_INCREMENT PRIMARY KEY,
  ordine_id INT NOT NULL,
  prodotto_id INT NOT NULL,
  quantita INT NOT NULL DEFAULT 1,
  prezzo_unitario DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (ordine_id) REFERENCES ordini(id) ON DELETE CASCADE,
  FOREIGN KEY (prodotto_id) REFERENCES prodotti(id)
);

-- Inserimento prodotti iniziali
INSERT INTO prodotti (nome, descrizione, prezzo, immagine_url) VALUES 
('Bracciale "Oceano Profondo" (Blu)', 'Un intreccio delicato di perline azzurre e blu mare, avvolte in un filo metallico argentato brillante che ricorda le onde del mare. Chiusura magnetica elegante.', 75.00, '/fotoArticoli/IMG-20260914-WA0021.jpg'),
('Parure "Rugiada Smeraldo" (Verde + Oro)', 'Elegante set composto da orecchini pendenti a grappolo e bracciale abbinato. Realizzato con perline sfaccettate color verde smeraldo intrecciate sapientemente con un filo dorato scintillante.', 75.00, '/fotoArticoli/IMG-20260914-WA0022.jpg'),
('Parure "Passione Rubino" (Rosso + Oro)', 'Un set audace e romantico (orecchini e bracciale). Le vibranti perline rosse sfaccettate catturano la luce ad ogni movimento, abbracciate da una delicata lavorazione in filo color oro.', 75.00, '/fotoArticoli/IMG-20260914-WA0023.jpg'),
('Orecchini "Cerchi di Giada" (Nero + Verde)', 'Design contemporaneo e accattivante. Un cerchio nero finemente intrecciato funge da base per una cascata di luminose perline verdi sfaccettate, creando un contrasto affascinante e moderno.', 75.00, '/fotoArticoli/IMG-20260914-WA0024.jpg'),
('Collana "Bagliori di Fuoco" (Rosso + Oro)', 'Un gioiello statement di grande impatto. Molteplici fili dorati si intrecciano in un design ricco e voluminoso, tempestato di perline rosse sfaccettate, culminante in un dettaglio a fascia intrecciata in oro.', 75.00, '/fotoArticoli/IMG-20260914-WA0025.jpg');
