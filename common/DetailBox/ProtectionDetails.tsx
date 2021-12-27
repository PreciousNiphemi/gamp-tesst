import React, { useState } from "react";
import { useQuery } from "react-query";

import { Box, Stack, Text, Flex, HStack, Image } from "@chakra-ui/react";
import { DetailBox } from "./DetailBox";
import { response } from "../../constants/test";

export const ProtectionDetails: React.FC = () => {
  const { isLoading, isFetching, error, data, status } = useQuery("plans", () =>
    fetch(
      "https://gamp-server-staging.herokuapp.com/v1%20/plan/spplan/fetch"
    ).then((res) => res.json())
  );

  type Props = {
    ScreenProtection: boolean;
    ServiceContract: boolean;
  };
  const INITIAL_SLIDE_VALUES: Props = {
    ScreenProtection: false,
    ServiceContract: false,
  };
  const typeResponse: typeof response = response;
  const [slide, setSlide] = useState(INITIAL_SLIDE_VALUES);
  return (
    <>
      <Stack>
        <Box
          display={{ base: "block", md: "none", lg: "none" }}
          px={{ base: "4" }}
          py="3"
          borderRadius="8px"
          width="100%"
          backgroundColor="#fff"
          boxShadow="md"
        >
          <HStack spacing="4">
            <Image src="/images/GoBack.svg" alt="go back button" boxSize="4" />
            <Text color="#161C26" fontWeight="semibold" textStyle="p">
              Protection Plan
            </Text>
          </HStack>
        </Box>
        <Box backgroundColor="#fff" borderRadius="8px" pb="10" boxShadow="md">
          <Stack spacing="6">
            <Box
              py="3"
              px="8"
              borderBottomWidth="1px"
              borderBottomColor="Green.500"
              display={{ base: "none", md: "block", lg: "block" }}
            >
              <Text textStyle="p" fontWeight="540">
                Protection Plans
              </Text>
            </Box>
            <Box px={{ base: "4", md: "6", lg: "8" }}>
              <Stack spacing="6">
                <Box borderBottomWidth="1px">
                  <Stack direction="row" spacing="8">
                    <Box
                      pb="4"
                      cursor="pointer"
                      borderBottomWidth={slide.ScreenProtection ? 0 : "2px"}
                      borderBottomColor="Green.500"
                    >
                      <Text textStyle="p-sm" color="Green.500">
                        SCREEN PROTECTION (3)
                      </Text>
                    </Box>
                    <Box pb="4" cursor="pointer">
                      <Text textStyle="p-sm">SERVICE CONTRACT(0)</Text>
                    </Box>
                  </Stack>
                </Box>
                <Flex
                  flexWrap={{ base: "wrap", md: "wrap", lg: "wrap" }}
                  justifyContent="center"
                >
                  {typeResponse.data.slice(0, 3).map((datum, datumId) => {
                    return <DetailBox datum={datum} key={datumId} />;
                  })}

                  {/* <DetailBox />
                  <DetailBox /> */}
                </Flex>
              </Stack>
            </Box>
            <Stack
              px="8"
              direction="row"
              spacing="6"
              alignSelf={{ base: "center", md: "center", lg: "flex-end" }}
            >
              <Text>{"<"}</Text>
              <Text
                px="2"
                cursor="pointer"
                color="Green.500"
                backgroundColor="#DEFAE8"
                borderRadius="4px"
              >
                1
              </Text>
              <Text cursor="pointer"> 2</Text>

              <Text cursor="pointer">3</Text>
              <Text>...</Text>
              <Text cursor="pointer">10</Text>

              <Text cursor="pointer">{">"}</Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};
