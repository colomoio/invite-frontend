import { Flex, useDisclosure, Stack, Link, Heading } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <nav>
      <Flex
        py={2}
        px={4}
        direction={["column", "row"]}
        justify="space-between"
        bg="pink.100"
        borderRadius="0 0 1.5rem 1.5rem"
        transition="3ms"
      >
        <Flex alignItems="center" wrap="wrap">
          <Flex flexGrow={1} justify="center">
            <Heading textColor="purple.600" ml={[4, 0]}>
              Event App
            </Heading>
          </Flex>
          <HamburgerIcon
            onClick={isOpen ? onClose : onOpen}
            display={["inline", "none"]}
            textColor="purple.600"
          />
        </Flex>

        <Flex
          justifyContent={[isOpen ? "center" : "none", "center"]}
          display={[isOpen ? "flex" : "none", "flex"]}
          bg="pink.100"
        >
          <Stack align="center" direction={["column", "row"]}>
            <Link
              marginTop={[isOpen ? ".5rem" : "none", "0"]}
              fontSize="lg"
              fontWeight="medium"
              textColor="purple.600"
              href="/"
              _hover={{
                transform: "scale(1.1)",
                textDecor: "none",
              }}
            >
              Home
            </Link>
            <Link
              fontSize="lg"
              fontWeight="medium"
              textColor="purple.600"
              href="/create"
              _hover={{
                transform: "scale(1.1)",
                textDecor: "none",
              }}
            >
              Create
            </Link>
          </Stack>
        </Flex>
      </Flex>
    </nav>
  );
}
