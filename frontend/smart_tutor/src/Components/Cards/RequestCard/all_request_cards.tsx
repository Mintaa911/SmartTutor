//@ts-nocheck
/** 
  make list of all the requests using request card from an array of requests
**/
//@ts-nocheck
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Request_card from "./request_card";

let requests = [
	{
		name: "John Doe",
		subject: "Math",
		time: "12:00 PM",
		date: "12/12/2021",
		status: "pending",
	},
	{
		name: "John Doe",
		subject: "Math",
		time: "12:00 PM",
		date: "12/12/2021",
		status: "rejected",
	},
	{
		name: "John Doe",
		subject: "Math",
		time: "12:00 PM",
		date: "12/12/2021",
		status: "accepted",
	},
];

export default function All_request_cards() {
	return (
		<Box>
			{requests.map((request) => (
				<Box key={request.name}>
					<Request_card
						name={request.name}
						subject={request.subject}
						time={request.time}
						date={request.date}
						status={request.status}
					/>
				</Box>
			))}
		</Box>
	);
}
