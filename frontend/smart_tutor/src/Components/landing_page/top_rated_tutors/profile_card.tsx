//@ts-nocheck
import {
	Card,
	CardBody,
	Flex,
	WrapItem,
	Avatar,
	Box,
	Image,
	Text,
	Badge,
} from "@chakra-ui/react";

const ProfileCard = ({ profilePic, name, bio, rating }) => {
	return (
		<Card maxW='sm'>
			<CardBody>
				<Flex justifyContent='center' alignItems='center' mt='6'>
					<WrapItem>
						<Avatar size='2xl' name={name} src={profilePic} />
					</WrapItem>
				</Flex>

				<Box p='6'>
					<Box d='flex' alignItems='baseline'>
						<Badge borderRadius='full' px='2' colorScheme='teal'>
							{rating}
						</Badge>
					</Box>

					<Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight'>
						{name}
					</Box>

					<Box mt='2' color='gray.600'>
						<Text noOfLines={3}>{bio}</Text>
					</Box>
				</Box>
			</CardBody>
		</Card>
	);
};

export default ProfileCard;
