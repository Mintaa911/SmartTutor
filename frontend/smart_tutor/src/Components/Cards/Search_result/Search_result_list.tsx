//@ts-nocheck
import { Box, SimpleGrid, Text, Stack } from "@chakra-ui/react";
import SearchResultCard from "./Search_result_card.tsx";

const SearchResults = ({ experts }) => {
	return (
		<div>
			{experts.length === 0 ? (
				<Text fontSize='lg' fontWeight='bold'>
					No experts found.
				</Text>
			) : (
				<div>
					{experts.map((expert) => (
						<SearchResultCard key={expert.id} {...expert} />
					))}
				</div>
			)}
		</div>
	);
};

export default SearchResults;
