import { useState } from "react";
import { Box, Button, Text, Stack, HStack, Image } from "@chakra-ui/react";

export const SideProfile: React.FC = () => {
  const [menu, setMenu] = useState({
    Home: false,
    ProtectionPlans: true,
    LinkedDevice: false,
    Repairs: false,
    Claims: false,
  });

  return (
    <Box
      boxShadow="md"
      minW="275px"
      borderRadius="8px"
      backgroundColor="#fff"
      display={{ base: "none", md: "block", lg: "block" }}
    >
      <Stack>
        <Box
          borderBottomWidth="1px"
          px="8"
          py="4"
          borderBottomColor="Green.500"
        >
          <HStack spacing="6">
            <Image src="/images/profile.svg" alt="profile" boxSize="10" />
            <Stack spacing="0">
              <Text
                fontWeight={550}
                fontSize="12px"
                lineHeight="16.37px"
                color="#49A05C"
              >
                My Profile
              </Text>
              <Text fontWeight={400} fontSize="18px" lineHeight="24.55px">
                Paul Omotayo
              </Text>
            </Stack>
          </HStack>
        </Box>
        <HStack
          py="2"
          px="12"
          spacing="8"
          backgroundColor={menu.Home ? "#DCFCE8" : "#fff"}
        >
          <Image src="/images/Home_.png" boxSize="4" alt="Home" />
          <Text fontWeight="300" fontSize="16px" lineHeight="20.29px">
            Home
          </Text>
        </HStack>

        <HStack
          py="2"
          px="12"
          spacing="8"
          backgroundColor={menu.ProtectionPlans ? "#DCFCE8" : "#fff"}
        >
          <Image src="/images/protection.png" boxSize="4" alt="Home" />
          <Text fontWeight="300" fontSize="16px" lineHeight="20.29px">
            Protection Plans
          </Text>
        </HStack>

        <HStack
          py="2"
          px="12"
          spacing="8"
          backgroundColor={menu.LinkedDevice ? "#DCFCE8" : "#fff"}
        >
          <Image src="/images/linked.png" boxSize="4" alt="Home" />
          <Text fontWeight="300" fontSize="16px" lineHeight="20.29px">
            Linked Device
          </Text>
        </HStack>

        <HStack
          py="2"
          px="12"
          spacing="8"
          backgroundColor={menu.Repairs ? "#DCFCE8" : "#fff"}
        >
          <Image src="/images/repair.png" boxSize="4" alt="Home" />
          <Text fontWeight="300" fontSize="16px" lineHeight="20.29px">
            Repairs
          </Text>
        </HStack>

        <HStack
          py="2"
          px="12"
          spacing="8"
          backgroundColor={menu.Claims ? "#DCFCE8" : "#fff"}
        >
          <Image src="/images/claims.png" boxSize="4" alt="Home" />
          <Text fontWeight="300" fontSize="16px" lineHeight="20.29px">
            Claims
          </Text>
        </HStack>
      </Stack>
      <Box display="flex" flexDir="column" mt={{ md: 40, lg: 10 }}>
        <Button
          alignSelf="center"
          px="12"
          backgroundColor="Green.500"
          _hover={{
            backgroundColor: "Green.500",
          }}
        >
          <Text fontSize="14px" lineHeight="25px" color="#fff">
            {" "}
            Logout
          </Text>
        </Button>
      </Box>
    </Box>
  );
};
