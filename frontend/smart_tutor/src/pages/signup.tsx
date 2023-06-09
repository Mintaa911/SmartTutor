//@ts-nocheck
import { register } from "@/lib/auth";
import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Input,
	Stack,
	useToast,
} from "@chakra-ui/react";
import { useState } from "react";

function SignUp() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const toast = useToast();

	const handleSubmit = async (event) => {
		event.preventDefault();
		// Do something with the form data, like send it to a server-side script

		const res = await register({
			name: "Abenezer Fekadu",
			bio: "love coding",
			email: "se.abenezer@gmail.com",
			phone: "0942230327",
			address: "Addis Ababa",
			password: "Abeni@123",
			role: 0,
		});

		toast({
			title: "Account Created",
			description: "Successfully registered",
			status: "success",
			duration: 500,
			isClosable: true,
		});
	};

	return (
		<Box maxW='md' mx='auto' mt={8} p={6} borderWidth={1} borderRadius={8}>
			<form onSubmit={handleSubmit}>
				<Stack spacing={4}>
					<FormControl id='firstName' isRequired>
						<FormLabel>First Name</FormLabel>
						<Input
							type='text'
							placeholder='Enter your first name'
							value={firstName}
							onChange={(event) => setFirstName(event.target.value)}
						/>
					</FormControl>

					<FormControl id='lastName' isRequired>
						<FormLabel>Last Name</FormLabel>
						<Input
							type='text'
							placeholder='Enter your last name'
							value={lastName}
							onChange={(event) => setLastName(event.target.value)}
						/>
					</FormControl>

					<FormControl id='email' isRequired>
						<FormLabel>Email address</FormLabel>
						<Input
							type='email'
							placeholder='Enter your email address'
							value={email}
							onChange={(event) => setEmail(event.target.value)}
						/>
					</FormControl>

					<FormControl id='password' isRequired>
						<FormLabel>Password</FormLabel>
						<Input
							type='password'
							placeholder='Enter your password'
							value={password}
							onChange={(event) => setPassword(event.target.value)}
						/>
					</FormControl>

					<Button type='submit' colorScheme='blue' size='lg' fontSize='md'>
						Sign Up
					</Button>
				</Stack>
			</form>
		</Box>
	);
}
export default SignUp;
