import { Box, Text } from "@chakra-ui/react";
import { Layout } from "../src/core/ui/Layout";
import { SignUpForm } from "../src/users/ui/SignUpForm";

export default function SignUpPage() {
  return (
    <Layout>
      <Box as="main" maxW="50rem" mx="auto">
        <Box mb="1rem" ml="1rem">
          <Text as="h1" fontSize="2xl" fontWeight="bold">
            Sign Up
          </Text>
        </Box>
        <SignUpForm />
      </Box>
    </Layout>
  );
}
