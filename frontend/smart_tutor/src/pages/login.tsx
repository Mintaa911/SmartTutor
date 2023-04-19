//@ts-nocheck
import { useState } from "react";
import {
	Box,
	FormControl,
	FormLabel,
	Input,
	Button,
	Heading,
} from "@chakra-ui/react";

function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		// Handle form submission
	};

	return (
		<Box
			w='100%'
			minH='100vh'
			display='flex'
			alignItems='center'
			justifyContent='center'
		>
			<Box
				w={{ base: "90%", sm: "80%", md: "50%" }}
				maxW='xl'
				bg='white'
				borderRadius='md'
				boxShadow='md'
				p={{ base: 4, md: 8 }}
			>
				<Heading as='h1' mb={8} textAlign='center'>
					Welcome Back
				</Heading>
				<form onSubmit={handleSubmit}>
					<FormControl id='email' isRequired mb={4}>
						<FormLabel>Email address</FormLabel>
						<Input
							type='email'
							value={email}
							onChange={(event) => setEmail(event.target.value)}
						/>
					</FormControl>
					<FormControl id='password' isRequired mb={8}>
						<FormLabel>Password</FormLabel>
						<Input
							type='password'
							value={password}
							onChange={(event) => setPassword(event.target.value)}
						/>
					</FormControl>
					<Button colorScheme='purple' size='lg' w='100%' type='submit'>
						Sign In
					</Button>
				</form>
			</Box>
		</Box>
	);
}

export default LoginPage;
