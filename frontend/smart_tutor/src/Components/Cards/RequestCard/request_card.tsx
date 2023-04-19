/** 
  make a card with to show that a user has a request from a studnet
  the should have the stuendet information and that tages of subject
  to tutor and the time and date of the request
  
**/

//@ts-nocheck 

import {ButtonGroup, Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import React, { useState } from 'react';



export default function Request_card({ name, subject, time, date, status }) {
    const handleButtonSelect = (buttonName) => {
    };
    return (
      <Box
        bg={'white'}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
        w={'full'}
      >
        <Flex justifyContent={'space-between'}>
          <Heading fontSize={'xl'} fontWeight={500}>
            Request from student
          </Heading>
          <Text fontSize={'sm'} color={'gray.500'}>
            3 days ago
          </Text>
        </Flex>
        <Text mt={2} color={'gray.500'} fontSize={'sm'}>
          Student name: <b>{name}</b>
        </Text>
        <Text mt={2} color={'gray.500'} fontSize={'sm'}>
          Subject: <b>{subject}</b>
        </Text>
        <Text mt={2} color={'gray.500'} fontSize={'sm'}>
          Time: <b>{time}</b>
        </Text>
        <Text mt={2} color={'gray.500'} fontSize={'sm'}>
          Date: <b>{date}</b>
        </Text>
        <Flex justifyContent={'space-between'} mt={6}>
          <Button
            to={'/tutor/requests'}
            colorScheme={'blue'}
            variant={'outline'}
          >
            View
          </Button>

        { status === "pending" &&
        <ButtonGroup spacing={4}>
          <Button
            colorScheme={"green"}
            onClick={() => handleButtonSelect("accept")}
          >
            Accept
          </Button>
          <Button
            colorScheme={"red"}
            onClick={() => handleButtonSelect("reject")}
          >
            Reject
          </Button>
        </ButtonGroup> || 
         
          <Button
            colorScheme={"gray"}
            width="30%" 
            colorScheme = {status === "accepted"? "green" : "red"}
          >
            {status === "accepted"? "Accepted" : "Rejected"}
          </Button>
        }


        </Flex>
      </Box>);
}
