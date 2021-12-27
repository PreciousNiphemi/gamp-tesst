import { Box, Text, Stack, Button, Flex } from "@chakra-ui/react";
import { response } from "../../constants/test";
import moment from "moment";

const DetailsButton = () => {
  return (
    <Button
      mt={{ base: "4", md: "4", lg: "0" }}
      alignSelf="center"
      px={{ base: "12", md: "12", lg: "6" }}
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
const ItemStack = ({ details }) => {
  const dateFormat = moment(details.createdAt).utc().format("DD-MM-YYYY");
  return (
    <Flex
      direction="row"
      flexWrap={{ base: "wrap", md: "wrap", lg: "unset" }}
      justifyContent={{ base: "center", md: "initial", lg: "unset" }}
    >
      <Stack
        direction={{ base: "column", md: "column", lg: "row" }}
        width={{ base: "auto", md: "auto", lg: "auto" }}
      >
        <Stack
          direction={{ base: "row", md: "row", lg: "row" }}
          spacing={{ base: "60px", md: 14, lg: "0" }}
        >
          <Stack pr={{ base: "", md: "", lg: "4" }}>
            <Text
              fontSize="14px"
              color="#000000"
              lineHeight="24px"
              textAlign={{ base: "left", md: "center", lg: "left" }}
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
              {dateFormat}
            </Text>
          </Stack>
          <Stack px={{ base: 0, md: "", lg: "4" }}>
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
              {`N${details.price}`}
            </Text>
          </Stack>
        </Stack>

        <Stack
          direction={{ base: "row", md: "row", lg: "row" }}
          spacing={{ base: "14", md: 14, lg: "0" }}
        >
          <Stack
            px={{ base: "", md: "", lg: "4" }}
            py={{ base: "", md: "4", lg: "0" }}
          >
            <Text
              fontSize="14px"
              color="#000000"
              lineHeight="24px"
              textAlign={{ base: "left", md: "left", lg: "left" }}
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
              {details.numOfPhones}
            </Text>
          </Stack>
          <Stack
            px={{ base: "", md: "", lg: "4" }}
            pl={{ base: "", md: "", lg: "0" }}
            py={{ base: "", md: "4", lg: "0" }}
          >
            <Text
              fontSize="14px"
              color="#000000"
              lineHeight="24px"
              textAlign={{ base: "left", md: "left", lg: "left" }}
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
              {details.numOfLaptops}
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  );
};

export const DetailBox = ({ datum }) => {
  return (
    <Box
      p="4"
      mb="4"
      borderColor="Green.500"
      borderWidth="0.5px"
      borderRadius="5"
      width="auto"
      minWidth={{ base: "313px", md: "313px", lg: "auto" }}
    >
      <Stack
        direction={{ base: "column", md: "column", lg: "row" }}
        alignSelf="center"
        width="100%"
        mt={{ base: "4", md: 0 }}
      >
        <ItemStack details={datum} />
        <Box alignSelf="center">
          <DetailsButton />
        </Box>
      </Stack>
    </Box>
  );
};
