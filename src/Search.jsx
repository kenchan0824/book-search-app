import { useState } from 'react';

const Search = ({ setSearchTerm }) => {
  const [newSearch, setNewSearch] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(newSearch);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        id="search" 
        value={newSearch} 
        onChange={(event) => setNewSearch(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;