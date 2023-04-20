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

export default function MissionCard({ title, children, image }) {
	return (
		<Card maxW='sm'>
			<CardBody>
				<Image
					src={image}
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
