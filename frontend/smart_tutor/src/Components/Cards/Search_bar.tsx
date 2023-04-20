//@ts-nocheck

import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { searchResult } from "@/lib/serach";
import SearchResults from "./Search_result/Search_result_list";
const muiTheme = createTheme();

export default function SearchBar() {
	const tags = [
		{ title: "DataStructure and Algorithm", value: "DSA" },
		{ title: "Web DEvelopment", value: "web development" },
		{ title: "Mobile Development", value: "mobile development" },
		{ title: "Maths", value: "maths" },
		{ title: "Physics", value: "physics" },
		{ title: "Chemistry", value: "chemistry" },
		{ title: "Programming", value: "programming" },
		{ title: "JavaScript", value: "javascript" },
		{ title: "React", value: "react" },
		{ title: "Node.js", value: "node" },
		{ title: "Html", value: "html" },
		{ title: "CSS", value: "css" },
		{ title: "Python", value: "python" },
		{ title: "Django", value: "django" },
		{ title: "Flask", value: "flask" },
		{ title: "SQL", value: "sql" },
		{ title: "Git", value: "git" },
		// add more options here
	];
	const [value, setValue] = useState([]);
	const [data, setData] = useState([]);

	const handleSearch = async () => {
		// console.log("Searching for:", value);
		const res = await searchResult(value);
		setData(res);
		// add your search logic here
	};

	return (
		<ThemeProvider theme={muiTheme}>
			<Container maxWidth='sm'>
				<Stack direction='row' spacing={2} alignItems='center'>
					<Autocomplete
						sx={{
							width: "90%",
							"& .MuiInputLabel-root": { color: "gray.500" },
						}}
						multiple
						id='search-bar'
						options={tags}
						value={value}
						onChange={(event, newValue) => {
							setValue(newValue);
						}}
						getOptionLabel={(option) => option.title}
						renderInput={(params) => (
							<TextField {...params} label='Search' placeholder='Favorites' />
						)}
					/>
					<Button
						sx={{ color: "black" }}
						variant='contained'
						onClick={handleSearch}
						startIcon={<SearchIcon />}
					>
						Search
					</Button>
				</Stack>
			</Container>
			<SearchResults experts={data} />
		</ThemeProvider>
	);
}
