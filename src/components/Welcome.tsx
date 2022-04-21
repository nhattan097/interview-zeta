import { Box, Flex, Image, Text } from "@chakra-ui/react";

const Welcome = () => {
  return (
    <Flex h="full">
      <Text fontSize="18px" fontWeight="bold" textAlign="left" flex={1} p={9}>
        Welcome to your dashboard!
      </Text>
      <Box flex={1} p={3}>
        <Image
          w="full"
          h="full"
          objectFit="cover"
          src="https://picsum.photos/300/200"
          alt=""
        />
      </Box>
    </Flex>
  );
};

export default Welcome;
