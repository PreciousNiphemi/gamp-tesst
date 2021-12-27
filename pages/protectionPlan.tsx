import { Flex, Stack } from "@chakra-ui/react";
import { NavigationHeader, ProtectionDetails, SideProfile } from "../common";

const ProtectionPlan: React.FC = () => {
  return (
    <Flex flexDir="column">
      <NavigationHeader />
      <Flex
        px={{ base: "4", md: "10", lg: "20" }}
        justifyContent="center"
        mt={10}
      >
        <Flex justifyContent="center">
          <Stack direction="row" spacing={{ md: "10" }}>
            <SideProfile />
            <ProtectionDetails />
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProtectionPlan;
