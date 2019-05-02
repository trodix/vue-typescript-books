import axios from 'axios';
import Book from '@/models/Book.model';

export default class BookService {
    protected bookApi = axios.create({
        baseURL: 'https://localhost:8000/api',
    });

    public async getAllBook(): Promise<Book[]> {
        const response = await this.bookApi.get('/books');
        return response.data;
    }
}

