export default class GotService {
    constructor() {
        this.apiBase = 'https://anapioficeandfire.com/api';
    }

    getResource = async (url) => {
        const res = await fetch(`${this.apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url},
            received ${res.status}`);
        }
        return await res.json();
    };

    getAllCharacters = async () => {
        const res = await this.getResource('/characters?page=5');
        return res.map(this.transformCharacter);
    };

    getCharacter = async (id) => {
        const res = await this.getResource(`/characters/${id}`);
        return this.transformCharacter(res);
    };

    getAllHouse = async () => {
        return this.getResource('/hauses/');
    };

    getHouse = async (id) => {
        return this.getResource(`/hauses/${id}`);
    };

    getAllBooks = async () => {
        return this.getResource('/books/');
    };

    getBook = async (id) => {
        return this.getResource(`/books/${id}`);
    };

    transformCharacter = (char) => {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture,
        };
    };
}
