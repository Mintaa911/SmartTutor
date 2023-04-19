//import box from chakra
import { Box } from "@chakra-ui/react";
import SearchBar from "../Components/Cards/Search_bar";
import SearchResultCard  from "../Components/Cards/Search_result/Search_result_card";
import SearchResults from "../Components/Cards/Search_result/Search_result_list";

export default function SearchPage() {
  return (
    <Box>
      <SearchBar />
      <SearchResults/>
    </Box>
  );
}
