//@ts-nocheck
// import haro section
import Hero_section from "../components/landing_page/hero_section";
import Find_tutor_section from "../components/landing_page/find_tutor_section";
import Become_tutor_section from "../components/landing_page/become_tutor_section";
import Our_mission_section from "../components/landing_page/our_mission_section/our_mission_section";
import TopRatedTutorsSection from "../components/landing_page/top_rated_tutors/top_rated_tutors_section";

import { Button } from "@chakra-ui/react";
export default function Home() {
	return (
		<div className='w-[90%] mx-auto mt-20'>
			<div className='mb-16'>
				<Hero_section />
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
