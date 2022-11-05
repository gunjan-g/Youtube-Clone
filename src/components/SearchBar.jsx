import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); //with every React Application- because when we submit a form usually it reloads a page
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);   //navigate to specific url
      setSearchTerm('');
    }
  }

  return (
    <Paper 
      component= "form"
      onSubmit= {handleSubmit}
      sx= {{
        borderRadius: 20, 
        border: '1px solid #e3e3e3', 
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 }
      }}
    >
       <input
         className= 'search-bar'
         placeholder= 'Search...'
         value= {searchTerm}
         onChange= {(e) => setSearchTerm(e.target.value)}
       />
       <IconButton type="submit" sx={{ p: '10px', color: 'red' }} aria-label='search'>
          <Search />
       </IconButton>
    </Paper>
  )
}

export default SearchBar

//Paper is a simple div
//pl is padding left, mr is margin and sm is for small devices(responsive)
