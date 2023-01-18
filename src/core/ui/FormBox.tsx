import { Box } from "@chakra-ui/react";

export type FormBoxProps = {
  children: JSX.Element;
};

export function FormBox(props: FormBoxProps) {
  const { children } = props;
  return (
    <Box
      bg="white"
      boxShadow="base"
      borderRadius=".25rem"
      w="100"
      p={4}
      m=".25rem"
    >
      {children}
    </Box>
  );
}
