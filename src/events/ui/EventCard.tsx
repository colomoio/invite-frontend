import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Box,
  Text,
  Image,
  Flex,
  Button,
  Avatar,
  TagLabel,
  Tag,
} from "@chakra-ui/react";

import dayjs from "dayjs";

type EventCardProps = {
  eventName: string;
  imgSrc: string;
  location: string;
  timestamp: number;
  guests: number;
  description?: string;
};

export function EventCard(props: EventCardProps) {
  const { eventName, imgSrc, location, timestamp, guests } = props;
  const description = props?.description;

  let unixTime = dayjs(timestamp);

  let date = `${unixTime.format("D/M/YYYY")}`;
  let time = `${unixTime.format("HH:mm a")}`;
  return (
    <>
      <Card
        maxW="25rem"
        padding="1rem"
        margin="auto"
        borderRadius="3xl"
        bg="pink.100"
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
              fallbackSrc="https://source.unsplash.com/random/300x300?party"
            />
            <Flex>
              <Tag
                height="2.5rem"
                bg="pink.200"
                borderRadius="full"
                padding=".5rem"
              >
                <Avatar boxSize="7" mr=".5rem" />
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

            <Box textAlign="center" textColor="purple.700">
              <Text marginTop=".25rem" fontSize="xs">
                {date}
              </Text>
              <Text fontSize="xs">{time}</Text>
            </Box>
            <Box textAlign="center" marginTop="2.5rem">
              <Text marginTop=".25rem" fontSize="sm">
                {location}
              </Text>
            </Box>
          </CardBody>
        </Flex>
        {description ? (
          <Box margin="1rem 0 .5rem">
            <Heading size="xs">Descripcion</Heading>
            <Text pt="2" fontSize="sm">
              {description}
            </Text>
          </Box>
        ) : null}
      </Card>
      <Button
        width="20rem"
        h="3rem"
        display="block"
        border="2px solid"
        borderColor="purple.600"
        bg="purple.600"
        borderRadius="2xl"
        textColor="pink.50"
        margin="1rem auto"
        _hover={{
          bg: "pink.50",
          textColor: "purple.600",
        }}
      >
        Siguiente
      </Button>
    </>
  );
}
