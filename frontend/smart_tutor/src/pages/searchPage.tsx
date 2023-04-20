import SearchBar from "@/Components/Cards/Search_bar";
import SearchResults from "@/Components/Cards/Search_result/Search_result_list";

export default function SearchPage() {
	return (
		<div className='w-[80%] mx-auto'>
			<SearchBar />
			{/* <SearchResults experts={[]} /> */}
		</div>
	);
}
