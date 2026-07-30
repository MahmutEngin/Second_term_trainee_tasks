import express, { Request, Response } from 'express';

const app = express();
const PORT: number = 3000;

// 1. Kitap nesnesi için Interface (Tip Tanımı)
interface Book {
    id: number;
    title: string;
    author: string;
    year: number;
}

// 2. Kitap Dizisi (Book tipleriyle sınırlandırılmış Array)
const books: Book[] = [
    { id: 1, title: "Çalıkuşu", author: "Reşat Nuri Güntekin", year: 1922 },
    { id: 2, title: "Şeker Portakalı", author: "José Mauro de Vasconcelos", year: 1968 },
    { id: 3, title: "1984", author: "George Orwell", year: 1949 },
    { id: 4, title: "Tutunamayanlar", author: "Oğuz Atay", year: 1972 }
];

// 3. GET /api/books Rotası (Request ve Response tipleri belirtilmiş)
app.get('/api/books', (req: Request, res: Response): void => {
    res.json(books);
});

// 4. Sunucuyu Başlatma
app.listen(PORT, (): void => {
    console.log(`🚀 TypeScript API Sunucusu http://localhost:${PORT} adresinde çalışıyor!`);
});