import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
  Image,
  Flex,
  Spacer,
  InputRightElement,
  Input,
  InputGroup,
  Button,
  Avatar,
  TagLabel,
  Tag,
} from "@chakra-ui/react";

import dayjs from "dayjs";

export function EventsCard({
  eventName = "Fiesta de lupita",
  imgSrc = "https://plus.unsplash.com/premium_photo-1664790560155-eeef67a1e77c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  ubication = "guadalajara jalisco",
  description = "fiesta por los 104 años de lupita",
  timeStamp = Date.now(),
  guests = 15,
}) {
  let unixTime = dayjs(timeStamp);

  console.log(unixTime);

  let date = `${unixTime.format("D/M/YYYY")}`;
  let time = `${unixTime.format("HH:mm a")}`;
  return (
    <>
      <Card>
        <CardBody>
          <Flex>
            <Flex direction="column" align="center" justify="flex-start">
              <Image
                borderRadius="full"
                boxSize="100px"
                src={imgSrc}
                alt="image of the event"
                marginBottom="5"
              />
              <Flex>
                <Tag size="lg" colorScheme="blue" borderRadius="full">
                  <Avatar boxSize="7" ml={-1} mr={2} />
                  <TagLabel>{guests}</TagLabel>
                </Tag>
              </Flex>
            </Flex>
            <Spacer />
            <Card width="225px">
              <CardHeader padding="2.5">
                <Heading size="md" textAlign="center">
                  {eventName}
                </Heading>
              </CardHeader>

              <CardBody>
                <Stack divider={<StackDivider />} spacing="2">
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Descripcion
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      {description}.
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Ubicacion
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      {ubication}.
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Fecha y hora
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      {date}
                    </Text>
                    <Text pt="2" fontSize="sm">
                      {time}
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
          </Flex>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardHeader padding="2.5">
            <Heading size="md" textAlign="center">
              Nombre
            </Heading>
          </CardHeader>

          <InputGroup size="md">
            <Input pr="4.5rem" placeholder="Nombre" />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm">
                Siguiente
              </Button>
            </InputRightElement>
          </InputGroup>
        </CardBody>
      </Card>
    </>
  );
}
