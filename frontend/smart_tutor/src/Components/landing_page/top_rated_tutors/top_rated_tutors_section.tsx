//@ts-nocheck
import { Stack, Flex } from "@chakra-ui/react";
import ProfileCard from "./profile_card";
let profiles = [
	{
		profilePic:
			"https://res.cloudinary.com/eskalate/image/upload/dpr_auto,f_auto,q_auto/v1/team/mahlet",
		name: "Mahlet Dereje",
		bio: "A highly passionate person pursuing a software engineering degree at Addis Ababa University. During her college period she has acquired technical knowledge and skills from given courses as well as practical and collaborative skills from working on a number of team projects. She is experienced in using a range of languages, operating systems and development tools as well as experiencing the system development life cycle. She is a hard working but also a relaxed person at that. She loves solving problems, especially Math related ones and currently is pursuing Machine learning and AI related products. Focusing on keeping her strength and momentum, she is always keen and ready to advance in a better position than before.",
		rating: 4.5,
	},
	{
		profilePic:
			"https://res.cloudinary.com/eskalate/image/upload/dpr_auto,f_auto,q_auto/v1/team/suha",
		name: "Süha Tanriverdi",
		bio: "A highly motivated fresh software engineer seeking to get a position in top tech companies who comes from a professional sports background, passionate about entrepreneurship, music, and life.",
		rating: 4.9,
	},
	{
		profilePic:
			"https://res.cloudinary.com/eskalate/image/upload/dpr_auto,f_auto,q_auto/v1/team/yohans_h",
		name: "Yohans Hailu",
		bio: "It's cliche to say that he enjoys learning and implementing technologies. Aside from that, he enjoys reading (almost always nonfiction), chess, and watching movies on occasion.",
		rating: 4.8,
	},
	{
		profilePic:
			"https://res.cloudinary.com/eskalate/image/upload/dpr_auto,f_auto,q_auto/v1/team/mintesnot_b",
		name: "Mintesnot Bezabhi",
		bio: "A tech enthusiast software engineering student. Curious about learning new things. Before graduating he wants to explore the field of computer science and engineering. He is interested in web and mobile development, distributed systems and building large scale applications.",
		rating: 4.8,
	},
	{
		profilePic:
			"https://res.cloudinary.com/eskalate/image/upload/dpr_auto,f_auto,q_auto/v1/team/abenezer_f-min",
		name: "Abenezer Fikadu",
		bio: "An undergraduate of Software Engineering who is energetic and eager to learn new skills and try to use a creative approach to problem solving.",
		rating: 4.8,
	},
	{
		profilePic:
			"https://res.cloudinary.com/eskalate/image/upload/dpr_auto,f_auto,q_auto/v1/team/Biruk_A ",
		name: "Biruk Ayalew",
		bio: "A hardworking and tech enthusiast who is currently pursuing his software engineering bachelor's degree at Addis Ababa University. He has much emphasis about being creative and problem solver. In the future, he plans to explore and indulge himself in Artificial Intelligence. As a hobby, he likes to read books ,watch movies and play football. ",
		rating: 4.8,
	},
];

profiles = profiles.concat(profiles);

export default function TopRatedTutorsSection() {
	return (
		<div>
			<h1 className='text-2xl font-bold text-center mb-4'>Top Rated Tutor</h1>
			<Flex flexWrap='wrap' justifyContent='space-around' gap={4}>
				{profiles.map((profile, index) => {
					return (
						<ProfileCard
							key={index}
							profilePic={profile.profilePic}
							name={profile.name}
							bio={profile.bio}
							rating={profile.rating}
						/>
					);
				})}
			</Flex>
		</div>
	);
}
