function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages + ' pages';
    this.read = read;
    this.info = function info() {
        return `${title} by ${author}, ${this.pages}, ${read}`;
    }
}

const book1 = new Book("The hobbit", "J.R.R. Tolkien", 295, "not read yet");

console.log(book1.info());