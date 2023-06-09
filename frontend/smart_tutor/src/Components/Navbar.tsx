//@ts-nocheck
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useState } from "react";
import { Avatar } from "@chakra-ui/react";
import Link from "next/link";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import {
	ModalContent,
	ModalOverlay,
	Modal,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
} from "@chakra-ui/react";
import SearchBar from "./Cards/Search_bar";
import SearchResults from "./Cards/Search_result/Search_result_list";
import { useSession } from "next-auth/react";

export default function Navbar() {
	const [dropDown, setDropDown] = useState(false);
	const { isOpen, onOpen, onClose } = useDisclosure();
	let access_token = "";
	const { data } = useSession();
	if (data) {
		access_token = data;
	}

	return (
		<div>
			<div className='flex justify-between shadow-md h-12 px-2 md:px-8 items-center mb-8'>
				<div className='flex gap-4 md:gap-8'>
					<Link href='/'>
						<h1 className='text-lg md:text-2xl'>SmartTutor</h1>
					</Link>
					<div className='flex gap-4 items-center'>
						<p>Home</p>
						<p>Blog</p>
					</div>
				</div>
				{access_token ? (
					<div className='flex gap-4 items-center pr-10'>
						<Link href={"/searchPage"}>
							<SearchRoundedIcon />
						</Link>
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
										pathname: `/profile/user`,
									}}
								>
									View Profile
								</Link>

								<button
									className='capitalize  font-semibold'
									onClick={() => {}}
								>
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
							<Link href={"/login"}>
								<Button colorScheme='primary' variant='outline' size='sm'>
									Sign in
								</Button>
							</Link>
							<Link href={"/signup"}>
								<Button
									className='hidden md:flex'
									colorScheme='primary'
									variant='outline'
									size='sm'
								>
									Sign up
								</Button>
							</Link>
						</ButtonGroup>
					</div>
				)}
			</div>
			<div className='w-[80%] mx-auto bg-white'>
				<Modal size='6xl' isOpen={isOpen} onClose={onClose}>
					<ModalOverlay />
					<ModalContent>
						<ModalCloseButton />
						<ModalBody>
							<SearchBar />
							<SearchResults experts={[]} />
						</ModalBody>
					</ModalContent>
				</Modal>
			</div>
		</div>
	);
}
