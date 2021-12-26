import React, { useState } from "react";
import { Box, Stack, Text } from "@chakra-ui/react";
import { DetailBox } from "./DetailBox";

export const ProtectionDetails: React.FC = () => {
  type Props = {
    ScreenProtection: boolean;
    ServiceContract: boolean;
  };
  const INITIAL_SLIDE_VALUES: Props = {
    ScreenProtection: false,
    ServiceContract: false,
  };

  const [slide, setSlide] = useState(INITIAL_SLIDE_VALUES);
  return (
    <>
      <Box backgroundColor="#fff" borderRadius="8px" pb="10" boxShadow="md">
        <Stack spacing="6">
          <Box
            py="3"
            px="8"
            borderBottomWidth="1px"
            borderBottomColor="Green.500"
          >
            <Text textStyle="p" fontWeight="540">
              Protection Plans
            </Text>
          </Box>
          <Box px="8">
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
                  <Box
                    pb="4"
                    cursor="pointer"
                    //  borderBottomWidth="2px"
                    //  borderBottomColor="Green.500"
                  >
                    <Text textStyle="p-sm">SERVICE CONTRACT(0)</Text>
                  </Box>
                </Stack>
              </Box>
              <DetailBox />
              <DetailBox />
              <DetailBox />
            </Stack>
          </Box>
          <Stack px="8" direction="row" spacing="6" alignSelf="flex-end">
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
    </>
  );
};
