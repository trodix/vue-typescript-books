import Review from '@/models/Review.model';

export default interface Book {
    id: string | null;
    isbn: string;
    title: string;
    description: string;
    author: string;
    publicationDate: Date;
    reviews: Review[];
}
