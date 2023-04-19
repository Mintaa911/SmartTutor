//@ts-nocheck
// import haro section
import { Container } from "@chakra-ui/react";
import Haro_section from "../components/landing_page/haro_section";
import Find_tutor_section from "../components/landing_page/find_tutor_section";
import Become_tutor_section from "../components/landing_page/become_tutor_section";
import Partners_section from "../components/landing_page/partners_section";
import Our_mission_section from "../components/landing_page/our_mission_section/our_mission_section";
import TopRatedTutorsSection from "../components/landing_page/top_rated_tutors/top_rated_tutors_section";
import All_request_cards from "../components/Cards/RequestCard/all_request_cards";

import { Button } from "@chakra-ui/react";
export default function Home() {
	return (
		<div className='w-[90%] mx-auto'>
			<div className='mb-16'>
				<Haro_section />
			</div>
			<div className='mb-16'>
				<Find_tutor_section />
			</div>
			<div className='mb-16'>
				<Become_tutor_section />
			</div>

			<div className='mb-16'>
				<Our_mission_section />
			</div>
			<div className='mb-16'>
				<TopRatedTutorsSection />
			</div>
		</div>
	);
}
