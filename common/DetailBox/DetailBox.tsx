import { Box, Text, Stack, Button, Flex } from "@chakra-ui/react";

const DetailsButton = () => {
  return (
    <Button
      mx=""
      alignSelf="center"
      px="6"
      backgroundColor="Green.500"
      _hover={{
        backgroundColor: "Green.500",
      }}
    >
      <Text fontSize="14px" lineHeight="25px" color="#fff">
        {" "}
        VIEW DETAILS
      </Text>
    </Button>
  );
};
const ItemStack = () => {
  return (
    <Flex direction="row">
      <Stack pr="6">
        <Text
          fontSize="14px"
          color="#000000"
          lineHeight="24px"
          textAlign="left"
        >
          Date Purchased
        </Text>
        <Text
          color="#0D7010"
          fontSize="14px"
          lineHeight="21px"
          fontWeight="600"
          textAlign="left"
        >
          {" "}
          Hello
        </Text>
      </Stack>
      <Stack px="4">
        <Text
          fontSize="14px"
          color="#000000"
          lineHeight="24px"
          textAlign="left"
        >
          Amount Paid
        </Text>
        <Text
          color="#0D7010"
          fontSize="14px"
          lineHeight="21px"
          fontWeight="600"
          textAlign="left"
        >
          {" "}
          Hello
        </Text>
      </Stack>
      <Stack px="6">
        <Text
          fontSize="14px"
          color="#000000"
          lineHeight="24px"
          textAlign="left"
        >
          Phones Covered
        </Text>
        <Text
          color="#0D7010"
          fontSize="14px"
          lineHeight="21px"
          fontWeight="600"
          textAlign="left"
        >
          {" "}
          Hello
        </Text>
      </Stack>
      <Stack px="6">
        <Text
          fontSize="14px"
          color="#000000"
          lineHeight="24px"
          textAlign="left"
        >
          Laptops Covered
        </Text>
        <Text
          color="#0D7010"
          fontSize="14px"
          lineHeight="21px"
          fontWeight="600"
          textAlign="left"
        >
          {" "}
          Hello
        </Text>
      </Stack>
    </Flex>
  );
};

export const DetailBox: React.FC = () => {
  return (
    <Box
      p="4"
      borderColor="Green.500"
      borderWidth="0.5px"
      borderRadius="5"
      width="auto"
    >
      <Stack direction="row">
        <ItemStack />
        <DetailsButton />
      </Stack>
    </Box>
  );
};
