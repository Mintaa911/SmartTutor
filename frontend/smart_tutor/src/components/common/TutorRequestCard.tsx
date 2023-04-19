import AddIcon from "@mui/icons-material/Add";
import { Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { ButtonGroup, Box, Flex, Heading, Text } from "@chakra-ui/react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
} from "@chakra-ui/react";
import { useFormik } from "formik";
export default function RequestCard({
	tutor,
	subject,
	time,
	date,
	status,
}: {
	tutor: string;
	subject: string;
	time: string;
	date: string;
	status: string;
}) {
	const [feedback, setFeedback] = useState(false);
	const [cancelled, setCancelled] = useState(false);
	const [rating, setRating] = useState(0);
	const {
		isOpen: isOpenRequest,
		onOpen: onOpenRequest,
		onClose: onCloseRequest,
	} = useDisclosure();
	const {
		isOpen: isOpenFeedback,
		onOpen: onOpenFeedback,
		onClose: onCloseFeedback,
	} = useDisclosure();
	const {
		isOpen: isOpenReview,
		onOpen: onOpenReview,
		onClose: onCloseReview,
	} = useDisclosure();

	const formik = useFormik({
		initialValues: {},
		validationSchema: {},
		onSubmit: (value) => {},
	});
	const handleRating = (rate: number) => {
		console.log(rate);
		setRating(rate);
	};

	return (
		<div>
			<Box
				bg={"white"}
				boxShadow={"2xl"}
				rounded={"md"}
				p={6}
				overflow={"hidden"}
				w={"full"}
			>
				<div className='flex justify-end'>
					<Text fontSize={"sm"} color={"gray.500"}>
						3 days ago
					</Text>
				</div>

				<div>
					<Text mt={2} color={"gray.900"} fontSize={"sm"}>
						Tutor:{tutor}
					</Text>
					<Text mt={2} color={"gray.900"} fontSize={"sm"}>
						Subject:{subject}
					</Text>
					<Text mt={2} color={"gray.900"} fontSize={"sm"}>
						Time:{time}
					</Text>
					<Text mt={2} color={"gray.900"} fontSize={"sm"}>
						Date:{time}
					</Text>
				</div>
				<div className='flex justify-end gap-4 mt-4 md:mt-0'>
					<Button variant='outline' onClick={onOpenRequest}>
						Request Letter
					</Button>
					{!cancelled && feedback ? (
						<Button variant='outline' onClick={onOpenFeedback}>
							View Feedback
						</Button>
					) : (
						<Button
							leftIcon={<AddIcon />}
							variant='outline'
							onClick={onOpenReview}
						>
							Give Feedback
						</Button>
					)}
				</div>
			</Box>
			<Modal isOpen={isOpenRequest} onClose={onCloseRequest}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Request Letter</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
							quis nobis consequatur veritatis vitae perferendis culpa quas,
							magnam ipsum maiores reiciendis? Impedit exercitationem
							praesentium ducimus temporibus, error porro delectus obcaecati.
						</p>
					</ModalBody>
				</ModalContent>
			</Modal>
			<Modal isOpen={isOpenFeedback} onClose={onCloseFeedback}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>View Feedback</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
							quis nobis consequatur veritatis vitae perferendis culpa quas,
							magnam ipsum maiores reiciendis? Impedit exercitationem
							praesentium ducimus error porro delectus obcaecati.
						</p>
					</ModalBody>
				</ModalContent>
			</Modal>
			<Modal isOpen={isOpenReview} onClose={onCloseReview}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Give Feedback</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<form>
							<Input placeholder='Your feedback' className='my-2' />
							<div className='flex justify-end'>
								<Button colorScheme='blue' type='submit' variant='outline'>
									Submit
								</Button>
							</div>
						</form>
					</ModalBody>
				</ModalContent>
			</Modal>
		</div>
	);
}
