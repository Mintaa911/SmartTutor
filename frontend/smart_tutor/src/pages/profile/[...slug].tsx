import React from "react";
import RequestCard from "../../Components/TutorRequestCard";
import { Avatar, Button, ButtonGroup, Divider } from "@chakra-ui/react";

let requests = [
	{
		tutor: "Biruk Ayalew",
		subject: "Math ,JavaScript, React, Node.js, HTML, CSS",
		time: "2:00 AM",
		date: "8/2/2021",
		status: "pending",
	},
	{
		tutor: "Mahlet Dereje",
		subject: "JavaScript, React, Node.js, HTML, CSS",
		time: "7:00 PM",
		date: "10/7/2020",
		status: "pending",
	},
	{
		tutor: "Süha Tanriverdi",
		subject: "Back-End, Python, Django, Flask, SQL, Git",
		time: "2:00 AM",
		date: "8/1/2021",
		status: "rejected",
	},
	{
		tutor: "Peter Michel",
		subject: "Python, SQL, Git",
		time: "2:00 AM",
		date: "1/1/2021",
		status: "accepted",
	},
	{
		tutor: "Alice Doe",
		subject: "Python, Flask, SQL, Git",
		time: "2:00 AM",
		date: "7/21/2021",
		status: "accepted",
	},
];

export default function Profile() {
	return (
		<div className='w-full md:w-[70%] md:mx-auto mt-6 md:mt-10'>
			<div className='mb-4 pb-4 shadow-lg'>
				<div className='h-32 md:h-48 bg-[#1DA1F2]'></div>
				<div className='px-4 md:px-6'>
					<Avatar
						className='relative -top-6'
						name='Dan Abrahmov'
						src='https://bit.ly/dan-abramov'
					/>
					<div className='flex-col md:flex md:justify-between '>
						<div className='md:w-96'>
							<h1 className='text-xl mb-2'>Dan Abrahmov</h1>
							<p>
								Elon Reeve Musk FRS is a business magnate and investor. He is
								the founder, CEO and chief engineer of SpaceX; angel investor,
								CEO and product architect of Tesla, Inc.; owner and CEO of
								Twitter; founder of the Boring Company; co-founder of Neuralink
								and OpenAI
							</p>
						</div>
						<div className='mt-4 md:grow-2'>
							<ButtonGroup>
								<Button colorScheme='primary' variant='outline' size='sm'>
									Edit Profile
								</Button>
								<Button colorScheme='primary' variant='outline' size='sm'>
									Manage Account
								</Button>
							</ButtonGroup>
						</div>
					</div>
				</div>
			</div>
			<div className='px-6'>
				<h1 className='text-2xl mb-5'>Activity</h1>
				<div>
					{requests.map((myProps) => {
						return (
							<div key={`${myProps.tutor}${myProps.time}`}>
								<RequestCard {...myProps} />
								<Divider
									orientation='horizontal'
									borderWidth={1}
									className='my-2'
								/>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
