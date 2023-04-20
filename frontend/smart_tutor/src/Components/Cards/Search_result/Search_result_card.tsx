//@ts-nocheck
import {
	Box,
	Button,
	Text,
	Badge,
	Wrap,
	WrapItem,
	useToast,
} from "@chakra-ui/react";

const SearchResultCard = ({ name, address, bio, rating, tags }) => {
	const toast = useToast();
	return (
		<Box boxShadow='md' rounded='md'>
			<div className='flex items-center'>
				{/* <Avatar size='sm' src='https://bit.ly/dan-abramov' /> */}

				<div className='ml-4'>
					<Text>{name}</Text>
					<Text color='gray.500'>{address}</Text>
					<Text>{bio}</Text>
					<Wrap mt={2}>
						{tags.map((tag) => (
							<WrapItem key={tag}>
								<Badge colorScheme='green'>{tag}</Badge>
							</WrapItem>
						))}
					</Wrap>
				</div>
			</div>
			<div className='flex justify-between mx-10 pb-4'>
				<Text fontSize='lg' fontWeight='semibold'>
					{rating}
				</Text>
				<Button
					variant='outline'
					onClick={() => {
						toast({
							title: "Request Sent",
							description: "Successfully send request",
							status: "success",
							duration: 2000,
							isClosable: true,
						});
					}}
				>
					Request
				</Button>
			</div>
		</Box>
	);
};

export default SearchResultCard;
