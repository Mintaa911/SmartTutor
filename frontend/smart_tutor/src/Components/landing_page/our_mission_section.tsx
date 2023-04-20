//@ts-nocheck

import {
	Container,
	Card,
	CardBody,
	CardFooter,
	Heading,
	Text,
	Stack,
	Image,
	ButtonGroup,
	Button,
	Divider,
} from "@chakra-ui/react";
import MissionCard from "./our_mission_section/our_mission_card";

function mission_card() {
	return (
		<Card maxW='sm'>
			<CardBody>
				<Image
					src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dour%2Bmission&psig=AOvVaw1G3JmHQOULUUdiTTUXXIlZ&ust=1682088703660000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJC8nPHauP4CFQAAAAAdAAAAABAE'
					alt='Green double couch with wooden legs'
					borderRadius='lg'
				/>
				<Stack mt='6' spacing='3'>
					<Heading size='md'>Living room Sofa</Heading>
					<Text>
						This sofa is perfect for modern tropical spaces, baroque inspired
						spaces, earthy toned spaces and for people who love a chic design
						with a sprinkle of vintage design.
					</Text>
					<Text color='blue.600' fontSize='2xl'>
						$450
					</Text>
				</Stack>
			</CardBody>
			<Divider />
			<CardFooter>
				<ButtonGroup spacing='2'>
					<Button variant='solid' colorScheme='blue'>
						Buy now
					</Button>
					<Button variant='ghost' colorScheme='blue'>
						Add to cart
					</Button>
				</ButtonGroup>
			</CardFooter>
		</Card>
	);
}

export default function Our_mission_section() {
	return (
		<Container maxW={"7xl"}>
			<MissionCard />
			<MissionCard />
			<MissionCard />
		</Container>
	);
}
