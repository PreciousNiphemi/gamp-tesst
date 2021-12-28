import React from "react";
import { Box, Image, Input, Center, Flex, Text, Stack } from "@chakra-ui/react";
import { Field, Formik, Form, FieldProps } from "formik";
import { useMutation, useQueryClient } from "react-query";
import { useRouter } from "next/router";
import {
  Fields,
  INITIAL_SIGN_IN_VALUES,
} from "../../constants/signInConstants";
import { ROUTES } from "../../constants/routes";
import { login } from "./helper";

import { signInValidation } from "../../features/signInValidationSchema/validationSchema";

export const LoginForm: React.FC = () => {
  const queryClient = useQueryClient();
  const validationSchema = signInValidation();
  const router = useRouter();
  const { mutate } = useMutation(login, {
    onSuccess: () => {
      router.push(ROUTES.protectionPlans);
    },
    onError: (err) => {
      console.log(err);
    },
    onSettled: () => {
      queryClient.invalidateQueries("login");
    },
  });

  return (
    <Box
      minW={{ base: "", md: "500px", lg: "541px" }}
      backgroundColor="#fff"
      borderRadius="6"
      borderWidth="0.5px"
      boxShadow="md"
      px={{ base: "4", md: "10", lg: "10" }}
      pt={{ base: "4", md: "6", lg: "4" }}
      pb={{ base: "10", md: "16", lg: "16" }}
    >
      <Stack spacing="6">
        <Center>
          <Image
            src="/images/logo 2.svg"
            boxSize={{ base: 20, md: 28, lg: 24, xl: 20 }}
          />
        </Center>
        <Formik
          initialValues={INITIAL_SIGN_IN_VALUES}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            mutate(values);
          }}
        >
          {(formikBag) => {
            return (
              <>
                <Form>
                  <Stack spacing={{ base: "3", md: "6", lg: "3" }}>
                    <Field name={Fields.EMAIL}>
                      {({ field }: FieldProps<string>) => {
                        return (
                          <>
                            <Input
                              {...field}
                              size="lg"
                              borderColor="#858585"
                              focusBorderColor="Green.500"
                              placeholder="Email Address or Phone Number"
                              _placeholder={{
                                fontSize: "13px",
                                lineHeight: "17.73px",
                                fontWeight: 400,
                              }}
                            />
                          </>
                        );
                      }}
                    </Field>
                    <Field name={Fields.PASSWORD}>
                      {({ field }: FieldProps<string>) => {
                        return (
                          <Input
                            {...field}
                            size="lg"
                            borderColor="#858585"
                            focusBorderColor="Green.500"
                            placeholder="Password"
                            _placeholder={{
                              fontSize: "13px",
                              lineHeight: "17.73px",
                              fontWeight: 400,
                            }}
                          />
                        );
                      }}
                    </Field>
                  </Stack>
                  <Flex justifyContent="center">
                    <Box
                      mt={6}
                      as="button"
                      bgColor="green.500"
                      py="3"
                      borderRadius="8px"
                      alignSelf="center"
                      onClick={() => {
                        formikBag.submitForm();
                      }}
                      minWidth={{ base: "200px", md: "480px", lg: "480px" }}
                    >
                      <Text
                        color="#fff"
                        fontWeight="400"
                        fontSize={{ base: "15px", md: "18px", lg: "15px" }}
                        lineHeight="19.02px"
                      >
                        Log In
                      </Text>
                    </Box>
                  </Flex>
                </Form>
              </>
            );
          }}
        </Formik>

        <Text
          textStyle={{ base: "p-xs", md: "p-m-xs", lg: "p-xs" }}
          pt={{ base: "", md: 6, lg: 4 }}
          color="#12172E"
          cursor="pointer"
          textAlign="center"
        >
          Forgot Password?
        </Text>
        <Text
          display={{ base: "block", md: "none" }}
          color="#858585"
          fontSize="15px"
          lineHeight="15px"
          textAlign="center"
        >
          &copy; GAMP
        </Text>
      </Stack>
    </Box>
  );
};
