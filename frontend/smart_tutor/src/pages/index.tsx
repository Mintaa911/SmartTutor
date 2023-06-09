//@ts-nocheck
import Hero_section from "../Components/landing_page/hero_section";
import Find_tutor_section from "../Components/landing_page/find_tutor_section";
import Become_tutor_section from "../Components/landing_page/become_tutor_section";
import Our_mission_section from "../Components/landing_page/our_mission_section/our_mission_section";
import TopRatedTutorsSection from "../Components/landing_page/top_rated_tutors/top_rated_tutors_section";

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
