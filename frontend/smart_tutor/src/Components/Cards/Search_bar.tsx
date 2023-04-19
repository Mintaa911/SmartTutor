import { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

import SearchResultCard from '../Components/Cards/Search_result_card.tsx';

const muiTheme = createTheme();

export default function SearchBar() {
  const top100Films = [
    { title: 'The Shawshank Redemption', value: 'shawshank' },
    { title: 'The Godfather', value: 'godfather' },
    { title: 'The Godfather: Part II', value: 'godfather2' },
    { title: 'The Dark Knight', value: 'darkknight' },
    { title: '12 Angry Men', value: 'angrymen' },
    // add more options here
  ];
  const [value, setValue] = useState([]);

  const handleSearch = () => {
    console.log('Searching for:', value);
    // add your search logic here
  };

  return (
    <ChakraProvider>
      <ThemeProvider theme={muiTheme}>
        <Container maxWidth="sm">
          <br />
          <br />
          <Stack direction="row" spacing={2} alignItems="center">
            <Autocomplete
              sx={{ width: "90%", '& .MuiInputLabel-root': { color: 'gray.500' } }}
              multiple
              id="search-bar"
              options={top100Films}
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <TextField {...params} label="Search" placeholder="Favorites" />
              )}
            />
            <Button sx={{ color: 'black' }} variant="contained" onClick={handleSearch} startIcon={<SearchIcon />}>
              Search
            </Button>
          </Stack>
        </Container>
      </ThemeProvider>
    </ChakraProvider>
  );
}
