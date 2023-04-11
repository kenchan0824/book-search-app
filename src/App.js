import { useState } from 'react';
import './App.css';
import BookList from './BookList';
import Search from './Search';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  // console.log(searchTerm);

  return (
    <div className="App">
      <Header />
      <Search setSearchTerm={setSearchTerm} />
      <BookList searchTerm={searchTerm} />
    </div>
  );
}

export default App;

const Header = () => {
  return (
    <h1>A Book Search App</h1>
  );
}

