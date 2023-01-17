import { Box, Text } from "@chakra-ui/react";
import { Layout } from "../src/core/ui/Layout";
import { SignUpForm } from "../src/users/ui/SignUpForm";

export default function SignUpPage() {
  return (
    <Layout>
      <Box as="main" p="1rem">
        <Box mb="2rem">
          <Text as="h1" fontSize="2xl">
            Sign Up
          </Text>
        </Box>
        <SignUpForm />
      </Box>
    </Layout>
  );
}
