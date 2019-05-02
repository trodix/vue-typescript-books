export default interface Review {
    id: string | null;
    rating: number;
    body: string;
    author: string;
    publicationDate: Date;
}
