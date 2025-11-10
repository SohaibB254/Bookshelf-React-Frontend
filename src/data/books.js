import book from '../assets/book.jpg';
import book1 from '../assets/book1.png';
import book2 from '../assets/book2.png';
import book3 from '../assets/book3.png';
import book4 from '../assets/book4.png';
import book5 from '../assets/book5.png';
import book6 from '../assets/book6.png';
import book7 from '../assets/book7.png';
import book8 from '../assets/book8.png';
import book9 from '../assets/book9.png';
import book10 from '../assets/book10.png';

const booksData = [
  { id: 1, title: "The Stars Beyond", author: "Emily Carter", date_published: "2018-05-14", category: "Science Fiction", length: "420 pages", price: 1199, sale_percent: 0, cover_photo: book7, delivery: 300, quantity: 1, total_sold: 1450, languages: ["English", "French", "German"], rating: 4.2 },
  { id: 2, title: "The Enchanted Forest", author: "Liam Woods", date_published: "2020-08-22", category: "Fantasy", length: "380 pages", price: 899, sale_percent: 0, cover_photo: book3, delivery: 225, quantity: 1, total_sold: 980, languages: ["English", "Spanish", "Italian"], rating: 3.8 },
  { id: 3, title: "Murder at Dawn", author: "Clara Holmes", date_published: "2017-11-10", category: "Mystery", length: "290 pages", price: 999, sale_percent: 0, cover_photo: book10, delivery: 250, quantity: 1, total_sold: 765, languages: ["English", "German", "Japanese"], rating: 4.6 },
  { id: 4, title: "Journey to Mars", author: "Noah Black", date_published: "2019-03-18", category: "Science Fiction", length: "350 pages", price: 1350, sale_percent: 30, cover_photo: book5, delivery: 338, quantity: 1, total_sold: 2140, languages: ["English", "Russian", "Chinese"], rating: 4.9 },
  { id: 5, title: "Lost Kingdoms", author: "Ava Green", date_published: "2021-01-10", category: "Fantasy", length: "410 pages", price: 1100, sale_percent: 0, cover_photo: book, delivery: 275, quantity: 1, total_sold: 1320, languages: ["English", "Hindi", "Arabic"], rating: 4.3 },
  { id: 6, title: "Secrets Beneath", author: "Oliver Stone", date_published: "2016-07-24", category: "Thriller", length: "305 pages", price: 950, sale_percent: 0, cover_photo: book6, delivery: 238, quantity: 1, total_sold: 870, languages: ["English", "French", "Spanish"], rating: 3.9 },
  { id: 7, title: "Chronicles of Magic", author: "Sophia White", date_published: "2022-04-08", category: "Fantasy", length: "390 pages", price: 1420, sale_percent: 20, cover_photo: book1, delivery: 355, quantity: 1, total_sold: 1920, languages: ["English", "German", "Russian"], rating: 4.7 },
  { id: 8, title: "Parallel Worlds", author: "Mason Gray", date_published: "2020-09-30", category: "Science Fiction", length: "440 pages", price: 1299, sale_percent: 0, cover_photo: book9, delivery: 325, quantity: 1, total_sold: 1105, languages: ["English", "Spanish", "Chinese"], rating: 4.4 },
  { id: 9, title: "Whispers of the Past", author: "Isabella Blue", date_published: "2015-12-19", category: "Mystery", length: "370 pages", price: 1050, sale_percent: 0, cover_photo: book4, delivery: 263, quantity: 1, total_sold: 1540, languages: ["English", "Korean", "German"], rating: 4.0 },
  { id: 10, title: "Edge of Tomorrow", author: "Ethan Gold", date_published: "2023-06-15", category: "Science Fiction", length: "415 pages", price: 950, sale_percent: 10, cover_photo: book2, delivery: 238, quantity: 1, total_sold: 990, languages: ["English", "French", "Italian"], rating: 3.7 },
  { id: 11, title: "The Hidden Portal", author: "Mia Silver", date_published: "2019-10-12", category: "Fantasy", length: "400 pages", price: 1249, sale_percent: 0, cover_photo: book8, delivery: 313, quantity: 1, total_sold: 1210, languages: ["English", "Russian", "Spanish"], rating: 4.5 },
  { id: 12, title: "Echoes of Eternity", author: "Nathan Storm", date_published: "2020-11-11", category: "Science Fiction", length: "410 pages", price: 1150, sale_percent: 0, cover_photo: book6, delivery: 288, quantity: 1, total_sold: 1430, languages: ["English", "German", "Chinese"], rating: 4.6 },
  { id: 13, title: "The Forgotten Island", author: "Zara Moon", date_published: "2021-06-02", category: "Adventure", length: "320 pages", price: 990, sale_percent: 0, cover_photo: book10, delivery: 248, quantity: 1, total_sold: 860, languages: ["English", "French", "Arabic"], rating: 4.1 },
  { id: 14, title: "Clockwork Soul", author: "Evan Sparks", date_published: "2019-08-19", category: "Historical Fiction", length: "365 pages", price: 1340, sale_percent: 15, cover_photo: book7, delivery: 335, quantity: 1, total_sold: 1115, languages: ["English", "Spanish", "Hindi"], rating: 4.2 },
  { id: 15, title: "The Last Library", author: "Olivia Page", date_published: "2023-02-01", category: "Mystery", length: "280 pages", price: 899, sale_percent: 0, cover_photo: book3, delivery: 225, quantity: 1, total_sold: 930, languages: ["English", "German", "French"], rating: 3.8 },
  { id: 16, title: "Frozen Kingdom", author: "Luca Ice", date_published: "2022-12-25", category: "Fantasy", length: "410 pages", price: 1280, sale_percent: 45, cover_photo: book8, delivery: 320, quantity: 1, total_sold: 2090, languages: ["English", "Russian", "Italian"], rating: 4.9 },
  { id: 17, title: "Wired Reality", author: "Neo Byte", date_published: "2018-07-17", category: "Cyberpunk", length: "450 pages", price: 1450, sale_percent: 0, cover_photo: book1, delivery: 363, quantity: 1, total_sold: 1655, languages: ["English", "Japanese", "French"], rating: 4.3 },
  { id: 18, title: "Beneath the Mist", author: "Hazel Rain", date_published: "2017-05-03", category: "Young Adult", length: "340 pages", price: 920, sale_percent: 0, cover_photo: book9, delivery: 230, quantity: 1, total_sold: 780, languages: ["English", "Spanish", "Korean"], rating: 3.9 },
  { id: 19, title: "Quantum Tides", author: "Ray Nova", date_published: "2021-09-09", category: "Science", length: "400 pages", price: 980, sale_percent: 20, cover_photo: book5, delivery: 245, quantity: 1, total_sold: 1545, languages: ["English", "Chinese", "German"], rating: 4.7 },
  { id: 20, title: "Veil of Shadows", author: "Aria Night", date_published: "2020-04-14", category: "Thriller", length: "390 pages", price: 1010, sale_percent: 0, cover_photo: book4, delivery: 253, quantity: 1, total_sold: 990, languages: ["English", "French", "Spanish"], rating: 4.0 },
  { id: 21, title: "Ashes and Embers", author: "Leo Flint", date_published: "2022-06-06", category: "Adventure", length: "370 pages", price: 1111, sale_percent: 30, cover_photo: book2, delivery: 278, quantity: 1, total_sold: 1305, languages: ["English", "Russian", "Hindi"], rating: 4.5 },
  { id: 22, title: "Shadows of Infinity", author: "Cyrus Vale", date_published: "2023-08-21", category: "Philosophy", length: "430 pages", price: 1390, sale_percent: 10, cover_photo: book3, delivery: 345, quantity: 1, total_sold: 1015, languages: ["English", "German", "Spanish"], rating: 4.4 },
  { id: 23, title: "The Crimson Throne", author: "Aurora Blaze", date_published: "2021-02-19", category: "Fantasy", length: "400 pages", price: 1250, sale_percent: 0, cover_photo: book7, delivery: 315, quantity: 1, total_sold: 1220, languages: ["English", "Italian", "Russian"], rating: 4.6 },
  { id: 24, title: "Silent Echo", author: "Damien Frost", date_published: "2018-11-07", category: "Thriller", length: "310 pages", price: 990, sale_percent: 5, cover_photo: book10, delivery: 265, quantity: 1, total_sold: 845, languages: ["English", "French", "Japanese"], rating: 3.7 },
  { id: 25, title: "Legends Reborn", author: "Kara Dawn", date_published: "2022-05-14", category: "Historical Fiction", length: "380 pages", price: 1199, sale_percent: 15, cover_photo: book9, delivery: 290, quantity: 1, total_sold: 1380, languages: ["English", "Spanish", "Arabic"], rating: 4.8 },
  { id: 26, title: "Neon Horizon", author: "Axel Vega", date_published: "2019-07-30", category: "Cyberpunk", length: "460 pages", price: 1480, sale_percent: 0, cover_photo: book6, delivery: 368, quantity: 1, total_sold: 1775, languages: ["English", "Chinese", "Russian"], rating: 4.9 },
];






export default booksData