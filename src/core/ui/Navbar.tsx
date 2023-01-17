import {
  Flex,
  useDisclosure,
  Stack,
  Link,
  Heading,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <nav>
      <Flex
        p=".5rem 1rem .5rem .5rem"
        direction={["column", "row"]}
        justify="space-between"
        bg="purple.600"
        borderRadius="0 0 1.5rem 1.5rem"
        transition="3ms"
      >
        <Flex alignItems="center" wrap="wrap" justify="space-between">
          <Image
            borderRadius="full"
            boxSize="2.5rem"
            src="https://bit.ly/dan-abramov"
            alt="app-icon"
          />

          <Heading ml={[isOpen ? "0" : "0", "2rem"]} textColor="white">
            Event App
          </Heading>

          <HamburgerIcon
            onClick={isOpen ? onClose : onOpen}
            display={["inline", "none"]}
            textColor="white"
            ml="1rem"
          />
        </Flex>

        <Flex
          justifyContent={[isOpen ? "center" : "none", "center"]}
          display={[isOpen ? "flex" : "none", "flex"]}
          bg="purple.600"
        >
          <Stack align="center" direction={["column", "row"]}>
            <Link
              marginTop={[isOpen ? ".5rem" : "none", "0"]}
              fontSize="lg"
              fontWeight="medium"
              textColor="white"
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
              textColor="white"
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
