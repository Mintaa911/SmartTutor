import { Box, Flex, Avatar, Text, Badge, Wrap, WrapItem } from "@chakra-ui/react";

const SearchResultCard = ({ name, address, bio, rating, tags }) => {
  return (
    <Box boxShadow="md" rounded="md" overflow="hidden">
      <Flex alignItems="center" p={4}>
        <Avatar size="lg" src="https://bit.ly/dan-abramov" />
        <Box ml={4}>
          <Text fontSize="xl">{name}</Text>
          <Text fontSize="md" color="gray.500">{address}</Text>
          <Text fontSize="md">{bio}</Text>
          <Wrap mt={2}>
            {tags.map((tag) => (
              <WrapItem key={tag}>
                <Badge colorScheme="green">{tag}</Badge>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      </Flex>
      <Box bg="gray.50" px={4} py={2}>
        <Text fontSize="lg" fontWeight="semibold">{rating}</Text>
      </Box>
    </Box>
  );
};

export default SearchResultCard;
