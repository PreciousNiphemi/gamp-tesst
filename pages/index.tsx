import { Image, Flex, Text, HStack, Stack, Box } from "@chakra-ui/react";
import { useMutation } from "react-query";
import { LoginForm } from "../common";
const AuthPage: React.FC = () => {
  return (
    <Flex
      minH="100vh"
      width="100%"
      justifyContent="center"
      px={{ base: 8, md: 20 }}
    >
      <HStack spacing={{ base: "", md: "", lg: "100px" }}>
        <Stack spacing={10}>
          <LoginForm />
          <Text
            display={{ base: "none", md: "block" }}
            color="#858585"
            fontSize="15px"
            lineHeight="15px"
            textAlign="center"
          >
            &copy; GAMP
          </Text>
        </Stack>
        <Box>
          <Image
            display={{ base: "none", md: "none", lg: "flex" }}
            src="/images/gamp-artboard 1.svg"
            h={{ base: "", md: "", lg: "652px" }}
            w={{ base: "", md: "", lg: "530px" }}
          />
        </Box>
      </HStack>
    </Flex>
  );
};

export default AuthPage;
