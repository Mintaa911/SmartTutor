//@ts-nocheck 
// import haro section
import {Container} from '@chakra-ui/react';
import Haro_section from '../Components/landing_page/haro_section';
import Find_tutor_section from '../Components/landing_page/find_tutor_section';
import Become_tutor_section from '../Components/landing_page/become_tutor_section';
import Partners_section from '../Components/landing_page/partners_section';
import Our_mission_section from '../Components/landing_page/our_mission_section/our_mission_section';
import TopRatedTutorsSection from '../Components/landing_page/top_rated_tutors/top_rated_tutors_section';
import All_request_cards from '../Components/Cards/RequestCard/all_request_cards';

import { Button } from '@chakra-ui/react';
export default function Home() {
	return (
    <Container maxW={'4xl'}>
      <Haro_section />
      <Find_tutor_section />
      <Become_tutor_section />
      <Partners_section />
      <Our_mission_section />
      <br/>
      <TopRatedTutorsSection/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <All_request_cards/>
      <br/>
      <br/>
      <br/>
    </Container>
  );
}
