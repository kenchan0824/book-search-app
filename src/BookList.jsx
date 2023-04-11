import { useState, useEffect } from 'react';

const BookList = ({ searchTerm }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBooks(data.items);
        setLoading(false);
      })
  }, [searchTerm]);

  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <p>Here are the books for {searchTerm}:</p>
      <ul>
        {books?.map((book) => {
          return (
            <li key={book.id}>
              <div>{book.volumeInfo.title}</div>
              <div>by {book.volumeInfo.authors}</div>
              <div>({book.volumeInfo.publishedDate})</div>
              <img 
                src={book.volumeInfo.imageLinks.smallThumbnail}
                alt={book.volumeInfo.title}/>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BookList;