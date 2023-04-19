import React from "react";
import RequestCard from "../../Components/common/TutorRequestCard";
import { Avatar, Button, ButtonGroup, Divider } from "@chakra-ui/react";

const myProp = {
	tutor: "Mr.John",
	subject: "Math",
	time: "11:00am",
	date: "2023-04-29",
	status: "pending",
};

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
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
								aperiam voluptatem magni dolor veritatis officia adipisci
								repudiandae vitae? Est, ad?
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
					<RequestCard {...myProp} />
					<Divider orientation='horizontal' borderWidth={1} className='my-2' />
					<RequestCard {...myProp} />
					<Divider orientation='horizontal' borderWidth={1} className='my-2' />
					<RequestCard {...myProp} />
					<Divider orientation='horizontal' borderWidth={1} className='my-2' />
				</div>
			</div>
		</div>
	);
}
