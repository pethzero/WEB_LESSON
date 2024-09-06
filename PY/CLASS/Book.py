class Book:
    def __init__(self, title, author, year, isbn):
        self.title = title
        self.author = author
        self.year = year
        self.isbn = isbn
            
    def display_info(self):
        print(f"Book Title: {self.title}, Author: {self.author}, Year: {self.year}, ISBN: {self.isbn}")

class Library:
    def __init__(self):
        self.books = []
        
    def add_book(self, title, author, year, isbn):
        book = Book(title, author, year, isbn)
        self.books.append(book)
        return book
    
    def find_book_by_isbn(self, isbn):
        for book in self.books:
            if book.isbn == isbn:
                return book
        return None
    
    def list_books(self):
        for book in self.books:
            print(f"Book Title: {book.title}, Author: {book.author}, Year: {book.year}, ISBN: {book.isbn}")

# สร้างอินสแตนซ์ของ Library
library = Library()

# เพิ่มหนังสือในห้องสมุด
library.add_book("Book Art Volume 1", "Alice", 2007, "22354811/S001")
library.add_book("Book Art Volume 2", "Alice", 2008, "22354811/S002")
library.add_book("Book Art Volume 3", "Alice", 2009, "22354811/S003")

# ค้นหาหนังสือโดย ISBN
found_book = library.find_book_by_isbn("22354811/S002")
if found_book:
    found_book.display_info()
    
# แสดงรายการหนังสือทั้งหมด
library.list_books()
