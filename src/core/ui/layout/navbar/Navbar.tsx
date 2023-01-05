import { Flex, Box, useDisclosure, Stack, Link } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="App">
      <Flex
        py={2}
        px={4}
        direction={["column", "row"]}
        justify="space-between"
        bg="blue.100"
      >
        <Flex alignItems="center" wrap="wrap">
          <Flex flexGrow={1} justify="center" /*border='1px'*/>
            {/* <Heading ml={[4, 0]}>Zensurance</Heading> */}
            <Box ml={[4, 0]}>Box 1</Box>
          </Flex>
          <HamburgerIcon
            onClick={isOpen ? onClose : onOpen}
            display={["inline", "none"]}
            // border='1px'
          />
        </Flex>
        <Flex display={[isOpen ? "flex" : "none", "flex"]} bg="blue.100">
          <Stack align="center" direction={["column", "row"]}>
            <Link href="/">Home</Link>
            <Link href="/create">create</Link>
            <Link href="/about-us">about us</Link>
          </Stack>
        </Flex>
      </Flex>
    </div>
  );
}
