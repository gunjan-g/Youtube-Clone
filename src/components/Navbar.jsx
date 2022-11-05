import { Stack } from '@mui/material';
//Stack is used for 1-D layouts maybe in column or in row
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <Stack 
      direction= "row" 
      alignItems= "center" 
      p= {2} 
      sx= {{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between' }}
    >

      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src= {logo} alt="logo" height={45} />
      </Link>

      <SearchBar />

    </Stack>
  )
}

export default Navbar;

//p stands for padding and sx gives an option to provide the styles to material ui components
//position is sticky because we want stack to stick at top
//Stack API defines the properties defined with Stack component
