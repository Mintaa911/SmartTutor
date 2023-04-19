import { Button, ButtonGroup } from "@chakra-ui/react";
import { useState } from "react";
import { Avatar } from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
	const [authenticated, setAuthenticated] = useState(false);
	const [dropDown, setDropDown] = useState(false);
	return (
		<div className='flex justify-between shadow-md h-12 px-2 md:px-8 items-center mb-8'>
			<div className='flex gap-4 md:gap-8'>
				<h1 className='text-lg md:text-2xl'>SmartTutor</h1>
				<div className='flex gap-4 items-center'>
					<p>Home</p>
					<p>Blog</p>
				</div>
			</div>
			{authenticated ? (
				<div className='pr-10'>
					<Avatar
						onClick={() => {
							setDropDown(!dropDown);
						}}
						name='Dan Abrahmov'
						src='https://bit.ly/dan-abramov'
						size='sm'
					/>
					{dropDown ? (
						<div className='flex flex-col gap-1 px-8 py-2 absolute top-10 right-4 shadow-lg rounded-lg'>
							<Link
								onClick={() => {
									setDropDown(false);
								}}
								className='capitalize font-semibold w-full text-center'
								href={{
									pathname: `/`,
								}}
							>
								View Profile
							</Link>

							<button className='capitalize  font-semibold' onClick={() => {}}>
								Logout
							</button>
						</div>
					) : (
						""
					)}
				</div>
			) : (
				<div className='flex gap-4'>
					<ButtonGroup>
						<Button colorScheme='primary' variant='outline' size='sm'>
							Sign in
						</Button>
						<Button
							className='hidden md:flex'
							colorScheme='primary'
							variant='outline'
							size='sm'
						>
							Sign up
						</Button>
					</ButtonGroup>
				</div>
			)}
		</div>
	);
}
