import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Box,
  Text,
  Image,
  Flex,
  InputRightElement,
  Input,
  InputGroup,
  Button,
  Avatar,
  TagLabel,
  Tag,
} from "@chakra-ui/react";

import dayjs from "dayjs";

type EventCardProps = {
  eventName: string;
  imgSrc: string;
  ubication: string;
  timeStamp: number;
  guests: number;
  description?: string;
};

export function EventsCard(props: EventCardProps) {
  const { eventName, imgSrc, ubication, timeStamp, guests } = props;
  const description = props?.description;

  let unixTime = dayjs(timeStamp);

  console.log(unixTime);

  let date = `${unixTime.format("D/M/YYYY")}`;
  let time = `${unixTime.format("HH:mm a")}`;
  return (
    <>
      <Card
        maxW="25rem"
        padding="1rem"
        margin="auto"
        borderRadius="2rem"
        backgroundColor="#EBD5D8"
      >
        <Flex>
          <Flex direction="column" align="center" justify="flex-start">
            <Image
              borderRadius="full"
              boxSize="7rem"
              src={imgSrc}
              alt="image of the event"
              marginBottom="0.7rem"
              objectPosition="center"
              objectFit="cover"
              fallbackSrc="https://images.unsplash.com/photo-1616095818012-c386cf5a4c0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=379&q=80"
            />
            <Flex>
              <Tag
                height="2.5rem"
                backgroundColor="#F2E3E5"
                borderRadius="full"
                padding=".5rem"
              >
                <Avatar boxSize="7" mr="1rem" />
                <TagLabel>{guests}</TagLabel>
              </Tag>
            </Flex>
          </Flex>
          <CardBody padding="0 1rem">
            <CardHeader padding=".4rem 0 0">
              <Heading size="lg" textAlign="center">
                {eventName}
              </Heading>
            </CardHeader>

            <Box textAlign="center" textColor="#4F10A8">
              <Text marginTop=".25rem" fontSize="xs">
                {date}
              </Text>
              <Text fontSize="xs">{time}</Text>
            </Box>
            <Box textAlign="center" marginTop="2.5rem">
              <Heading size="xs">Ubicacion</Heading>
              <Text marginTop=".25rem" fontSize="sm">
                {ubication}
                {ubication.split("")[ubication.length - 1] === "." ? null : "."}
              </Text>
            </Box>
          </CardBody>
        </Flex>
        {description ? (
          <Box margin="1rem 0 .5rem">
            <Heading size="xs">Descripcion</Heading>
            <Text pt="2" fontSize="sm">
              {description}
              {description.split("")[ubication.length - 1] === "." ? null : "."}
            </Text>
          </Box>
        ) : null}

        <CardHeader padding="0rem">
          <Heading size="xs" margin=".5rem ">
            Nombre
          </Heading>
        </CardHeader>
        <InputGroup>
          <Input
            placeholder="EX: Fiesta de Pedrito"
            borderColor="black"
            height="3rem"
            borderRadius="1rem"
            marginTop=".5rem"
            focusBorderColor="#8B44EE"
            _hover={{ borderColor: "none" }}
            padding="0 2rm 0 1rem"
          />
          <InputRightElement
            width="5rem"
            justifyContent="end"
            alignItems="strech"
          >
            <Button
              h="3rem"
              fontSize="sm"
              marginTop=".5rem"
              backgroundColor="#8B44EE"
              borderRadius="0 1rem 1rem  0"
              textColor="#F2E3E5"
              _hover={{ backgroundColor: "#F2E3E5", textColor: "#8B44EE" }}
            >
              Crear
            </Button>
          </InputRightElement>
        </InputGroup>
      </Card>
    </>
  );
}
