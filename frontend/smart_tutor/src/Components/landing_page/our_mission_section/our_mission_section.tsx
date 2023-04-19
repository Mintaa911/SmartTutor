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
} from "@chakra-ui/react";

import MissionCard from "./our_mission_card";

export default function Our_mission_section() {
	return (
		<div>
			<h1 className='text-2xl font-bold text-center mb-4'>Our Mission</h1>
			<div className='flex justify-between'>
				<MissionCard title='Empowering African Students Through Online Tutoring'>
					To provide accessible and affordable education to underserved African
					students by connecting them with expert tutors and mentors from around
					the world.
				</MissionCard>

				<MissionCard title='Transforming Education in Africa with SmartTutor'>
					{" "}
					To empower African students with the knowledge and skills needed to
					succeed in their academic and professional pursuits, while also
					fostering a sense of community and collaboration.{" "}
				</MissionCard>

				<MissionCard title='Revolutionizing Learning with SmartTutor'>
					{" "}
					To revolutionize the education system in Africa by leveraging
					technology and the power of community to provide personalized and
					effective learning experiences for all students, regardless of their
					location or background.{" "}
				</MissionCard>
			</div>
		</div>
	);
}
