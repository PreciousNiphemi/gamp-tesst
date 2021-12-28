import {
  Flex,
  Box,
  Image,
  Spacer,
  HStack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ROUTES } from "../../constants/routes";

import { NavText } from "./NavText";
const activeLinkStyles = {
  borderColor: "Green.500",
  borderWidth: "0.5px",
  borderRadius: "8px",
  py: "3",
};

const MenuItems = () => {
  const router = useRouter();
  return (
    <Flex
      flexDir={{ base: "column", md: "column", lg: "row" }}
      justifyContent={{
        base: "space-between",
        md: "space-between",
        lg: "initial",
      }}
      py={{ base: "10", md: "6", lg: 0 }}
      px={{ base: "4", md: "2", lg: 0 }}
      minH={{ base: "60", md: "60", lg: "auto" }}
    >
      <NavText>Repair</NavText>
      <NavText>Business</NavText>
      <NavText
        {...(router.pathname === ROUTES.protectionPlans && activeLinkStyles)}
      >
        Protect Device
      </NavText>
      <HStack pr={{ base: 0, md: 0, lg: 20 }}>
        <Image src="/images/profile.svg" />
        <NavText profile={true}>Hi, Omotayo</NavText>
        <Image src="/images/dropDown.png" cursor="pointer" />
      </HStack>
    </Flex>
  );
};

const DesktopMenu = () => {
  return (
    <Flex>
      <MenuItems />
    </Flex>
  );
};

type Props = {
  isOpen: boolean;
  onClose: any;
  onOpen: any;
};

const MobileMenu = ({ isOpen, onClose, onOpen }: Props) => {
  return (
    <>
      <Image
        src="images/burger.svg"
        alt="hamburger menu"
        cursor="pointer"
        boxSize={6}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent backgroundColor="#F5FAFF">
          <DrawerCloseButton />
          <DrawerBody>
            <MenuItems />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const NavigationMenu = ({ isOpen, onClose, onOpen }: Props) => {
  return (
    <Box>
      <Box display={{ base: "block", md: "block", lg: "none" }}>
        <MobileMenu isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      </Box>
      <Box display={{ base: "none", md: "none", lg: "block" }}>
        <DesktopMenu />
      </Box>
    </Box>
  );
};

export const NavigationHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      px={[3, 10]}
      width="100%"
      mx={["initial", "auto"]}
      maxW={["100vw", "100vw", "1600px"]}
    >
      <Flex as="nav">
        <Flex>
          <Image
            src="/images/logo 2.svg"
            cursor="pointer"
            boxSize={{ base: 20, md: 24, lg: 24, xl: 20 }}
          />
        </Flex>
        <Spacer />
        <Flex py={5}>
          <NavigationMenu isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
        </Flex>
      </Flex>
    </Box>
  );
};
