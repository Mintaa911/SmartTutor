//@ts-nocheck 
import { Box, SimpleGrid, Text, Stack} from "@chakra-ui/react";
import SearchResultCard from "./Search_result_card.tsx";

let experts = [
  {
    id: 1,
    name: "John Doe",
    address: "123 Main St, Anytown USA",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in turpis vitae ante mollis bibendum. ",
    rating: "4.5",
    tags: ["JavaScript", "React", "Node.js", "HTML", "CSS"],
  },
  {
    id: 2,
    name: "Jane Smith",
    address: "456 Maple Ave, Anycity USA",
    bio: "Nulla facilisi. Mauris non nisi non sem venenatis consequat vel at mauris. ",
    rating: "4.2",
    tags: ["Python", "Django", "Flask", "SQL", "Git"],
  },
  {
    id: 3,
    name: "Jane Smith",
    address: "456 Maple Ave, Anycity USA",
    bio: "Nulla facilisi. Mauris non nisi non sem venenatis consequat vel at mauris. ",
    rating: "4.2",
    tags: ["Python", "Django", "Flask", "SQL", "Git"],
  },
  {
    id: 4,
    name: "Jane Smith",
    address: "456 Maple Ave, Anycity USA",
    bio: "Nulla facilisi. Mauris non nisi non sem venenatis consequat vel at mauris. ",
    rating: "4.2",
    tags: ["Python", "Django", "Flask", "SQL", "Git"],
  },
  // Add more experts here as needed
];


const SearchResults = () => {
  return (
    <Box mt={4}>
      {experts.length === 0 ? (
        <Text fontSize="lg" fontWeight="bold">
            No experts found.
        </Text>
      ) : (
        <Stack>
          {experts.map((expert) => (
            <SearchResultCard key={expert.id} {...expert} />
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default SearchResults;
