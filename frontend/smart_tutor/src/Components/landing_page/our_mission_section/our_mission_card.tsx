//@ts-nocheck

import {
	Container,
	Heading,
	Text,
	Stack,
	Image,
	ButtonGroup,
	Button,
	Divider,
	Card,
	CardBody,
	CardFooter,
} from "@chakra-ui/react";

export default function MissionCard({ title, children }) {
	return (
		<Card maxW='sm'>
			<CardBody>
				<Image
					src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
					alt='Green double couch with wooden legs'
					borderRadius='lg'
				/>
				<Stack mt='6' spacing='3'>
					<Heading size='md'>{title}</Heading>
					<Text noOfLines={4}>{children}</Text>
				</Stack>
			</CardBody>
		</Card>
	);
}
