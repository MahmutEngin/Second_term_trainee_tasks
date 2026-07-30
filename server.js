const express = require('express');
const app = express();
const PORT = 3000;

// Statik Kitap Listesi (Hardcoded Array)
const books = [
    { id: 1, title: "Çalıkuşu", author: "Reşat Nuri Güntekin", year: 1922 },
    { id: 2, title: "Şeker Portakalı", author: "José Mauro de Vasconcelos", year: 1968 },
    { id: 3, title: "1984", author: "George Orwell", year: 1949 },
    { id: 4, title: "Tutunamayanlar", author: "Oğuz Atay", year: 1972 }
];

// GET /api/books Rotası
app.get('/api/books', (req, res) => {
    res.json(books);
});

// Sunucuyu Başlatma
app.listen(PORT, () => {
    console.log(`🚀 API Sunucusu http://localhost:${PORT} adresinde çalışıyor!`);
});