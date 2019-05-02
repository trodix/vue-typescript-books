import { VuexModule, Module, getModule, MutationAction, Mutation, Action } from 'vuex-module-decorators';
import store from '@/store';
import Book from '@/models/Book.model';
import BookService from '@/services/book.service';
import { AxiosResponse } from 'axios';

@Module({
    namespaced: true,
    name: 'books',
    store,
})
class BookModule extends VuexModule {

    private book: Book | null = null;
    private books: Book[] = [];

    private bookService: BookService = new BookService();

    @Mutation
    public loadResults({ data }: AxiosResponse<any[]>) {
        if (data && data.length) {
            this.books = data;
        }
    }

// tslint:disable-next-line: member-ordering
    @Action({ commit: 'loadResults'})
    public async getAllBook() {
        return await this.bookService.getAllBook();
    }
}

export default getModule(BookModule);
